using Microsoft.EntityFrameworkCore;
using MyStoreApi.Data;

var builder = WebApplication.CreateBuilder(args);

// --- 1. CẤU HÌNH SERVICES (Trước khi Build) ---

// Đăng ký Controllers (Rất quan trọng để API hoạt động)
builder.Services.AddControllers();

// Đăng ký Swagger/OpenAPI để test API
builder.Services.AddOpenApi();

// Đăng ký kết nối Database SQL Server
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
if (string.IsNullOrEmpty(connectionString))
{
    throw new InvalidOperationException("Connection string 'DefaultConnection' not found in appsettings.json");
}
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString));

// Cấu hình CORS (Cho phép React gọi API)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// --- 2. CẤU HÌNH PIPELINE (Sau khi Build) ---

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// SỬ DỤNG CORS (Phải đặt trước MapControllers)
app.UseCors("AllowReactApp");

app.UseAuthorization();

// Ánh xạ các Controller để nhận request (Cái này giúp file ProductController chạy được)
app.MapControllers();

app.Run();
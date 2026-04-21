using Microsoft.EntityFrameworkCore;
using MyStoreApi.Models;

namespace MyStoreApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; } 
    }
}
namespace MyStoreApi.Models
{
    public class Product
    {
        public int Id { get; set; } 
        public string Name { get; set; } = string.Empty;
        public string Desc { get; set; } = string.Empty; // Khớp với desc bên React
        public string Price { get; set; } = string.Empty; // Khớp với price bên React
    }
}
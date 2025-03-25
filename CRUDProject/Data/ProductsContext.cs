using CRUDProject.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace CRUDProject.Data
{
    public class ProductsContext : DbContext
    {
        public ProductsContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Products> Products { get; set; }
    }
}

using CRUDProject.Data;
using CRUDProject.Models.Domain;
using CRUDProject.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductsContext context;

        public ProductsController(ProductsContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await context.Products.ToListAsync();
            var productsDto = new List<ProductsDto>();

            foreach (var product in products)
            {
                productsDto.Add(new ProductsDto()
                {
                    Id = product.ProductID,
                    Name = product.Name,
                    Description = product.Description,
                    Price = product.Price,
                });
            }

            return Ok(productsDto);
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] AddProductDto addProductDto)
        {
            if (ModelState.IsValid)
            {
                var product = new Products
                {
                    Name = addProductDto.Name,
                    Description = addProductDto.Description,
                    Price = addProductDto.Price,
                    CreatedDate = DateTime.Now,
                };

                await context.Products.AddAsync(product);
                await context.SaveChangesAsync();

                return new OkResult();
            }else
            {
                return BadRequest(ModelState);
            }
            
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] int id, [FromBody] UpdateProductDto updateProductDto)
        {
            if (ModelState.IsValid)
            {
                var product = await context.Products.FirstOrDefaultAsync(x => x.ProductID == id);

                if (product == null)
                {
                    return NotFound();
                }

                product.Name = updateProductDto.Name;
                product.Description = updateProductDto.Description;
                product.Price = updateProductDto.Price;

                await context.SaveChangesAsync();

                return new OkResult();
            }
            else
            {
                return BadRequest(ModelState);
            }

            
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] int id)
        {
            var product = await context.Products.FirstOrDefaultAsync(x => x.ProductID == id);

            if (product == null)
            {
                return NotFound();
            }

            context.Products.Remove(product);
            await context.SaveChangesAsync();

            return new OkResult();
        }
    }
}

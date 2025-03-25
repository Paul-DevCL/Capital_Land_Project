using CRUDProject.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<ProductsContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DbConnectionString")));

var app = builder.Build();

app.UseHttpsRedirection();

app.UseDefaultFiles(); 

app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

app.Run();

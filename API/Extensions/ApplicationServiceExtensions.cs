using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Controllers;
using Application.Activities;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, 
        IConfiguration config)
        {
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            services.AddCors(opt => {
                opt.AddPolicy("AllowSpecificOrigin",
                        builder => builder.WithOrigins("http://127.0.0.1:5173")
                                        .AllowAnyMethod()
                                        .AllowAnyHeader());
            });

            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Create.Handler).Assembly));
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(ILogger).Assembly));
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            return services;
        }       
    } 
}
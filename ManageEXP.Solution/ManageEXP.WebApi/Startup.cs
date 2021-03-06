using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ManageEXP.Domain.AppSettings;
using ManageEXP.Domain.Interfaces.Services;
using ManageEXP.Domain.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using ManageEXP.Domain.Interfaces.DAL;
using ManageEXP.Domain.DAL;
using Microsoft.AspNetCore.Identity;

using System.Globalization;

namespace ManageEXP.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //var connectionString = Environment.GetEnvironmentVariable("DB_CONNECTION_STRING");
            var connectionString = Configuration.GetConnectionString("ManageExpCoreConnection");

            services.AddDbContext<IDomainDbContext, DomainDbContext>(options =>
                    options.UseNpgsql(connectionString));

            services.AddDbContext<DomainDbContext>(options =>
                    options.UseNpgsql(connectionString, builder => { builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null); }));


            services.AddControllers();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ManageEXP API", Version = "v1" });
            });

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        );
            });

            services.Configure<ZabbixSettings>(
                Configuration.GetSection("Zabbix"));

            services.AddScoped(typeof(IZabbixService), typeof(ZabbixService));
            services.AddScoped(typeof(IClientService), typeof(ClientService));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("CorsPolicy");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "ManageEXP API V1");
            });
        }
    }
}

using Microsoft.EntityFrameworkCore;
using BookMyMeal.DbContext;
using BookMyMeal.Repository;
using BookMyMeal.Repository.Interface;
using BookMyMeal.Repository.Implementation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.OpenApi.Models;
using BookMyMeal.Models;

namespace BookMyMeal
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            //new
            builder.Services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.PropertyNamingPolicy = null;
            });

            var provider = builder.Services.BuildServiceProvider();
            var config = provider.GetRequiredService<IConfiguration>();

            //token code
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true, 
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidIssuer = builder.Configuration["Jwt:Issuer"],
                    ValidAudience = builder.Configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
                };
            });

            builder.Services.AddDbContext<DbContexts>(item => item.UseSqlServer(config.GetConnectionString("dbcs")));

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //TO USE EMAIL SETTINGS FROM APPSETTINGS.JSON
            builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));
            builder.Services.AddTransient<IEmail, EmailBL>();

            builder.Services.AddSingleton<IEmployee,EmployeeBL>();
            builder.Services.AddSingleton<IOrderLogs, OrderLogsBL>();
            builder.Services.AddSingleton<ICouponDetails, CouponDetailsBL>();
            builder.Services.AddSingleton<ILoginCredentials, LoginCredentialsBL>();
            builder.Services.AddSingleton<IBookingCalendar, BookingCalendarBL>();
            builder.Services.AddSingleton<ICouponRedemptionLogs, CouponRedemptionLogsBL>();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
               // new
                //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "DemoJWTToken v1"));
            }

            

            app.UseHttpsRedirection();

            app.UseCors(x =>
                        x.AllowAnyOrigin().
                        AllowAnyMethod().
                        AllowAnyHeader());

            app.UseAuthentication();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
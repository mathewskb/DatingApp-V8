using API.Extensions;
using API.Middlewares;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// application extension method
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseMiddleware<ExceptionMiddleware>(); // Exception Middleware - custom

app.UseCors(options =>
{
    options.AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins(["http://localhost:4200", "https://localhost:4200"]);
});

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

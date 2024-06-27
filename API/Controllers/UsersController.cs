using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UsersController(DataContext dataContext): ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return Ok(await dataContext.Users.ToListAsync());
        }
        
        [HttpGet("{id:int}")]
        
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            return Ok(await dataContext.Users.FindAsync(id));
        }
    }
}
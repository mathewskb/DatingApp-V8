using API.DTOs;
using API.Intefaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [Authorize]
    public class UsersController(IUserRepository userRepository) : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await userRepository.GetMembersAsync();

            return Ok(users);
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUserByUsername(string username)
        {
            var user = await userRepository.GetMembersbyUsernameAsync(username);
            
            if (user == null) return NotFound();

            return Ok(user);

        }


        // [HttpGet]
        // [Route("searchbyid/{id:int}")]
        // public async Task<ActionResult<MemberDto>> GetUserById(int id)
        // {
        //     var user = await userRepository.GetUserbyIdAsync(id);
            
        //     if (user == null) return NotFound();

        //     return mapper.Map<MemberDto>(user);

        // }
    }
}
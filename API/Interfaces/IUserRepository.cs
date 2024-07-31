using API.DTOs;
using API.Entities;

namespace API.Intefaces;

public interface IUserRepository
{
    void Update(AppUser appUser);
    Task<bool> SaveAllAsync();
    Task<IEnumerable<AppUser>> GetUsersAsync();
    Task<AppUser?> GetUserbyIdAsync(int id);
    Task<AppUser?> GetUserbyUsernameAsync(string username);
    Task<IEnumerable<MemberDto>> GetMembersAsync();
    Task<MemberDto?> GetMembersbyUsernameAsync(string username);

}

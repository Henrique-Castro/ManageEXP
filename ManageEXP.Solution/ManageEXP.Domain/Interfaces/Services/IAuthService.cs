using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ManageEXP.Domain.Interfaces.Services
{
    public interface IAuthService
    {
        Task<string> LoginAsync(dynamic parameters);
    }
}

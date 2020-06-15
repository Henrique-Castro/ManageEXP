using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ManageEXP.Domain.Interfaces.Services
{
    public interface IZabbixService
    {
        Task<string> LoginAsync(dynamic parameters);
        Task<object> GetZabbixResponseAsync(string method, object parameters);
    }
}

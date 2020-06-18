using ManageEXP.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ManageEXP.Domain.Interfaces.Services
{
    public interface IZabbixService
    {
        Task<ZabbixResponse> GetZabbixResponseAsync(string method, object parameters);
        Task<bool> SetZabbixAddress(string address);
    }
}

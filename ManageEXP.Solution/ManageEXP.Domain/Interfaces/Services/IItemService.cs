using ManageEXP.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ManageEXP.Domain.Interfaces.Services
{
    public interface IItemService
    {
        Task<object> GetItem(ZabbixRequest request);
    }
}

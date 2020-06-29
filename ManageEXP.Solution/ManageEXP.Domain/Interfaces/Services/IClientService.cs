using System;
using System.Collections.Generic;
using System.Text;
using ManageEXP.Domain.Entities;

namespace ManageEXP.Domain.Interfaces.Services
{
    public interface IClientService
    {
        bool RegisterClient(Client client);
        bool DeleteClient(int id);
        bool UpdateClient(Client newInfo);
        IEnumerable<Client> GetClients();
    }
}

using ManageEXP.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using ManageEXP.Domain.Interfaces.Services;
using ManageEXP.Domain.Interfaces.DAL;
using System.Linq;

namespace ManageEXP.Domain.Services
{
    public class ClientService : IClientService
    {

        readonly IDomainDbContext _context;

        public ClientService(IDomainDbContext context)
        {
            _context = context;
        }

        public bool DeleteClient(int id)
        {
            var clientFound = _context.Clients.Find(id);

            if (clientFound == null)
            {
                return false;
            }

            _context.Clients.Remove(clientFound);
            var changes = _context.SaveChanges();

            if(changes == 0)
            {
                return false;
            }

            return true;
        }

        public IEnumerable<Client> GetClients()
        {
            var clients = _context.Clients.ToArray();

            return clients;
        }

        public bool RegisterClient(Client client)
        {
            _context.Clients.Add(client);
            var changes = _context.SaveChanges();

            if (changes != 0)
            {
                return true;
            }

            return false;
        }

        public bool UpdateClient(Client newInfo)
        {
            var foundClient = _context.Clients.Find(newInfo.Id);

            if (foundClient == null)
            {
                return false;
            }

            _context.Clients.Update(newInfo);
            var changes = _context.SaveChanges();

            if (changes == 0)
            {
                return false;
            }

            return true;
        }
    }
}

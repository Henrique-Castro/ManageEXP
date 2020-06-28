using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ManageEXP.Domain.Entities;

namespace ManageEXP.WebApi.Models
{
    public class ClientModel
    {
        public string Company { get; set; }
        public string TechnicalManager { get; set; }
        public int DomainId { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }

        public Client ToEntity()
        {
            return new Client(Company, TechnicalManager, DomainId, Email, PhoneNumber);
        }
    }
}

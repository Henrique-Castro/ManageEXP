using System;
using System.Collections.Generic;
using System.Text;

namespace ManageEXP.Domain.Entities
{
    public class Client : BasicEntity<int>
    {
        public Client()
        {

        }

        public Client(string company, string technicalManager, int domainId, string email, string phoneNumber)
        {
            Company = company;
            TechnicalManager = technicalManager;
            DomainId = domainId;
            Email = email;
            PhoneNumber = phoneNumber;
        }

        public string Company { get; set; }
        public string TechnicalManager { get; set; }
        public int DomainId { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}

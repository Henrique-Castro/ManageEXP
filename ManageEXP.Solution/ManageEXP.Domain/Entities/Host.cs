using System;
using System.Collections.Generic;
using System.Text;

namespace ManageEXP.Domain.Entities
{
    public class Host : BasicEntity
    {
        public int Id { get; set; }
        public string HostName { get; set; }
    }
}

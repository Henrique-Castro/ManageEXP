using System;
using System.Collections.Generic;
using System.Text;

namespace ManageEXP.Domain.Entities
{
    public class Host : BasicEntity<int>
    {
        public string Name { get; set; }
    }
}

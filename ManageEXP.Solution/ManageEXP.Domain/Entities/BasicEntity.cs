using System;
using System.Collections.Generic;
using System.Text;

namespace ManageEXP.Domain.Entities
{
    public class BasicEntity
    {
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
    }

    public class BasicEntity<TId> : BasicEntity
    {
        public TId Id { get; set; }
    }
}

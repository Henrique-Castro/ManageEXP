using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using ManageEXP.Domain.Entities;

namespace ManageEXP.Domain.Interfaces.DAL
{
    public interface IDomainDbContext : IDisposable
    {
        DbSet<Client> Clients { get; set; }
        DbSet<Host> Hosts { get; set; }
       
        int SaveChanges();
    }
}

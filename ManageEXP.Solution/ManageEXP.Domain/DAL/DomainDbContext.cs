using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using ManageEXP.Domain.Entities;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;
using ManageEXP.Domain.Interfaces.DAL;

namespace ManageEXP.Domain.DAL
{
    public class DomainDbContext : DbContext, IDomainDbContext
    {
        public DomainDbContext(DbContextOptions<DomainDbContext> options)
           : base(options) { }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Host> Hosts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Client>()
               .HasIndex(b => b.Id)
               .IsUnique();

            builder.Entity<Host>()
               .HasIndex(b => b.Id)
               .IsUnique();
        }

        public override int SaveChanges()
        {
            var entries = ChangeTracker
                .Entries()
                .Where(e => e.Entity is BasicEntity && (e.State == EntityState.Added || e.State == EntityState.Modified));

            foreach (var entityEntry in entries)
            {
                ((BasicEntity)entityEntry.Entity).UpdatedOn = DateTime.Now;

                if (entityEntry.State == EntityState.Added)
                {
                    ((BasicEntity)entityEntry.Entity).CreatedOn = DateTime.Now;
                }
            }

            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var entries = ChangeTracker
                .Entries()
                .Where(e => e.Entity is BasicEntity && (e.State == EntityState.Added || e.State == EntityState.Modified));

            foreach (var entityEntry in entries)
            {
                ((BasicEntity)entityEntry.Entity).UpdatedOn = DateTime.Now;

                if (entityEntry.State == EntityState.Added)
                {
                    ((BasicEntity)entityEntry.Entity).CreatedOn = DateTime.Now;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }
    }
}

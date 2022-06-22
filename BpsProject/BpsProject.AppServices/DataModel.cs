using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace BpsProject.AppServices
{
    public partial class DataModel : DbContext
    {
        public DataModel()
            : base("name=DataContext")
        {
        }

        public virtual DbSet<GRADE> GRADEs { get; set; }
        public virtual DbSet<STUDENT> STUDENTs { get; set; }
        public virtual DbSet<TEACHER> TEACHERs { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GRADE>()
                .Property(e => e.NAME)
                .IsUnicode(false);

            modelBuilder.Entity<GRADE>()
                .Property(e => e.GRADE_VALUE)
                .HasPrecision(18, 0);

            modelBuilder.Entity<STUDENT>()
                .Property(e => e.NAME)
                .IsUnicode(false);

            modelBuilder.Entity<TEACHER>()
                .Property(e => e.NAME)
                .IsUnicode(false);
        }
    }
}

namespace BpsProject.AppServices
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("GRADE")]
    public partial class GRADE
    {
        public int ID { get; set; }

        [StringLength(100)]
        public string NAME { get; set; }

        public decimal? GRADE_VALUE { get; set; }

        public int? TEACHERID { get; set; }

        public int? STUDENTID { get; set; }

        public virtual STUDENT STUDENT { get; set; }

        public virtual TEACHER TEACHER { get; set; }
    }
}

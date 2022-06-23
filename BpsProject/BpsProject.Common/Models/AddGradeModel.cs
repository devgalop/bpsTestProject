using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace BpsProject.Common.Models
{
    public class AddGradeModel
    {
        public string Name { get; set; }
        public double Value { get; set; }
        public int StudentId { get; set; }
        public int TeacherId { get; set; }
    }
}
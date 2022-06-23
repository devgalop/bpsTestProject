using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace BpsProject.Common.Models
{
    public class UpdateGradeModel : AddGradeModel
    {
        public int Id { get; set; }
    }
}
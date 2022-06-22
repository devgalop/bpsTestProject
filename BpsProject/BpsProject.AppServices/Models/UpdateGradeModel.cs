using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace BpsProject.AppServices.Models
{
    [DataContract]
    public class UpdateGradeModel : AddGradeModel
    {
        [DataMember]
        public int Id { get; set; }
    }
}
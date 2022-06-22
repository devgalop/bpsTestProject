using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace BpsProject.AppServices.Models
{
    [DataContract]
    public class AddGradeModel
    {
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public double Value { get; set; }
        [DataMember]
        public int StudentId { get; set; }
        [DataMember]
        public int TeacherId { get; set; }
    }
}
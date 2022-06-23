using BpsProject.AppServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace BpsProject.AppServices
{
    [ServiceContract]
    public interface IGradeService
    {

        [OperationContract]
        [WebGet(UriTemplate = "Grades/GetAll", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        List<GradesModel> GetAll();

        [OperationContract]
        [WebGet(UriTemplate = "Grades/GetGradesByStudent/{studentId}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        List<GradesModel> GetGradesByStudent(string studentId);

        [OperationContract]
        [WebInvoke(UriTemplate = "Grades/AddGrade", Method ="POST")]
        void AddGrade(AddGradeModel model);

        [OperationContract]
        [WebInvoke(UriTemplate = "Grades/UpdateGrade", Method = "PUT")]
        bool UpdateGrade(UpdateGradeModel model);

        [OperationContract]
        [WebInvoke(UriTemplate = "Grades/DeleteGrade/{gradeId}", Method = "DELETE")]
        bool DeleteGrade(string gradeId);


    }

}

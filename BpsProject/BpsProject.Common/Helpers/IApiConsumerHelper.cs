using BpsProject.Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace BpsProject.Common.Helpers
{
    public interface IApiConsumerHelper
    {
        Task<ResponseModel> PostAsync(RequestModel request);
        Task<ResponseModel> PutAsync(RequestModel request);
        Task<ResponseModel> GetAsync(RequestModel request, string urlParameter);
        Task<ResponseModel> GetAsync(RequestModel request);
        Task<ResponseModel> DeleteAsync(RequestModel request, string urlParameter);
    }
}

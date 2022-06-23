using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BpsProject.Common.Models
{
    public class RequestModel
    {
        public string UrlBase { get; set; } = string.Empty;
        public string ServicePrefix { get; set; } = string.Empty;
        public string Controller { get; set; } = string.Empty;
        public string TokenType { get; set; } = string.Empty;
        public string AccessToken { get; set; } = string.Empty;
        public string Body { get; set; } = string.Empty;
        public bool HasAuthorization => !string.IsNullOrEmpty(AccessToken);
    }
}

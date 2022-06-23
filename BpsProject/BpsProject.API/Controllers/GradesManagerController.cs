using BpsProject.Common.Helpers;
using BpsProject.Common.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BpsProject.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GradesManagerController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IApiConsumerHelper _apiConsumer;
        private IConfigurationSection _sectionGrades;
        public GradesManagerController(IConfiguration configuration,IApiConsumerHelper apiConsumer)
        {
            _configuration = configuration;
            _apiConsumer = apiConsumer;
            _sectionGrades = _configuration.GetSection("ServicePaths:Grades");
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAllGrades() 
        {
            try
            {
                RequestModel request = new RequestModel()
                {
                    UrlBase = _sectionGrades.GetValue<string>("UrlBase"),
                    ServicePrefix = _sectionGrades.GetValue<string>("Prefix"),
                    Controller = "/Grades/GetAll"
                };

                ResponseModel response = await _apiConsumer.GetAsync(request);

                if (!response.IsSuccess) return BadRequest("Error Interno");

                return Ok(response.Result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("GetByStudent/{studentId}")]
        public async Task<IActionResult> GetGradesByStudentId(string studentId)
        {
            try
            {
                RequestModel request = new RequestModel()
                {
                    UrlBase = _sectionGrades.GetValue<string>("UrlBase"),
                    ServicePrefix = _sectionGrades.GetValue<string>("Prefix"),
                    Controller = "/Grades/GetGradesByStudent"
                };

                ResponseModel response = await _apiConsumer.GetAsync(request,studentId);

                if (!response.IsSuccess) return BadRequest("Error Interno");

                return Ok(response.Result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost("AddGrade")]
        public async Task<IActionResult> AddGrade(AddGradeModel model) 
        {
            try
            {
                RequestModel request = new RequestModel()
                {
                    UrlBase = _sectionGrades.GetValue<string>("UrlBase"),
                    ServicePrefix = _sectionGrades.GetValue<string>("Prefix"),
                    Controller = "/Grades/AddGrade",
                    Body = JsonConvert.SerializeObject(model)
                };

                ResponseModel response = await _apiConsumer.PostAsync(request);

                if (!response.IsSuccess) return BadRequest("Error Interno");

                return Ok(response.Result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost("UpdateGrade")]
        public async Task<IActionResult> UpdateGrade(UpdateGradeModel model)
        {
            try
            {
                RequestModel request = new RequestModel()
                {
                    UrlBase = _sectionGrades.GetValue<string>("UrlBase"),
                    ServicePrefix = _sectionGrades.GetValue<string>("Prefix"),
                    Controller = "/Grades/UpdateGrade",
                    Body = JsonConvert.SerializeObject(model)
                };

                ResponseModel response = await _apiConsumer.PutAsync(request);

                if (!response.IsSuccess) return BadRequest("Error Interno");

                return Ok(response.Result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}

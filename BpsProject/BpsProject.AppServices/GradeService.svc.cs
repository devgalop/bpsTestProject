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
    public class GradeService : IGradeService
    {
        public void AddGrade(AddGradeModel model)
        {            
            try
            {
                GRADE newGrade = new GRADE()
                {
                    NAME = model.Name,
                    GRADE_VALUE = (decimal)model.Value,
                    STUDENTID = model.StudentId,
                    TEACHERID = model.TeacherId
                };
                using (DataModel dbContext = new DataModel())
                {
                    dbContext.GRADEs.Add(newGrade);
                    dbContext.SaveChanges();
                }
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public bool DeleteGrade(string gradeId)
        {
            try
            {
                int gradeIdTransformed = Int32.Parse(gradeId);
                using (DataModel dbContext = new DataModel())
                {
                    GRADE gradeFound = dbContext.GRADEs.Where(g => g.ID == gradeIdTransformed).FirstOrDefault();
                    if (gradeFound == null) return false;
                    dbContext.GRADEs.Remove(gradeFound);
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public List<GradesModel> GetAll()
        {
            try
            { 
                using (DataModel dbContext = new DataModel()) 
                {
                    return dbContext.GRADEs
                                        .Select(g => new GradesModel
                                        {
                                            Id = g.ID,
                                            Name = g.NAME,
                                            Value = (double)g.GRADE_VALUE,
                                            StudentId = g.STUDENTID,
                                            TeacherId = g.TEACHERID
                                        }).ToList();
                }
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public List<GradesModel> GetGradesByStudent(string studentId)
        {
            try
            {
                var studentIdTransformed = Int32.Parse(studentId);
                using (DataModel dbContext = new DataModel())
                {
                    return dbContext.GRADEs
                                        .Where(g => g.STUDENTID == studentIdTransformed)
                                        .Select(g => new GradesModel
                                        {
                                            Id = g.ID,
                                            Name = g.NAME,
                                            Value = (double)g.GRADE_VALUE,
                                            StudentId = g.STUDENTID,
                                            TeacherId = g.TEACHERID
                                        }).ToList();
                }
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public bool UpdateGrade(UpdateGradeModel model)
        {
            try
            {
                using (DataModel dbContext = new DataModel())
                {
                    GRADE gradeFound = dbContext.GRADEs.Where(g => g.ID == model.Id).FirstOrDefault();
                    if (gradeFound == null) return false;
                    gradeFound.NAME = model.Name;
                    gradeFound.GRADE_VALUE = (decimal)model.Value;
                    gradeFound.STUDENTID = model.StudentId;
                    gradeFound.TEACHERID = model.TeacherId;
                    dbContext.SaveChanges();
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}

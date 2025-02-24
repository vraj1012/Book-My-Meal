using BookMyMeal.Models;
using BookMyMeal.Repository.Interface;
using Microsoft.Data.SqlClient;
using System.Configuration;
using System.Linq.Expressions;

namespace BookMyMeal.Repository.Implementation
{
    public class EmployeeBL : IEmployee
    {

        private readonly string conn_str;

        // GETTING THE CONNECTION STRING FOR CONN_STR PRIVATE VARIABLE
        public EmployeeBL(IConfiguration configuration)
        {
            conn_str = configuration.GetConnectionString("dbcs");
        }

        public List<Employee> GetEmployeeData()
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {
                    List<Employee> emp_data = new List<Employee>();
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPGETEMPDETAILS", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Employee e = new Employee
                            {

                                EMPLOYEEID = Convert.ToInt32(reader["EMPLOYEEID"]),
                                FIRSTNAME = Convert.ToString(reader["FIRSTNAME"]),
                                LASTNAME = Convert.ToString(reader["LASTNAME"]),
                                PHONENUMBER = Convert.ToString(reader["PHONENUMBER"]),
                                DOB = Convert.ToString(reader["DOB"]),
                                GENDER = Convert.ToString(reader["GENDER"]),
                                DEPTID = Convert.ToInt32(reader["DEPTID"]),
                                EMAIL = Convert.ToString(reader["EMAIL"]),
                                PASSWORD = Convert.ToString(reader["PASSWORD"]),
                                ISACTIVE = Convert.ToBoolean(reader["ISACTIVE"]),
                                ISDELETED = Convert.ToBoolean(reader["ISDELETED"]),
                                REGISTRATIONDATE = Convert.ToString(reader["REGISTRATIONDATE"]),
                                MODIFIEDON = Convert.ToString(reader["MODIFIEDON"])

                            };
                            emp_data.Add(e);
                        }
                        return emp_data;
                    }
                }
            }
            catch(Exception ex) 
            {
                throw ex;
            }
        }

        public List<Employee> GetEmployeeDataById(int employeeID)
        {
            try 
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {
                    List<Employee> emp_data = new List<Employee>();
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPGETEMPDETAILSBYID", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMPLOYEEID", employeeID);

                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        Employee e = new Employee
                        {

                            EMPLOYEEID = Convert.ToInt32(rdr["EMPLOYEEID"]),
                            FIRSTNAME = Convert.ToString(rdr["FIRSTNAME"]),
                            LASTNAME = Convert.ToString(rdr["LASTNAME"]),
                            PHONENUMBER = Convert.ToString(rdr["PHONENUMBER"]),
                            DOB = Convert.ToString(rdr["DOB"]),
                            GENDER = Convert.ToString(rdr["GENDER"]),
                            DEPTID = Convert.ToInt32(rdr["DEPTID"]),
                            EMAIL = Convert.ToString(rdr["EMAIL"]),
                            PASSWORD = Convert.ToString(rdr["PASSWORD"]),
                            ISACTIVE = Convert.ToBoolean(rdr["ISACTIVE"]),
                            ISDELETED = Convert.ToBoolean(rdr["ISDELETED"]),
                            REGISTRATIONDATE = Convert.ToString(rdr["REGISTRATIONDATE"]),
                            MODIFIEDON = Convert.ToString(rdr["MODIFIEDON"])

                        };
                        emp_data.Add(e);
                    }
                    return emp_data;
                }

            }
            catch(Exception ex) 
            {
                throw ex;
            }

        }

        public void InsertEmployeeData(Employee emp)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {

                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPINSERTEMP", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@FIRSTNAME", emp.FIRSTNAME);
                    cmd.Parameters.AddWithValue("@LASTNAME", emp.LASTNAME);
                    cmd.Parameters.AddWithValue("@PHONENUMBER", emp.PHONENUMBER);
                    cmd.Parameters.AddWithValue("@DOB", emp.DOB);
                    cmd.Parameters.AddWithValue("@GENDER", emp.GENDER);
                    cmd.Parameters.AddWithValue("@DEPTID", emp.DEPTID);
                    cmd.Parameters.AddWithValue("@EMAIL", emp.EMAIL);
                    cmd.Parameters.AddWithValue("@PASSWORD", emp.PASSWORD);
                    cmd.ExecuteNonQuery();

                }
            }
            catch (Exception ex) 
            {
                throw ex;
            }
        }

        public void UpdateEmployeeData(Employee emp,string newPassword)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {

                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPCHANGEPASSWORD", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMAIL", emp.EMAIL);
                    cmd.Parameters.AddWithValue("@PASSWORD", emp.PASSWORD);
                    cmd.Parameters.AddWithValue("@NEWPASSWORD", newPassword);
                    cmd.ExecuteNonQuery();

                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public void DeleteEmployeeData(int employeeID)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPDELETEEMPLOYEE", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("EMPLOYEEID", employeeID);
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex) 
            {
                throw ex;
            }
        }


    }
}

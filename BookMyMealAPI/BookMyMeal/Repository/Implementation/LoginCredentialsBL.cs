using BookMyMeal.Models;
using BookMyMeal.Repository.Interface;
using Microsoft.Data.SqlClient;

namespace BookMyMeal.Repository.Implementation
{
    public class LoginCredentialsBL : ILoginCredentials
    {

        private readonly string conn_str;

        // GETTING THE CONNECTION STRING FOR CONN_STR PRIVATE VARIABLE
        public LoginCredentialsBL(IConfiguration configuration)
        {
            conn_str = configuration.GetConnectionString("dbcs");
        }

        public bool VerifyLoginCredentials(LoginCredentials credentials)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPVERIFYLOGINCREDENTIALS", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMAIL", credentials.EMAIL);
                    cmd.Parameters.AddWithValue("@PASSWORD", credentials.PASSWORD);
                    int loginSuccess = (int)cmd.ExecuteScalar();

                    if (loginSuccess == 1)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void StoreTokenData(string tokenData, LoginCredentials credentials)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPSTORETOKEN", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMAIL", credentials.EMAIL);
                    cmd.Parameters.AddWithValue("@TOKEN", tokenData);
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int GetEmpIdByLoginCredentials(string email)
        {
            try
            {
                using(SqlConnection conn = new SqlConnection(conn_str))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPGETEMPIDBYLOGINCREDENTIAL", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMAIL",email);
                    int employeeid = (int)cmd.ExecuteScalar();
                    /*int employeeid = cmd.ExecuteNonQuery();*/
                    return employeeid;
                }
            }
            catch(Exception ex) 
            {
                throw ex;
            }
        }

    }
}

using BookMyMeal.Repository.Interface;
using BookMyMeal.Models;
using Microsoft.Data.SqlClient;
using System.Configuration;

namespace BookMyMeal.Repository.Implementation
{
    public class OrderLogsBL : IOrderLogs
    {

        private readonly string conn_str;

        // GETTING THE CONNECTION STRING FOR CONN_STR PRIVATE VARIABLE
        public OrderLogsBL(IConfiguration configuration)
        {
            conn_str = configuration.GetConnectionString("dbcs");
        }

        public void PlaceOrderBulk(OrderLogs ordD)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPPLACEORDERBULK", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMPLOYEEIDBOOKEDBY", ordD.EMPLOYEEIDBOOKEDBY);
                    cmd.Parameters.AddWithValue("@EMPLOYEEIDBOOKEDFOR", ordD.EMPLOYEEIDBOOKEDFOR);
                    cmd.Parameters.AddWithValue("@MEALTYPE", ordD.MEALTYPE);
                    cmd.Parameters.AddWithValue("@BOOKINGINITIALDATE", ordD.BOOKINGINITIALDATE);
                    cmd.Parameters.AddWithValue("@BOOKINGENDDATE", ordD.BOOKINGENDDATE);
                    cmd.ExecuteNonQuery();
                }
            }
            catch(Exception ex) 
            {
                throw ex;
            }

        }

        public void PlaceOrderSingle(OrderLogs ordD)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPPLACEORDERSINGLE", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMPLOYEEIDBOOKEDBY", ordD.EMPLOYEEIDBOOKEDBY);
                    cmd.Parameters.AddWithValue("@EMPLOYEEIDBOOKEDFOR", ordD.EMPLOYEEIDBOOKEDFOR);
                    cmd.Parameters.AddWithValue("@MEALTYPE", ordD.MEALTYPE);
                    cmd.ExecuteNonQuery();

                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public List<OrderLogs> GetOrderLogsByEmployeeId(int employeeID)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {
                    List<OrderLogs> ordLogsList = new List<OrderLogs>();
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPGETORDERLOGSBYEMPLOYEEID", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMPLOYEEID", employeeID);

                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {

                        OrderLogs ordD = new OrderLogs()
                        {
                            ORDERID = Convert.ToInt32(rdr["ORDERID"]),
                            EMPLOYEEIDBOOKEDBY = Convert.ToInt32(rdr["EMPLOYEEIDBOOKEDBY"]),
                            EMPLOYEEIDBOOKEDFOR = Convert.ToInt32(rdr["EMPLOYEEIDBOOKEDFOR"]),
                            ORDERTYPE = Convert.ToString(rdr["ORDERTYPE"]),
                            MEALTYPE = Convert.ToString(rdr["MEALTYPE"]),
                            BOOKINGDATE = Convert.ToString(rdr["BOOKINGDATE"]),
                            BOOKINGINITIALDATE = Convert.ToDateTime(rdr["BOOKINGINITIALDATE"]),
                            BOOKINGENDDATE = Convert.ToDateTime(rdr["BOOKINGENDDATE"]),
                            AMOUNT = Convert.ToDouble(rdr["AMOUNT"]),
                            ORDERSTATUS = Convert.ToString(rdr["ORDERSTATUS"])
                        };

                        ordLogsList.Add(ordD);

                    }

                    return ordLogsList;
                }

            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        public void CancelOrder(int orderID)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPCANCELORDER", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@ORDERID", orderID);
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

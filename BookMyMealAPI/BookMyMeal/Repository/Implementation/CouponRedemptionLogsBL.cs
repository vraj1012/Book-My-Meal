using BookMyMeal.Models;
using BookMyMeal.Repository.Interface;
using Microsoft.Data.SqlClient;

namespace BookMyMeal.Repository.Implementation
{
    public class CouponRedemptionLogsBL : ICouponRedemptionLogs
    {

        private readonly string conn_str;

        // GETTING THE CONNECTION STRING FOR CONN_STR PRIVATE VARIABLE
        public CouponRedemptionLogsBL(IConfiguration configuration)
        {
            conn_str = configuration.GetConnectionString("dbcs");
        }

        public List<CouponRedemptionLogs> GetRedeemedCouponDetails(int employeeID)
        
        {
            try
            {
                using(SqlConnection conn = new SqlConnection(conn_str))
                {
                    List<CouponRedemptionLogs> redeemedCouponData = new List<CouponRedemptionLogs> ();
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPGETREDEEMEDCOUPONDETAILS", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMPLOYEEID", employeeID);
                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read()) 
                    { 
                        CouponRedemptionLogs c = new CouponRedemptionLogs()
                        {
                            COUPONID = Convert.ToInt32(rdr["COUPONID"]),
                            EMPLOYEEID = Convert.ToInt32(rdr["EMPLOYEEID"]),
                            EMPLOYEENAME = Convert.ToString(rdr["EMPLOYEENAME"]),
                            ORDERID = Convert.ToInt32(rdr["ORDERID"]),
                            MEALTYPE = Convert.ToString(rdr["MEALTYPE"]),
                            COUPONNUMBER = Convert.ToInt32(rdr["COUPONNUMBER"]),
                            REDEEMDATE = Convert.ToString(rdr["REDEEMDATE"]),
                            REDEEMDAY = Convert.ToString(rdr["REDEEMDAY"]),
                            REDEEMSTATUS = Convert.ToString(rdr["REDEEMSTATUS"])
                        };
                        redeemedCouponData.Add(c);
                    }
                    return redeemedCouponData;
                }
            }
            catch (Exception ex) 
            {
                throw ex;
            }
        }



    }
}

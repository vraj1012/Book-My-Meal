using BookMyMeal.Models;
using Microsoft.Data.SqlClient;
using BookMyMeal.Repository.Interface;

namespace BookMyMeal.Repository.Implementation

{
    public class CouponDetailsBL : ICouponDetails
    {

        private readonly string conn_str;

        // GETTING THE CONNECTION STRING FOR CONN_STR PRIVATE VARIABLE
        public CouponDetailsBL(IConfiguration configuration)
        {
            conn_str = configuration.GetConnectionString("dbcs");
        }


        public List<CouponDetails> GetCouponDetailsByEmployeeId(int employeeID)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(conn_str))
                {
                    List<CouponDetails> couponData = new List<CouponDetails>();
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPGETEMPLOYEECOUPONS", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMPLOYEEID", employeeID);

                    SqlDataReader rdr = cmd.ExecuteReader();

                    while (rdr.Read())
                    {
                        CouponDetails d = new CouponDetails
                        {
                            COUPONID = Convert.ToInt32(rdr["COUPONID"]),
                            EMPLOYEEID = Convert.ToInt32(rdr["EMPLOYEEID"]),
                            EMPLOYEENAME = Convert.ToString(rdr["EMPLOYEENAME"]),
                            ORDERID = Convert.ToInt32(rdr["ORDERID"]),
                            MEALTYPE = Convert.ToString(rdr["MEALTYPE"]),
                            COUPONNUMBER = Convert.ToInt32(rdr["COUPONNUMBER"]),
                            DATEOFREDEMPTION = Convert.ToDateTime(rdr["DATEOFREDEMPTION"]),
                            DAYOFREDEMPTION = Convert.ToString(rdr["DAYOFREDEMPTION"])
                        };

                        couponData.Add(d);
                    }
                    return couponData;
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public void RedeemCoupon(int couponNumber)
        {

            try
            {
                using(SqlConnection conn = new SqlConnection(conn_str))
                {

                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPREDEEMCOUPON", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@COUPONNUMBER", couponNumber);
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

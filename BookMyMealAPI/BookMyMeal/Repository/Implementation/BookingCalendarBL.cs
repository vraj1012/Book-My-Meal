using BookMyMeal.Models;
using BookMyMeal.Repository.Interface;
using Microsoft.Data.SqlClient;

namespace BookMyMeal.Repository.Implementation
{
    public class BookingCalendarBL : IBookingCalendar
    {

        private readonly string conn_str;

        // GETTING THE CONNECTION STRING FOR CONN_STR PRIVATE VARIABLE
        public BookingCalendarBL(IConfiguration configuration)
        {
            conn_str = configuration.GetConnectionString("dbcs");
        }

        public List<BookingCalendar> GetBookingDates(int employeeID)
        {
            try
            {
                using(SqlConnection conn = new SqlConnection(conn_str))
                {
                    List<BookingCalendar> bookingDatesList = new List<BookingCalendar>();
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPSHOWBOOKINGDATES", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMPLOYEEID", employeeID);

                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read()) 
                    { 
                        BookingCalendar bookingDates = new BookingCalendar()
                        {
                            STARTDATE = Convert.ToString(rdr["BOOKINGINITIALDATE"]),
                            ENDDATE = Convert.ToString(rdr["BOOKINGENDDATE"])
                        };
                        bookingDatesList.Add(bookingDates);
                    }
                    return bookingDatesList;
                }
            }
            catch(Exception ex) 
            {
                throw ex;
            }


        }

        public DateTime GetBookingStartDate(int employeeID)
        {
            try
            {
                using(SqlConnection conn = new SqlConnection(conn_str))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPSHOWBOOKINGSTARTDATE", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMPLOYEEID", employeeID);
                    DateTime startDate = Convert.ToDateTime(cmd.ExecuteScalar());
                    return startDate;
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public DateTime GetBookingEndDate(int employeeID)
        {
            try
            {
                using(SqlConnection conn = new SqlConnection(conn_str))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("SPSHOWBOOKINGENDDATE", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@EMPLOYEEID", employeeID);
                    DateTime endDate = Convert.ToDateTime(cmd.ExecuteScalar());
                    return endDate;
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

    }
}

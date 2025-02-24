using System.Security.Principal;

namespace BookMyMeal.Models
{
    public class CouponDetails
    {

        public int COUPONID { get; set; }

        public int EMPLOYEEID { get; set; }

        public string EMPLOYEENAME { get; set; }

        public int ORDERID { get; set; }

        public string MEALTYPE { get; set; }

        public int COUPONNUMBER { get; set; }

        /*public string DATEOFREDEMPTION { get; set; }*/
        public DateTime DATEOFREDEMPTION { get; set; }

        public string DAYOFREDEMPTION { get; set; }


    }
}

namespace BookMyMeal.Models
{
    public class CouponRedemptionLogs
    {

        public int COUPONID { get; set; }

        public int EMPLOYEEID { get; set; }

        public string EMPLOYEENAME { get; set; }

        public int ORDERID { get; set; }

        public string MEALTYPE { get; set; }

        public int COUPONNUMBER { get; set; }

        public string REDEEMDATE { get; set; }

        public string REDEEMDAY { get; set; }

        public string REDEEMSTATUS { get; set; }

    }
}

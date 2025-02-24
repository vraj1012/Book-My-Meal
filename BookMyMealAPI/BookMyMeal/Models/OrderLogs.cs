namespace BookMyMeal.Models
{
    public class OrderLogs
    {
        public int ORDERID { get; set; }

        public int EMPLOYEEIDBOOKEDBY { get; set; }

        public int EMPLOYEEIDBOOKEDFOR { get; set; }

        public string ORDERTYPE { get; set; }

        public string MEALTYPE { get; set; }

        public string BOOKINGDATE { get; set; }

        public DateTime BOOKINGINITIALDATE { get; set; }

        public DateTime BOOKINGENDDATE { get; set; }

        public double AMOUNT { get; set; }

        public string ORDERSTATUS { get; set; }

    }
}

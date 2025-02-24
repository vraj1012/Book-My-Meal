using BookMyMeal.Models;

namespace BookMyMeal.Repository.Interface
{
    public interface ICouponRedemptionLogs
    {

        List<CouponRedemptionLogs> GetRedeemedCouponDetails(int employeeID);

    }
}

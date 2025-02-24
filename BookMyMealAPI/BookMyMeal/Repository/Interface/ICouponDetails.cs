using BookMyMeal.Models;

namespace BookMyMeal.Repository.Interface
{
    public interface ICouponDetails
    {

        List<CouponDetails> GetCouponDetailsByEmployeeId(int employeeID);

        void RedeemCoupon(int couponNumber);

    }
}

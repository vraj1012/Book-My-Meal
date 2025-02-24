using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BookMyMeal.Models;
using BookMyMeal.Repository;
using BookMyMeal.Repository.Interface;
using Microsoft.AspNetCore.Authorization;

namespace BookMyMeal.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CouponDetailsController : ControllerBase
    {

        private readonly ICouponDetails _couponDetails;

        public CouponDetailsController(ICouponDetails couponDetails)
        {
            _couponDetails = couponDetails;
        }

        [HttpGet("{employeeID}")]
        public ActionResult GetCouponDetailsByEmployeeId(int employeeID)
        {
            var data = _couponDetails.GetCouponDetailsByEmployeeId(employeeID);
            return Ok(data);
        }

        [HttpPost("{couponNumber}")]
        public ActionResult RedeemCoupon(int couponNumber)
        {
            _couponDetails.RedeemCoupon(couponNumber);
            return Ok();
        }

    }
}

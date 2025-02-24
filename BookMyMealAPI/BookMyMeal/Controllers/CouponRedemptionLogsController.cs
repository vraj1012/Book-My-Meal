using BookMyMeal.Repository.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookMyMeal.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CouponRedemptionLogsController : ControllerBase
    {

        private readonly ICouponRedemptionLogs _couponRedemptionLogs;

        public CouponRedemptionLogsController(ICouponRedemptionLogs couponRedemptionLogs)
        {
            _couponRedemptionLogs = couponRedemptionLogs;
        }

        [HttpGet("{employeeID}")]
        public ActionResult GetRedeemedCouponDetails(int employeeID)
        {
            var data = _couponRedemptionLogs.GetRedeemedCouponDetails(employeeID);
            return Ok(data);
        }
    }
}

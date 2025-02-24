using BookMyMeal.Repository.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookMyMeal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingCalendarController : ControllerBase
    {

        private readonly IBookingCalendar _bookingDates;

        public BookingCalendarController(IBookingCalendar bookingDates)
        {
            _bookingDates = bookingDates;
        }

        [HttpGet("{employeeID}")]
        public ActionResult GetBookingDates(int employeeID)
        {
            var data = _bookingDates.GetBookingDates(employeeID);
            return Ok(data);
        }

        [HttpGet("StartDate/{employeeID}")]
        public ActionResult GetBookingStartDate(int employeeID)
        {
            var data = _bookingDates.GetBookingStartDate(employeeID);
            return Ok(new {start = data.ToString("yyyy-MM-dd")});
        }

        [HttpGet("EndDate/{employeeID}")]
        public ActionResult GetBookingEndDate(int employeeID)
        {
            var data = _bookingDates.GetBookingEndDate(employeeID);
            return Ok(new { end = data.ToString("yyyy-MM-dd") });
        }


    }
}

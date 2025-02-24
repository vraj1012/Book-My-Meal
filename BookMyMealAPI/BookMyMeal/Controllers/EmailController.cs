using BookMyMeal.Models;
using BookMyMeal.Repository.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookMyMeal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {

        //INJECTING EMAIL SERVICES
        private readonly IEmail _email;

        public EmailController(IEmail email)
        {
            _email = email;
        }


        [HttpPost("NotifyAdminForOrderCancellation")]
        public ActionResult NotifyEmail()
        {
            SendEmail sendEmail = new SendEmail();
            sendEmail.ToEmail = "vrajchowdhary@gmail.com";
            sendEmail.Subject = "Order Cancelled";
            sendEmail.Body = "Employee Cancelled Order.";

            _email.SendEmail(sendEmail);
            return Ok();
        }

        [HttpPost("NotifyEmployeeOrderBooking")]
        public ActionResult NotifyBookingEmail()
        {
            SendEmail sendEmail = new SendEmail();
            sendEmail.ToEmail = "vrajchowdhary@gmail.com";
            sendEmail.Subject = "Order Booked By Admin";
            sendEmail.Body = "Admin placed an order.";

            _email.SendEmail(sendEmail);
            return Ok();
        }
    }
}

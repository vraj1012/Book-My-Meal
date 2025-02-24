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
    public class OrderLogsController : ControllerBase
    {

        private readonly IOrderLogs _orderLogs;

        public OrderLogsController(IOrderLogs orderLogs)
        {
            _orderLogs = orderLogs;
        }


        [HttpPost("PlaceOrderBulk")]
        public ActionResult PlaceOrderBulk(OrderLogs ordD)
        {
            _orderLogs.PlaceOrderBulk(ordD);
            return Ok(ordD);
        }

        [HttpPost("PlaceOrderSingle")]
        public ActionResult PlaceOrderSingle(OrderLogs ordD)
        {
            _orderLogs.PlaceOrderSingle(ordD);
            return Ok(ordD);
        }


        [HttpGet("{employeeID}")]
        public ActionResult GetOrderLogsByEmployeeId(int employeeID)
        {
            var data = _orderLogs.GetOrderLogsByEmployeeId(employeeID);
            return Ok(data);
        }

        [HttpPut("{orderID}")]
        public ActionResult CancelOrder([FromRoute] int orderID)
        {
            _orderLogs.CancelOrder(orderID);
            return Ok();
        }
    }
}

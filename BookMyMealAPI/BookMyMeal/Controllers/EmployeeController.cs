using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BookMyMeal.Models;
using BookMyMeal.Repository;
using BookMyMeal.Repository.Interface;
using Microsoft.AspNetCore.Authorization;

namespace BookMyMeal.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        private readonly IEmployee _emp;

        public EmployeeController(IEmployee emp)
        {
            _emp = emp;
        }

        [HttpGet]
        public ActionResult GetEmployeeData()
        {
            var data = _emp.GetEmployeeData();
            return Ok(data);

        }

        [HttpGet("{employeeID}")]
        public ActionResult GetEmployeeDataById(int employeeID)
        {
            var data = _emp.GetEmployeeDataById(employeeID);
            return Ok(data);
        }

        [HttpPost]
        public ActionResult InsertEmployeeData(Employee emp)
        {
            _emp.InsertEmployeeData(emp);
            return Ok(emp);
        }

        [HttpPut("{newPassword}")]
        public ActionResult UpdateEmployeeData([FromBody] Employee emp,[FromRoute] string newPassword)
        {

            _emp.UpdateEmployeeData(emp,newPassword);
            return Ok(emp);
        }

        [HttpDelete("{employeeID}")]
        public ActionResult DeleteEmployeeData([FromRoute] int employeeID)
        {
            _emp.DeleteEmployeeData(employeeID);
            return Ok();
        }
    }
}

using BookMyMeal.Models;
using BookMyMeal.Repository.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BookMyMeal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginCredentialsController : ControllerBase
    {

        private readonly ILoginCredentials _credentials;
        private readonly IConfiguration _configuration;
        public LoginCredentialsController(ILoginCredentials credentials, IConfiguration configuration)
        {
            _credentials = credentials;
            _configuration = configuration; 
        }

        //Method to generate token
        private string GenerateToken(LoginCredentials lc)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            int employeeid = _credentials.GetEmpIdByLoginCredentials(lc.EMAIL);

            var claims = new[]
            {
                //pass the employeeid stored
                new Claim("EMPLOYEEID",employeeid.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
          };

            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(30), // Adjust the expiry time as needed
                signingCredentials: credentials
            );

            //Create and return the token

            return new JwtSecurityTokenHandler().WriteToken(token);

        }

        //Login Method
        [AllowAnonymous] // To bypass the authentication
        [HttpPost]
        public ActionResult VerifyLoginCredentials(LoginCredentials credentials)
        {

            //Verifying the login credentials entered by the user
            bool verifyResult = _credentials.VerifyLoginCredentials(credentials);

            // If the credentials are valid it will generate token
            if (verifyResult)
            {
                var generatedToken = GenerateToken(credentials);
                _credentials.StoreTokenData(generatedToken, credentials);

                return Ok(generatedToken);
            
            }
            else
            {
                return BadRequest();
            }
        }

    }
}

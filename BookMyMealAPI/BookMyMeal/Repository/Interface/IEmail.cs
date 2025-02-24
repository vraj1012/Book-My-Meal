using BookMyMeal.Models;

namespace BookMyMeal.Repository.Interface
{
    public interface IEmail
    {
        
        void SendEmail(SendEmail sendmail);
    }
}

using BookMyMeal.Models;

namespace BookMyMeal.Repository.Interface
{
    public interface ILoginCredentials
    {

        bool VerifyLoginCredentials(LoginCredentials credentials);

        void StoreTokenData(string tokenData,LoginCredentials credentials);

        int GetEmpIdByLoginCredentials(string email);
    }
}

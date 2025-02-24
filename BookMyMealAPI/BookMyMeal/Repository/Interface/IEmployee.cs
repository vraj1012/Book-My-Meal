using BookMyMeal.Models;

namespace BookMyMeal.Repository.Interface
{
    public interface IEmployee
    {
        List<Employee> GetEmployeeData();
        List<Employee> GetEmployeeDataById(int employeeID);
        void InsertEmployeeData(Employee emp);
        void UpdateEmployeeData(Employee emp,string newPassword);
        void DeleteEmployeeData(int employeeID);

    }
}

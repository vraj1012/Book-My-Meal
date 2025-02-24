using BookMyMeal.Models;

namespace BookMyMeal.Repository.Interface
{
    public interface IOrderLogs
    {

        void PlaceOrderBulk(OrderLogs ordD);

        void PlaceOrderSingle(OrderLogs ordD);

        List<OrderLogs> GetOrderLogsByEmployeeId(int employeeID);

        void CancelOrder(int orderID);

    }
}

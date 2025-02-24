using BookMyMeal.Models;

namespace BookMyMeal.Repository.Interface
{
    public interface IBookingCalendar
    {

        List<BookingCalendar> GetBookingDates(int employeeID);

        public DateTime GetBookingStartDate(int employeeID);

        public DateTime GetBookingEndDate(int employeeID);

    }
}

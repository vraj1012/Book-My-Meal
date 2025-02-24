# Book My Meal

## About the Project
**Book My Meal** is an employee meal booking portal that allows employees to book their meals in advance. It provides two types of meal booking options:
1. **Quick Meal Booking** – For instant meal reservations for the next day.
2. **Bulk Meal Booking** – For group bookings with specific constraints.

Additionally, the system features a **coupon redemption mechanism** where employees can redeem meal coupons for their bookings.

---

## Features
- Quick Meal Booking  
- Bulk Meal Booking with Constraints  
- Coupon Redemption System  
- Employee Dashboard   

---

## Project Screenshots

### 1. **Login Page**
   - Initially when the user visits the website they need to enter their login credentials and this will be verified.
   -  If the entered credentials are valid the user will be redirected to the home page.

   ![Login Page](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/1login.jpg)
 
2. **Sign Up Page**
   - The user registers themselves on this page to access ‘Book My Meal’ functionalities. Consequently, the entered email and password will be used as login credentials.

   ![Sign Up Page](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/2Signup.jpg)

3. **Change Password**
   - Here the registered employee can change their current password if they want to.
   - They need to enter their username,
current password, new password and confirm the new password to update the existing password.

   ![Change Password](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/3ChangePassword.jpg)

4. **Home Page**
   - As soon as the employee logs in they are redirected to home page where a calendar is displayed  with two buttons beneath it one to place bulk meal order and other one to place quick meal order.

   ![Home Page](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/4HomePage.jpg)

5. **Quick Meal Booking**
   - Using the quick meal booking option the employee can place an order in advance for tomorrow and choose the type of meal that is either lunch, dinner or both.
        
   ![Quick Meal Booking](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/5QuickMealBooking.jpg)

6. **Bulk Meal Booking**
   - While using the bulk meal booking option the employee can place an order for a range of date (3 months from current date) and choose the type of meal that is either lunch, dinner or both.

   ![Bulk Meal Booking](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/6BulkMealBooking.jpg)
        
7. **Order Logs**
   - All of the orders which are placed till now by that employee will be shown on this page and the employee can cancel an order only if they cancel the order on the same day as that of booking.

   ![Order Logs](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/7OrderLogs.jpg)

8. **Coupon Details**
   - After placing the order the coupons will be generated automatically for that specific order and the employee will be able to redeem the coupon as per the date of redemption.

   ![Coupon Details](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/8CouponDetails.jpg)

9. **Redeem Coupon**
   - After clicking on redeem coupon button it will show a pop up to redeem the coupon if the coupon number and the day of redemption matches todays date then the employee will be able to redeem the coupon.

   ![Redeem Coupon](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/9RedeemCoupon.jpg)

10. **Redeemed Coupon Details**
   - After the redemption of coupon the coupon details will be displayed only for a specific amount of time and after that the coupon expires or the employee can directly click on ok button to redirect to home page . Moreover, as soon as the employee redeems the coupon it will be deleted from the list of coupons.

   ![Redeemed Coupon Details](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/10RedeemedCouponDetails.jpg)

11. **Updated Calendar**
   - After placing the order the calendar also shows the booking dates of latest placed order.

   ![Updated Calendar](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/11UpdatedCalendar.jpg)

12. **Logout Dropdown**
   - Employee can logout by clicking on user dropdown menu and click on logout button.

   ![Logout Dropdown](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/12LogoutDropdown.jpg)  

13. **Logout Confirmation**
   - After clicking on logout button employee will have to give confirmation to logout and after giving the confirmation they will be redirected back to the login page.

   ![Logout Confirmation](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/13LogoutConfirmation.jpg)  

14. **Privacy Policy**
   - Static page with data of privacy policy.
  
   ![Privacy Policy](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/14PrivacyPolicy.jpg)

15.**About Us**
   - Static page with data of about us page.

   ![About Us](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/15AboutUs.jpg)

16. **Terms and Conditions**
   - Static page with data of terms and conditions page.

   ![Terms and Conditions](https://github.com/vraj1012/Book-My-Meal/blob/main/BookMyMealAppImages/16Terms%26Conditions.jpg)
   
---

## System Design

This section provides an overview of the system architecture through diagrams.

### 1. Entity-Relationship (ER) Diagram  
The ER diagram represents the database structure, showing relationships between entities.

![ER Diagram](https://github.com/vraj1012/Book-My-Meal/blob/main/Diagrams/VRAJBOOKMYMEALFINALERDIAGRAM.png)

### 2. UML Diagram  
The UML diagram describes the system’s structure and workflow.

![UML Diagram](https://github.com/vraj1012/Book-My-Meal/blob/main/Diagrams/VRAJBOOKMYMEALCLASSUML.png)

### 3. Use Case Diagram  
The Use Case diagram illustrates different user interactions with the system.

![Use Case Diagram](https://github.com/vraj1012/Book-My-Meal/blob/main/Diagrams/VRAJBOOKMYMEALUSECASE.png)

---

## Tech Stack
- **Frontend:** Angular
- **Backend:** .NET
- **Database:** Microsoft SQL Server (MSSQL) 

---

## Coupon Redemption Flow
### 1. Employees log in to the system.
### 2. Choose either Quick Meal Booking or Bulk Meal Booking.
### 3. Coupons are generated. (Note : Employee can only redeem coupon for present day.)
### 4. Redeem coupons if available.
### 5. Cancellation of booking is also available.

---

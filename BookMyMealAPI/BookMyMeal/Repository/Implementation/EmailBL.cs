using BookMyMeal.Models;
using BookMyMeal.Repository.Interface;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;


namespace BookMyMeal.Repository.Implementation
{
    public class EmailBL : IEmail
    {
        //INJECTING EMAIL SETTINGS
        private readonly EmailSettings emailSettings;

        public EmailBL(IOptions<EmailSettings> options)
        {
            this.emailSettings = options.Value;
        }

        public void SendEmail(SendEmail sendemail)
        {

            var email = new MimeMessage();
            //FROM EMAIL
            email.Sender = MailboxAddress.Parse(emailSettings.Email);

            //TO EMAIL (MULTIPLE TO EMAIL WE CAN USE FOR LOOP)
            email.To.Add(MailboxAddress.Parse(sendemail.ToEmail));

            //SUBJECT
            email.Subject = sendemail.Subject;

            //BODY
            var builder = new BodyBuilder();
            builder.HtmlBody = sendemail.Body;
            email.Body = builder.ToMessageBody();

            //FOR SENDING MAIL WE WILL USE SMTP CLIENT
            using var smtp = new SmtpClient();

            //CONNECT SMTP CLIENT (HOST,PORT NUMBER,SecureSocketOptions.StartTls)
            smtp.Connect(emailSettings.Host, emailSettings.Port, SecureSocketOptions.StartTls);

            //AUTHENTICATE SMTP USING OUR CREDENTIALS (FROM EMAIL,)
            smtp.Authenticate(emailSettings.Email, emailSettings.Password);

            // smtp.Send(email);
            smtp.Send(email);

            //DISCONNECT SMTP
            smtp.Disconnect(true);

        }
    }
}

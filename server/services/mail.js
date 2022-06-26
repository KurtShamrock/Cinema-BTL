require('dotenv').config();
import { OAuth2Client } from 'google-auth-library';
import nodemailer from 'nodemailer';

const myOAuth2Client = new OAuth2Client(
  process.env.GOOGLE_MAILER_CLIENT_ID,
  process.env.GOOGLE_MAILER_CLIENT_SECRET
);
myOAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
});
export default class MailService {
  static async sendMail(destination, subject, content) {
    try {
      // Lấy thông tin gửi lên từ client qua body
      // const { email, subject, content } = req.body;
      // if (!email || !subject || !content)
      //   throw new Error('Please provide email, subject and content!');
      /**
       * Lấy AccessToken từ RefreshToken (bởi vì Access Token cứ một khoảng thời gian ngắn sẽ bị hết hạn)
       * Vì vậy mỗi lần sử dụng Access Token, chúng ta sẽ generate ra một thằng mới là chắc chắn nhất.
       */
      const myAccessTokenObject = await myOAuth2Client.getAccessToken();
      // Access Token sẽ nằm trong property 'token' trong Object mà chúng ta vừa get được ở trên
      const myAccessToken = myAccessTokenObject?.token;
      // Tạo một biến Transport từ Nodemailer với đầy đủ cấu hình, dùng để gọi hành động gửi mail
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.ADMIN_EMAIL_ADDRESS,
          clientId: process.env.GOOGLE_MAILER_CLIENT_ID,
          clientSecret: process.env.GOOGLE_MAILER_CLIENT_SECRET,
          refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
          accessToken: myAccessToken,
        },
      });
      // mailOption là những thông tin gửi từ phía client lên thông qua API
      const mailOptions = {
        from: `BTL Cinemas 📽️ <${process.env.ADMIN_EMAIL_ADDRESS}>`,
        to: destination, // Gửi đến ai?
        subject: subject, // Tiêu đề email
        html: `<h3>${content}</h3>`, // Nội dung email
      };
      // Gọi hành động gửi email
      const info = await transport.sendMail(mailOptions);
      // Không có lỗi gì thì trả về success
      // res.status(200).json({ message: 'Email sent successfully.' });
      console.log(info);
    } catch (error) {
      // Có lỗi thì các bạn log ở đây cũng như gửi message lỗi về phía client
      console.log(error);
      // res.status(500).json({ errors: error.message });
    }
  }
}

// Run application

// export default class MailService {
//   static async sendMail(destination, subject, content) {
//     const transporter = nodemailer.createTransport(config);
//     try {
//       const option = {
//         from: `BTL Cinemas 📽️ <${process.env.EMAIL_ACC}>`,
//         to: destination,
//         subject,
//         html: content,
//       };
//       const info = await transporter.sendMail(option);
//       console.log(info);
//       return true;
//     } catch (err) {
//       console.log(err);
//       return false;
//     } finally {
//       transporter.close();
//     }
//   }

import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Outlook, SendGrid, etc.
  auth: {
    user: "lixmihei@gmail.com", // Your email address
    pass: "igaa cxkm ctgz nwyd", // Use an app password if using Gmail
  },
});

// Function to send verification email
export const sendVerificationEmail = (email, token) => {
  const verificationUrl = `http://localhost:5173/verify/${token}`; // Adjust the URL as needed

  const mailOptions = {
    from: "your-email@gmail.com", // sender address
    to: email, // receiver's address
    subject: "Email Verification for Your Account",
    text: `Please click the following link to verify your email address: ${verificationUrl}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email:", err);
    } else {
      console.log("Verification email sent:", info.response);
    }
  });
};

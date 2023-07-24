const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001; // Replace with your desired port

// Middleware to parse incoming JSON data
app.use(express.json());

// API endpoint for sending emails
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a Nodemailer transporter with your email service settings
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Replace with your email service (e.g., Gmail, Outlook)
    auth: {
      user: 'your-email@gmail.com', // Replace with your email address
      pass: 'your-email-password', // Replace with your email password
    },
  });

  // Email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com', // Replace with the recipient's email address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

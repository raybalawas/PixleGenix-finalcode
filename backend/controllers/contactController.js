const nodemailer = require("nodemailer");
// controllers/contactController.js\
const Contact = require("../models/Contact");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newContact = new Contact({ name, email, phone, message });
    console.log("Form Data Received:", req.body);
    await newContact.save();

    // Email setup (use your own email and app password here)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or another provider or SMTP config
      auth: {
        user: "raybalawas@gmail.com", // Replace with your Gmail
        pass: "cqfflnhmkedpheha", // Replace with App Password
      },
    });

    const mailOptions = {
      from: `"PixelGenix Website" <raybalawas@gmail.com>`,
      to: "rahulyadav201818@gmail.com", // Replace with your receiving email
      subject: `📩 New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };
    await transporter
      .sendMail(mailOptions)
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      });

    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

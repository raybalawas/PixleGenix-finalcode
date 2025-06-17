const nodemailer = require("nodemailer");
// controllers/contactController.js\
const Contact = require("../models/Contact");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    console.log("Form Data Received:", req.body);
    // Check if the request body is empty
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Request body cannot be empty" });
    }
    // Validate input
    if (!name || !email || !message) {
      let fieldErrors = {};
      if (!name) fieldErrors.name = "Name is required";
      if (!email) fieldErrors.email = "Email is required";
      if (!message) fieldErrors.message = "Message is required";
      return res.status(400).json({ error: "Validation failed", fieldErrors });
    }

    // Optional: Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({
          fieldErrors: { email: "Please provide a valid email address" },
        });
    }

    await Contact.create({
      name,
      email,
      phone,
      message,
    });
    console.log("Contact form data saved to database");
    
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or another provider or SMTP config
      auth: {
        user: "raybalawas@gmail.com", // Replace with your Gmail
        pass: "cqfflnhmkedpheha", // Replace with App Password
      },
    });

    const mailOptions = {
      from: `"PixelGenix Website" <raybalawas@gmail.com>`,
      to: "rahulyadav201818@gmail.com",
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

    res.status(200).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// controllers/contactController.js
const Contact = require("../models/Contact");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

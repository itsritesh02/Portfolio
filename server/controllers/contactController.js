import Contact from "../models/Contact.js";
import { sendContactEmail } from "../services/emailService.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save message to MongoDB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Send email notification
    await sendContactEmail({
      name,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

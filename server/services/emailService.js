import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactEmail = async ({ name, email, subject, message }) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,

    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>New Portfolio Contact</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 30px;
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
          "
        >
          <div
            style="
              max-width: 600px;
              margin: auto;
              background: #ffffff;
              padding: 30px;
              border-radius: 10px;
            "
          >
            <h2>New Contact Message</h2>

            <p>
              <strong>Name:</strong> ${name}
            </p>

            <p>
              <strong>Email:</strong> ${email}
            </p>

            <p>
              <strong>Subject:</strong> ${subject}
            </p>

            <div
              style="
                margin-top: 20px;
                padding: 15px;
                background: #f5f5f5;
                border-radius: 8px;
              "
            >
              <strong>Message:</strong>

              <p style="white-space: pre-line;">
                ${message}
              </p>
            </div>

            <hr style="margin: 25px 0;" />

            <p style="font-size: 13px; color: #777;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </body>
      </html>
    `,
  });
};

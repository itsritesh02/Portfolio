import { useState } from "react";
import axios from "axios";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      );

      if (response.data.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">

        <div className="section-heading">
          <p>CONTACT</p>

          <h2>
            Let's work <span>together</span>
          </h2>
        </div>

        <div className="contact-grid">

          {/* LEFT */}
          <div className="contact-info">

            <div className="contact-label">
              GET IN TOUCH
            </div>

            <h3>
              Have a project <span>in mind?</span>
            </h3>

            <p>
              I'm always open to discussing new projects, opportunities,
              collaborations and interesting ideas. Let's build something
              meaningful together.
            </p>

            <div className="contact-details">

              <div className="contact-detail">
                <div className="contact-detail-icon">@</div>

                <div>
                  <span>Email</span>

                  <a href="mailto:itsritesh02@gmail.com">
                    itsritesh02@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  ⌖
                </div>

                <div>
                  <span>Location</span>

                  <strong>
                    Zirakpur, Punjab
                  </strong>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  ✓
                </div>

                <div>
                  <span>Availability</span>

                  <strong>
                    Open to opportunities
                  </strong>
                </div>
              </div>

            </div>

            <div className="contact-socials">

              <a
                href="https://github.com/itsritesh02"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/ritesh-kumar-2707b2413/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="contact-form-header">
              <span>
                START A CONVERSATION
              </span>

              <p>
                Tell me a little about your project.
              </p>
            </div>

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project discussion"
                value={formData.subject}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn primary-btn submit-btn"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : "Send Message ↗"}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
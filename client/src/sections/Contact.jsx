import { useState } from "react";

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
      await sendContactMessage(formData);

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
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Failed to send message.",
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

          <div className="contact-info">

            <h3>Have a project in mind?</h3>

            <p>
              I'm always open to discussing new projects, opportunities
              and ideas. Feel free to send me a message.
            </p>

            <div className="contact-details">

              <div className="contact-detail">
                <span>Email</span>
                <a href="mailto:itsritesh02@gmail.com">
                  itsritesh02@gmail.com
                </a>
              </div>

              <div className="contact-detail">
                <span>Location</span>
                <strong>Punjab, India</strong>
              </div>

              <div className="contact-detail">
                <span>Availability</span>
                <strong>Open to opportunities</strong>
              </div>

            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/itsritesh02"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ritesh-kumar-2707b2413/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">Name</label>

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
                <label htmlFor="email">Email</label>

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
              <label htmlFor="subject">Subject</label>

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
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status.message && (
              <div
                className={`form-status ${status.type}`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn primary-btn submit-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Ritesh<span>.</span>
          </a>

          <p>
            MERN Stack Developer focused on building modern,
            scalable and user-friendly web applications.
          </p>
        </div>

        <div className="footer-navigation">
          <span className="footer-heading">Navigation</span>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-connect">
          <span className="footer-heading">Connect</span>

          <div className="footer-socials">
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

            <a href="mailto:itsritesh02@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>
            © {currentYear} Ritesh Kumar. All rights reserved.
          </p>

          <a href="#home" className="back-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
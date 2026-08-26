import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Ritesh Kumar
          </h1>

          <h2>
            MERN Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I’m a MERN Stack Developer with 2 years of experience
            building responsive, scalable, and user-friendly web
            applications using React.js, Node.js, Express.js, and MongoDB.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a
              href="/resume/Ritesh-Kumar-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              Download Resume
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>

          </div>

          <div className="hero-socials">

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

        <div className="hero-image-wrapper">
          <div className="hero-image">
            <div className="code-icon">
              &lt;/&gt;
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
import { useEffect, useState } from "react";
import profile from "../assets/images/ritesh.jpg";
import "./Hero.css";

const Hero = () => {
  const roles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "WordPress Developer",
    "React.js Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section id="home" className="rk-hero">
      <div className="container rk-hero-container">

        {/* =================================
            HERO CONTENT
        ================================= */}

        <div className="rk-hero-content">

          <p className="rk-hero-intro">
            Hello, I'm
          </p>

          <h1 className="rk-hero-name">
            Ritesh Kumar
          </h1>

          {/* =================================
              ROLE
          ================================= */}

          <div className="rk-role-box">
            <h2
              key={roleIndex}
              className="rk-hero-title"
            >
              {roles[roleIndex]}
            </h2>
          </div>

          {/* =================================
              DESCRIPTION
          ================================= */}

          <p className="rk-hero-description">
            I’m a MERN Stack Developer with hands-on professional experience in building responsive, scalable, and user-focused web applications using React.js, Node.js, Express.js, and MongoDB. I also specialize in developing and customizing modern WordPress websites, delivering clean, high-performance digital solutions tailored to business needs.

          </p>

          {/* =================================
              BUTTONS
          ================================= */}

          <div className="rk-hero-buttons">

            <a
              href="#projects"
              className="rk-btn rk-primary-btn"
            >
              View Projects
            </a>

            <a
              href="/resume/Ritesh_Resume.pdf"
              download="Ritesh-Kumar-Resume.pdf"
              className="rk-btn rk-secondary-btn"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="rk-btn rk-secondary-btn"
            >
              Contact Me
            </a>

          </div>

          {/* =================================
              SOCIAL LINKS
          ================================= */}

          <div className="rk-hero-socials">

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

        {/* =================================
            PROFILE IMAGE
        ================================= */}

        <div className="rk-profile-wrapper">

          <div className="rk-profile-frame">

            <img
              src={profile}
              alt="Ritesh Kumar - MERN Stack Developer"
              className="rk-profile-image"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
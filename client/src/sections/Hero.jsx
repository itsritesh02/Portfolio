import { useEffect, useState } from "react";
import profile from "../assets/images/ritesh.jpg";
import "./Hero.css";

const Hero = () => {
  const roles = [
    "MERN Stack Developer",
    "React.js Developer",
    "Full Stack Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="rk-hero">
      <div className="container rk-hero-container">

        {/* =========================
            HERO CONTENT
        ========================= */}
        <div className="rk-hero-content">

          <p className="rk-hero-intro">
            Hello, I'm
          </p>

          <h1 className="rk-hero-name">
            Ritesh Kumar
          </h1>

          {/* =========================
              TYPEWRITER TITLE
          ========================= */}
          <h2 className="rk-hero-title">
            <span className="rk-typewriter">
              {text}
            </span>

            <span className="rk-cursor">|</span>
          </h2>

          <p className="rk-hero-description">
            I’m a MERN Stack Developer with 2 years of experience
            building responsive, scalable, and user-friendly web
            applications using React.js, Node.js, Express.js, and MongoDB.
          </p>

          {/* =========================
              BUTTONS
          ========================= */}
          <div className="rk-hero-buttons">

            <a
              href="#projects"
              className="rk-btn rk-primary-btn"
            >
              View Projects
            </a>

            <a
              href="/resume/RMK.pdf"
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

          {/* =========================
              SOCIAL LINKS
          ========================= */}
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

        {/* =========================
            PROFILE IMAGE
        ========================= */}
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
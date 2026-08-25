import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo">
          Ritesh<span>.</span>
        </a>

        <button
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={handleLinkClick}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>Skills</a>
          </li>
          <li>
            <a href="#experience" onClick={handleLinkClick}>Experience</a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>Projects</a>
          </li>
          <li>
            <a href="#education" onClick={handleLinkClick}>Education</a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import { useState, useEffect } from "react";
import { FaDownload, FaBars, FaTimes, FaCode } from "react-icons/fa";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-icon">
            <FaCode />
          </div>
          <div className="brand-text">
            <span className="brand-name">{PERSONAL_INFO.name}</span>
            <span className="brand-tag">Java Full Stack Dev</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li><a href="#about" className="nav-item">About</a></li>
            <li><a href="#skills" className="nav-item">Skills</a></li>
            <li><a href="#projects" className="nav-item">Projects</a></li>
            <li><a href="#experience" className="nav-item">Experience</a></li>
            <li><a href="#education" className="nav-item">Education</a></li>
            <li><a href="#certifications" className="nav-item">Certifications</a></li>
            <li><a href="#contact" className="nav-item">Contact</a></li>
          </ul>

          <a
            href={PERSONAL_INFO.resumePath}
            download={PERSONAL_INFO.resumeFilename}
            className="navbar-resume-btn"
            title="Download PDF Resume"
          >
            <FaDownload /> Resume
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <nav className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav-list">
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
              <li><a href="#education" onClick={closeMenu}>Education</a></li>
              <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
            <div className="mobile-menu-actions">
              <a
                href={PERSONAL_INFO.resumePath}
                download={PERSONAL_INFO.resumeFilename}
                className="btn-primary full-width"
                onClick={closeMenu}
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


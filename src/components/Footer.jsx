import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaCode } from "react-icons/fa";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top-row">
          <div className="footer-brand-block">
            <div className="footer-brand">
              <FaCode className="footer-code-icon" />
              <span className="footer-brand-name">{PERSONAL_INFO.name}</span>
            </div>
            <p className="footer-tagline">
              Java Full Stack Developer • BCA Student @ Bishop Heber College
            </p>
          </div>

          <div className="footer-social-row">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="footer-social-link"
              aria-label="Email Address"
            >
              <FaEnvelope />
            </a>

            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              title="Back to Top"
              aria-label="Back to top"
            >
              <FaArrowUp /> Top
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
          </p>
          <div className="footer-nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


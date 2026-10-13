import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaJava, FaReact, FaServer, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* Left Column: Hero Copy & Actions */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="name-gradient">{PERSONAL_INFO.name}</span>
          </h1>

          <h2 className="hero-subtitle">
            {PERSONAL_INFO.title}
          </h2>

          <p className="hero-description">
            Passionate software developer focused on building robust, scalable full-stack
            web applications. Specialized in backend engineering with{" "}
            <strong className="text-highlight">Java & Spring Boot</strong>, modern interfaces
            with <strong className="text-highlight">React.js</strong>, and structured data
            persistence with <strong className="text-highlight">MySQL & SQL Server</strong>.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects <FaArrowRight />
            </a>

            <a
              href={PERSONAL_INFO.resumePath}
              download={PERSONAL_INFO.resumeFilename}
              className="btn-secondary"
            >
              <FaDownload /> Download Resume
            </a>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-social-row">
            <span className="social-label">Connect:</span>
            <div className="social-links-pills">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <FaGithub /> <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <FaLinkedin /> <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="social-pill"
                aria-label="Send Email"
                title="Send Email"
              >
                <FaEnvelope /> <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Developer Architecture Snapshot Card */}
        <div className="hero-visual">
          <div className="dev-card">
            <div className="dev-card-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="window-title">DeveloperProfile.java</span>
            </div>

            <div className="dev-card-body">
              <div className="code-block">
                <span className="code-keyword">public class</span>{" "}
                <span className="code-class">Amruthavarshini</span> &#123;
                <div className="code-indent">
                  <span className="code-comment">// Core Specialization</span>
                  <div>
                    <span className="code-type">String</span> role ={" "}
                    <span className="code-string">"Java Full Stack Developer"</span>;
                  </div>
                  <div>
                    <span className="code-type">String</span> education ={" "}
                    <span className="code-string">"BCA • Bishop Heber College (2024-2027)"</span>;
                  </div>
                  <div>
                    <span className="code-type">String</span> internship ={" "}
                    <span className="code-string">"Full Stack Dev Intern @ Infyro"</span>;
                  </div>
                </div>
                &#125;
              </div>

              <div className="hero-metric-grid">
                <div className="metric-box">
                  <span className="metric-number">3</span>
                  <span className="metric-text">Featured Projects</span>
                </div>
                <div className="metric-box">
                  <span className="metric-number">1</span>
                  <span className="metric-text">Industry Internship</span>
                </div>
                <div className="metric-box">
                  <span className="metric-number">21</span>
                  <span className="metric-text">Certifications</span>
                </div>
              </div>

              <div className="hero-tech-pills">
                <span className="tech-badge-mini"><FaJava /> Java</span>
                <span className="tech-badge-mini"><SiSpringboot /> Spring Boot</span>
                <span className="tech-badge-mini"><FaReact /> React</span>
                <span className="tech-badge-mini"><SiMysql /> MySQL</span>
                <span className="tech-badge-mini"><FaServer /> REST APIs</span>
                <span className="tech-badge-mini"><FaDatabase /> JPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


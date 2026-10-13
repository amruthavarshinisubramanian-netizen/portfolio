import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaSearchPlus, FaLayerGroup } from "react-icons/fa";
import { PROJECTS_DATA } from "../data/portfolioData";
import ImageModal from "./ImageModal";

export default function Projects() {
  const [activeModalImage, setActiveModalImage] = useState(null);
  // Track which screenshot is currently selected in the card view for projects with multiple screenshots
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState({
    pulsehr: "main",
    freelancehub: "main",
    "blood-donation": "main"
  });

  const handleOpenModal = (src, title, caption) => {
    setActiveModalImage({ src, title, caption });
  };

  const handleCloseModal = () => {
    setActiveModalImage(null);
  };

  const handleSelectScreenshot = (projectId, type) => {
    setSelectedScreenshotIndex((prev) => ({
      ...prev,
      [projectId]: type
    }));
  };

  return (
    <section className="section-container" id="projects">
      <div className="section-header">
        <span className="section-subheading">Featured Work</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-description">
          Verified software projects highlighting full-stack Java/Spring Boot development,
          Node.js/MSSQL architectures, and collaborative team delivery.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        {PROJECTS_DATA.map((project, index) => {
          const isSelectedSecondary =
            selectedScreenshotIndex[project.id] === "secondary" && project.screenshots.secondary;

          const activeDisplayImage = isSelectedSecondary
            ? project.screenshots.secondary
            : project.screenshots.main;

          return (
            <article key={project.id} className="project-card">
              {/* Screenshot Presentation Area */}
              <div className="project-media-area">
                <div
                  className="main-screenshot-frame"
                  onClick={() =>
                    handleOpenModal(
                      activeDisplayImage.src,
                      `${project.title} — ${project.subtitle}`,
                      activeDisplayImage.caption
                    )
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleOpenModal(
                        activeDisplayImage.src,
                        `${project.title} — ${project.subtitle}`,
                        activeDisplayImage.caption
                      );
                    }
                  }}
                  title="Click to view full-resolution screenshot"
                >
                  <img
                    src={activeDisplayImage.src}
                    alt={activeDisplayImage.caption}
                    className="main-screenshot-img"
                    loading="lazy"
                  />
                  <div className="screenshot-zoom-overlay">
                    <span className="zoom-pill">
                      <FaSearchPlus /> View Fullscreen
                    </span>
                  </div>
                </div>

                {/* Secondary Preview Area: Shown ONLY for projects with a secondary screenshot */}
                {project.screenshots.secondary ? (
                  <div className="secondary-preview-strip">
                    <span className="gallery-label">
                      <FaLayerGroup /> Screenshots (2):
                    </span>
                    <div className="thumbnails-group">
                      <button
                        type="button"
                        className={`thumb-btn ${!isSelectedSecondary ? "thumb-active" : ""}`}
                        onClick={() => handleSelectScreenshot(project.id, "main")}
                        title="Main Dashboard View"
                      >
                        <img
                          src={project.screenshots.main.src}
                          alt="Main preview"
                          className="thumb-img"
                        />
                        <span className="thumb-caption-text">Main View</span>
                      </button>

                      <button
                        type="button"
                        className={`thumb-btn ${isSelectedSecondary ? "thumb-active" : ""}`}
                        onClick={() => handleSelectScreenshot(project.id, "secondary")}
                        title="Secondary Page View"
                      >
                        <img
                          src={project.screenshots.secondary.src}
                          alt="Secondary preview"
                          className="thumb-img"
                        />
                        <span className="thumb-caption-text">Secondary</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="single-preview-indicator">
                    <span className="single-view-tag">Verified Project View</span>
                  </div>
                )}
              </div>

              {/* Project Details Content */}
              <div className="project-content-area">
                <div className="project-meta-top">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-badge">{project.badge}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>

                <p className="project-description">{project.description}</p>

                {/* Key Features */}
                <div className="project-features-box">
                  <h5 className="features-heading">Key Implementation Highlights:</h5>
                  <ul className="features-list">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Badges */}
                <div className="project-tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links / Buttons: STRICTLY adheres to requirements */}
                <div className="project-actions-row">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project-github"
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project-live"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox / Modal for High-Resolution View */}
      <ImageModal
        isOpen={Boolean(activeModalImage)}
        image={activeModalImage?.src}
        title={activeModalImage?.title}
        caption={activeModalImage?.caption}
        onClose={handleCloseModal}
      />
    </section>
  );
}


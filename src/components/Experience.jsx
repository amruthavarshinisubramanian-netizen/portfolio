import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { EXPERIENCE_DATA } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="section-container" id="experience">
      <div className="section-header">
        <span className="section-subheading">Practical Experience</span>
        <h2 className="section-title">Experience & Internships</h2>
        <p className="section-description">
          Industry software development experience working on full-stack web applications and agile workflows.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="experience-timeline">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <div className="experience-header">
              <div className="experience-role-group">
                <div className="exp-icon-badge">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                </div>
              </div>

              <div className="experience-meta">
                <span className="exp-badge-pill">{exp.type}</span>
                <span className="exp-date">
                  <FaCalendarAlt /> {exp.period}
                </span>
                <span className="exp-location">
                  <FaMapMarkerAlt /> {exp.location}
                </span>
              </div>
            </div>

            <div className="experience-body">
              {exp.project && (
                <div className="exp-project-highlight">
                  <span className="exp-project-label">Internship Project:</span>{" "}
                  <strong className="exp-project-name">{exp.project}</strong>
                </div>
              )}
              <h5 className="exp-contributions-title">Key Responsibilities & Contributions:</h5>
              <ul className="experience-points">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx}>
                    <FaCheckCircle className="point-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


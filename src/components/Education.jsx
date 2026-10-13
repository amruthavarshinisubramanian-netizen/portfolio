import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBookOpen } from "react-icons/fa";
import { EDUCATION_DATA } from "../data/portfolioData";

export default function Education() {
  return (
    <section className="section-container" id="education">
      <div className="section-header">
        <span className="section-subheading">Academic Background</span>
        <h2 className="section-title">Education</h2>
        <p className="section-description">
          Formal academic training in computer applications, software design, and core computing foundations.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="education-grid">
        {EDUCATION_DATA.map((edu, idx) => (
          <div key={idx} className="education-card">
            <div className="education-header">
              <div className="edu-icon-badge">
                <FaGraduationCap />
              </div>
              <div className="edu-title-group">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
              </div>
              <div className="education-meta">
                {edu.status && <span className="edu-status-badge">{edu.status}</span>}
                <span className="edu-date">
                  <FaCalendarAlt /> {edu.period}
                </span>
                {edu.location && (
                  <span className="edu-location">
                    <FaMapMarkerAlt /> {edu.location}
                  </span>
                )}
              </div>
            </div>

            {(edu.details || (edu.coursework && edu.coursework.length > 0)) && (
              <div className="education-body">
                {edu.details && <p className="education-details">{edu.details}</p>}

                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="coursework-section">
                    <div className="coursework-title">
                      <FaBookOpen /> Relevant Coursework:
                    </div>
                    <div className="coursework-pills">
                      {edu.coursework.map((course) => (
                        <span key={course} className="coursework-pill">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


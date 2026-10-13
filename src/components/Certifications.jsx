import { FaCertificate, FaAward, FaCalendarAlt } from "react-icons/fa";
import { CERTIFICATIONS_DATA } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section className="section-container" id="certifications">
      <div className="section-header">
        <span className="section-subheading">Verified Credentials</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-description">
          Industry-recognized certifications validating technical proficiency in Java, problem solving,
          artificial intelligence, and professional communication.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="certifications-grid">
        {CERTIFICATIONS_DATA.map((cert, idx) => (
          <div key={idx} className="certification-card">
            <div className="cert-top-row">
              <div className="cert-icon-wrapper">
                <FaCertificate />
              </div>
              <span className="cert-badge">{cert.badgeText}</span>
            </div>

            <h3 className="cert-title">{cert.title}</h3>
            <div className="cert-issuer-row">
              <span className="cert-issuer">
                <FaAward /> {cert.issuer}
              </span>
              {cert.date && (
                <span className="cert-date">
                  <FaCalendarAlt /> {cert.date}
                </span>
              )}
            </div>

            {cert.description && <p className="cert-description">{cert.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}


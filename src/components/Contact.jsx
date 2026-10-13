import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaDownload
} from "react-icons/fa";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pre-populate mailto link to open recruiter's default mail client cleanly
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Amruthavarshini,\n\n${formData.message}\n\nFrom:\n${formData.name} (${formData.email})`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section-container" id="contact">
      <div className="section-header">
        <span className="section-subheading">Get In Touch</span>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-description">
          Open to full-time Software Developer, Java Full Stack, and entry-level engineering roles.
          Feel free to reach out directly via email, LinkedIn, or the message form below.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="contact-layout">
        {/* Left Column: Direct Contact Channels */}
        <div className="contact-info-column">
          <div className="contact-card primary-contact-card">
            <div className="contact-card-icon">
              <FaEnvelope />
            </div>
            <div className="contact-card-content">
              <span className="contact-channel-label">Direct Email</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="contact-channel-value"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="copy-email-btn"
                title="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-success" /> Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <FaCopy /> Copy Email
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <FaLinkedin />
            </div>
            <div className="contact-card-content">
              <span className="contact-channel-label">LinkedIn Profile</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-value"
              >
                linkedin.com/in/amruthavarshini-s
              </a>
              <span className="contact-channel-hint">Connect & Message</span>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <FaGithub />
            </div>
            <div className="contact-card-content">
              <span className="contact-channel-label">GitHub Repository</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-value"
              >
                github.com/amruthavarshinisubramanian-netizen
              </a>
              <span className="contact-channel-hint">Browse Source Repositories</span>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-card-content">
              <span className="contact-channel-label">Location</span>
              <span className="contact-channel-value-plain">
                {PERSONAL_INFO.location}
              </span>
              <span className="contact-channel-hint">Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Resume Download Callout */}
          <div className="resume-download-callout">
            <div>
              <h4 className="callout-title">Looking for my Resume?</h4>
              <p className="callout-text">
                Download my up-to-date resume in PDF format for recruitment screening.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.resumePath}
              download={PERSONAL_INFO.resumeFilename}
              className="btn-primary"
            >
              <FaDownload /> Download PDF
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Recruiter Message Form */}
        <div className="contact-form-column">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send a Direct Message</h3>
            <p className="form-subtitle">
              Have an opening, internship, or project? Fill out the details below:
            </p>

            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Your Name / Recruiter Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Jane Doe"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Your Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. jane.doe@company.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Opportunity: Java Full Stack Developer Role"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message, role requirements, or interview inquiry here..."
                className="form-textarea"
              />
            </div>

            <button type="submit" className="btn-primary full-width">
              <FaPaperPlane /> Send Message via Email
            </button>

            {submitted && (
              <div className="form-success-banner">
                <FaCheck /> Opening your mail client with your pre-filled inquiry. Thank you!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}


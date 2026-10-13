import { FaLaptopCode, FaServer, FaDatabase, FaAward } from "react-icons/fa";

export default function About() {
  return (
    <section className="section-container" id="about">
      <div className="section-header">
        <span className="section-subheading">Background & Profile</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-grid">
        {/* Main narrative card */}
        <div className="about-narrative-card">
          <h3 className="about-card-title">Engineering Mindset & Full Stack Drive</h3>
          <p className="about-text">
            I am a <strong>Bachelor of Computer Applications (BCA)</strong> student at{" "}
            <strong>Bishop Heber College, Tiruchirappalli (2024–2027)</strong>, with a strong focus
            on <strong>Java Full Stack Development</strong> and enterprise software engineering.
          </p>
          <p className="about-text">
            My development journey centers around designing resilient backend systems with{" "}
            <strong>Spring Boot, Spring Data JPA, and RESTful APIs</strong>, paired with intuitive,
            responsive user interfaces in <strong>React.js</strong>. I place strong emphasis on clean
            object-oriented programming (OOP), relational data modeling with <strong>MySQL and SQL Server</strong>,
            and reliable MVC architectures.
          </p>
          <p className="about-text">
            During my internship at <strong>Infyro</strong> as a Full Stack Development Intern, I gained
            valuable hands-on exposure to real-world software workflows—collaborating on scalable application
            features, database-backend integration, and version control with Git & GitHub.
          </p>

          <div className="about-meta-row">
            <div className="meta-item">
              <span className="meta-label">Location:</span>
              <span className="meta-value">Tiruchirappalli, Tamil Nadu, India</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Degree:</span>
              <span className="meta-value">BCA • Bishop Heber College (2024-2027)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Primary Stack:</span>
              <span className="meta-value">Java, Spring Boot, React.js, MySQL</span>
            </div>
          </div>
        </div>

        {/* Core Pillars / Competency Highlights */}
        <div className="about-pillars">
          <div className="pillar-card">
            <div className="pillar-icon">
              <FaServer />
            </div>
            <div>
              <h4 className="pillar-title">Backend Architecture</h4>
              <p className="pillar-desc">
                Engineering structured REST APIs and robust services with Java, Spring Boot, Spring Data JPA,
                and Node.js/Express.
              </p>
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <FaLaptopCode />
            </div>
            <div>
              <h4 className="pillar-title">Frontend Engineering</h4>
              <p className="pillar-desc">
                Building responsive, accessible web interfaces utilizing React.js, modern JavaScript (ES6+),
                HTML5, CSS3, and Bootstrap.
              </p>
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <FaDatabase />
            </div>
            <div>
              <h4 className="pillar-title">Database Engineering</h4>
              <p className="pillar-desc">
                Designing normalized schemas, constraints, indexing, and connection pools across MySQL and
                Microsoft SQL Server.
              </p>
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <FaAward />
            </div>
            <div>
              <h4 className="pillar-title">Verified Problem Solving</h4>
              <p className="pillar-desc">
                Certified in Problem Solving by HackerRank and Java by NPTEL/IIT Kharagpur, with strong algorithmic
                and analytical foundations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

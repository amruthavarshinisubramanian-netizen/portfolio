import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Amruthavarshini S</h2>

        <ul className="nav-links">
           <li><a href="#">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#skills">Skills</a></li>
           <li><a href="#projects">Projects</a></li>
           <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero">
        <div className="hero-left">

          <span className="badge">
            Java Full Stack Developer
          </span>

          <h1>
            Hi, I'm
            <br />
            <span className="name">
              Amruthavarshini S
            </span>
          </h1>

          <p className="hero-text">
            A passionate fresher pursuing a career in Full Stack Development.
            <br />
            I build responsive and scalable web applications using
            <br />
            <span className="highlight">
              Java, Spring Boot, React.js and MySQL.
            </span>
          </p>

          <div className="buttons">
           <a href="#projects" className="resume-btn">
           View Projects
           </a>
           
          <a
          href="/Amruthavarshini_S.pdf"
          download
          className="resume-btn"
          >
            Download Resume
          </a>

          </div>

          <div className="social-icons">
            <a
              href="https://github.com/amruthavarshinisubramanian-netizen"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/amruthavarshini-s-928703376/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:amruthavarshinisubramanian@gmail.com">
              <FaEnvelope />
            </a>
          </div>

        </div>

        <div className="hero-right">

  <div className="tech-icons">
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    alt="Java"
  />

  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
    alt="Spring Boot"
  />

  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    alt="React"
  />

  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    alt="MySQL"
  />
</div>

  <img
    className="hero-image"
    src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900"
    alt="Coding"
  />

</div> 
      </div>

      <section id="about" className="about">
        <div className="about-card">
          <h2>About Me</h2>

          <p>
            I am a Bachelor of Computer Applications (BCA) graduate
            with a strong interest in Full Stack Development.
            Skilled in Java, Spring Boot, React.js and MySQL,
            I enjoy building responsive web applications and
            continuously learning modern technologies to create
            impactful software solutions.
          </p>
        </div>

        <div className="about-card">
          <h2>Education</h2>

          <p>
            Bachelor of Computer Applications (BCA)
            <br />
            Bishop Heber College, Tiruchirappalli
            <br />
            2024 - 2027
          </p>
        </div>
      </section>

     <section id="skills" className="skills-section">
  <h2>Skills</h2>

<p className="skills-text">
  Technologies and tools I use to build modern web applications.
</p>
  <div className="skills-container">
    <div className="skill-card">Java</div>
    <div className="skill-card">Python</div>
    <div className="skill-card">C</div>
    <div className="skill-card">JavaScript</div>

    <div className="skill-card">HTML5</div>
    <div className="skill-card">CSS3</div>
    <div className="skill-card">React.js</div>
    <div className="skill-card">Bootstrap</div>

    <div className="skill-card">Spring Boot</div>
    <div className="skill-card">Spring Data JPA</div>
    <div className="skill-card">REST API</div>

    <div className="skill-card">MySQL</div>

    <div className="skill-card">Git</div>
    <div className="skill-card">GitHub</div>
    <div className="skill-card">Postman</div>
    <div className="skill-card">VS Code</div>
    <div className="skill-card">Maven</div>

    <div className="skill-card">OOP</div>
    <div className="skill-card">CRUD Operations</div>
    <div className="skill-card">MVC Architecture</div>
    <div className="skill-card">Authentication</div>
  </div>
</section>
<section id="projects" className="projects-section">

  <h2>Projects</h2>

  <div className="projects-container">

    <div className="project-card">
  <h3>Employee Management System</h3>
<img
  src="/images/employee-management.png.jpeg"
  alt="Employee Management System"
  className="project-image"
/>
  <p>
    A full-stack web application developed to manage
    employee records efficiently. The system allows
    users to add, update, delete, view, and search
    employee details through a responsive and
    user-friendly interface.
  </p>

  <h4>Key Features</h4>

  <ul className="project-features">
    <li>Add New Employees</li>
    <li>Update Employee Information</li>
    <li>Delete Employee Records</li>
    <li>View Employee List</li>
    <li>Search Employees by Name</li>
    <li>REST API Integration</li>
    <li>Responsive User Interface</li>
  </ul>

  <h4>Technologies Used</h4>

  <p>
    React.js, Java, Spring Boot,
    Spring Data JPA, MySQL, REST API
  </p>

  <div className="project-buttons">
    <a
      href="https://github.com/amruthavarshinisubramanian-netizen/Employee-Management-System"
      target="_blank"
      rel="noreferrer"
      className="github-btn"
    >
      View on GitHub
    </a>
  </div>
</div>
  </div>

</section>

<section id="contact" className="contact-section">
  <h2>Let's Connect</h2>

  <p>
     Looking for opportunities to kick-start my career in
     Full Stack Development and contribute to real-world
     software projects while continuously learning and growing.
  </p>

  <div className="contact-details">

    <p>
      📧 Email:
      <a href="mailto:amruthavarshinisubramanian@gmail.com">
        amruthavarshinisubramanian@gmail.com
      </a>
    </p>

    <p>
      💻 GitHub:
      <a
        href="https://github.com/amruthavarshinisubramanian-netizen"
        target="_blank"
        rel="noreferrer"
      >
        github.com/amruthavarshinisubramanian-netizen
      </a>
    </p>

    <p>
      🔗 LinkedIn:
      <a
        href="https://www.linkedin.com/in/amruthavarshini-s-928703376/"
        target="_blank"
        rel="noreferrer"
      >
        View Profile
      </a>
    </p>

  </div>
  <footer className="footer">
  <p>
    © 2026 Amruthavarshini S. All Rights Reserved.
  </p>
</footer>
</section>
    </>
  );
}

export default App;
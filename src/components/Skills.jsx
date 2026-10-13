import {
  FaJava,
  FaReact,
  FaPython,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer,
  FaLayerGroup,
  FaCogs,
  FaLock,
  FaCheckCircle
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiBootstrap,
  SiPostman,
  SiApachemaven
} from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { TECHNICAL_SKILLS, SOFT_SKILLS } from "../data/portfolioData";

// Dynamic icon resolver mapping iconType string to component
const renderSkillIcon = (iconType) => {
  const iconMap = {
    FaJava: <FaJava className="skill-icon-svg text-java" />,
    SiSpringboot: <SiSpringboot className="skill-icon-svg text-spring" />,
    FaDatabase: <FaDatabase className="skill-icon-svg text-database" />,
    FaReact: <FaReact className="skill-icon-svg text-react" />,
    SiMysql: <SiMysql className="skill-icon-svg text-mysql" />,
    TbFileTypeSql: <TbFileTypeSql className="skill-icon-svg text-mssql" />,
    SiJavascript: <SiJavascript className="skill-icon-svg text-javascript" />,
    FaPython: <FaPython className="skill-icon-svg text-python" />,
    FaCode: <FaCode className="skill-icon-svg text-c" />,
    FaHtml5: <FaHtml5 className="skill-icon-svg text-html" />,
    FaCss3Alt: <FaCss3Alt className="skill-icon-svg text-css" />,
    SiBootstrap: <SiBootstrap className="skill-icon-svg text-bootstrap" />,
    FaServer: <FaServer className="skill-icon-svg text-api" />,
    FaGitAlt: <FaGitAlt className="skill-icon-svg text-git" />,
    FaGithub: <FaGithub className="skill-icon-svg text-github" />,
    SiPostman: <SiPostman className="skill-icon-svg text-postman" />,
    SiApachemaven: <SiApachemaven className="skill-icon-svg text-maven" />,
    VscVscode: <VscVscode className="skill-icon-svg text-vscode" />,
    FaLayerGroup: <FaLayerGroup className="skill-icon-svg text-oop" />,
    FaCogs: <FaCogs className="skill-icon-svg text-crud" />,
    FaLock: <FaLock className="skill-icon-svg text-security" />
  };

  return iconMap[iconType] || <FaCode className="skill-icon-svg" />;
};

export default function Skills() {
  return (
    <section className="section-container" id="skills">
      <div className="section-header">
        <span className="section-subheading">Core Competencies</span>
        <h2 className="section-title">Skills</h2>
        <p className="section-description">
          Demonstrated technical technologies and professional strengths supported by academic coursework,
          internship experience, and personal projects.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="skills-categories-wrapper">
        {/* CATEGORY 1: Technical Skills */}
        <div className="skills-category-card">
          <div className="category-header">
            <h3 className="category-title">1. Technical Skills</h3>
            <span className="category-badge">Verified Technologies & Tools</span>
          </div>

          <div className="technical-skills-grid">
            {TECHNICAL_SKILLS.map((skill) => (
              <div
                key={skill.name}
                className={`skill-item-card ${skill.highlight ? "skill-item-highlight" : ""}`}
              >
                <div className="skill-icon-box">
                  {renderSkillIcon(skill.iconType)}
                </div>
                <span className="skill-item-label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORY 2: Soft Skills */}
        <div className="skills-category-card">
          <div className="category-header">
            <h3 className="category-title">2. Soft Skills</h3>
            <span className="category-badge">Professional Strengths</span>
          </div>

          <div className="soft-skills-grid">
            {SOFT_SKILLS.map((skill) => (
              <div key={skill.name} className="soft-skill-card">
                <div className="soft-skill-icon">
                  <FaCheckCircle />
                </div>
                <div className="soft-skill-content">
                  <h4 className="soft-skill-name">{skill.name}</h4>
                  <p className="soft-skill-desc">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


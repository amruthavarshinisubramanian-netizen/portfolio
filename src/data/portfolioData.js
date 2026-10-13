// Portfolio Data Configuration for Amruthavarshini S
// All information is verified from the candidate's actual resume and projects.

export const PERSONAL_INFO = {
  name: "Amruthavarshini S",
  title: "Java Full Stack Developer & Software Developer",
  status: "Available for Full-time Roles & Internships",
  location: "Tiruchirappalli, Tamil Nadu, India",
  email: "amruthavarshinisubramanian@gmail.com",
  phone: "+91 8610715712",
  github: "https://github.com/amruthavarshinisubramanian-netizen",
  linkedin: "https://www.linkedin.com/in/amruthavarshini-s-928703376/",
  // Resume configuration - Easy to update by replacing the PDF in /public or updating this path
  resumePath: "/Amruthavarshini_Resume.pdf",
  resumeFilename: "Amruthavarshini_Resume.pdf",
  bio: "Motivated Bachelor of Computer Applications (BCA) student with hands-on experience in Java Full Stack Development using Spring Boot, React.js, and MySQL. Proven track record building enterprise CRUD applications, RESTful APIs, and responsive interfaces with strong object-oriented principles, industry internship experience, and certified problem-solving capabilities.",
};

export const PROJECTS_DATA = [
  {
    id: "pulsehr",
    title: "PulseHR",
    subtitle: "Enterprise Employee Management Portal",
    badge: "Enterprise Java Full Stack",
    description:
      "A full-stack enterprise employee management platform developed to streamline workforce operations, record management, and organizational analytics. Features secure user access, complete employee lifecycle CRUD operations, executive dashboard metrics, and responsive data filtering.",
    technologies: [
      "React.js",
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "Bootstrap",
      "REST APIs"
    ],
    githubUrl: "https://github.com/amruthavarshinisubramanian-netizen/Employee-Management-System",
    liveUrl: null, // Strictly no live demo link
    features: [
      "Full employee CRUD operations with form validation and real-time state updates",
      "Executive analytics dashboard displaying active headcount, leave metrics, and employee recognition",
      "Multi-parameter search and department filter for instant employee discovery",
      "Spring Data JPA and MySQL integration for structured data persistence",
      "Responsive Bootstrap and React frontend optimized across desktop and mobile"
    ],
    screenshots: {
      main: {
        src: "/images/pulsehr-dashboard.png",
        caption: "PulseHR Executive Dashboard — Workforce metrics, departmental headcount, and quick admin actions"
      },
      secondary: {
        src: "/images/pulsehr-employees.png",
        caption: "PulseHR Employee Directory — Employee search, status badges, compensation records, and CRUD actions"
      }
    }
  },
  {
    id: "freelancehub",
    title: "FreelanceHub",
    subtitle: "Freelance Marketplace Platform",
    badge: "Full Stack Node.js & MSSQL",
    description:
      "A production-ready full-stack freelance marketplace platform engineered with distinct role-based workflows for Clients, Freelancers, and Admins. Connects clients with talent through structured project postings, proposal bidding, and automated contract state management.",
    technologies: [
      "Node.js",
      "Express.js",
      "SQL Server (MSSQL)",
      "REST APIs",
      "JWT",
      "bcrypt",
      "Role-Based Access (RBAC)",
      "JavaScript",
      "HTML5/CSS3"
    ],
    githubUrl: "https://github.com/amruthavarshinisubramanian-netizen/Freelance-Marketplace",
    liveUrl: null, // Strictly no live demo link
    features: [
      "Role-based authorization for Clients (post projects, evaluate bids), Freelancers (submit proposals), and Admins (platform moderation)",
      "Secure JSON Web Token (JWT) session management and bcrypt password hashing",
      "Express.js REST APIs connected to Microsoft SQL Server with connection pooling",
      "Proposal evaluation pipeline with automatic project transition to 'In Progress'",
      "Custom responsive interface built with pure CSS3 custom properties and vanilla JavaScript"
    ],
    screenshots: {
      main: {
        src: "/images/freelancehub-home.png",
        caption: "FreelanceHub Marketplace Landing — Role-based onboarding, verified talent stats, and project discovery"
      },
      secondary: {
        src: "/images/freelancehub-dashboard.png",
        caption: "FreelanceHub Client Dashboard — Active project management, budget tracking, and proposal reviews"
      }
    }
  },
  {
    id: "blood-donation",
    title: "Blood Donation Awareness Campaign",
    subtitle: "Community Health & Hospital Donor Directory",
    badge: "Team Initiative (7 Members)",
    description:
      "A collaborative 7-member social initiative conducted in Tiruchirappalli combining on-ground hospital field visits, donor awareness drives, verified donor data collection, and an interactive web-based blood donor filtering system for rapid emergency response.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "CSV Data Processing",
      "Community Outreach"
    ],
    githubUrl: null, // Strictly no GitHub link
    liveUrl: "https://angelmercy.neocities.org/",
    features: [
      "7-member collaborative field outreach and hospital coordination in Tiruchirappalli",
      "On-ground collection, verification, and digitization of 40+ local donor profiles",
      "Interactive donor portal with dynamic blood group filtration (e.g. O+ve, A+ve) and contact search",
      "CSV data upload and live table rendering for medical coordinators",
      "Direct phone and messaging contact channels for time-sensitive blood requirements"
    ],
    screenshots: {
      main: {
        src: "/images/blood-donation-campaign.png",
        caption: "Blood Donor List & Filter System — Real-time blood group search, donor contact directory, and CSV processing"
      },
      secondary: null // Strictly only one screenshot
    }
  }
];

// EXACTLY TWO MAIN CATEGORIES: Technical Skills and Soft Skills
export const TECHNICAL_SKILLS = [
  { name: "Java", iconType: "FaJava", highlight: true },
  { name: "Spring Boot", iconType: "SiSpringboot", highlight: true },
  { name: "Spring Data JPA", iconType: "FaDatabase", highlight: true },
  { name: "React.js", iconType: "FaReact", highlight: true },
  { name: "MySQL", iconType: "SiMysql", highlight: true },
  { name: "SQL Server (MSSQL)", iconType: "TbFileTypeSql", highlight: true },
  { name: "JavaScript", iconType: "SiJavascript" },
  { name: "Python", iconType: "FaPython" },
  { name: "HTML5", iconType: "FaHtml5" },
  { name: "CSS3", iconType: "FaCss3Alt" },
  { name: "Bootstrap", iconType: "SiBootstrap" },
  { name: "REST APIs", iconType: "FaServer", highlight: true },
  { name: "Git", iconType: "FaGitAlt" },
  { name: "GitHub", iconType: "FaGithub" },
  { name: "Postman", iconType: "SiPostman" },
  { name: "Maven", iconType: "SiApachemaven" },
  { name: "VS Code", iconType: "VscVscode" },
  { name: "OOP Principles", iconType: "FaLayerGroup" },
  { name: "CRUD Operations", iconType: "FaCogs" },
  { name: "MVC Architecture", iconType: "FaServer" },
  { name: "Authentication (JWT & bcrypt)", iconType: "FaLock" }
];

export const SOFT_SKILLS = [
  {
    name: "Analytical Problem Solving",
    desc: "Demonstrated through HackerRank Problem Solving certification and algorithmic coding.",
    iconType: "FaCheckCircle"
  },
  {
    name: "Cross-functional Collaboration",
    desc: "Proven teamwork across multi-member technical and community projects (7-member campaign).",
    iconType: "FaCheckCircle"
  },
  {
    name: "Customer Engagement & Communication",
    desc: "Certified by IBM with focus on professional stakeholder interaction and clear technical reporting.",
    iconType: "FaCheckCircle"
  },
  {
    name: "Adaptability & Continuous Learning",
    desc: "Rapidly mastering new frameworks, modern databases, and production software patterns.",
    iconType: "FaCheckCircle"
  },
  {
    name: "Attention to Code Quality & Detail",
    desc: "Commitment to clean architecture, organized folder structure, and responsive UI standards.",
    iconType: "FaCheckCircle"
  },
  {
    name: "Time & Project Management",
    desc: "Effective prioritization during academic coursework, internship sprints, and deliverables.",
    iconType: "FaCheckCircle"
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Full Stack Development Intern",
    company: "Akilam Technology LLP",
    location: "Tiruchirappalli, Tamil Nadu",
    period: "September 2026",
    type: "Internship",
    project: "FreelanceHub — Freelance Marketplace",
    points: [
      "Developed a freelance marketplace project named FreelanceHub.",
      "Worked with Node.js, Express.js, SQL Server, and REST APIs.",
      "Implemented JWT-based authentication and bcrypt password hashing.",
      "Implemented role-based access control (RBAC).",
      "Tested registration, login, access control, and proposal workflows.",
      "Documented project functionality and development work."
    ]
  },
  {
    role: "Full Stack Development Intern",
    company: "Infyro",
    location: "Tiruchirappalli, Tamil Nadu",
    period: "Nov 2025 – Dec 2025",
    type: "Internship",
    points: [
      "Contributed to the development and deployment of full-stack web applications, gaining practical exposure to real-world software development workflows.",
      "Collaborated on building scalable applications, improving problem-solving, debugging, and code organization.",
      "Worked on integrating backend logic with databases to manage and process application data efficiently.",
      "Enhanced user experience by designing responsive interfaces and improving application usability across screen sizes.",
      "Gained hands-on experience in application deployment, testing, and version control using GitHub."
    ]
  }
];

export const EDUCATION_DATA = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bishop Heber College, Trichy",
    location: "Tiruchirappalli, Tamil Nadu",
    period: "2024 – Present",
    status: "CGPA: 8.23/10",
    coursework: [
      "Java",
      "Python",
      "C Programming",
      "HTML & Web Design",
      "DBMS (Database Systems)",
      "Artificial Intelligence",
      "Computer Networks"
    ],
    details: "Focusing on core computer science foundations, object-oriented software engineering, database design, and modern full-stack web technologies."
  },
  {
    degree: "Higher Secondary",
    institution: "Higher Secondary Education",
    period: "2024",
    status: "Percentage: 80.67%"
  },
  {
    degree: "Secondary Education",
    institution: "Secondary Education",
    period: "2022",
    status: "Percentage: 71.8%"
  }
];

export const CERTIFICATIONS_DATA = [
  // LINKEDIN LEARNING (1 - 16)
  {
    title: "Building Full-Stack Apps with React and Spring",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Java Object-Oriented Programming",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Java Essential Training: Syntax and Structure",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Getting Started as a Full-Stack Web Developer",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "HTML, CSS, and JavaScript: Building the Web",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Learning REST APIs",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Spring Boot 3 Essential Training",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "React Essential Training",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Critical Thinking and Problem Solving",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Find Your Dream Job: Interview Techniques and Resume Writing",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Resume Makeover",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Developing Adaptability as a Manager",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Teamwork Foundations",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Rock Your LinkedIn Profile",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Why Conflict is Necessary and How to Manage It",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },
  {
    title: "Writing a Resume",
    issuer: "LinkedIn Learning",
    badgeText: "LinkedIn Learning"
  },

  // NPTEL (17)
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    badgeText: "NPTEL Certified"
  },

  // IBM SKILLSBUILD (18 - 20)
  {
    title: "Customer Engagement: Communication and Personality Dynamics",
    issuer: "IBM SkillsBuild",
    badgeText: "IBM SkillsBuild"
  },
  {
    title: "Customer Engagement: Problem Solving and Process Controls",
    issuer: "IBM SkillsBuild",
    badgeText: "IBM SkillsBuild"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    badgeText: "IBM SkillsBuild"
  },

  // OTHER CERTIFICATION (21)
  {
    title: "Problem Solving Basic",
    issuer: "HackerRank",
    badgeText: "Verified Platform"
  }
];


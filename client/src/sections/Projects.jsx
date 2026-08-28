
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

import Club from "../assets/images/Club.png";
import Arbaj from "../assets/images/Arbaj.png";
import ElectroMart from "../assets/images/ElectroMart.png";
import Jaguar from "../assets/images/Jaguar.png";
import Gform from "../assets/images/Gform.png";
import GOIE from "../assets/images/GOIE.png";
import Famous from "../assets/images/Famous.png";
import Ocean from "../assets/images/Ocean.png";

const Projects = () => {
  // ==========================================
  // MERN PROJECTS
  // ==========================================

  const mernProjects = [
    {
      number: "01",
      title: "ElectroMart E-Commerce Website",
      category: "Full Stack MERN",

      image: ElectroMart,

      description:
        "A full-stack e-commerce application with product management, REST APIs, authentication, database operations and responsive UI.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "JWT",
        "Cloudinary",
      ],

      github: "https://github.com/itsritesh02/ElectroMart-Ecommerce-Website",
      live: "https://electro-mart-ecommerce-website.vercel.app/",
    },

    {
      number: "02",
      title: "Club Management Web Application",
      category: "Full Stack MERN",

      image: Club,

      description:
        "A full-stack club management platform with admin authentication, OTP verification, member management, CRUD operations and protected REST APIs.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],

      github: "https://github.com/itsritesh02/Club-Management-",
      live: "https://club-management-lilac.vercel.app/",
    },
    {
      number: "03",
      title: "Arbaj Technology",
      category: "Company Website",

      image: Arbaj,

      description:
        "A professional company website focused on presenting services, company information and business offerings through a modern responsive interface.",

      tech: [
        "WordPress",
        "JavaScript",
        "CSS",
        "Responsive Design",
      ],

      github: "https://github.com/itsritesh02",
      live: "https://arbajtechnologypvtltd.com/",
    },
    {
      number: "04",
      title: "Growth Client Form Web Application",
      category: "Client Entry Form ",

      image: Gform,

      description:
        "A full-stack MERN web application for managing client entries, with secure data handling, form validation, REST API integration, and MongoDB database operations.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],

      github: "https://github.com/itsritesh02",
      live: "https://growthoverseas.netlify.app/",

    },
  ];

  // ==========================================
  // WORDPRESS PROJECTS
  // ==========================================

  const wordpressProjects = [
    {
      number: "01",
      title: "Jaguar Club",
      category: "WordPress Website",

      image: Jaguar,

      description:
        "Customized a responsive club website using WordPress with modern layouts, service pages, blog sections, and mobile-friendly design.",

      tech: [
        "WordPress",
        "JavaScript",
        "CSS",
        "Responsive Design",
      ],

      // github: "https://github.com/itsritesh02",
      live: "https://jaguarscafeclub.in/",
    },

    {
      number: "02",
      title: "Growth Overseas International Edutech",
      category: "WordPress Website",

      image: GOIE,

      description:
       "Customized a responsive overseas education website using WordPress with modern layouts, service pages, informative content, and mobile- friendly design.",

      tech: [
        "WordPress",
        "JavaScript",
        "CSS",
        "Responsive Design",
      ],

      // github: "https://github.com/itsritesh02",
      live: "https://growthoverseas.in/",
    },

    {
      number: "03",
      title: "Famous Visa Consultand",
      category: "WordPress Website",

      image: Famous,

      description:
        "A professional visa consultancy website showcasing immigration services, visa assistance, and client information through a clean, responsive, and user-friendly interface.",

      tech: [
        "WordPress",
        "JavaScript",
        "CSS",
        "Responsive Design",
      ],

      // github: "https://github.com/itsritesh02",
      live: "https://famousvisaconsultant.in/",
    },

    {
      number: "04",
      title: "Ocean Global Overseas",
      category: "WordPress Website",

      image: Ocean,

      description:
        "A responsive overseas consultancy website designed to present education and immigration services, helping students explore international study opportunities through a clear and user-friendly interface.",

      tech: [
        "WordPress",
        "JavaScript",
        "CSS",
        "Responsive Design",
      ],

      // github: "https://github.com/itsritesh02",
      live: "https://oceanglobaloverseas.com/",
    },
    
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">

        {/* ==========================================
            MAIN SECTION HEADING
        ========================================== */}

        <div className="section-heading">
          <p>MY WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        {/* ==========================================
            MERN PROJECTS
        ========================================== */}

        <div className="project-group">

          <div className="project-group-heading">
            <h3>
              MERN <span>Projects</span>
            </h3>

            <p>
              Full-stack applications built using the MERN stack.
            </p>
          </div>

          <div className="projects-grid">
            {mernProjects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
              />
            ))}
          </div>

        </div>

        {/* ==========================================
            WORDPRESS PROJECTS
        ========================================== */}

        <div className="project-group wordpress-group">

          <div className="project-group-heading">
            <h3>
              WordPress <span>Projects</span>
            </h3>

            <p>
              Responsive business and club websites built with WordPress.
            </p>
          </div>

          <div className="projects-grid">
            {wordpressProjects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;

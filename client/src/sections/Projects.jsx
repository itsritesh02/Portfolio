import ProjectCard from "../components/ProjectCard";
import "./Projects.css";
import Club from "../assets/images/Club.png";
import Arbaj from "../assets/images/Arbaj.png";
import ElectroMart from "../assets/images/ElectroMart.png";
const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Club Management System",
      category: "Full Stack MERN",

      image: Club,

      description:
        "A full-stack club management platform with admin authentication, OTP verification, member management, CRUD operations, protected routes and REST APIs.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
      ],

      github: "https://github.com/itsritesh02",
      live: "https://github.com/itsritesh02/Club-Management-",
    },

    {
      number: "02",
      title: "ElectroMart",
      category: "E-Commerce",

      image: ElectroMart,

      description:
        "A full-stack e-commerce application focused on product management, responsive UI, REST API integration, database operations and scalable backend architecture.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],

      github: "https://github.com/itsritesh02",
      live: "https://github.com/itsritesh02/ElectroMart-Ecommerce-Website",
    },

    {
      number: "03",
      title: "Arbaj Technology",
      category: "Company Website",

      image: Arbaj,

      description:
        "A professional company website developed to present services, company information and business offerings through a modern responsive web interface.",

      tech: [
        "React.js",
        "JavaScript",
        "CSS",
        "Responsive Design",
      ],

      github: "https://github.com/itsritesh02",
      live: "https://arbajtechnologypvtltd.com/",
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">

        <div className="section-heading">
          <p>MY WORK</p>

          <h2>
            Featured <span>projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
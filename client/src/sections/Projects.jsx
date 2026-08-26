import ProjectCard from "../components/ProjectCard";
import "./Projects.css";
const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Club Management System",
      category: "Full Stack MERN",

      image: "/projects/club-management.png",

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
      live: "https://club-management-lilac.vercel.app/",
    },

    {
      number: "02",
      title: "ElectroMart",
      category: "E-Commerce",

      image: "/projects/electromart.png",

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
      live: "https://electro-mart-ecommerce-website.vercel.app/",
    },

    {
      number: "03",
      title: "Arbaj Technology",
      category: "Company Website",

      image: "/projects/arbaj-technology.png",

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
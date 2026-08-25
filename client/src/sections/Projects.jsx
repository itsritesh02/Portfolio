import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Club Management System",
      category: "Full Stack MERN",

      description:
        "A complete club management platform with user authentication, OTP verification, member management, admin functionality and REST APIs.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
      ],

      github: "https://github.com/",
      live: "https://example.com/",
    },

    {
      number: "02",
      title: "ElectroMart",
      category: "E-Commerce",

      description:
        "A modern e-commerce application with product management, API integration, responsive UI and backend services for handling application data.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],

      github: "https://github.com/",
      live: "https://example.com/",
    },

    {
      number: "03",
      title: "Developer Portfolio",
      category: "Personal Project",

      description:
        "A modern responsive developer portfolio built to showcase professional experience, technical skills, projects and contact information.",

      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],

      github: "https://github.com/",
      live: "https://example.com/",
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
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
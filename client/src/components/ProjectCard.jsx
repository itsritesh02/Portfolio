const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">

      <div className="project-image">

        <img
          src={project.image}
          alt={`${project.title} project`}
          loading="lazy"
        />

        <div className="project-overlay">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-view-btn"
          >
            View Live ↗
          </a>
        </div>

        <div className="project-number">
          {project.number}
        </div>

      </div>

      <div className="project-content">

        <div className="project-top">

          <span className="project-category">
            {project.category}
          </span>

          <div className="project-links">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live ↗
            </a>

          </div>

        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.tech.map((technology, index) => (
            <span key={index}>
              {technology}
            </span>
          ))}
        </div>

      </div>

    </article>
  );
};

export default ProjectCard;
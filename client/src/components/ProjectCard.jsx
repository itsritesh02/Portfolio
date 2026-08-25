const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-image">
        <div className="project-number">
          {project.number}
        </div>

        <div className="project-image-icon">
          &lt;/&gt;
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
              aria-label="GitHub"
            >
              GitHub ↗
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="Live Demo"
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
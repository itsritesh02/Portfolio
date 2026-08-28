
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">

      {/* PROJECT IMAGE */}
      <div className="project-image">

        {project.image ? (
          <img
            src={project.image}
            alt={`${ project.title } project`}
            loading="lazy"
          />
        ) : (
          <div className="project-image-placeholder">
            <span>&lt;/&gt;</span>
          </div>
        )}

        <div className="project-gradient"></div>

        <div className="project-number">
          {project.number}
        </div>

        <div className="project-overlay">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-view-btn"
          >
            View Live ↗
          </a>
        </div>

      </div>

      {/* PROJECT CONTENT */}
      <div className="project-content">

        <div className="project-top">

          <span className="project-category">
            {project.category}
          </span>

          <div className="project-links">

            {/* GITHUB - ONLY FOR PROJECTS WITH GITHUB */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${ project.title } GitHub`}
              >
                GitHub ↗
              </a>
            )}

            {/* LIVE */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${ project.title } live`}
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

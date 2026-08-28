import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">

        <div className="section-heading">
          <p>EDUCATION</p>
          <h2>My academic <span>background</span></h2>
        </div>

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div className="education-content">
            <span className="education-year">
              Bachelor's Degree
            </span>

            <h3>B.Tech</h3>
            <h2>Computer Science Engineering</h2>

            <h4>Swami Vivekanand Institute of Engineering & Technology (SVIET), Banur, Rajpura</h4>

            <p>
              Bachelor's degree with a focus on building strong technical
              fundamentals and developing software engineering skills.
            </p>

            <div className="education-tags">

              <span>Mern Stack Developer</span>
              <span>Full Stack Developer</span>
              <span>Computer Science Engineering</span>
              <span>Software Development</span>
              <span>Web Development</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
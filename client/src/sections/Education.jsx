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

            <h4>Sri Sukhmani Institute of Engineering & Technology</h4>

            <p>
              Bachelor's degree with a focus on building strong technical
              fundamentals and developing software engineering skills.
            </p>

            <div className="education-tags">
              <span>Computer Science</span>
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
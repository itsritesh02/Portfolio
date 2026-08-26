const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Turning ideas into <span>web experiences</span></h2>
        </div>

        <div className="about-grid">

          <div className="about-content">
            <p>
              I'm Ritesh Kumar, a MERN Stack Developer focused on building
              modern, responsive and user-friendly web applications.
            </p>

            <p>
              I work with MongoDB, Express.js, React.js and Node.js to build
              complete full-stack applications. I enjoy creating clean UI,
              developing REST APIs and connecting frontend applications with
              reliable backend services.
            </p>

            <p>
              I'm continuously improving my development skills and looking
              forward to working on challenging projects where I can learn,
              contribute and grow as a Software Engineer.
            </p>

            <div className="about-info">
              <div>
                <span>Name</span>
                <strong>Ritesh Kumar</strong>
              </div>

              <div>
                <span>Role</span>
                <strong>MERN Stack Developer</strong>
              </div>

              <div>
                <span>Experience</span>
                <strong>1+ Years</strong>
              </div>

              <div>
                <span>Company</span>
                <strong>Arbaj Technology</strong>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              &lt;/&gt;
            </div>

            <h3>Full Stack Development</h3>

            <p>
              Frontend, backend, database and API integration — building
              complete applications from idea to deployment.
            </p>

            <div className="about-card-line"></div>

            <div className="about-card-tech">
              <span>React</span>
              <span>Node</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
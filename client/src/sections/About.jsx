import "./About.css";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">

        {/* SECTION HEADING */}
        <div className="section-heading">
          <p>ABOUT ME</p>

          <h2>
            Turning ideas into <span>web experiences</span>
          </h2>
        </div>

        <div className="about-grid">

          {/* LEFT CONTENT */}
          <div className="about-content">

            <p>
              I'm Ritesh Kumar, a MERN Stack Developer focused on building
              modern, responsive and user-friendly web applications.
            </p>

            <p>
              I work with MongoDB, Express.js, React.js and Node.js to develop
              complete full-stack applications, REST APIs and responsive
              interfaces with a strong focus on clean code and user experience.
            </p>

            <p>
              Along with MERN development, I also work with WordPress to build
              professional business websites, customize themes, manage
              content and create responsive websites based on client
              requirements.
            </p>

            <p>
              I enjoy learning new technologies, solving real-world problems
              and turning ideas into reliable digital products. My goal is to
              continue growing as a Software Engineer while contributing to
              meaningful projects.
            </p>

            {/* ABOUT INFO */}
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

          {/* RIGHT CARD */}
          <div className="about-card">

            <div className="about-card-icon">
              &lt;/&gt;
            </div>

            <h3>
              Full Stack & WordPress Development
            </h3>

            <p>
              I build complete web solutions using modern technologies,
              from React-based applications and REST APIs to professional
              WordPress websites and business solutions.
            </p>

            <div className="about-card-line"></div>

            {/* TECHNOLOGIES */}
            <div className="about-card-tech">

              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>WordPress</span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
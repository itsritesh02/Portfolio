import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">

        <div className="section-heading">
          <p>EXPERIENCE</p>

          <h2>
            My professional <span>journey</span>
          </h2>
        </div>

        <div className="experience-wrapper">

          <div className="experience-item">

            <div className="experience-dot"></div>

            <div className="experience-date">
              1+ Years Experience
            </div>

            <div className="experience-content">

              <div className="experience-header">

                <div>
                  <h3>MERN Stack Developer</h3>

                  <h4>
                    Arbaj Technology
                  </h4>
                </div>

                <span className="experience-badge">
                  Full Stack
                </span>

              </div>

              <p>
                Working as a MERN Stack Developer, building responsive
                and scalable web applications using modern frontend,
                backend and WordPress technologies.
              </p>

              <ul>
                <li>
                  Developed responsive and reusable React.js components
                  for modern web applications.
                </li>

                <li>
                  Built and integrated RESTful APIs using Node.js and
                  Express.js.
                </li>

                <li>
                  Designed and managed MongoDB databases using Mongoose.
                </li>

                <li>
                  Implemented authentication, authorization and CRUD
                  operations.
                </li>

                <li>
                  Developed and customized WordPress websites based on
                  business and client requirements.
                </li>

                <li>
                  Worked with WordPress, Elementor and WooCommerce for
                  website development and customization.
                </li>

                <li>
                  Integrated third-party services such as Cloudinary
                  and email services.
                </li>

                <li>
                  Worked with Git and GitHub for version control and
                  collaborative development.
                </li>
              </ul>

              <div className="experience-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>JWT</span>
                <span>REST API</span>
                <span>WordPress</span>
                <span>Elementor</span>
                <span>WooCommerce</span>
                <span>Git</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
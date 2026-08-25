const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">

        <div className="section-heading">
          <p>EXPERIENCE</p>
          <h2>My professional <span>journey</span></h2>
        </div>

        <div className="experience-wrapper">

          <div className="experience-item">

            <div className="experience-dot"></div>

            <div className="experience-date">
              2024 — Present
            </div>

            <div className="experience-content">

              <div className="experience-header">
                <div>
                  <h3>MERN Stack Developer</h3>
                  <h4>Software Development</h4>
                </div>

                <span className="experience-badge">
                  Full Stack
                </span>
              </div>

              <p>
                Working on modern full-stack web applications using
                MongoDB, Express.js, React.js and Node.js.
              </p>

              <ul>
                <li>
                  Developed responsive and reusable React components
                  for modern web interfaces.
                </li>

                <li>
                  Built RESTful APIs using Node.js and Express.js.
                </li>

                <li>
                  Integrated MongoDB with backend applications using
                  Mongoose.
                </li>

                <li>
                  Implemented CRUD operations, authentication and
                  API validation.
                </li>

                <li>
                  Worked with Git/GitHub and deployed applications
                  using modern deployment platforms.
                </li>
              </ul>

              <div className="experience-tech">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>JWT</span>
                <span>REST API</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
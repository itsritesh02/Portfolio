const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "MVC Architecture",
      ],
    },
    {
      title: "Database",
      items: [
        "MongoDB",
        "Mongoose",
        "Database Design",
        "CRUD Operations",
      ],
    },
    {
      title: "Tools & Others",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "Cloudinary",
        "Vercel",
        "Netlify",
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">

        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I <span>work with</span></h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-number">
                0{index + 1}
              </div>

              <h3>{skill.title}</h3>

              <div className="skill-items">
                {skill.items.map((item, itemIndex) => (
                  <span key={itemIndex}>
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;
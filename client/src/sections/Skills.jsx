import "./Skills.css";

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
      title: "Java & DSA",
      items: [
        "Java",
        "Data Structures",
        "Algorithms",
        "Arrays",
        "Strings",
        "Searching",
        "Sorting",
      ],
    },
    {
      title: "WordPress",
      items: [
        "WordPress",
        "Elementor",
        "WooCommerce",
        "Theme Customization",
        "Plugin Management",
        "cPanel",
      ],
    },
    {
      title: "Tools & Deployment",
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

          <h2>
            Technologies I <span>work with</span>
          </h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={skill.title}>

              <div className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{skill.title}</h3>

              <div className="skill-items">
                {skill.items.map((item) => (
                  <span key={item}>
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
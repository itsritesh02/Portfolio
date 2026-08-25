import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <section id="experience" className="placeholder-section">
          <h2>Experience</h2>
        </section>

        <section id="projects" className="placeholder-section">
          <h2>Projects</h2>
        </section>

        <section id="education" className="placeholder-section">
          <h2>Education</h2>
        </section>import Navbar from "./components/Navbar";

        import Hero from "./sections/Hero";
        import About from "./sections/About";
        import Skills from "./sections/Skills";
        import Experience from "./sections/Experience";

        function App() {
  return (
        <>
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />

            <section id="projects" className="placeholder-section">
              <h2>Projects</h2>
            </section>

            <section id="education" className="placeholder-section">
              <h2>Education</h2>
            </section>

            <section id="contact" className="placeholder-section">
              <h2>Contact</h2>
            </section>
          </main>
        </>
        );
}

        export default App;

        <section id="contact" className="placeholder-section">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App;
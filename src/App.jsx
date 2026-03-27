import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
import './index.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <video autoPlay loop muted playsInline className="page-video-bg">
          <source src="RotatingElephant.mp4" type="video/mp4" />
        </video>
        <div className="page-overlay"></div>

        <section id="hero" className="fade-in">
          <div className="container" style={{ textAlign: 'center', padding: '20px 0', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '1.2rem', color: '#aaaaaa', marginBottom: '1rem' }}>Indie Developer, Test Automation Engineer, & UX Obsessive</h2>
            <h1 style={{ fontSize: '5rem', lineHeight: '1', marginBottom: '2rem' }}>
              CRAFTING <span className="text-aqua">DIGITAL</span><br />
              EXPERIENCES WITH <span className="text-lemon">PRECISION</span> & <span style={{ color: '#ff69b4' }}>LOVE</span>.
            </h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: '#aaaaaa', fontSize: '1.2rem' }}>
              Neuroscientist turned Indie Video Game Developer turned Test Automation Engineer.
              Using taste, vision, and care to build software experiences that matter.
            </p>
          </div>
        </section>

        <section id="projects">
          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 style={{ marginBottom: '4rem', fontSize: '2.5rem', color: '#ffffff' }}>Featured <span className="text-aqua">Projects</span></h2>
          </div>

          <div className="projects-grid">
            <div className="projects-row">
              {projects.slice(0, 2).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
            <div className="projects-row">
              {projects.slice(2, 4).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + 2} />
              ))}
            </div>
            <div className="projects-row">
              {projects.slice(4, 6).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + 4} />
              ))}
            </div>
            <div className="projects-row">
              {projects.slice(6, 8).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + 6} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={{ background: '#1e1e1e', position: 'relative', zIndex: 1 }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '0.4rem', color: '#ffffff' }}>LET'S <span className="text-lemon">TALK</span></h2>
            <p style={{ marginBottom: '0.6rem', color: '#888888' }}>Interested in working together? Drop a line.</p>
            <a href="KharyFilerResume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-aqua">Hire Me</a>
          </div>
        </section>
      </main>

      <footer style={{ padding: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#888' }}>&copy; 2026 Khary Filer. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;

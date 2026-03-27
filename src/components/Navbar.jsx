const Navbar = () => {
  return (
    <header>
      <div className="container" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4rem' }}>
        <div className="logo">
          <h1 style={{ fontSize: '3rem', margin: 0 }}>
            <span className="title-gradient">KHARY</span> FILER
          </h1>
        </div>
        
        <nav>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <li><a href="#projects" className="text-aqua">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <div className="cta">
          <a href="KharyFilerResume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-aqua" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

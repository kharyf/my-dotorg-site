const Navbar = () => {
  return (
    <header>
      <div className="container nav-container">
        <div className="logo">
          <h1 className="logo-title">
            <span className="title-gradient">KHARY</span> FILER
          </h1>
        </div>
        
        <nav className="nav-links">
          <ul>
            <li><a href="#projects" className="text-aqua">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <div className="cta">
          <a href="KharyFilerResume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-aqua btn-nav">
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import Carousel from './Carousel';

const ProjectCard = ({ project, index }) => {
  const objectFit = index <= 2 || index === 5 ? 'cover' : 'contain';
  const objectPosition = index === 0 ? 'center 20%' : 'center';
  return (
    <div className="project-card-wrapper">
      <div className="parallelogram-container">
        <div className="unskew-content">
          <div className="project-content">
            <div className="project-carousel-side">
              <Carousel images={project.images} objectFit={objectFit} objectPosition={objectPosition} />
            </div>
            
            <div className="project-info-side">
              <div className="project-header">
                <span className="project-number">0{index + 1}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-bottom">
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                
                <a href={project.link} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                {project.link2 && (
                  <a href={project.link2} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    View GitLab
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

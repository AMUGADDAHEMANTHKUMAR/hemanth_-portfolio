import { ReactLenis } from "lenis/react";
import Copy from "@/components/Copy";
import { portfolioContent } from "@/data/portfolioContent";

export default function Page() {
  return (
    <>
      <ReactLenis root />
      <div className="container">
        <div className="archive">
          <div className="page-header archive-header">
            <Copy delay={0.1}>
              <h1 style={{ fontSize: 'clamp(3rem, 15vw, 25rem)', lineHeight: '0.8', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                SELECTED WORKS
              </h1>
            </Copy>
          </div>

          <div className="projects-list">
            {portfolioContent.projects.map((project, index) => (
              <div key={index} className={`project-card project-card-row ${index === 2 ? 'project-card-reversed' : ''}`}>
                {index === 2 ? (
                  <>
                    <div className="project-image" style={{ flex: '0.8', height: '50vh', overflow: 'hidden', position: 'relative' }}>
                      <img src={`/img_0${(index % 4) + 1}.jpg`} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="project-details" style={{ flex: '1.2' }}>
                      <Copy animateOnScroll={true} delay={0.1}>
                        <h3 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', textTransform: 'uppercase', lineHeight: '1' }}>{project.title}</h3>
                        <p style={{ fontFamily: 'DM Mono', fontSize: '1.1rem', marginBottom: '2.25rem', color: '#555' }}>// {project.tech}</p>
                        <p style={{ lineHeight: '1.5', fontSize: '1.3rem', marginBottom: '2.5rem' }}>{project.description}</p>

                        <div className="project-links">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            <span className="link-text">View Project</span>
                          </a>
                          <span style={{ margin: '0 1rem', color: '#141414' }}>•</span>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            <span className="link-text">GitHub</span>
                          </a>
                        </div>
                      </Copy>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="project-details" style={{ flex: '1.2' }}>
                      <Copy animateOnScroll={true} delay={0.1}>
                        <h3 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', textTransform: 'uppercase', lineHeight: '1' }}>{project.title}</h3>
                        <p style={{ fontFamily: 'DM Mono', fontSize: '1.1rem', marginBottom: '2.25rem', color: '#555' }}>// {project.tech}</p>
                        <p style={{ lineHeight: '1.5', fontSize: '1.3rem', marginBottom: '2.5rem' }}>{project.description}</p>

                        <div className="project-links">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            <span className="link-text">View Project</span>
                          </a>
                          <span style={{ margin: '0 1rem', color: '#141414' }}>•</span>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            <span className="link-text">GitHub</span>
                          </a>
                        </div>
                      </Copy>
                    </div>
                    <div className="project-image" style={{ flex: '0.8', height: '50vh', overflow: 'hidden', position: 'relative' }}>
                      <img src={`/img_0${(index % 4) + 1}.jpg`} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="education-section">
            <Copy animateOnScroll={true}>
              <h2>Education</h2>
            </Copy>
            <div className="education-list">
              {portfolioContent.education.map((edu, idx) => (
                <div key={idx} className="education-item">
                  <Copy animateOnScroll={true}>
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <p className="years">{edu.years}</p>
                  </Copy>
                  {idx < portfolioContent.education.length - 1 && <div className="education-gap"></div>}
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <Copy animateOnScroll={true}>
              <h2>Certifications</h2>
            </Copy>
            <div className="certifications-list">
              {portfolioContent.certifications.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <Copy animateOnScroll={true}>
                    <p>• {cert}</p>
                  </Copy>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

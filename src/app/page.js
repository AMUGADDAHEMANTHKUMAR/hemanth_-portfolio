import Copy from "@/components/Copy";
import { portfolioContent } from "@/data/portfolioContent";

export default function Page() {
  return (
    <>
      <div className="container home-container">
        <div className="page-header home-hero">
          <div className="hero-content-wrapper">
            <Copy delay={0.1}>
              <p className="hero-title">
                Aspiring Data Analyst
              </p>
            </Copy>
            <Copy delay={0.3}>
              <h1 className="hero-name">
                <span className="name-word">AMUGADDA</span>
                <span className="name-word">HEMANTH</span>
                <span className="name-word">KUMAR</span>
              </h1>
            </Copy>
            <Copy delay={0.5}>
              <p className="hero-tagline">
                Data cleaning • EDA • Dashboards • SQL
              </p>
            </Copy>
          </div>
        </div>

        <section className="about-section">
          <div className="section-gap"></div>
          <Copy animateOnScroll={true} delay={0.2}>
            <h2 className="section-title">About Me</h2>
            <p className="section-text">{portfolioContent.summary}</p>
          </Copy>
        </section>

        <section className="skills-section">
          <div className="section-gap"></div>
          <Copy animateOnScroll={true} delay={0.2}>
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {portfolioContent.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </Copy>
        </section>
      </div>
    </>
  );
}

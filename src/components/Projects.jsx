import { projects } from '../data/index.js'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label">03. Projects</p>
        <h2 className="section-heading">Things I've <span>Built</span></h2>

        {projects.map((project, i) => (
          <div className="project-card card fade-in" key={i}>
            <div className="project-header">
              <div>
                <span className="tag project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <span className="project-date mono">{project.date}</span>
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="View on GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    View on GitHub ↗
                  </a>
                )}
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-highlights">
              <p className="highlights-label mono">Key achievements:</p>
              <ul>
                {project.highlights.map((h, j) => (
                  <li key={j}>
                    <span className="highlight-dot" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}

        {/* Coming soon placeholder */}
        <div className="project-coming-soon card">
          <div className="coming-soon-inner">
            <span className="mono text-accent">// more projects coming soon</span>
            <p className="text-muted">AWS, Azure, and networking labs in progress</p>
          </div>
        </div>
      </div>
    </section>
  )
}

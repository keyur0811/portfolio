import { useState } from 'react'
import { experience, education, certifications } from '../data/index.js'
import './Experience.css'

export default function Experience() {
  const [active, setActive] = useState(0)

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <p className="section-label">04. Experience</p>
        <h2 className="section-heading">Where I've <span>Worked</span></h2>

        <div className="exp-layout">
          {/* Tab list */}
          <div className="exp-tabs">
            {experience.map((job, i) => (
              <button
                key={i}
                className={`exp-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="exp-tab-company">{job.company}</span>
                <span className="exp-tab-period mono">{job.period}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="exp-content">
            {experience.map((job, i) => (
              <div key={i} className={`exp-panel ${active === i ? 'active' : ''}`}>
                <div className="exp-role-row">
                  <h3 className="exp-role">{job.role}</h3>
                  <span className="exp-type tag">{job.type}</span>
                </div>
                <p className="exp-company-name text-accent mono">{job.company}</p>
                <p className="exp-period text-muted mono">{job.period}</p>
                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="bullet-arrow">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="sub-section">
          <h3 className="sub-heading">Education</h3>
          <div className="edu-grid">
            {education.map((edu, i) => (
              <div className="card edu-card" key={i}>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-school text-accent">{edu.school}</div>
                <div className="edu-meta">
                  <span className="mono">{edu.period}</span>
                  <span>·</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="sub-section">
          <h3 className="sub-heading">Certifications</h3>
          <div className="cert-list">
            {certifications.map((cert, i) => (
              <div className="card cert-card" key={i}>
                <div className="cert-icon">🏅</div>
                <div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-status">
                    <span className="tag tag-progress">{cert.status}</span>
                    <span className="mono cert-expected">Expected: {cert.expected}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { skills } from '../data/index.js'
import './Skills.css'

const categoryIcons = {
  "Operating Systems": "🖥️",
  "Cloud Platforms": "☁️",
  "Networking": "🌐",
  "Virtualization": "⚙️",
  "Tools & Remote": "🛠️",
  "Hardware": "🔧",
}

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <p className="section-label">02. Skills</p>
        <h2 className="section-heading">Technical <span>Expertise</span></h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], i) => (
            <div className={`card skills-card fade-in delay-${(i % 4) + 1}`} key={category}>
              <div className="skills-card-header">
                <span className="skills-icon">{categoryIcons[category]}</span>
                <h3 className="skills-category">{category}</h3>
              </div>
              <div className="skills-tags">
                {items.map((skill) => (
                  <span className="skill-pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

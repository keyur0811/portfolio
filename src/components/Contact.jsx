import { profile } from '../data/index.js'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <p className="section-label">05. Contact</p>
        <h2 className="section-heading">Get In <span>Touch</span></h2>

        <div className="contact-layout">
          <div className="contact-left fade-in">
            <p className="contact-intro">
              I'm currently open to IT Support, Cloud, or entry-level Systems roles in Toronto.
              Whether you have an opportunity, a question, or just want to connect — my inbox is open.
            </p>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`} className="contact-item">
                <span className="contact-item-icon">✉</span>
                <div>
                  <span className="contact-item-label mono">Email</span>
                  <span className="contact-item-value">{profile.email}</span>
                </div>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="contact-item-icon">in</span>
                <div>
                  <span className="contact-item-label mono">LinkedIn</span>
                  <span className="contact-item-value">linkedin.com/in/keyurambekar</span>
                </div>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="contact-item-icon">⌥</span>
                <div>
                  <span className="contact-item-label mono">GitHub</span>
                  <span className="contact-item-value">github.com/keyur0811</span>
                </div>
              </a>
              <div className="contact-item contact-item-static">
                <span className="contact-item-icon">⌖</span>
                <div>
                  <span className="contact-item-label mono">Location</span>
                  <span className="contact-item-value">{profile.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right fade-in delay-2">
            <div className="contact-cta card">
              <div className="cta-glow" />
              <p className="mono text-accent cta-label">// open to opportunities</p>
              <h3 className="cta-heading">Let's work together</h3>
              <p className="cta-body">
                Looking for an IT support or cloud computing role where I can apply my
                skills in virtualization, networking, and system administration.
              </p>
              <a href={`mailto:${profile.email}`} className="btn btn-primary cta-btn">
                Say Hello ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

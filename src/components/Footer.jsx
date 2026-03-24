import { profile } from '../data/index.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="mono text-accent footer-logo">KA</span>
          <span className="footer-copy">
            Designed & built by <span className="text-accent">Keyur Ambekar</span>
          </span>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-link mono">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link mono">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="footer-link mono">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

import { profile } from '../data/index.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Glow orbs */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container hero-content">
        <p className="hero-greeting fade-in mono">Hi, my name is</p>
        <h1 className="hero-name fade-in delay-1">{profile.name}</h1>
        <h2 className="hero-role fade-in delay-2">{profile.role}<span className="cursor">_</span></h2>
        <p className="hero-summary fade-in delay-3">
          {profile.summary}
        </p>

        <div className="hero-meta fade-in delay-4">
          <span className="tag">📍 {profile.location}</span>
          <span className="tag">🎓 Cloud Computing Graduate</span>
          <span className="tag tag-progress">⚙️ CompTIA A+ – In Progress</span>
        </div>

        <div className="hero-cta fade-in delay-5">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work ↓
          </button>
          <button
            className="btn btn-outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
        </div>

        <div className="hero-links fade-in delay-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-icon-link">
            <GithubIcon />
            <span>GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-icon-link">
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>
          <a href={`mailto:${profile.email}`} className="hero-icon-link">
            <EmailIcon />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

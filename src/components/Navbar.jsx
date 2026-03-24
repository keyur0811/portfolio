import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="mono text-accent">KA</span>
          <span className="nav-logo-dot" />
        </button>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <button onClick={() => handleNav(l)} className="nav-link">
                <span className="nav-link-num mono">0{links.indexOf(l) + 1}.</span>
                {l}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="btn btn-outline nav-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </li>
        </ul>

        <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <button key={l} onClick={() => handleNav(l)} className="mobile-link">
            <span className="mono text-accent">0{links.indexOf(l) + 1}. </span>{l}
          </button>
        ))}
        <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
          Résumé ↗
        </a>
      </div>
    </nav>
  )
}

import { profile } from '../data/index.js'
import './About.css'

const highlights = [
  { label: "Years of Experience", value: "5+", sub: "Web & IT" },
  { label: "Cloud Cert", value: "AWS", sub: "+ Azure + GCP" },
  { label: "Home Lab", value: "Live", sub: "Proxmox VE" },
  { label: "CompTIA A+", value: "Apr", sub: "2026" },
]

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div className="about-text fade-in">
          <p className="section-label">01. About Me</p>
          <h2 className="section-heading">A little bit <span>about me</span></h2>
          <p className="about-body">
            I'm a Computer Engineering graduate with a passion for building reliable infrastructure
            and solving real technical problems. Based in Toronto, I recently completed a Cloud
            Computing graduate certificate at Loyalist College and have been hands-on with
            AWS, Azure, and Google Cloud.
          </p>
          <p className="about-body">
            When I'm not studying for CompTIA A+, I'm running my own home lab — a Proxmox
            server hosting multiple virtual machines, letting me practice real-world networking,
            OS administration, and system configuration in a live environment.
          </p>
          <p className="about-body">
            I previously worked as a web designer, which gave me a solid foundation in client
            communication, technical problem-solving, and delivering work under pressure —
            skills that translate directly into IT support.
          </p>

          <div className="about-stats">
            {highlights.map((h) => (
              <div className="stat-card" key={h.label}>
                <span className="stat-value mono">{h.value}</span>
                <span className="stat-sub">{h.sub}</span>
                <span className="stat-label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual fade-in delay-2">
          <div className="terminal-card card">
            <div className="terminal-bar">
              <span className="t-dot t-red" />
              <span className="t-dot t-yellow" />
              <span className="t-dot t-green" />
              <span className="t-title mono">keyur@homelab:~</span>
            </div>
            <div className="terminal-body mono">
              <TermLine prompt="$" cmd="whoami" />
              <TermOut>keyur_ambekar</TermOut>
              <TermLine prompt="$" cmd="cat roles.txt" />
              <TermOut>IT Support Engineer</TermOut>
              <TermOut>Cloud Practitioner</TermOut>
              <TermOut>Home Lab Builder</TermOut>
              <TermLine prompt="$" cmd="cat location.txt" />
              <TermOut>Toronto, Ontario 🍁</TermOut>
              <TermLine prompt="$" cmd="cat status.txt" />
              <TermOut><span className="text-accent">Open to work</span> ✓</TermOut>
              <TermLine prompt="$" cmd="ls certifications/" />
              <TermOut>cloud-computing.cert</TermOut>
              <TermOut>comptia-a+.cert <span className="term-badge">[in-progress]</span></TermOut>
              <TermLine prompt="$" cmd="_" blink />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TermLine({ prompt, cmd, blink }) {
  return (
    <div className="term-line">
      <span className="term-prompt">{prompt}</span>
      <span className="term-cmd">{cmd}</span>
      {blink && <span className="cursor">█</span>}
    </div>
  )
}

function TermOut({ children }) {
  return <div className="term-out">{children}</div>
}

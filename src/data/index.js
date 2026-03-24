export const profile = {
  name: "Keyur Ambekar",
  role: "IT Support & Cloud Computing Professional",
  tagline: "Building reliable systems. Solving real problems.",
  location: "Toronto, Ontario",
  email: "keyurambekar@gmail.com",
  linkedin: "https://linkedin.com/in/keyurambekar",
  github: "https://github.com/keyur0811",
  summary:
    "Entry-level IT Support professional with a background in Computer Engineering and hands-on experience building a home lab using virtualization and networking technologies. Skilled in troubleshooting operating systems, configuring virtual machines, and supporting end-user technical issues.",
};

export const skills = {
  "Operating Systems": ["Windows 10 / Server", "Linux (Debian)", "Proxmox", "macOS"],
  "Cloud Platforms": ["AWS (EC2, S3, IAM, VPC)", "Azure (AD, Storage)", "Google Cloud Basics"],
  "Networking": ["TCP/IP", "DNS", "DHCP", "Router Config", "LAN / Wi-Fi", "Remote Access"],
  "Virtualization": ["Proxmox VE", "VM Deployment", "ISO Installation", "Resource Allocation"],
  "Tools & Remote": ["RDP", "SSH", "Git / GitHub", "VS Code", "ServiceNow", "Jira", "Zendesk"],
  "Hardware": ["PC Components", "BIOS / UEFI", "SSD / HDD", "Peripherals", "Printer Support"],
};

export const projects = [
  {
    title: "Home Lab Server & Virtualization Environment",
    date: "03/2026 – Present",
    category: "Self-Hosted IT Lab",
    description:
      "Built a production-grade home lab server using a Lenovo laptop running Proxmox VE (Type-1 hypervisor). Deployed and managed multiple VMs including Windows Server and Linux environments with full networking and remote access.",
    highlights: [
      "Configured TCP/IP, DNS, and gateway settings for inter-VM communication",
      "Set up Wake-on-LAN (WOL) for remote power management",
      "Installed OSes via bootable ISOs with virtualization storage config",
      "Modified Linux power management for lid-closed server operation",
      "Practiced VM resource allocation (CPU, RAM, storage) and monitoring",
      "Remote management via Proxmox web interface",
    ],
    tags: ["Proxmox", "Linux", "Windows Server", "Networking", "Virtualization"],
    github: "https://github.com/keyur0811/technical-support-lab-notes",
  },
];

export const experience = [
  {
    company: "Cineplex Cinemas Varsity and VIP",
    role: "Cast Member",
    type: "Part-time",
    period: "11/2023 – Present",
    bullets: [
      "Provided customer-facing technical support and troubleshooting in a high-volume environment",
      "Troubleshot guest issues with POS systems and ticketing workflows",
      "Communicated clearly with customers to understand issues and deliver solutions",
      "Maintained operational efficiency during high-traffic periods",
    ],
  },
  {
    company: "I Vision Infotech Pvt Ltd",
    role: "Web Designer",
    type: "Full-time",
    period: "06/2021 – 07/2023",
    bullets: [
      "Designed responsive web interfaces using HTML, CSS, and JavaScript",
      "Troubleshot client-reported website issues related to performance and layout",
      "Collaborated with developers to resolve UI issues and improve usability",
      "Optimized code and assets to improve website performance",
    ],
  },
  {
    company: "Bvalvue Technologies Pvt Ltd",
    role: "Web Designer",
    type: "Full-time",
    period: "07/2020 – 05/2021",
    bullets: [
      "Designed user-focused web layouts improving accessibility and UX",
      "Performed usability testing and implemented improvements based on feedback",
      "Managed multiple client projects under tight deadlines",
    ],
  },
];

export const education = [
  {
    degree: "Ontario College Graduate Certificate in Cloud Computing",
    school: "Loyalist College",
    location: "Toronto, Ontario, Canada",
    period: "09/2023 – 04/2025",
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    school: "Ganpat University (U.V. Patel College of Engineering)",
    location: "Mehsana, Gujarat, India",
    period: "07/2016 – 05/2020",
  },
];

export const certifications = [
  {
    name: "CompTIA A+ (220-1201 / 220-1202)",
    status: "In Progress",
    expected: "April 2026",
  },
];

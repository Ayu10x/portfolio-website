// lib/site.ts
// Single source for site content. Edit text here, not in the pages.

export const profile = {
  name: 'Ayush Pattnaik',
  headline: 'Backend Developer · Java & Spring Boot · REST APIs · MERN',
  pitch:
    'I build, fix and secure backend systems for startups, agencies and small businesses: REST APIs, integrations, deployments, migrations and hacked-site recovery. Fixed scope, clear quotes, delivered in days.',
  email: 'ayp.scp@gmail.com',
  phone: '+91 7978944854',
  location: 'Bhubaneswar, Odisha, India',
  github: 'https://github.com/Ayu10x',
  linkedin: 'https://www.linkedin.com/in/ayupattnaik19',
  // Replace with the link to the updated resume PDF
  resume: 'https://drive.google.com/file/d/1LB7abRSwYroicnWqnygsm8OKXEmsPQLv/view?usp=sharing',
}

export const services = [
  {
    name: 'Website Rescue',
    from: '₹3,000',
    delivery: '1–3 days',
    summary: 'Your site or app is broken, slow to deploy or has bugs nobody has time for.',
    items: [
      'Fix broken APIs and frontend bugs',
      'Resolve failing builds and deployments',
      'Fix database connection and query errors',
      'Up to 3 issues per job, agreed upfront',
    ],
  },
  {
    name: 'Backend / API Development',
    from: '₹7,000',
    delivery: '3–6 days',
    summary: 'You need a backend module built properly, documented and deployed.',
    items: [
      'Spring Boot or Node/Express REST APIs',
      'JWT authentication and role-based access',
      'CRUD modules and third-party API integrations',
      'Swagger docs and a Postman collection',
    ],
  },
  {
    name: 'Security & Migration',
    from: '₹8,000',
    delivery: '3–7 days',
    summary: 'Your site was hacked, or you are moving servers and want it done safely.',
    items: [
      'Hacked-site investigation and cleanup',
      'Clean rebuild and migration to a new server',
      'Hardening: firewall, TLS, headers, access lockdown',
      'Daily backups and automated integrity checks',
    ],
  },
]

export const caseStudy = {
  title: 'Hacked WordPress site: investigation, clean rebuild and hardening',
  client: 'A funded Indian technology startup · WordPress on AWS · Sep 2026',
  problem:
    'The site had been hacked and was serving 303 hidden spam links to Google for 18 days. Every cleanup by the in-house team failed: the infection came back within a minute.',
  work: [
    'Found the cause: a backdoor that reinstalled itself on every page load, hidden with faked file dates so normal checks missed it',
    'Audited the AWS account and server OS to confirm the attack had not spread beyond the website',
    'Rebuilt on a new AWS server, carrying over content only, never code, from the infected one',
    'Hardened it: Cloudflare strict TLS, firewall, 5 security headers, XML-RPC and user enumeration closed',
    'Handled a second incident (a stolen admin password) the same day it was detected',
  ],
  results: [
    { value: '22 + 34', label: 'malicious files and database records removed' },
    { value: '85,000+', label: 'enquiry records migrated, none lost' },
    { value: '113', label: 'pages verified working after go-live' },
    { value: '11', label: 'automated daily integrity checks deployed' },
  ],
  stack: ['WordPress', 'PHP', 'MySQL', 'AWS Lightsail', 'Cloudflare', 'Linux'],
}

export const process = [
  { step: 'Short call', detail: 'You explain the problem; I ask the questions that matter.' },
  { step: 'Fixed quote', detail: 'Written scope, deliverables, exclusions, price and timeline.' },
  { step: '50% to start', detail: 'Work begins once the scope is approved and the advance is in.' },
  { step: 'Demo & handover', detail: 'I show it working; balance on acceptance; code and docs handed over.' },
]

export const experiences = [
  {
    title: 'Freelance Backend & Security Developer',
    company: 'Independent',
    duration: 'Sep 2026 – Present',
    points: [
      'Investigated and recovered a hacked WordPress site for a funded tech startup: found a self-reinstalling backdoor that in-house cleanups had missed',
      'Rebuilt the site on a new AWS server and migrated 114 pages, 2,050 media files and 85,000+ enquiry records with nothing lost',
      'Hardened the stack (Cloudflare strict TLS, firewall, security headers) and set up daily backups and an automated integrity scan',
    ],
  },
  {
    title: 'Backend Developer (full-time)',
    company: 'Enterprise software company',
    duration: 'Dec 2024 – Present',
    points: [
      'Build and maintain Spring Boot microservices with MongoDB and Kafka',
      'Design high-throughput REST APIs with a focus on performance and clean architecture',
    ],
  },
  {
    title: 'Product Consultant Intern',
    company: 'HighRadius',
    duration: 'May 2023 – Jul 2023',
    points: [
      'Learned order-to-cash processes and the HighRadius product suite',
      'Ran product demonstrations and communicated value to prospects',
    ],
  },
  {
    title: 'President, Innovation & Entrepreneurship Cell',
    company: "Siksha 'O' Anusandhan (ITER)",
    duration: 'Apr 2021 – May 2024',
    points: ['Led the student startup cell; ran events and workshops on campus'],
  },
]

export const projects = [
  {
    title: 'Loadout',
    description:
      'A catalog of AI coding skills and agents for Claude Code and Codex. Each one is tested on real repositories, dated, and checked for unsafe instructions.',
    technologies: ['JavaScript', 'Node.js', 'AI tooling'],
    link: 'https://github.com/Ayu10x/loadout',
    note: 'Early preview (v0.1)',
  },
  {
    title: 'Multimodal AI Chat',
    description:
      'A chat application that runs quantized models locally and handles text, audio (Whisper), images and PDFs in one interface.',
    technologies: ['Python', 'LLMs', 'Whisper'],
    link: 'https://github.com/Ayu10x/local_multimodal_ai_chat',
    note: 'Published in ODICON 2024 proceedings (IEEE)',
  },
  {
    title: 'Spring Security Web App',
    description:
      'Form login, role-based access control and protected routes configured with Spring Security.',
    technologies: ['Java', 'Spring Boot', 'Spring Security'],
    link: 'https://github.com/Ayu10x/securing-web-app',
  },
  {
    title: 'Book Microservice',
    description: 'A REST microservice with full CRUD for book resources, built on Django REST Framework.',
    technologies: ['Python', 'Django REST Framework'],
    link: 'https://github.com/Ayu10x/django-book-microservice',
  },
  {
    title: 'Object Detection on Raspberry Pi',
    description:
      'Real-time object detection on a Raspberry Pi 3 B+ with the Pi Camera, using TensorFlow Lite and OpenCV.',
    technologies: ['Python', 'TensorFlow Lite', 'OpenCV'],
  },
]

export const skills = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security / JWT', 'Node.js', 'Express', 'REST APIs', 'Kafka'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind'] },
  { group: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL'] },
  { group: 'Tools', items: ['Docker', 'Git', 'Postman', 'Swagger / OpenAPI', 'IntelliJ', 'VS Code'] },
  { group: 'Also', items: ['Python', 'Django REST Framework', 'Local LLMs'] },
]

export const achievements = [
  'Paper published at ODICON 2024 (IEEE)',
  'LeetCode contest rating 1778',
  'HackerRank certified: Java, Python, SQL',
  'B.Tech Computer Science, ITER (S\'O\'A), 9.12 CGPA',
]

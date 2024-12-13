// app/skills/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Code, Database, Wrench } from 'lucide-react'

const skills = {
  languages: [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "SQL", level: 75 },
    { name: "HTML/CSS", level: 85 }
  ],
  frameworks: [
    { name: "Node.js", level: 75 },
    { name: "Spring Boot", level: 70 }
  ],
  tools: [
    "Git",
    "VS Code",
    "Android Studio",
    "IntelliJ",
    "Eclipse"
  ],
  interests: [
    "Artificial Intelligence",
    "Cloud Technologies",
    "Blockchain",
    "Competitive Coding"
  ]
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-base-200 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-12 text-center text-primary">
          Skills & Expertise
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <div className="flex items-center mb-4">
                <Code className="mr-3 text-primary" />
                <h2 className="card-title">Languages</h2>
              </div>
              {skills.languages.map((lang, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span>{lang.name}</span>
                    <span>{lang.level}%</span>
                  </div>
                  <progress 
                    className="progress progress-primary w-full" 
                    value={lang.level} 
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <div className="flex items-center mb-4">
                <Database className="mr-3 text-primary" />
                <h2 className="card-title">Frameworks</h2>
              </div>
              {skills.frameworks.map((framework, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span>{framework.name}</span>
                    <span>{framework.level}%</span>
                  </div>
                  <progress 
                    className="progress progress-secondary w-full" 
                    value={framework.level} 
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <div className="flex items-center mb-4">
                <Wrench className="mr-3 text-primary" />
                <h2 className="card-title">Dev Tools & Interests</h2>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span key={index} className="badge badge-outline">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="badge badge-primary badge-outline"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title">HackerRank</h3>
                <p>Java, Python, SQL Certified</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title">Udemy</h3>
                <p>Web Development Certification</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title">LeetCode</h3>
                <p>Contest Rating: 1778</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
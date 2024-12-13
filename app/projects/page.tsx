// app/projects/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Code, Github } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: "Multimodal AI Research Project",
    description: "A hands-on project combining AI models for audio, image, and PDF processing into a user-friendly multimodal chat application.",
    technologies: ["Python", "AI", "Multimodal Processing"],
    githubLink: "https://github.com/Ayu10x/local_multimodal_ai_chat",
    conference: "3rd Odisha International Conference on Electrical Power Engineering, Communication, and Computing Technology (ODICON 2024)"
  },
  {
    title: "Object Detection with Raspberry Pi",
    description: "Developed an object detection project using Raspberry Pi 3 B+ and Raspberry Pi Camera, integrating TensorFlow Lite and OpenCV for real-time image processing.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Raspberry Pi"],
    githubLink: "",
    highlights: [
      "Enhanced proficiency in embedded systems",
      "Implemented machine learning in edge computing",
      "Real-time image processing capabilities"
    ]
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-base-200 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-12 text-center text-primary">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body">
                  <div className="flex items-center mb-4">
                    <Code className="mr-3 text-primary" />
                    <h2 className="card-title">{project.title}</h2>
                  </div>
                  <p className="mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="badge badge-primary badge-outline"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.highlights && (
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">Key Highlights</h3>
                      <ul className="list-disc list-inside text-sm">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.conference && (
                    <div className="alert alert-info shadow-lg mt-4">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="text-xs">{project.conference}</span>
                      </div>
                    </div>
                  )}

                  <div className="card-actions justify-end mt-4">
                    {project.githubLink ? (
                      <Link 
                        href={project.githubLink} 
                        target="_blank" 
                        className="btn btn-ghost btn-sm"
                      >
                        <Github className="mr-2" /> View on GitHub
                      </Link>
                    ) : (
                      <div className="badge badge-ghost">Private Project</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
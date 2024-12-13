// app/experience/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: "Product Consultant - Intern",
    company: "HighRadius",
    duration: "May 2023 – July 2023",
    description: [
      "Developed an in-depth understanding of order-to-cash processes",
      "Gained expertise in HighRadius products and their functionalities",
      "Conducted product demonstrations and communicated value propositions"
    ]
  },
  {
    title: "President, Innovation And Entrepreneurship Cell",
    company: "Siksha 'O' Anusandhan",
    duration: "Apr 2021 - May 2024",
    description: [
      "Leading a dynamic organization fostering startup culture",
      "Organizing events and workshops to promote innovation",
      "Empowering students to transform ideas into successful innovations"
    ]
  },
  {
    title: "Customer Experience Researcher",
    company: "AGE19 Enterprise",
    duration: "Oct 2020 – Jun 2022",
    description: [
      "Collaborated with customers to gain insights and enhance satisfaction",
      "Managed brand promotions and influencer collaborations",
      "Maintained accurate inventory records"
    ]
  }
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-base-200 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-12 text-center text-primary">
          Professional Experience
        </h1>

        <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-middle"
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} md:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <div className="flex items-center mb-2">
                        <Briefcase className="mr-3 text-primary" />
                        <h3 className="card-title text-xl">{exp.title}</h3>
                      </div>
                      <p className="text-sm font-semibold mb-2">{exp.company} | {exp.duration}</p>
                      <ul className="list-disc list-inside text-sm">
                        {exp.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
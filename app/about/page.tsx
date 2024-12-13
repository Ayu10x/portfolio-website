'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base-200 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-primary">
              About Me
            </h1>
            <div className="prose lg:prose-xl">
              <p>
                I am a passionate Computer Science Engineer graduating from Siksha 'O' Anusandhan with a remarkable 9.12 CGPA. My academic journey has been marked by a deep interest in cutting-edge technologies like Generative AI, Artificial Intelligence, and Cloud Computing.
              </p>
              <p>
                As the President of the Innovation and Entrepreneurship Cell, I have been instrumental in fostering a vibrant startup culture, organizing events that inspire and empower students to transform their innovative ideas into reality.
              </p>
              <p>
                My professional experience includes internships and research projects that have honed my skills in product consulting, customer experience, and advanced technological domains.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl">Education</h3>
                <p>B.Tech in Computer Science</p>
                <p className="text-sm">Siksha 'O' Anusandhan</p>
                <p className="text-primary font-bold">9.12 CGPA</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl">Research</h3>
                <p>Multimodal AI Project</p>
                <p className="text-sm">ODICON 2024 Conference</p>
                <p className="text-primary font-bold">Presented Research</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl">Interests</h3>
                <ul className="list-disc text-left">
                  <li>Gen AI</li>
                  <li>Cloud Tech</li>
                  <li>OpenSource</li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl">Achievements</h3>
                <p>LeetCode Rating</p>
                <p className="text-primary font-bold">1778</p>
                <p className="text-sm">HackerRank Certified</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
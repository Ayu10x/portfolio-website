// app/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'

export default function HomePage() {
  const RESUME_GOOGLE_DRIVE_LINK = "https://drive.google.com/file/d/1LB7abRSwYroicnWqnygsm8OKXEmsPQLv/view?usp=sharing"

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="avatar mb-8">
            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img 
                src="/images/profile.JPG" 
                alt="Ayush Pattnaik" 
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Ayush Pattnaik
          </h1>
          
          <p className="text-xl mb-6">
            Computer Science Engineer | AI Enthusiast | Innovator
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <Link 
              href="https://github.com/Ayu10x" 
              target="_blank" 
              className="btn btn-circle btn-outline"
            >
              <Github />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/ayupattnaik19" 
              target="_blank" 
              className="btn btn-circle btn-outline"
            >
              <Linkedin />
            </Link>
          </div>

          <div className="flex justify-center space-x-4">
            <Link 
              href={RESUME_GOOGLE_DRIVE_LINK} 
              target="_blank"
              className="btn btn-primary"
            >
              <Download className="mr-2" />
              Download Resume
            </Link>
            <Link 
              href="/contact" 
              className="btn btn-outline btn-primary"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
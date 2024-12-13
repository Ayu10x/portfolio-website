// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Using environment variable
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Using environment variable
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Using environment variable
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-200 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-12 text-center text-primary">
          Contact Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-base-100 p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Get in Touch
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-4 text-primary" />
                <a 
                  href="mailto:ayp.scp@gmail.com" 
                  className="hover:text-primary"
                >
                  ayp.scp@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="mr-4 text-primary" />
                <a 
                  href="tel:+917978944854" 
                  className="hover:text-primary"
                >
                  +(91) 7978944854
                </a>
              </div>
              
              <div className="flex items-center">
                <MapPin className="mr-4 text-primary" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
              
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.linkedin.com/in/ayupattnaik19" 
                  target="_blank" 
                  className="btn btn-circle btn-outline"
                >
                  <Linkedin />
                </a>
                <a 
                  href="https://github.com/Ayu10x" 
                  target="_blank" 
                  className="btn btn-circle btn-outline"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-base-100 p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Send Me a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="input input-bordered"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="input input-bordered"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  required
                  className="textarea textarea-bordered h-24"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
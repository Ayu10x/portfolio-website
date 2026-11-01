// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { profile, services } from '@/lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const emptyForm = { name: '', email: '', service: '', message: '' }

export default function ContactPage() {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Service goes into the message so the existing EmailJS template keeps working
      const message = formData.service ? `[${formData.service}]\n\n${formData.message}` : formData.message
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: formData.name, from_email: formData.email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      setFormData(emptyForm)
      setStatus('sent')
    } catch (error) {
      console.error('Failed to send message:', error)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-base-200 pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-3">Contact</h1>
        <p className="text-slate-600 mb-10 max-w-2xl">
          Tell me what is broken or what you need built, and when you need it. I reply within a day with questions or a
          fixed quote.
        </p>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="card p-8 md:col-span-2 h-fit">
            <h2 className="text-xl font-semibold mb-6">Direct</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-4 h-5 w-5 text-primary" />
                <a href={`mailto:${profile.email}`} className="hover:text-primary">{profile.email}</a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 h-5 w-5 text-primary" />
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-primary">{profile.phone}</a>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4 h-5 w-5 text-primary" />
                <span>{profile.location} · works remotely</span>
              </div>
              <div className="flex space-x-3 pt-2">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn btn-outline">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn btn-outline">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="card p-8 md:col-span-3">
            <h2 className="text-xl font-semibold mb-6">Project enquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="form-control">
                  <span className="label-text mb-1">Name</span>
                  <input type="text" name="name" required className="input input-bordered" value={formData.name} onChange={handleChange} />
                </label>
                <label className="form-control">
                  <span className="label-text mb-1">Email</span>
                  <input type="email" name="email" required className="input input-bordered" value={formData.email} onChange={handleChange} />
                </label>
              </div>

              <label className="form-control">
                <span className="label-text mb-1">What do you need?</span>
                <select name="service" className="input input-bordered" value={formData.service} onChange={handleChange}>
                  <option value="">Choose one (optional)</option>
                  {services.map((s) => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                  <option value="Something else">Something else</option>
                </select>
              </label>

              <label className="form-control">
                <span className="label-text mb-1">Details</span>
                <textarea
                  name="message"
                  required
                  placeholder="What's the problem, what stack is it on, and when do you need it done?"
                  className="textarea textarea-bordered h-32"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </label>

              <button type="submit" className="btn btn-primary w-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send enquiry'}
              </button>

              {status === 'sent' && (
                <p role="status" className="text-sm text-green-700">Thanks, your message is in. I&apos;ll reply within a day.</p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-sm text-red-700">
                  Something went wrong sending that. Please email me at{' '}
                  <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { Mail, Phone, Linkedin, Github, MapPin, MessageCircle } from 'lucide-react'
import { profile, services } from '@/lib/site'

const emptyForm = { name: '', service: '', message: '' }

// Opens WhatsApp (app on phones, WhatsApp Web on desktop) with the enquiry pre-filled
function whatsappLink(text: string) {
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`
}

export default function ContactPage() {
  const [formData, setFormData] = useState(emptyForm)
  const [opened, setOpened] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [`Hi Ayush, I'm ${formData.name}.`]
    if (formData.service) lines.push(`I need help with: ${formData.service}`)
    lines.push('', formData.message)
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
    setOpened(true)
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
                <MessageCircle className="mr-4 h-5 w-5 text-primary" />
                <a href={whatsappLink('Hi Ayush, ')} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  WhatsApp {profile.phone}
                </a>
              </div>
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
            <h2 className="text-xl font-semibold mb-2">Project enquiry</h2>
            <p className="text-sm text-slate-500 mb-6">Sends your enquiry to me on WhatsApp. You can review it before it goes.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="form-control">
                <span className="label-text mb-1">Name</span>
                <input type="text" name="name" required className="input input-bordered" value={formData.name} onChange={handleChange} />
              </label>

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

              <button type="submit" className="btn btn-primary w-full">
                <MessageCircle className="mr-2 h-4 w-4" /> Continue on WhatsApp
              </button>

              {opened && (
                <p role="status" className="text-sm text-slate-600">
                  WhatsApp should have opened with your message. If it didn&apos;t, email me at{' '}
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

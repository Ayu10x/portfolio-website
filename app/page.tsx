// app/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Github, Linkedin } from 'lucide-react'
import { profile, services, process, projects, caseStudy } from '@/lib/site'

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-sm font-semibold text-primary mb-3">Available for freelance projects</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{profile.name}</h1>
            <p className="text-lg text-slate-700 mb-4">{profile.headline}</p>
            <p className="text-slate-600 max-w-xl mb-8">{profile.pitch}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Get a quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#services" className="btn btn-outline">See services</Link>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn btn-outline">
                <Github className="h-4 w-4" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn btn-outline">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary/20 shrink-0">
            <Image src="/images/profile.JPG" alt={profile.name} width={448} height={448} className="object-cover w-full h-full" priority />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Services</h2>
          <p className="text-slate-600 mb-10">Introductory prices. Every job is quoted after I look at the actual problem.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="card p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-1">{s.name}</h3>
                <p className="text-sm text-slate-500 mb-4">from <span className="font-semibold text-slate-900">{s.from}</span> · {s.delivery}</p>
                <p className="text-slate-600 mb-4">{s.summary}</p>
                <ul className="space-y-2 text-sm">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">How I work</h2>
          <ol className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <li key={p.step} className="card p-6">
                <span className="text-sm font-semibold text-primary">Step {i + 1}</span>
                <h3 className="text-lg font-semibold mt-1 mb-2">{p.step}</h3>
                <p className="text-sm text-slate-600">{p.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case study */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold text-primary mb-2">Case study</p>
          <h2 className="text-3xl font-bold mb-2">{caseStudy.title}</h2>
          <p className="text-sm text-slate-500 mb-8">{caseStudy.client}</p>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold mb-2">The problem</h3>
              <p className="text-slate-600 mb-6">{caseStudy.problem}</p>
              <h3 className="font-semibold mb-2">What I did</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {caseStudy.work.map((w) => (
                  <li key={w} className="flex gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {w}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {caseStudy.results.map((r) => (
                  <div key={r.label} className="card p-5">
                    <p className="text-2xl font-bold text-primary">{r.value}</p>
                    <p className="text-sm text-slate-600 mt-1">{r.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">{caseStudy.stack.join(' · ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-bold">Selected work</h2>
            <Link href="/projects" className="text-primary text-sm font-medium hover:underline">All projects →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p) => (
              <div key={p.title} className="card p-6">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{p.description}</p>
                <p className="text-xs text-slate-500">{p.technologies.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Have a backend problem?</h2>
          <p className="mb-6 opacity-90">Tell me what is broken or what you need built. I reply within a day with questions or a quote.</p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-slate-100">Contact me</Link>
        </div>
      </section>
    </div>
  )
}

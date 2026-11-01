// app/experience/page.tsx
import { Briefcase } from 'lucide-react'
import { experiences } from '@/lib/site'

export const metadata = { title: 'Experience | Ayush Pattnaik' }

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-base-200 pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-10">Experience</h1>
        <ol className="relative border-l border-slate-300 space-y-8 ml-3">
          {experiences.map((exp) => (
            <li key={`${exp.title}-${exp.company}`} className="pl-8 relative">
              <span className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-primary">
                <Briefcase className="h-3 w-3 text-primary" />
              </span>
              <div className="card p-6">
                <div className="flex flex-wrap justify-between gap-2 mb-1">
                  <h2 className="text-lg font-semibold">{exp.title}</h2>
                  <span className="text-sm text-slate-500">{exp.duration}</span>
                </div>
                <p className="text-sm font-medium text-primary mb-3">{exp.company}</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-slate-700">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

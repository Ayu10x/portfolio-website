// app/projects/page.tsx
import { Github } from 'lucide-react'
import { projects } from '@/lib/site'

export const metadata = { title: 'Projects | Ayush Pattnaik' }

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-base-200 pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10">Projects</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="card p-6 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              {project.note && <p className="text-xs font-medium text-primary mb-2">{project.note}</p>}
              <p className="text-slate-600 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="badge badge-outline">{tech}</span>
                ))}
              </div>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary inline-flex items-center gap-2 hover:underline">
                  <Github className="h-4 w-4" /> View source
                </a>
              ) : (
                <span className="text-sm text-slate-500">Source not public</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

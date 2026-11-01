// app/skills/page.tsx
import { skills } from '@/lib/site'

export const metadata = { title: 'Skills | Ayush Pattnaik' }

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-base-200 pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-10">Skills</h1>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.group} className="card p-6">
              <h2 className="text-lg font-semibold mb-4">{s.group}</h2>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="badge badge-outline">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

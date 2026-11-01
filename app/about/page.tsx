// app/about/page.tsx
import { achievements } from '@/lib/site'

export const metadata = { title: 'About | Ayush Pattnaik' }

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base-200 pt-28 pb-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-6">About</h1>
          <div className="prose lg:prose-lg max-w-none">
            <p>
              I&apos;m a backend developer who builds Spring Boot microservices with MongoDB and Kafka for enterprise
              applications. Outside my full-time role I take on a small number of fixed-scope freelance projects: API
              development, backend bug fixes, integrations, deployments, migrations and recovering hacked websites.
            </p>
            <p>
              I like problems with a clear definition of done. Before I start, we agree in writing on what will be
              delivered, what is out of scope, the price and the timeline. You get regular updates, a working demo and
              documentation at handover.
            </p>
            <p>
              I graduated in Computer Science from Siksha &apos;O&apos; Anusandhan (ITER), where I led the Innovation
              &amp; Entrepreneurship Cell and published research on multimodal AI at ODICON 2024 (IEEE). I&apos;m currently
              building <a href="https://github.com/Ayu10x/loadout" target="_blank" rel="noopener noreferrer">Loadout</a>,
              a catalog of tested AI coding tools.
            </p>
          </div>
        </div>
        <div className="card p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Highlights</h2>
          <ul className="space-y-3 text-sm text-slate-700">
            {achievements.map((a) => (
              <li key={a} className="border-l-2 border-primary pl-3">{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

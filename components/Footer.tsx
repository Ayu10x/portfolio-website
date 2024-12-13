// components/Footer.tsx
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <nav className="flex gap-6">
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
            <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900">Projects</Link>
          </nav>
          
          <div className="flex gap-4">
            <a href="https://github.com/Ayu10x" target="_blank" className="text-gray-600 hover:text-gray-900">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ayupattnaik19" target="_blank" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={18} />
            </a>
          </div>
          
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ayush Pattnaik
          </p>
        </div>
      </div>
    </footer>
  )
}
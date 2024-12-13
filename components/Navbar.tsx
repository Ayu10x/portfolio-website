// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Ayush Pattnaik
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-base-100 md:hidden"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
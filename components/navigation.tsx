"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/services", label: "خدماتنا" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "تواصل معنا" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">أ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">أبو خليفة</h1>
              <p className="text-xs text-gray-600">السفر والسياحة</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/967770115540"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              واتساب
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/967770115540"
              target="_blank"
              rel="noopener noreferrer"
              className="block m-4 px-4 py-3 bg-secondary text-white text-center rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              واتساب
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

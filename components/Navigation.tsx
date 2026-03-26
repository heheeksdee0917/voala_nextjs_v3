// components/Navigation.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import React from 'react'

const services = [
  { label: '3D Visualization', href: '/services/3d-visualization' },
  { label: 'Residential Interior Design & Built', href: '/services/residential-interior-design' },
  { label: 'Commercial Interior Design', href: '/services/commercial' },
  { label: 'Consultation', href: '/services/consultation' },
  { label: 'Material Selection', href: '/services/material-selection' },
  { label: 'Space Planning', href: '/services/space-planning' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Background detection
  useEffect(() => {
    const checkBackground = () => {
      if (!navRef.current) return

      const navRect = navRef.current.getBoundingClientRect()
      const navMiddleY = navRect.top + navRect.height / 2
      const navMiddleX = window.innerWidth / 2
      const elementsAtPoint = document.elementsFromPoint(navMiddleX, navMiddleY)

      let isDark = false
      let themeFound = false

      for (const el of elementsAtPoint) {
        if (el === navRef.current || el.closest('nav')) continue

        let currentEl: Element | null = el
        while (currentEl && !themeFound) {
          const theme = currentEl.getAttribute('data-theme')
          if (theme === 'dark') {
            isDark = true
            themeFound = true
            break
          }
          if (theme === 'light') {
            isDark = false
            themeFound = true
            break
          }
          currentEl = currentEl.parentElement
        }
        if (themeFound) break

        const bgColor = window.getComputedStyle(el).backgroundColor
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const rgb = bgColor.match(/\d+/g)
          if (rgb) {
            const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
            isDark = brightness < 128
            themeFound = true
            break
          }
        }
      }

      setIsOverDark(isDark)
    }

    checkBackground()

    const handleScrollCheck = () => {
      requestAnimationFrame(checkBackground)
    }

    window.addEventListener('scroll', handleScrollCheck, { passive: true })
    window.addEventListener('resize', checkBackground)

    return () => {
      window.removeEventListener('scroll', handleScrollCheck)
      window.removeEventListener('resize', checkBackground)
    }
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const navHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navHeight
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [pathname])

  const textColor = isOverDark ? 'text-white' : 'text-black'
  const underlineColor = isOverDark ? 'bg-white' : 'bg-black'
  const dropdownBorder = isOverDark ? 'border-white/20' : 'border-black/10'

  return (
    <>
      {/* Main Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[100]">
        <div className="transition-all duration-500 backdrop-blur-xl bg-white/10 border-b border-white/20">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

            <Link href="/" className="relative z-20">
              <Image
                src="/Voala/ProjectSource/Logo/VOALA NEW_BLACK.png"
                alt="Voala Interior"
                width={120}
                height={40}
                priority
                className={`transition-all duration-300 ${isOverDark ? 'brightness-0 invert' : ''}`}
              />
            </Link>


            {/* Desktop Navigation — Left */}
            <ul className="hidden md:flex items-center gap-8 relative z-20">
              <li>
                <Link
                  href="/"
                  className={`relative font-medium transition-all duration-300 group/link ${textColor}`}
                >
                  Home
                  <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${underlineColor} w-0 group-hover/link:w-full`}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`relative font-medium transition-all duration-300 group/link ${textColor}`}
                >
                  Projects
                  <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${underlineColor} w-0 group-hover/link:w-full`}></span>
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative group/services">
                <button
                  className={`relative font-medium transition-all duration-300 flex items-center gap-1 group/link ${textColor}`}
                >
                  Services
                  <ChevronDown size={16} className="transition-transform duration-300 group-hover/services:rotate-180" />
                  <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${underlineColor} w-0 group-hover/link:w-full`}></span>
                </button>

                {/* Dropdown */}
                <div className={`absolute top-full left-0 mt-3 w-64 bg-white/90 backdrop-blur-xl rounded-lg border ${dropdownBorder} shadow-xl opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-300 translate-y-1 group-hover/services:translate-y-0`}>
                  <ul className="py-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-black/70 hover:text-black hover:bg-black/5 transition-colors duration-200 font-medium"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`relative font-medium transition-all duration-300 group/link ${textColor}`}
                >
                  Contact Us
                  <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${underlineColor} w-0 group-hover/link:w-full`}></span>
                </Link>
              </li>
            </ul>


            {/* Mobile Menu Button — Left */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden relative z-20 transition-colors duration-300 ${textColor}`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-white z-[95]"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="h-full w-full flex items-center justify-center px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="space-y-8 text-center w-full max-w-xs">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl text-black/70 hover:text-black font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl text-black/70 hover:text-black font-medium transition-colors"
              >
                Projects
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-center gap-2 text-2xl text-black/70 hover:text-black font-medium transition-colors w-full"
                >
                  Services
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <ul className="mt-4 space-y-4">
                    {services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-lg text-black/50 hover:text-black transition-colors"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl text-black/70 hover:text-black font-medium transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
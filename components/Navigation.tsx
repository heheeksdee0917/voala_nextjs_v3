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

const areas = [
  { label: 'Kuala Lumpur', href: '/areas/kuala-lumpur' },
  { label: 'KLCC', href: '/areas/klcc' },
  { label: 'Bangsar', href: '/areas/bangsar' },
  { label: 'Bangsar South', href: '/areas/bangsar-south' },
  { label: 'Mont Kiara', href: '/areas/mont-kiara' },
  { label: 'Bukit Bintang', href: '/areas/bukit-bintang' },
  { label: 'Bukit Jalil', href: '/areas/bukit-jalil' },
  { label: 'Bukit Tunku', href: '/areas/bukit-tunku' },
  { label: 'Damansara Heights', href: '/areas/damansara-heights' },
  { label: 'Desa Park City', href: '/areas/desa-park-city' },
  { label: 'Sri Hartamas', href: '/areas/sri-hartamas' },
  { label: 'Ampang Hilir', href: '/areas/ampang-hilir' },
  { label: 'TTDI', href: '/areas/ttdi' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileAreasOpen, setIsMobileAreasOpen] = useState(false)
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const areasDropdownRef = useRef<HTMLLIElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close areas dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (areasDropdownRef.current && !areasDropdownRef.current.contains(event.target as Node)) {
        setIsAreasDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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
  const dropdownBg = isOverDark ? 'bg-black/90 border-white/10' : 'bg-white border-black/10'
  const dropdownText = isOverDark ? 'text-white/80 hover:text-white' : 'text-black/70 hover:text-black'
  const dropdownHighlight = isOverDark ? 'text-white font-semibold' : 'text-black font-semibold'

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

            {/* Desktop Navigation */}
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

              {/* Areas Dropdown */}
              <li ref={areasDropdownRef} className="relative">
                <button
                  onClick={() => setIsAreasDropdownOpen(!isAreasDropdownOpen)}
                  className={`flex items-center gap-1 font-medium transition-all duration-300 ${textColor}`}
                  aria-expanded={isAreasDropdownOpen}
                  aria-haspopup="true"
                >
                  Areas
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isAreasDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isAreasDropdownOpen && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-lg border shadow-xl backdrop-blur-xl ${dropdownBg} overflow-hidden`}
                  >
                    {/* KL pinned at top with visual separator */}
                    <div className="px-4 pt-3 pb-2">
                      <Link
                        href="/areas/kuala-lumpur"
                        onClick={() => setIsAreasDropdownOpen(false)}
                        className={`block text-sm font-bold tracking-wide transition-colors duration-200 ${dropdownHighlight}`}
                      >
                        Kuala Lumpur
                      </Link>
                    </div>
                    <div className={`mx-4 h-px mb-2 ${isOverDark ? 'bg-white/10' : 'bg-black/10'}`} />
                    <ul className="px-2 pb-3 space-y-0.5">
                      {areas.slice(1).map((area) => (
                        <li key={area.href}>
                          <Link
                            href={area.href}
                            onClick={() => setIsAreasDropdownOpen(false)}
                            className={`block px-3 py-1.5 rounded-md text-sm transition-colors duration-200 ${dropdownText}`}
                          >
                            {area.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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

            {/* Mobile Menu Button */}
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
          className="md:hidden fixed inset-0 bg-white z-[95] overflow-y-auto"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="min-h-full w-full flex items-center justify-center px-8 py-24"
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

              {/* Mobile Areas Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileAreasOpen(!isMobileAreasOpen)}
                  className="flex items-center justify-center gap-2 text-2xl text-black/70 hover:text-black font-medium transition-colors w-full"
                >
                  Areas
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${isMobileAreasOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isMobileAreasOpen && (
                  <ul className="mt-4 space-y-3">
                    {/* KL pinned first and bold */}
                    <li>
                      <Link
                        href="/areas/kuala-lumpur"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-lg text-black font-semibold transition-colors"
                      >
                        Interior Designer in KL
                      </Link>
                    </li>
                    <li className="h-px bg-black/10 mx-8" />
                    {areas.slice(1).map((area) => (
                      <li key={area.href}>
                        <Link
                          href={area.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-lg text-black/50 hover:text-black transition-colors"
                        >
                          {area.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

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
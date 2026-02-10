// components/Navigation.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import React from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

        // Check for data-theme attribute
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

        // Check background color
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

  // Smooth scroll function with redirect support
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

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Handle hash navigation on page load
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const navHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [pathname])

  // Dynamic text colors based on background
  const textColor = isOverDark ? 'text-white' : 'text-black'
  const underlineColor = isOverDark ? 'bg-white' : 'bg-black'

  return (
    <>
      {/* Main Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[100]">
        <div className="transition-all duration-500 backdrop-blur-xl bg-white/10 border-b border-white/20">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
            {/* Logo */}
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
                <button 
                  onClick={() => scrollToSection('timeline-section')}
                  className={`relative font-medium transition-all duration-300 group/link ${textColor}`}
                >
                  About
                  <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${underlineColor} w-0 group-hover/link:w-full`}></span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services-section')}
                  className={`relative font-medium transition-all duration-300 group/link ${textColor}`}
                >
                  Services
                  <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${underlineColor} w-0 group-hover/link:w-full`}></span>
                </button>
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
            </ul>

            {/* Desktop Contact Button */}
            <Link
              href="/contact"
              className={`hidden md:block font-medium transition-all duration-300 relative group/link z-20 ${textColor}`}
            >
              Contact Us
              <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-out ${underlineColor} w-0 group-hover/link:w-full`}></span>
            </Link>

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
          className="md:hidden fixed inset-0 bg-white z-[95]"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="h-full w-full flex items-center justify-center px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="space-y-8 text-center">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl text-black/70 hover:text-black font-medium transition-colors"
              >
                Home
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  scrollToSection('timeline-section')
                }}
                className="block text-2xl text-black/70 hover:text-black font-medium transition-colors w-full"
              >
                About
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  scrollToSection('services-section')
                }}
                className="block text-2xl text-black/70 hover:text-black font-medium transition-colors w-full"
              >
                Services
              </button>
              <Link 
                href="/projects" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl text-black/70 hover:text-black font-medium transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-2xl text-black/70 hover:text-black font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
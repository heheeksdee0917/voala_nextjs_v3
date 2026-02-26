"use client"

import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 font-louis-george-cafe">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-5">Voala Interior</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Award-winning interior design & build studio in Kuala Lumpur. 
              From concept to handover, we create bespoke residential and commercial spaces 
              with heart-led craftsmanship and exceptional detail.
            </p>
            <div className="flex flex-col gap-2 text-white/90 text-sm">
              <span className="font-semibold">15+ Years Experience</span>
              <span className="font-semibold">200+ Projects Completed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 uppercase tracking-wide">Quick Links</h4>
            <nav className="space-y-3">
              <Link 
                href="/" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link 
                href="/services" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Information – NAP with microdata */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h4 className="text-lg font-semibold mb-5 uppercase tracking-wide">Contact Info</h4>
            <div className="space-y-4 text-sm">
              {/* Business Name (repeated for microdata) */}
              <meta itemProp="name" content="Voala Interior" />

              {/* Address – full structured NAP */}
              <div 
                className="flex items-start gap-3"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                <div>
                  <address className="not-italic text-white/80 leading-relaxed">
                    <span itemProp="streetAddress">
                      L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3
                    </span><br />
                    <span itemProp="addressLocality">Bukit Jalil</span>,{' '}
                    <span itemProp="addressRegion">Kuala Lumpur</span><br />
                    <span itemProp="postalCode">57000</span>,{' '}
                    <span itemProp="addressCountry">Malaysia</span>
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white flex-shrink-0" />
                <a 
                  href="tel:+60125053395" 
                  className="text-white/80 hover:text-white transition-colors"
                  itemProp="telephone"
                >
                  +60 12 505 3395
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white flex-shrink-0" />
                <a 
                  href="mailto:askvoala@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors"
                  itemProp="email"
                >
                  askvoala@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours & Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-5 uppercase tracking-wide">Business Hours</h4>
            <div className="space-y-3 mb-8 text-sm">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-white flex-shrink-0" />
                <div className="text-white/80">
                  Monday - Friday (By Appointment)<br />
                  10:00 AM - 7:00 PM
                </div>
              </div>
              <div className="text-white/60 text-sm">
                <p>Saturday: By Appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/hellovoala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Follow Voala Interior on Instagram"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="https://www.facebook.com/hellovoala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Follow Voala Interior on Facebook"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@hellovoala9163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Subscribe to Voala Interior on YouTube"
                >
                  <Youtube size={20} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/voala-interior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Follow Voala Interior on LinkedIn"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm">
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
          <p className="text-white/60">
            © 2025 Voala Interior. All rights reserved. | Award-winning Interior Design in KL
          </p>
          <p className="text-white/50 mt-2">
            L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil, 57000 Kuala Lumpur, Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
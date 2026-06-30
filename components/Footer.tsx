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
              <span className="font-semibold">10+ Years Experience</span>
              <span className="font-semibold">200+ Projects Completed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 uppercase tracking-wide">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/projects" className="block text-white/80 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/services" className="block text-white/80 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/contact" className="block text-white/80 hover:text-white transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-5 uppercase tracking-wide">Contact Info</h4>
            <div className="space-y-4 text-sm">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                <div>
                  <address className="not-italic text-white/80 leading-relaxed">
                    <a
                      href="https://maps.app.goo.gl/zQUXXYt4yfJTmuZP8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3<br />
                      Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur<br />
                      57000, Malaysia
                    </a>
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white flex-shrink-0" />
                <a
                  href="tel:+60125053395"
                  className="text-white/80 hover:text-white transition-colors"
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

        {/* Google Map */}
        <div className="mt-12">
          <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Find Us</h4>
          <div className="w-full overflow-hidden rounded-lg border border-white/10" style={{ height: '280px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8957259380168!2d101.67637307497073!3d3.052340896923446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69a2f2d66962931b%3A0x8e36de1214eefe17!2sVoala%20Interior!5e0!3m2!1sen!2smy!4v1773220702928!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Voala Interior location on Google Maps"
            />
          </div>
        </div>

        {/* Designer Credit */}
        <div className="mt-8 text-center text-sm">
          <p className="text-white/50">
            Proudly created by{' '}
            <a
              href="https://swayed.my"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              swayed - web designer in KL
            </a>
            .
          </p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
          <p className="text-white/60">
            © 2026 Voala Interior. All rights reserved. | Award-winning Interior Design in KL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
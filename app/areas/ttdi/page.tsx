// app/areas/ttdi/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Star, CheckCircle2, Clock,
  ArrowRight, Mail 
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Designer TTDI | Luxury Homes Kuala Lumpur – Voala Interior',
  description:
    'Premium interior designer for Taman Tun Dr Ismail (TTDI). Expert renovation and interior design for bungalows, semi-Ds, and luxury condos in this established, green, and highly sought-after KL neighbourhood.',
  keywords:
    'interior designer TTDI, interior design TTDI, Taman Tun Dr Ismail interior designer, luxury home renovation TTDI, KL interior design',
  alternates: {
    canonical: 'https://voalainterior.com/areas/ttdi',
  },
  openGraph: {
    title: 'Interior Designer TTDI — Voala Interior',
    description:
      'Sophisticated interior design and renovation for TTDI bungalows, semi-Ds and luxury homes. Heart-led craftsmanship in one of Kuala Lumpur’s most established affluent suburbs.',
    url: 'https://voalainterior.com/areas/ttdi',
    siteName: 'Voala Interior',
    locale: 'en_MY',
    type: 'website',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://voalainterior.com/#business',
  name: 'Voala Interior',
  image: 'https://voalainterior.com/Voala/Voala_OG.png',
  description: 'Premium interior design studio serving TTDI, Damansara Heights, Bangsar and greater KL.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3',
    "addressLocality": "Kuala Lumpur",
addressRegion: "Wilayah Persekutuan Kuala Lumpur",
    postalCode: '57000',
    addressCountry: 'MY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 3.052340896923446,
    longitude: 101.67637307497074,
  },
  url: 'https://voalainterior.com',
  telephone: '+60125053395',
  email: 'askvoala@gmail.com',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$$-$$$$',
  areaServed: [
    { '@type': 'City', name: 'TTDI' },
    { '@type': 'City', name: 'Taman Tun Dr Ismail' },
    { '@type': 'City', name: 'Damansara Heights' },
    { '@type': 'City', name: 'Bangsar' },
  ],
};

const services = [
  {
    title: 'Bungalow & Semi-D Renovation',
    description:
      "TTDI’s established bungalows and semi-Ds feature mature gardens and strong architectural character. We renovate with respect for the original structure while introducing modern functionality and refined detailing.",
    icon: '🏡',
  },
  {
    title: 'Luxury Condo Interior Design',
    description:
      "For the modern condominiums in and around TTDI, we create sophisticated, light-filled spaces with excellent storage solutions and premium finishes suited to urban professionals and families.",
    icon: '🏙️',
  },
  {
    title: 'Master Suite & Spa Bathrooms',
    description:
      'We design peaceful master retreats with spa-like bathrooms, proper waterproofing, layered lighting, and custom storage — essential for comfortable living in KL’s climate.',
    icon: '🛏️',
  },
  {
    title: 'Family Living & Dining Spaces',
    description:
      'TTDI families value both elegance and practicality. We design warm, inviting living and dining areas perfect for everyday family life and entertaining.',
    icon: '🛋️',
  },
  {
    title: 'Modern Functional Kitchens',
    description:
      'From traditional wet kitchens for Malaysian cooking to sleek open-plan kitchens for entertaining — we create beautiful and highly efficient kitchens tailored to TTDI lifestyles.',
    icon: '🍳',
  },
  {
    title: 'Full Turnkey Renovation & Project Management',
    description:
      'End-to-end service with single-point contact, strict quality control, and transparent timelines for both landed homes and condominiums in TTDI.',
    icon: '🔨',
  },
];

const whyUs = [
  {
    title: "Established TTDI Expertise",
    body: "We understand the different housing types in TTDI — from classic bungalows with mature gardens to contemporary condos — and what each requires in terms of design and renovation.",
  },
  {
    title: 'Green & Family-Friendly Design',
    body: "TTDI is known for its leafy environment and strong community feel. We create homes that embrace natural light, greenery, and practical family living.",
  },
  {
    title: 'Heritage-Sensitive Renovations',
    body: "Many TTDI properties have character and history. We preserve architectural strengths while updating for modern comfort and tropical performance.",
  },
  {
    title: 'Convenient Access',
    body: "Our studio in Bukit Jalil is only 15–20 minutes from TTDI via the Sprint Highway or Federal Highway, making frequent site visits practical and efficient.",
  },
  {
    title: 'Transparent Pricing',
    body: "Detailed, itemised quotations. Bungalow renovations in TTDI typically start from RM 220,000+, while condo projects start from RM 65,000 depending on scope.",
  },
  {
    title: 'Heart-Led Craftsmanship',
    body: "We focus on the details that matter daily — quiet cabinetry, consistent reveals, beautiful lighting, and finishes that age gracefully.",
  },
];

const craftPoints = [
  'Every dimension drawn and approved before construction begins',
  'Material selections optimised for tropical humidity',
  'Consistent reveal gaps and high-quality millwork',
  'Lighting designed to enhance natural greenery and indoor comfort',
  'Post-handover touch-up visit included',
  'Single dedicated project lead from start to handover',
];

const directions = [
  { name: 'TTDI Town Centre & Market', distance: '15–20 mins', landmark: 'Via Sprint Highway' },
  { name: 'TTDI Bungalows & Semi-Ds', distance: '12–18 mins', landmark: 'Near TTDI Park' },
  { name: 'Damansara Heights', distance: '10–15 mins', landmark: 'Short connecting roads' },
  { name: 'Bangsar', distance: '20–25 mins', landmark: 'Via Federal Highway' },
];

const faqs = [
  {
    question: 'Do you serve TTDI even though your studio is in Bukit Jalil?',
    answer:
      "Yes — TTDI is one of our core service areas. The drive from our studio at The Link, 2, Bukit Jalil takes approximately 15–20 minutes via the Sprint Highway. We conduct regular site visits and are very familiar with the neighbourhood.",
  },
  {
    question: "Can you renovate older bungalows in TTDI while preserving their character?",
    answer:
      "This is one of our favourite types of projects. Many TTDI bungalows have beautiful original features and mature gardens. We approach renovations with respect for the existing architecture while updating for modern family living.",
  },
  {
    question: 'What is the typical budget for a TTDI renovation?',
    answer:
      'Bungalow and semi-D renovations in TTDI typically start from RM 220,000 and can go significantly higher depending on size and scope. Condo renovations start from around RM 65,000. We provide fully itemised quotations.',
  },
  {
    question: 'How long does a typical TTDI renovation take?',
    answer:
      "Landed home renovations generally take 14–24 weeks. Condo projects usually require 8–14 weeks. We provide clear timelines and maintain strong project coordination.",
  },
  {
    question: 'Do you work with families and multi-generational homes in TTDI?',
    answer:
      "Yes, very often. TTDI has a strong family-oriented community. We design practical, elegant homes that accommodate multiple generations while maintaining a modern and timeless feel.",
  },
  {
    question: 'What makes Voala Interior different in TTDI?',
    answer:
      "We combine respect for the neighbourhood’s established character with contemporary design sensibilities. Our focus is on creating homes that look beautiful and feel even better to live in every day.",
  },
];

export default function TTDIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium">Serving TTDI & Established KL Suburbs</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                TTDI
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Expert interior design and renovation for Taman Tun Dr Ismail (TTDI) bungalows, 
              semi-Ds, and luxury condos. Timeless craftsmanship in one of Kuala Lumpur’s most established neighbourhoods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+60125053395"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call +60 12 505 3395
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-gray-600">
              <MapPin className="inline w-4 h-4 mr-1" />
              Serving TTDI, Damansara Heights, Bangsar & greater KL
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Your TTDI Interior Design Partner
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Taman Tun Dr Ismail (TTDI) is one of Kuala Lumpur’s most established and green residential suburbs — 
                loved for its mature trees, excellent amenities, international schools, and strong sense of community.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                At Voala Interior, we bring heart-led craftsmanship to TTDI. Our studio in Bukit Jalil is conveniently 
                located just 15–20 minutes away, allowing us to provide attentive, responsive service for both landed homes 
                and modern condominiums in the area.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you are renovating a classic bungalow with a mature garden or updating a contemporary condo, 
                we create elegant, functional, and timeless interiors that honour the character of TTDI living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
              Why TTDI Homeowners Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Respect for heritage. Passion for modern living.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUs.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
              Interior Design Services for TTDI Homes
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Tailored for the unique character of TTDI properties.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service, i) => (
                <div key={i} className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">What Our TTDI Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "Voala Interior renovated our TTDI bungalow beautifully. They preserved the charm of the original house 
                while creating a bright, modern family home we absolutely love."
              </blockquote>
              <p className="text-sm text-gray-400">— The Rahman Family, TTDI</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for TTDI
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                TTDI homes have soul. We design with respect for their character while creating spaces that feel 
                light, functional, and timeless — perfect for families who want both heritage and modern comfort.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {craftPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Our TTDI Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO FIND US ───────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Easy to Reach from TTDI
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Directions from TTDI</h3>

                <div className="space-y-4 mb-8">
                  {directions.map((area, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <MapPin className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{area.name}</h4>
                        <p className="text-gray-700 text-sm mb-1">
                          <strong>Drive time:</strong> {area.distance}
                        </p>
                        <p className="text-gray-600 text-sm">
                          <strong>Via:</strong> {area.landmark}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-bold mb-4 text-gray-900">Studio Visit Options</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Visit Our Studio:</strong> Material samples and portfolio in Bukit Jalil</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>We Come to You:</strong> Free consultation at your TTDI home</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Virtual Consultation:</strong> Ideal for busy professionals</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-black text-white rounded-lg">
                  <h4 className="font-bold mb-4">Contact Us</h4>
                  <p className="mb-3 text-sm leading-relaxed">
                    <strong>Voala Interior</strong><br />
                    L2-29 & 30, The Link, 2<br />
                    Jalan Jalil Perkasa 3<br />
                    Bukit Jalil, 57000 Kuala Lumpur
                  </p>
                  <p className="mb-2 text-sm">
                    <Phone className="inline w-4 h-4 mr-2" />
                    <a href="tel:+60125053395" className="hover:underline">+60 12 505 3395</a>
                  </p>
                  <p className="text-sm">
                    <Mail className="inline w-4 h-4 mr-2" />
                    <a href="mailto:askvoala@gmail.com" className="hover:underline">askvoala@gmail.com</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Studio Hours</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="w-6 h-6 text-gray-900 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">By Appointment</p>
                      <p className="text-gray-700">Monday – Friday: 10:00 AM – 6:00 PM</p>
                      <p className="text-gray-700">Saturday: 10:00 AM – 4:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Flexible scheduling for TTDI clients, including evenings and weekends.
                  </p>
                </div>

                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.157997312472!2d101.6763731!3d3.052340896923446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69a2f2d66962931b%3A0x8e36de1214eefe17!2sVoala%20Interior!5e0!3m2!1sen!2smy!4v1773220412930!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Voala Interior Studio - 15-20 minutes from TTDI"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Frequently Asked Questions – TTDI Interior Design
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let’s Design Your TTDI Home
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Create a beautiful, functional, and timeless home that honours the character of Taman Tun Dr Ismail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+60125053395"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call +60 12 505 3395
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="text-gray-400 text-sm">
              <p className="mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                15–20 minutes from TTDI · Serving Damansara Heights, Bangsar & surrounding areas
              </p>
              <p>Voala Interior, L2-29 & 30, The Link, 2, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
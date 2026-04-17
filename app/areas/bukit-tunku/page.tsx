// app/areas/bukit-tunku/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Heart, Star, CheckCircle2, Clock,
  Home, ChevronRight, MessageCircle, Award, Trees, Mail, ArrowRight, Building2
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Designer Bukit Tunku | Luxury Homes & Bungalows KL – Voala Interior',
  description:
    'Premium interior designer for Bukit Tunku (Kenny Hills). We specialise in high-end bungalows, villas, and luxury residences in one of KL’s most exclusive neighbourhoods. Studio at The Link 2, Bukit Jalil. Call +60 12 505 3395.',
  keywords:
    'interior designer Bukit Tunku, interior design Kenny Hills, luxury interior designer KL, bungalow renovation Bukit Tunku, high-end interior design Kuala Lumpur',
  alternates: {
    canonical: 'https://voalainterior.com/areas/bukit-tunku',
  },
  openGraph: {
    title: 'Interior Designer Bukit Tunku — Voala Interior',
    description:
      'Expert luxury interior design for Bukit Tunku bungalows, villas and prestige homes. Heart-led craftsmanship for KL’s most exclusive neighbourhood.',
    url: 'https://voalainterior.com/areas/bukit-tunku',
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
  description: 'Premium interior design studio serving Bukit Tunku, Kenny Hills, Damansara Heights, Bangsar and greater KL.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3',
    addressLocality: 'Bukit Jalil',
    addressRegion: 'Kuala Lumpur',
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
  email: 'hello@voalainterior.com',
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
    { '@type': 'City', name: 'Bukit Tunku' },
    { '@type': 'City', name: 'Kenny Hills' },
    { '@type': 'City', name: 'Damansara Heights' },
    { '@type': 'City', name: 'Bangsar' },
  ],
};

const services = [
  {
    title: 'Luxury Bungalow & Villa Renovation',
    description:
      "Bukit Tunku is defined by its grand bungalows and low-density estates. We respect the scale, proportions and heritage of these homes while introducing modern functionality, refined detailing and timeless elegance.",
    icon: '🏡',
  },
  {
    title: 'High-End Contemporary Interiors',
    description:
      "For owners who want clean lines, premium materials and sophisticated living. We deliver understated luxury that feels personal — never flashy — using natural stone, rich timber and custom millwork.",
    icon: '🏛️',
  },
  {
    title: 'Master Suite & Private Retreats',
    description:
      'In Bukit Tunku homes, the master suite is often a sanctuary with city or garden views. We design spacious, hotel-like bathrooms with proper waterproofing and layered lighting suited for KL’s climate.',
    icon: '🛏️',
  },
  {
    title: 'Formal Living & Entertainment Spaces',
    description:
      'Bukit Tunku homes frequently host dignitaries, extended family and private events. We create living and dining areas that balance grandeur with warmth and flexibility.',
    icon: '🛋️',
  },
  {
    title: 'Bespoke Kitchens & Wet Areas',
    description:
      'From traditional wet kitchens with Malaysian cooking in mind to sleek dry kitchens for entertaining — we design kitchens that are both highly functional and visually stunning.',
    icon: '🍳',
  },
  {
    title: 'Full Turnkey Renovation & Project Management',
    description:
      'End-to-end service for complex Bukit Tunku projects: design, contractor coordination, quality control and seamless handover with minimal disruption.',
    icon: '🔨',
  },
];

const whyUs = [
  {
    title: "We Understand Bukit Tunku's Prestige",
    body: "This is one of KL’s most exclusive addresses — home to tycoons, diplomats and multi-generational families. We design with the dignity and privacy the neighbourhood demands.",
  },
  {
    title: 'Heritage Meets Modern Luxury',
    body: "Many properties here carry history. We preserve architectural character (high ceilings, generous plots, mature landscaping) while introducing contemporary comfort and smart solutions.",
  },
  {
    title: 'Attention to Invisible Details',
    body: "Heart-led craftsmanship means perfect reveal gaps, matched timber grains, concealed wiring and finishes that age gracefully in KL’s humidity.",
  },
  {
    title: 'Expat & High-Net-Worth Experience',
    body: "We regularly manage projects for clients who travel frequently or live overseas, offering transparent communication and single-point contact.",
  },
  {
    title: 'Proximity & Accessibility',
    body: "Our studio in Bukit Jalil is approximately 15–20 minutes from Bukit Tunku via major highways. We conduct frequent site visits without hassle.",
  },
  {
    title: 'Transparent & Realistic Pricing',
    body: "Detailed quotations for luxury work. Full bungalow renovations in Bukit Tunku typically start from RM 350,000 upward depending on scope and scale.",
  },
];

const craftPoints = [
  'Every detail drawn and approved before construction begins',
  'Material selections that perform in tropical conditions',
  'Consistent 2–3mm reveal gaps across all joinery',
  'Lighting designed for both daytime views and evening ambiance',
  'Post-handover touch-up visit included',
  'Single dedicated project lead from concept to keys',
];

const directions = [
  { name: 'Central Bukit Tunku / Kenny Hills', distance: '15–20 mins', landmark: 'Via Jalan Duta or Sprint Highway' },
  { name: 'Changkat Tunku Viewpoint', distance: '18–22 mins', landmark: 'Scenic hill route' },
  { name: 'Damansara Heights', distance: '10–15 mins', landmark: 'Connecting roads' },
  { name: 'Bangsar', distance: '20–25 mins', landmark: 'NPE / Federal Highway' },
];

const faqs = [
  {
    question: 'Do you serve Bukit Tunku even though your studio is in Bukit Jalil?',
    answer:
      "Yes. Bukit Tunku is one of our core premium service areas. The drive from our studio at The Link 2, Bukit Jalil takes roughly 15–20 minutes via major highways. We schedule regular site visits and are very familiar with the neighbourhood’s access, security protocols and hilly terrain.",
  },
  {
    question: "Can you renovate older bungalows in Bukit Tunku while preserving their character?",
    answer:
      "Absolutely. Many homes here have strong architectural bones from earlier eras. We specialise in sensitive renovations that honour original proportions, ceiling heights and garden integration while updating for modern living and tropical performance.",
  },
  {
    question: 'What is the typical budget for a Bukit Tunku bungalow renovation?',
    answer:
      'Luxury bungalow renovations in Bukit Tunku usually start from RM 350,000 and can go significantly higher depending on size, structural work, imported finishes and smart-home integration. We provide fully itemised quotations with clear cost breakdowns.',
  },
  {
    question: 'How long does a full renovation in Bukit Tunku typically take?',
    answer:
      "Large bungalows or villas usually take 16–28 weeks, depending on scope. We provide a detailed project timeline at the design stage and maintain strong coordination to respect gated-community rules and minimise disruption.",
  },
  {
    question: 'Do you work with clients who are often overseas?',
    answer:
      "Yes — frequently. Many Bukit Tunku homeowners travel or live abroad part of the year. We offer detailed progress reporting, virtual walkthroughs and clear decision points so projects move forward smoothly even with remote ownership.",
  },
  {
    question: 'How do you handle the hilly terrain and access restrictions?',
    answer:
      "We have experience with Bukit Tunku’s winding roads and gated estates. We coordinate deliveries, worker access and material handling efficiently while respecting neighbourhood security and privacy.",
  },
  {
    question: 'What makes Voala Interior different for luxury projects?',
    answer:
      "We focus on heart-led craftsmanship — the details you feel every day but rarely see in photos. Perfectly aligned grains, consistent reveals, lighting that flatters at different times of day, and finishes built to last in KL’s climate.",
  },
];

export default function BukitTunkuPage() {
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
              <span className="text-sm font-medium">Serving Bukit Tunku (Kenny Hills) & KL’s Most Exclusive Homes</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Bukit Tunku
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Luxury interior design and renovation for Bukit Tunku bungalows, villas and prestige homes. 
              Timeless craftsmanship for one of Kuala Lumpur’s most exclusive neighbourhoods.
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
              Serving Bukit Tunku, Kenny Hills, Damansara Heights, Bangsar & greater KL
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Your Bukit Tunku Interior Design Partner
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Bukit Tunku (formerly Kenny Hills) is Kuala Lumpur’s address of quiet prestige. 
                Tree-lined hills, generous plots, sweeping city views and some of the finest private residences in the country. 
                Homes here are built for legacy, not trends.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                At Voala Interior, we bring heart-led craftsmanship to this exclusive enclave. 
                Our studio at The Link 2, Bukit Jalil is only 15–20 minutes away, allowing us to provide attentive service 
                while respecting the privacy and serenity that define Bukit Tunku living.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you own a grand bungalow, a modernist villa, or a luxury residence with skyline views, 
                we design spaces that honour the stature of the neighbourhood while delivering daily comfort and timeless beauty.
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
              Why Bukit Tunku Homeowners Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Prestige demands more than good design. Here’s what we deliver.
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

            <div className="mt-10 bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Note for 2025–2026:</strong> Bukit Tunku continues to attract multi-generational families and high-net-worth individuals who value privacy, views and legacy properties. 
                Renovation demand remains strong for both heritage-sensitive updates and full contemporary transformations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
              Interior Design Services for Bukit Tunku Homes
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Tailored for the scale and sophistication of Bukit Tunku residences.
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
              <h3 className="text-2xl font-bold mb-4">What Bukit Tunku Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "We wanted our Bukit Tunku home to feel grand yet deeply personal. Voala Interior understood the balance perfectly. 
                The attention to detail is extraordinary — even years later, every corner still feels special."
              </blockquote>
              <p className="text-sm text-gray-400">— A Family in Bukit Tunku</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for Bukit Tunku
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                In Bukit Tunku, homes are statements of legacy. We design and build with the same level of care — 
                paying attention to the details that define daily living: how light moves across surfaces at golden hour, 
                the quiet satisfaction of perfectly aligned cabinetry, and the comfort of spaces that age gracefully.
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
                View Our Bukit Tunku Projects
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
              Easy to Reach from Bukit Tunku
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Directions from Bukit Tunku</h3>

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
                      <span><strong>We Come to You:</strong> Site consultation at your Bukit Tunku residence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Virtual Consultation:</strong> Ideal for overseas owners</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-black text-white rounded-lg">
                  <h4 className="font-bold mb-4">Contact Us</h4>
                  <p className="mb-3 text-sm leading-relaxed">
                    <strong>Voala Interior</strong><br />
                    L2-29 & 30, The Link 2<br />
                    Jalan Jalil Perkasa 3<br />
                    Bukit Jalil, 57000 Kuala Lumpur
                  </p>
                  <p className="mb-2 text-sm">
                    <Phone className="inline w-4 h-4 mr-2" />
                    <a href="tel:+60125053395" className="hover:underline">+60 12 505 3395</a>
                  </p>
                  <p className="text-sm">
                    <Mail className="inline w-4 h-4 mr-2" />
                    <a href="mailto:hello@voalainterior.com" className="hover:underline">hello@voalainterior.com</a>
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
                    Flexible timing for Bukit Tunku clients. Evening and weekend appointments can be arranged.
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
                    title="Voala Interior Studio - 15-20 minutes from Bukit Tunku"
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
              Frequently Asked Questions – Bukit Tunku Interior Design
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
              Let’s Create Your Bukit Tunku Home
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              From grand bungalows to refined villas — we design homes that reflect the prestige and personality of Bukit Tunku.
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
                15–20 minutes from Bukit Tunku · Serving Kenny Hills, Damansara Heights & surrounding prestige areas
              </p>
              <p>Voala Interior, L2-29 & 30, The Link 2, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
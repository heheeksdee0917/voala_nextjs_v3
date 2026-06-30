// app/areas/bangsar-south/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Star, CheckCircle2, Clock,
  Home, MessageCircle, Award, Laptop, Mail, ArrowRight, Building2
} from 'lucide-react';
import type { Metadata } from 'next';
import SignatureProjects from '@/components/SignatureProjects';

export const metadata: Metadata = {
  title: 'Interior Designer Bangsar South | Condo Interior Design KL – Voala Interior',
  description:
    'Looking for an interior designer in Bangsar South? Voala Interior specialises in condo renovations at The Vertical, Nexus, The Sphere & more. Heart-led craftsmanship, 10 min from Bangsar South. Call +60 12 505 3395.',
  keywords:
    'interior designer Bangsar South, interior design Bangsar South, interior designer The Vertical, interior designer Nexus Bangsar South, condo interior design KL',
  alternates: {
    canonical: 'https://voalainterior.com/areas/bangsar-south',
  },
  openGraph: {
    title: 'Interior Designer Bangsar South — Voala Interior',
    description:
      'Premium interior design studio serving Bangsar South condos — The Vertical, Nexus, The Sphere & beyond. Heart-led craftsmanship, 10 minutes away. Call +60 12 505 3395.',
    url: 'https://voalainterior.com/areas/bangsar-south',
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
  description:
    'Premium interior design studio serving Bangsar South condos including The Vertical, Nexus, and The Sphere.',
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
    { '@type': 'City', name: 'Bangsar South' },
    { '@type': 'City', name: 'Kerinchi' },
    { '@type': 'City', name: 'Pantai Hillpark' },
    { '@type': 'City', name: 'Bangsar' },
  ],
};

const services = [
  {
    title: 'Full Condo Renovation',
    description:
      "From bare developer unit to a home that feels entirely yours. We handle everything — demolition scheduling around building management rules, permit paperwork, material sourcing, carpentry, electrical, and final styling — so you don't have to manage ten different contractors.",
    icon: '🏠',
  },
  {
    title: 'Home Office Integration',
    description:
      'Half of Bangsar South works from home at least part of the week. We design dedicated workspaces within condo bedrooms and living areas that are genuinely productive, acoustically considered, and look professional on video calls — not an afterthought desk in a corner.',
    icon: '💻',
  },
  {
    title: 'Master Bedroom & Bathroom',
    description:
      "The master suite in a Bangsar South condo is often 150–200 sqft of underused potential. We maximise it with humidity-resistant finishes, layered lighting, and bespoke built-in storage that actually fits your wardrobe — not a generic carpenter's template.",
    icon: '🛏️',
  },
  {
    title: 'Living & Dining',
    description:
      'Open-plan layouts that breathe. We design for the reality of Bangsar South living: hosting colleagues mid-week, relaxing on weekends, and making a 900 sqft space feel twice its size through material, light, and furniture choices.',
    icon: '🛋️',
  },
  {
    title: 'Kitchen Design',
    description:
      'Most Bangsar South units have a single dry kitchen. We redesign these for real use — proper countertop depth, pull-out storage, under-cabinet lighting, and finishes that stay looking good past the first year.',
    icon: '🍳',
  },
  {
    title: 'Full Furnishing & Styling',
    description:
      'Beyond the build — we source and install furniture, lighting, and décor that complete the space. One team, one handover, everything done.',
    icon: '✨',
  },
];

const whyUs = [
  {
    title: 'We Know Your Building',
    body: "The Vertical, Nexus, The Sphere, Crest Jalan Kerinchi — each has its own management rules, hacking hours, lift access constraints, and unit layout quirks. We've worked across Bangsar South's key towers and handle all the coordination so it doesn't land on you.",
  },
  {
    title: 'Smart Design for Compact High-Rise Living',
    body: 'Bangsar South condos are well-located but space is premium. We specialise in layouts that make 800–1,200 sqft feel genuinely spacious — with built-ins that eliminate clutter, multi-use furniture, and spatial tricks that open up even the tightest floor plan.',
  },
  {
    title: 'A Studio 10 Minutes Away',
    body: 'Our studio at The Link, 2, Bukit Jalil is roughly 10 minutes from Bangsar South via the NPE. Close enough for frequent site visits and sample reviews mid-project — without the inconvenience of chasing a firm based on the other side of KL.',
  },
  {
    title: 'Expat & Remote-Worker Friendly',
    body: "We do this regularly. Progress updates with photos and videos at each milestone, a single point of contact throughout, and decisions handled via WhatsApp and video calls. We won't ask you to come in for something we can resolve ourselves.",
  },
  {
    title: 'Transparent Quotations',
    body: 'A full renovation for a 2–3 bedroom condo in Bangsar South typically starts from RM 60,000. Detailed, itemised quotations — no vague ranges, no hidden charges. Book a consultation and you\'ll walk away with a clear number.',
  },
  {
    title: 'Award-Winning Excellence',
    body: 'Recognised across Malaysia for design innovation and craftsmanship. We bring this same level of excellence to every Bangsar South unit, regardless of size or budget.',
  },
];

const craftPoints = [
  'Every dimension drawn before a single nail goes in',
  'Timber grains matched across cabinet panels',
  'Reveal gaps kept consistent to 2–3mm throughout',
  'Wiring concealed before any feature wall is closed',
  'Touch-up visit included 30 days after handover',
  'A single point of contact from Day 1 to handover',
];

const buildings = [
  { name: 'The Vertical Business Suites', type: 'Serviced Residence' },
  { name: 'Nexus @ Bangsar South', type: 'High-Rise Condo' },
  { name: 'The Sphere', type: 'Mixed Development' },
  { name: 'Crest Jalan Kerinchi', type: 'Luxury Condo' },
  { name: 'Ativo Suite', type: 'Serviced Apartment' },
  { name: '8 Kinrara', type: 'Modern Condo' },
];

const directions = [
  { name: 'Bangsar South Central', distance: '~10 mins', landmark: 'Nexus & Vertical Towers' },
  { name: 'Kerinchi / Pantai Hillpark', distance: '<10 mins', landmark: 'NPE exit Bukit Jalil' },
  { name: 'Bangsar Village / BSC', distance: '~15 mins', landmark: 'Bangsar LRT Station' },
  { name: 'Damansara Heights', distance: '~20 mins', landmark: 'Sprint Highway' },
];

const faqs = [
  {
    question: 'Do you work in specific Bangsar South buildings?',
    answer:
      "We've worked across most major developments in Bangsar South — The Vertical, Nexus, The Sphere, Crest Jalan Kerinchi, and others. Each building has its own management rules and we handle all the coordination, permit submissions, and scheduling around building hours.",
  },
  {
    question: 'My condo is only about 900 sqft. Is it worth doing a proper renovation?',
    answer:
      "Absolutely — and compact spaces are where good design makes the biggest difference. A well-designed 900 sqft unit lives better than a poorly designed 1,400 sqft one. We've transformed studios and 2-bedroom Bangsar South units into genuinely spacious-feeling homes through smart layouts, built-in storage, and material choices.",
  },
  {
    question: 'How much does a condo renovation in Bangsar South typically cost?',
    answer:
      "A full renovation for a 2–3 bedroom condo in Bangsar South typically starts from RM 60,000 depending on scope and material selections. We provide detailed, itemised quotations — no vague ranges, no hidden charges. Book a consultation and you'll walk away with a clear number.",
  },
  {
    question: "How long will the renovation take? I'm renting elsewhere during the works.",
    answer:
      "A standard 2–3 bedroom condo renovation takes 8–12 weeks once permits are cleared and materials are confirmed. We'll give you a proper timeline before works begin and are transparent about milestone updates throughout, so you're not guessing when you can move back in.",
  },
  {
    question: 'Can you work around Bangsar South building management restrictions?',
    answer:
      "Yes — this is part of what we do. Bangsar South buildings typically have strict hacking hours (usually 9am–5pm weekdays), lift protection requirements, and noise curfews. We're familiar with these and build them into the project schedule from day one. We handle all the paperwork and liaise with the management on your behalf.",
  },
  {
    question: 'I work from home most days. Can you design a proper home office within my condo?',
    answer:
      'This is one of the most common briefs we get from Bangsar South residents. We design dedicated work areas within condo layouts — sometimes carved out of a bedroom, sometimes integrated into the living area with smart dividers. Proper cable management, acoustic consideration, and lighting for video calls are all part of the brief.',
  },
  {
    question: "I'm an expat and may not be around during the renovation. Can you manage it remotely?",
    answer:
      "We do this regularly. We provide progress updates with photos and videos at each milestone, and you'll have a single point of contact throughout. For key decisions, we use WhatsApp and video calls. We won't ask you to fly back for something we can resolve ourselves.",
  },
  {
    question: 'Do you handle furniture sourcing as well, or just the built-ins and renovation works?',
    answer:
      "Both. We can manage the full scope — renovation works, custom carpentry, loose furniture sourcing, and final styling — or work on just the built-in and structural elements if you prefer to handle furniture yourself. We'll scope it based on what you actually need.",
  },
  {
    question: "What's the difference between your service and a cheaper contractor from Mudah or Facebook?",
    answer:
      "A straightforward answer: a contractor manages workers. We manage the entire design and build — concept, drawings, material specifications, contractor coordination, quality control, and post-handover follow-up. The difference shows up in the details: the reveal gaps, the finishing, the way a drawer closes five years later. We stand behind our work.",
  },
  {
    question: 'How do I get started?',
    answer:
      "WhatsApp us at +60 12 505 3395 or visit our studio at L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3, Bukit Jalil — about 10 minutes from Bangsar South. The first consultation is a proper conversation, not a sales pitch. We listen first.",
  },
];

export default function BangsarSouthPage() {
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
              <span className="text-sm font-medium">Serving Bangsar South, Kerinchi & Surrounding KL Neighbourhoods</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Bangsar South
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Condo interior design specialists for The Vertical, Nexus, The Sphere & all
              Bangsar South developments. Heart-led craftsmanship, 10 minutes from your door.
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
              Serving The Vertical · Nexus · The Sphere · Crest Jalan Kerinchi & all of Bangsar South
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Designed for the Bangsar South Lifestyle
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Bangsar South was built for people who mean business — and who expect the same
                standard at home. The township's towers along <strong>Jalan Kerinchi</strong> house
                some of KL's most design-conscious residents: dual-income professionals, expats on
                long-term postings, remote workers who spend more time at home than at the office.
                The interiors should reflect that.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We're Voala Interior — a premium interior design studio based at{' '}
                <strong>The Link, 2, Bukit Jalil</strong>, roughly 10 minutes from Bangsar South via
                the NPE. We design and build interiors for condos across{' '}
                <strong>The Vertical, Nexus, The Sphere, Crest Jalan Kerinchi</strong>, and the
                broader Bangsar South and Kerinchi corridor. Heart-led craftsmanship and exceptional
                detail in every unit we touch.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you've just collected your keys, are finally doing something about that
                developer-spec unit, or want a home that actually works for how you live in 2025
                — we'd love to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SignatureProjects />

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
              Why Bangsar South Residents Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Knowing the towers is only the beginning.
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
                <strong>2025–2026 context:</strong> Bangsar South continues to attract major
                corporate tenants and a steady flow of new condo handovers. With companies like
                Google, Grab, and UOA anchoring the township, the resident pool is increasingly
                international and design-conscious. Demand for interior designers who understand
                the specific constraints and layouts of Bangsar South towers has grown
                substantially — and we're here to meet it.
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
              Interior Design Services for Bangsar South Condos
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Everything a modern Bangsar South home needs — designed and built properly.
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

            {/* Buildings grid */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Bangsar South Buildings We Serve</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {buildings.map((building, i) => (
                  <div key={i} className="bg-white p-4 rounded border border-gray-200">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">{building.name}</h4>
                        <p className="text-sm text-gray-600">{building.type}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6 text-center">
                Don't see your building?{' '}
                <a
                  href="https://wa.me/60125053395?text=Hi! I'd like to ask about interior design for my condo in Bangsar South."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  WhatsApp us to confirm →
                </a>
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">What Bangsar South Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "We were worried about navigating building management restrictions at The Vertical.
                Voala Interior handled everything — permits, scheduling, the lot. We moved into a
                home that finally felt like us, on time and on budget."
              </blockquote>
              <p className="text-sm text-gray-400">— The Lim Family, The Vertical, Bangsar South</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for Bangsar South Homes
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                Bangsar South residents spend a lot of time at home — and they notice things. The
                way a cabinet closes. The quality of a light switch. Whether the grout lines are
                consistent. These aren't small things. They're the difference between a home that
                feels finished and one that quietly frustrates you every day. We build for people
                who notice.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Heart-led craftsmanship means we care about the invisible work as much as the
                photographable work. The wiring run behind a feature wall. The waterproofing under
                a wet area. The hinge adjustment on a drawer that gets opened ten times a day.
                These are the things that make a home last — and feel right — three and four years
                after we've handed it over.
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
                View Our Projects
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
              Easy to Reach from Bangsar South
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Directions from Bangsar South</h3>

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
                          <strong>Via:</strong> {area.landmark} → NPE → Bukit Jalil
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
                      <span><strong>Visit Our Studio:</strong> See our portfolio and material samples in Bukit Jalil</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>We Come to You:</strong> Free consultation at your Bangsar South condo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Virtual Consultation:</strong> Perfect for expats or overseas owners</span>
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
                    Call or WhatsApp +60 12 505 3395 to schedule. Evening and weekend
                    appointments available for Bangsar South residents.
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
                    title="Voala Interior Studio - 10 minutes from Bangsar South"
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
              Frequently Asked Questions About Interior Design in Bangsar South
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
              Let's Design Your Bangsar South Home Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're 10 minutes from Bangsar South and ready to talk about your condo. First
              consultation is a proper conversation — not a sales pitch. We come prepared,
              we listen first, and we'll tell you honestly what's possible within your budget.
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
                10 minutes from Bangsar South · Serving The Vertical · Nexus · The Sphere · Kerinchi · Pantai Hillpark
              </p>
              <p>Voala Interior, L2-29 & 30, The Link, 2, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
// app/areas/bukit-jalil/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Star, CheckCircle2, Clock,
  Mail, ArrowRight, Building2
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Designer Bukit Jalil | Best Interior Design KL – Voala Interior',
  description:
    'Looking for an interior designer in Bukit Jalil? Voala Interior is located at The Link, 2, Bukit Jalil. Heart-led craftsmanship for condos & landed homes across KL. Call +60 12 505 3395.',
  keywords:
    'interior designer Bukit Jalil, interior design Bukit Jalil, best interior designer in Bukit Jalil, interior designer near KLCC, interior design Kuala Lumpur',
  alternates: {
    canonical: 'https://voalainterior.com/areas/bukit-jalil',
  },
  openGraph: {
    title: 'Interior Designer Bukit Jalil — Voala Interior',
    description:
      'Heart-led interior design studio at The Link, 2, Bukit Jalil. Serving Bukit Jalil, Sri Petaling, Taman Desa, Kinrara & KLCC. Call us today.',
    url: 'https://voalainterior.com/areas/bukit-jalil',
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
    'Premium interior design studio in Bukit Jalil, KL. Heart-led craftsmanship for condos and landed homes.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3',
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
    { '@type': 'City', name: 'Bukit Jalil' },
    { '@type': 'City', name: 'Sri Petaling' },
    { '@type': 'City', name: 'Taman Desa' },
    { '@type': 'City', name: 'Kinrara' },
  ],
};

const services = [
  {
    title: 'Full Condo Renovation',
    description:
      'We transform developer-bland units at Ativo Suite, The Park Residences, or any Bukit Jalil high-rise into genuinely personal homes — from flooring and lighting to every last cabinet handle.',
    icon: '🏠',
  },
  {
    title: 'Master Bedroom & Bathroom',
    description:
      'Humidity-proof design with proper waterproofing, layered lighting, and smart storage built for KL life. No mould surprises six months later.',
    icon: '🛏️',
  },
  {
    title: 'Living & Dining',
    description:
      'Open-plan layouts that feel airy even in compact Bukit Jalil condos. We love feature walls, statement lighting, and furniture arrangements that actually let people breathe.',
    icon: '🛋️',
  },
  {
    title: 'Kitchen Design',
    description:
      'Malaysian kitchens work hard. We design wet and dry kitchens that handle daily cooking, resist humidity, and still look stunning the morning after a steamboat dinner.',
    icon: '🍳',
  },
  {
    title: 'Home Office',
    description:
      'Post-2020, a proper workspace is non-negotiable. We create focused, calm offices within condo bedrooms or landed home study rooms — beautiful on video calls, productive always.',
    icon: '💻',
  },
  {
    title: 'Landed Home Renovation',
    description:
      'From full gut renovations to sensitive refreshes of Kinrara and Sri Petaling landed properties — we bring the same heart-led craftsmanship to every square foot.',
    icon: '🏡',
  },
];

const whyUs = [
  {
    title: 'We Understand Your Building',
    body: "Our studio is right here at The Link, 2 on Jalan Jalil Perkasa 3. We've worked in the condos nearby and know the quirks — unusual column placements, low ceiling heights, load-bearing walls that can't move. No surprises in your quote.",
  },
  {
    title: "We Work Around KL's Climate",
    body: "Bukit Jalil sits at roughly 120m elevation — slightly cooler than the city centre, but humidity is still relentless. Every project gets proper ventilation planning, mould-resistant finishes, and materials chosen for the tropics.",
  },
  {
    title: "We're Genuinely Close By",
    body: "When you need a site visit, a sample check, or a quick chat mid-project, we're 10 minutes away — not a faraway design firm sending a junior to represent them.",
  },
  {
    title: 'Building Management Expertise',
    body: "We're familiar with the JMBS and building management requirements common in Bukit Jalil condos. We handle all the paperwork, hacking permits, and scheduling around building hours so you don't have to.",
  },
  {
    title: 'Transparent Quotations',
    body: "A full condo renovation in Bukit Jalil typically starts from RM 60,000 for a 3-bedroom unit. Detailed, itemised quotations — no vague ranges, no hidden charges. Book a consultation and you'll get a clear number.",
  },
  {
    title: 'Award-Winning Excellence',
    body: "Recognised across Malaysia for design innovation and craftsmanship. We bring this same level of excellence to every Bukit Jalil home — from compact studios to full landed renovations in Kinrara and Sri Petaling.",
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
  { name: 'Ativo Suite', type: 'Serviced Apartment' },
  { name: 'The Park Residences', type: 'High-Rise Condo' },
  { name: 'The Link Residences', type: 'Modern Condo' },
  { name: '8 Kinrara', type: 'Luxury Condo' },
  { name: 'Sri Petaling Landed', type: 'Terrace & Semi-D' },
  { name: 'Kinrara Landed', type: 'Terrace & Bungalow' },
];

const directions = [
  { name: 'KLCC', distance: '20–25 mins', landmark: 'LRT Kelana Jaya Line → Bukit Jalil Station' },
  { name: 'Sri Petaling', distance: '~5 mins', landmark: 'Sri Petaling LRT Station (2 stops)' },
  { name: 'National Stadium / Sports City', distance: '<5 mins', landmark: 'Jalan Jalil Perkasa 3' },
  { name: 'Taman Desa / Kinrara', distance: '10–15 mins', landmark: 'Jalan Klang Lama / NPE' },
];

const faqs = [
  {
    question: 'Where exactly is your studio? Can I visit without an appointment?',
    answer:
      "We're at L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3, Bukit Jalil, 57000 Kuala Lumpur — on the second level. We love walk-ins, but a quick WhatsApp to +60 12 505 3395 means we'll have coffee ready.",
  },
  {
    question: 'Do you serve areas beyond Bukit Jalil?',
    answer:
      "Yes. We regularly work in Sri Petaling, Taman Desa, Kinrara, and the KLCC area. If your home is within the Kuala Lumpur city limits, reach out — we'll let you know our availability.",
  },
  {
    question: 'How much does interior design in Bukit Jalil typically cost?',
    answer:
      "A full condo renovation in the Bukit Jalil area typically starts from RM 60,000 for a 3-bedroom unit, depending on material choices and scope. We give detailed, itemised quotations with no hidden charges — book a consultation and you'll get a clear number, not a vague range.",
  },
  {
    question: 'How long does a typical renovation take?',
    answer:
      "A standard 3-room condo takes 8–12 weeks once permits are in order. Landed homes vary by scope. We'll give you a proper timeline at the design stage — and we stick to it.",
  },
  {
    question: 'Can you work with condos under JMBS/management restrictions?',
    answer:
      "Absolutely. We're familiar with the building management requirements common in Bukit Jalil condos and handle all the paperwork, hacking permits, and scheduling around building hours.",
  },
  {
    question: 'Do you help with small homes or just large ones?',
    answer:
      "Some of our favourite projects have been compact studios and 2-bedroom condos near Bukit Jalil Park. Small spaces need smarter thinking — that's where our detail work really shines.",
  },
  {
    question: 'What makes Voala Interior different from other KL designers?',
    answer:
      "Honestly? We care about the corners. The parts you can't see in photos — how a joint meets, how a drawer closes, how light falls on a surface at 7pm. We call it heart-led craftsmanship, and it shows in homes we've built three and four years later.",
  },
  {
    question: 'Do you handle landed homes in Kinrara and Sri Petaling?',
    answer:
      "Yes — we have active and completed projects in both neighbourhoods. Landed homes give us more structural freedom, and we love the challenge of full-floor layouts with proper dry kitchen, wet kitchen, and utility planning.",
  },
  {
    question: 'Can I see your completed projects before deciding?',
    answer:
      "Of course. Visit our portfolio online, or ask us to share photos of projects similar to your home type. For qualified clients, we can sometimes arrange a site visit to a completed project with the homeowner's permission.",
  },
  {
    question: 'How do I get started?',
    answer:
      "WhatsApp us at +60 12 505 3395 or drop by the studio at The Link, 2, Bukit Jalil. The first consultation is a proper conversation, not a sales pitch — we listen first.",
  },
];

export default function BukitJalilPage() {
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
              <span className="text-sm font-medium">Your Local Interior Design Studio — Right Here in Bukit Jalil</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Bukit Jalil
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Heart-led craftsmanship for condos and landed homes in Bukit Jalil, Sri Petaling,
              Kinrara & beyond. Studio at The Link, 2 — your neighbours in design.
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
              L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3, Bukit Jalil · Serving Sri Petaling · Taman Desa · Kinrara · KLCC
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              We're Right Here in Bukit Jalil
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                If you live or are moving to Bukit Jalil, you already know what draws people here:
                the green lungs of <strong>Bukit Jalil Park</strong>, the energy around the{' '}
                <strong>National Sports Complex</strong>, easy access to Pavilion Bukit Jalil, and
                a neighbourhood that feels like a genuine community rather than just another KL
                address. Your home should reflect that.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We're Voala Interior — a premium interior design studio located right here at{' '}
                <strong>L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3, Bukit Jalil</strong>. We
                design and build interiors for condos, apartments, and landed homes across Bukit
                Jalil, Sri Petaling, Taman Desa, Kinrara, and the KLCC corridor. Heart-led
                craftsmanship and exceptional detail aren't marketing words for us — they're the
                standard we hold every project to.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you've just collected your keys or want to finally renovate that
                developer-spec unit you've lived with for five years, we'd love to help you create
                a home worth coming back to every day.
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
              Why Bukit Jalil Homeowners Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Proximity matters — but it's only the beginning.
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
                <strong>2025–2026 context:</strong> Bukit Jalil is seeing significant new handovers
                from several high-rise projects along the LRT Bukit Jalil corridor. Demand for
                quality interior designers who understand the specific unit layouts and building
                management requirements in this area has never been higher. We're here, we're
                ready, and our calendar fills up — so get in touch early.
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
              Interior Design Services Tailored for Bukit Jalil Homes
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We don't do one-size-fits-all. Here's how we approach KL homes specifically.
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
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Bukit Jalil Properties We Serve</h3>
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
                  href="https://wa.me/60125053395?text=Hi! I'd like to ask about interior design for my home in Bukit Jalil."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  WhatsApp us to confirm →
                </a>
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">What Bukit Jalil Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "We walked past the Voala Interior studio at The Link, 2 and decided to drop in.
                Three months later, our condo looked nothing like a developer unit. The team knew
                our building inside out — no guesswork, no surprises."
              </blockquote>
              <p className="text-sm text-gray-400">— The Ng Family, Ativo Suite, Bukit Jalil</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for Bukit Jalil Homes
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                We believe a well-designed home isn't finished when the last coat of paint dries —
                it's finished when every single detail is exactly right. The reveal gap on a cabinet
                door. The way a sconce casts light at 9pm. The hinge tension on a drawer you open
                ten times a day. These things don't show up in a wide-angle portfolio photo, but you
                feel them every single day you live there.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                This is what we mean when we say heart-led craftsmanship. It's a commitment to doing
                the parts no one will photograph with the same care as the parts everyone will see.
                It's why homeowners in Bukit Jalil, Sri Petaling, and Taman Desa recommend us to
                their friends three years after we've finished their homes.
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
              How to Find Us
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Getting Here</h3>

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
                      <span><strong>Walk In:</strong> We're at The Link, 2, Level 2 — walk-ins welcome, WhatsApp ahead for coffee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>We Come to You:</strong> Free consultation at your Bukit Jalil home</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Virtual Consultation:</strong> Available for busy schedules or out-of-town owners</span>
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
                      <p className="font-semibold text-gray-900 mb-2">By Appointment & Walk-Ins Welcome</p>
                      <p className="text-gray-700">Monday – Friday: 10:00 AM – 6:00 PM</p>
                      <p className="text-gray-700">Saturday: 10:00 AM – 4:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Call or WhatsApp +60 12 505 3395 before visiting so we can set time aside
                    for you. Evening appointments available on request.
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
                    title="Voala Interior Studio at The Link, 2, Bukit Jalil"
                  />
                </div>

                <div className="mt-4">
                  <a
                    href="https://maps.google.com/?q=Voala+Interior+The+Link+2+Jalan+Jalil+Perkasa+3+Bukit+Jalil+Kuala+Lumpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </a>
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
              Frequently Asked Questions About Interior Design in Bukit Jalil
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
              Let's Design Your Bukit Jalil Home Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're right here in Bukit Jalil, and we'd love to hear about your home. Not a
              sales call — a real conversation about what you want to create, starting with
              what you already have.
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
                L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3, Bukit Jalil · Serving Sri Petaling · Taman Desa · Kinrara · KLCC
              </p>
              <p>Voala Interior, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
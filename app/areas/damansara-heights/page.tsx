// app/areas/damansara-heights/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Star, CheckCircle2, Clock,
  ArrowRight, Mail 
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Designer Damansara Heights | Luxury Bungalows KL – Voala Interior',
  description:
    'Premium interior designer for Damansara Heights. Specialising in luxury bungalow, semi-D, and high-end landed home renovations in one of Kuala Lumpur’s most prestigious neighbourhoods.',
  keywords:
    'interior designer Damansara Heights, interior design Damansara Heights, luxury bungalow renovation Damansara Heights, high-end interior designer KL',
  alternates: {
    canonical: 'https://voalainterior.com/areas/damansara-heights',
  },
  openGraph: {
    title: 'Interior Designer Damansara Heights — Voala Interior',
    description:
      'Expert luxury interior design and renovation for Damansara Heights bungalows and prestige homes. Heart-led craftsmanship for KL’s most established affluent enclave.',
    url: 'https://voalainterior.com/areas/damansara-heights',
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
  description: 'Premium interior design studio serving Damansara Heights, Bukit Tunku, Bangsar and greater KL.',
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
    { '@type': 'City', name: 'Damansara Heights' },
    { '@type': 'City', name: 'Bukit Tunku' },
    { '@type': 'City', name: 'Bangsar' },
    { '@type': 'City', name: 'Sri Hartamas' },
  ],
};

const services = [
  {
    title: 'Luxury Bungalow & Semi-D Renovation',
    description:
      "Damansara Heights is known for its grand bungalows and spacious semi-Ds set on mature, tree-lined streets. We respect the scale and character of these homes while introducing modern functionality, refined detailing, and tropical-smart solutions.",
    icon: '🏡',
  },
  {
    title: 'High-End Contemporary Interiors',
    description:
      "For homeowners who want clean, timeless elegance. We use premium natural materials, custom millwork, and sophisticated palettes that reflect the prestige of Damansara Heights living.",
    icon: '🏛️',
  },
  {
    title: 'Master Suite & Private Retreats',
    description:
      'Spacious master bedrooms with resort-like bathrooms featuring proper waterproofing, layered lighting, and generous bespoke storage — designed for comfort in KL’s climate.',
    icon: '🛏️',
  },
  {
    title: 'Formal Living & Entertainment Areas',
    description:
      'Damansara Heights homes often host family gatherings and private events. We design elegant yet warm living and dining spaces that balance grandeur with everyday livability.',
    icon: '🛋️',
  },
  {
    title: 'Bespoke Kitchen Design',
    description:
      'From traditional wet kitchens suited for Malaysian cooking to sleek open-plan kitchens for entertaining — we create kitchens that are both highly functional and visually stunning.',
    icon: '🍳',
  },
  {
    title: 'Full Turnkey Renovation & Project Management',
    description:
      'End-to-end service with single-point contact, strict quality control, and transparent timelines — especially important for complex landed home renovations.',
    icon: '🔨',
  },
];

const whyUs = [
  {
    title: "Deep Understanding of Damansara Heights",
    body: "We know the different eras and architectural styles across Damansara Heights — from classic bungalows to more contemporary builds. This knowledge allows us to deliver renovations that respect the neighbourhood’s established character.",
  },
  {
    title: 'Heritage-Sensitive Yet Modern',
    body: "Many properties here have strong architectural bones. We preserve what matters (high ceilings, generous plots, mature gardens) while updating for modern comfort, smart storage, and tropical performance.",
  },
  {
    title: 'Attention to Detail That Lasts',
    body: "Heart-led craftsmanship means perfectly matched timber grains, consistent reveal gaps, concealed wiring, and finishes that age beautifully in KL’s humidity.",
  },
  {
    title: 'Convenient Access',
    body: "Our studio in Bukit Jalil is only 15–20 minutes from Damansara Heights via the Sprint Highway or Federal Highway, making frequent site visits practical and efficient.",
  },
  {
    title: 'Transparent Luxury Pricing',
    body: "Detailed, itemised quotations. Full bungalow renovations in Damansara Heights typically start from RM 280,000–RM 450,000+ depending on size and scope.",
  },
  {
    title: 'Experienced with Affluent Clients',
    body: "We regularly manage projects for multi-generational families and high-net-worth individuals who value privacy, quality, and clear communication.",
  },
];

const craftPoints = [
  'Every dimension drawn and approved before construction begins',
  'Material selections proven for tropical humidity',
  'Consistent 2–3mm reveal gaps across all joinery',
  'Lighting designed for both natural daylight and evening ambiance',
  'Post-handover touch-up visit included',
  'Single dedicated project lead from start to handover',
];

const directions = [
  { name: 'Central Damansara Heights', distance: '15–20 mins', landmark: 'Via Sprint Highway' },
  { name: 'Bukit Damansara / Taman Duta', distance: '12–18 mins', landmark: 'Connecting local roads' },
  { name: 'Bukit Tunku (Kenny Hills)', distance: '10–15 mins', landmark: 'Short drive through prestigious enclaves' },
  { name: 'Bangsar', distance: '20–25 mins', landmark: 'Via Federal Highway' },
];

const faqs = [
  {
    question: 'Do you serve Damansara Heights even though your studio is in Bukit Jalil?',
    answer:
      "Yes — Damansara Heights is one of our primary premium service areas. The drive from our studio at The Link, 2, Bukit Jalil takes approximately 15–20 minutes via the Sprint Highway. We conduct regular site visits and are very familiar with the neighbourhood.",
  },
  {
    question: "Can you renovate older bungalows in Damansara Heights while preserving character?",
    answer:
      "This is one of our strengths. Many homes in Damansara Heights have beautiful original features. We approach renovations with respect for the existing architecture while introducing modern functionality and comfort.",
  },
  {
    question: 'What is the typical budget for a Damansara Heights bungalow renovation?',
    answer:
      'Luxury bungalow renovations in Damansara Heights usually start from RM 280,000 and can go significantly higher depending on size, structural work, and level of customisation. We provide fully itemised quotations with no vague ranges.',
  },
  {
    question: 'How long does a full renovation in Damansara Heights typically take?',
    answer:
      "Large bungalows or extensive semi-D renovations generally take 16–26 weeks. We provide a detailed project timeline at the design stage and maintain strong coordination throughout.",
  },
  {
    question: 'Do you work with clients who are frequently overseas?',
    answer:
      "Yes, often. We offer clear communication, regular progress updates, virtual walkthroughs, and a single point of contact — making remote project management smooth and stress-free.",
  },
  {
    question: 'What makes Voala Interior different for Damansara Heights projects?',
    answer:
      "We combine luxury design sensibility with practical tropical solutions and meticulous attention to detail. The result is homes that look exceptional and feel even better to live in for years to come.",
  },
];

export default function DamansaraHeightsPage() {
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
              <span className="text-sm font-medium">Serving Damansara Heights & KL’s Prestige Landed Homes</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Damansara Heights
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Luxury interior design and renovation for Damansara Heights bungalows, semi-Ds and prestige landed homes. 
              Timeless craftsmanship for one of Kuala Lumpur’s most established affluent neighbourhoods.
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
              Serving Damansara Heights, Bukit Tunku, Bangsar & greater KL
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Your Damansara Heights Interior Design Partner
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Damansara Heights is one of Kuala Lumpur’s most prestigious and established residential enclaves — 
                characterised by mature greenery, large plots, elegant bungalows and a strong sense of exclusivity.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                At Voala Interior, we bring heart-led craftsmanship to this distinguished neighbourhood. 
                Our studio in Bukit Jalil is conveniently located just 15–20 minutes away, allowing us to provide attentive 
                and responsive service throughout your renovation.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you are updating a classic bungalow or building a contemporary family home, 
                we create sophisticated, functional, and timeless interiors that honour the prestige of Damansara Heights.
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
              Why Damansara Heights Homeowners Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Prestige demands thoughtful, detail-oriented design.
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
              Interior Design Services for Damansara Heights Homes
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Tailored for the scale and elegance of Damansara Heights residences.
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
              <h3 className="text-2xl font-bold mb-4">What Our Damansara Heights Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "Voala Interior transformed our Damansara Heights bungalow with exceptional taste and attention to detail. 
                The result is a home that feels both grand and wonderfully liveable. We couldn’t be happier."
              </blockquote>
              <p className="text-sm text-gray-400">— The Lim Family, Damansara Heights</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for Damansara Heights
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                In Damansara Heights, homes are built for legacy. We design and build with the same level of care — 
                focusing on details that define daily living comfort while delivering the refined elegance the neighbourhood deserves.
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
                View Our Damansara Heights Projects
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
              Easy to Reach from Damansara Heights
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Directions from Damansara Heights</h3>

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
                      <span><strong>We Come to You:</strong> Free consultation at your Damansara Heights home</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Virtual Consultation:</strong> Perfect for overseas owners</span>
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
                    Flexible timing for Damansara Heights clients — evening and weekend appointments available.
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
                    title="Voala Interior Studio - 15-20 minutes from Damansara Heights"
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
              Frequently Asked Questions – Damansara Heights Interior Design
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
              Let’s Create Your Damansara Heights Home
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              From classic bungalows to contemporary family homes — we design luxurious, livable interiors 
              that reflect the prestige and lifestyle of Damansara Heights.
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
                15–20 minutes from Damansara Heights · Serving Bukit Tunku, Bangsar & surrounding prestige areas
              </p>
              <p>Voala Interior, L2-29 & 30, The Link, 2, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
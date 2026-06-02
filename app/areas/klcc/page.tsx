// app/areas/klcc/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Star, CheckCircle2, Clock,
  ArrowRight, Mail 
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Designer KLCC | Luxury Condos & Homes Kuala Lumpur – Voala Interior',
  description:
    'Premium interior designer for KLCC. Expert renovation and interior design for luxury high-rise condos and residences in Kuala Lumpur’s iconic city centre and Golden Triangle.',
  keywords:
    'interior designer KLCC, interior design KLCC, luxury condo renovation KLCC, high-end interior designer Kuala Lumpur',
  alternates: {
    canonical: 'https://voalainterior.com/areas/klcc',
  },
  openGraph: {
    title: 'Interior Designer KLCC — Voala Interior',
    description:
      'Sophisticated luxury interior design and renovation for KLCC condominiums and prestige homes in Kuala Lumpur’s Golden Triangle.',
    url: 'https://voalainterior.com/areas/klcc',
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
  description: 'Premium interior design studio serving KLCC, Bukit Bintang, Ampang Hilir and greater KL.',
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
    { '@type': 'City', name: 'KLCC' },
    { '@type': 'City', name: 'Bukit Bintang' },
    { '@type': 'City', name: 'Ampang Hilir' },
    { '@type': 'City', name: 'Golden Triangle' },
  ],
};

const services = [
  {
    title: 'Luxury High-Rise Condo Renovation',
    description:
      "KLCC’s iconic condominiums (such as Pavilion Residences, The Binjai, and TRX Residences) demand sophisticated design. We transform developer shells into elegant, personalised homes with stunning city views.",
    icon: '🏙️',
  },
  {
    title: 'Prestige Penthouse & Duplex Design',
    description:
      "For the exclusive penthouses and duplexes in KLCC, we create dramatic, multi-level living spaces with exceptional attention to flow, lighting, and breathtaking skyline views.",
    icon: '🏠',
  },
  {
    title: 'Master Suite & Spa Bathrooms',
    description:
      'We design hotel-like master suites with luxurious spa bathrooms, proper waterproofing, layered lighting, and bespoke storage — perfect for the high-end lifestyle of KLCC residents.',
    icon: '🛏️',
  },
  {
    title: 'Entertainment & Living Spaces',
    description:
      'KLCC homes often host business entertaining and social events. We design sophisticated living and dining areas that impress while remaining comfortable for everyday living.',
    icon: '🛋️',
  },
  {
    title: 'Modern Open Kitchens',
    description:
      'Sleek, functional kitchens designed for both casual dining and impressive entertaining, with premium finishes and smart storage solutions.',
    icon: '🍳',
  },
  {
    title: 'Full Turnkey Renovation & Project Management',
    description:
      'End-to-end service with single-point contact, strict quality control, and coordination with building management — essential for high-rise condo projects in KLCC.',
    icon: '🔨',
  },
];

const whyUs = [
  {
    title: "Deep KLCC Experience",
    body: "We are very familiar with KLCC’s iconic buildings, strata rules, hacking restrictions, service lift schedules, and the expectations of discerning city-centre residents.",
  },
  {
    title: 'City Skyline & View Optimisation',
    body: "We design layouts and lighting that maximise breathtaking views of the Petronas Twin Towers, KL Tower, and the city skyline while creating comfortable, functional living spaces.",
  },
  {
    title: 'Sophisticated Urban Luxury',
    body: "We deliver refined, contemporary interiors that reflect the prestige of living in KLCC — elegant yet practical for busy professionals and families.",
  },
  {
    title: 'Convenient Access',
    body: "Our studio in Bukit Jalil is only 15–20 minutes from KLCC via major highways, allowing us to provide frequent site visits and responsive service.",
  },
  {
    title: 'Transparent Premium Pricing',
    body: "Detailed, itemised quotations. KLCC condo renovations typically start from RM 90,000–RM 180,000+ depending on unit size and level of customisation.",
  },
  {
    title: 'Expat & High-Net-Worth Focus',
    body: "We regularly manage projects for international professionals, diplomats, and high-net-worth individuals who value clear communication and exceptional quality.",
  },
];

const craftPoints = [
  'Every dimension drawn and approved before construction begins',
  'Material selections that perform in high-rise environments',
  'Consistent reveal gaps and premium millwork',
  'Lighting designed to enhance city views by day and create ambiance at night',
  'Post-handover touch-up visit included',
  'Single dedicated project lead from concept to keys',
];

const directions = [
  { name: 'KLCC Park & Twin Towers', distance: '15–20 mins', landmark: 'Via Jalan Ampang or AKLEH' },
  { name: 'KLCC Luxury Condominiums', distance: '12–18 mins', landmark: 'Near Suria KLCC' },
  { name: 'Bukit Bintang & Golden Triangle', distance: '10–15 mins', landmark: 'Short city drive' },
  { name: 'Ampang Hilir', distance: '12–18 mins', landmark: 'Via Jalan Tun Razak' },
];

const faqs = [
  {
    question: 'Do you serve KLCC even though your studio is in Bukit Jalil?',
    answer:
      "Yes — KLCC is one of our key premium service areas. The drive from our studio at The Link, 2, Bukit Jalil takes approximately 15–20 minutes via major highways. We conduct regular site visits and are very familiar with KLCC buildings.",
  },
  {
    question: "Can you handle high-rise condo renovations with strict building rules?",
    answer:
      "Absolutely. We have extensive experience navigating KLCC strata regulations, hacking restrictions, service lift bookings, and coordination with building management.",
  },
  {
    question: 'What is the typical budget for a KLCC condo renovation?',
    answer:
      'Luxury condo renovations in KLCC typically start from RM 90,000 for a standard unit and can reach RM 180,000+ for full customisation with premium finishes. We provide fully itemised quotations.',
  },
  {
    question: 'How long does a typical KLCC renovation take?',
    answer:
      "Most KLCC condo projects take 10–16 weeks. Larger units or penthouses may require 14–20 weeks. We provide detailed timelines and maintain strong coordination with the management office.",
  },
  {
    question: 'Do you work with expats and overseas owners in KLCC?',
    answer:
      "Yes, frequently. Many KLCC residents are international professionals or investors. We offer clear communication, regular virtual updates, and reliable project management for remote clients.",
  },
  {
    question: 'What makes Voala Interior different for KLCC projects?',
    answer:
      "We combine sophisticated city living aesthetics with practical, high-quality detailing. Our designs maximise views, optimise space, and create homes that feel luxurious yet comfortable every day.",
  },
];

export default function KLCCPage() {
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
              <span className="text-sm font-medium">Serving KLCC & Kuala Lumpur’s Golden Triangle</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                KLCC
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Luxury interior design and renovation for KLCC condominiums and prestige homes. 
              Sophisticated city living with heart-led craftsmanship in Kuala Lumpur’s iconic centre.
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
              Serving KLCC, Bukit Bintang, Ampang Hilir & the Golden Triangle
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Your KLCC Interior Design Partner
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                KLCC is the beating heart of modern Kuala Lumpur — iconic Petronas Twin Towers, 
                world-class shopping at Suria KLCC, and some of the city’s most prestigious high-rise residences.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                At Voala Interior, we specialise in creating sophisticated, view-maximising interiors 
                for KLCC condominiums. Our studio in Bukit Jalil is conveniently located just 15–20 minutes away, 
                allowing us to deliver attentive service in the heart of the city.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you own a skyline-view condo or a luxurious penthouse, we design elegant, functional spaces 
                that reflect the prestige of living in KLCC.
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
              Why KLCC Residents Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Urban luxury with meticulous attention to detail.
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
              Interior Design Services for KLCC Homes
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Tailored for the iconic high-rise lifestyle of KLCC.
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
              <h3 className="text-2xl font-bold mb-4">What Our KLCC Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "Voala Interior transformed our KLCC condo into a stunning home with breathtaking views. 
                Their attention to detail and understanding of high-rise living made the whole process seamless."
              </blockquote>
              <p className="text-sm text-gray-400">— A Professional Couple, KLCC</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for KLCC
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                Living in KLCC means living with the city at your feet. We design interiors that celebrate 
                the iconic views while creating calm, functional, and luxurious spaces you love coming home to.
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
                View Our KLCC Projects
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
              Easy to Reach from KLCC
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Directions from KLCC</h3>

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
                      <span><strong>We Come to You:</strong> Free consultation at your KLCC residence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Virtual Consultation:</strong> Ideal for busy professionals and overseas owners</span>
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
                    Flexible scheduling for KLCC clients, including evenings and weekends.
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
                    title="Voala Interior Studio - 15-20 minutes from KLCC"
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
              Frequently Asked Questions – KLCC Interior Design
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
              Let’s Design Your KLCC Home
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Create a luxurious, view-maximising home in the heart of Kuala Lumpur’s most iconic address.
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
                15–20 minutes from KLCC · Serving Bukit Bintang, Ampang Hilir & the Golden Triangle
              </p>
              <p>Voala Interior, L2-29 & 30, The Link, 2, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
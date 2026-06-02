// app/areas/sri-hartamas/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Star, CheckCircle2, Clock,
  ArrowRight, Mail 
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Designer Sri Hartamas | Luxury Homes KL – Voala Interior',
  description:
    'Premium interior designer for Sri Hartamas. Expert renovation and interior design for luxury condos, cluster homes, and landed properties in this upscale Kuala Lumpur neighbourhood.',
  keywords:
    'interior designer Sri Hartamas, interior design Sri Hartamas, luxury condo renovation Sri Hartamas, high-end interior designer KL',
  alternates: {
    canonical: 'https://voalainterior.com/areas/sri-hartamas',
  },
  openGraph: {
    title: 'Interior Designer Sri Hartamas — Voala Interior',
    description:
      'Sophisticated interior design and renovation for Sri Hartamas condos, cluster homes and landed residences. Heart-led craftsmanship in one of KL’s most desirable areas.',
    url: 'https://voalainterior.com/areas/sri-hartamas',
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
  description: 'Premium interior design studio serving Sri Hartamas, Mont Kiara, Desa ParkCity and greater KL.',
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
    { '@type': 'City', name: 'Sri Hartamas' },
    { '@type': 'City', name: 'Mont Kiara' },
    { '@type': 'City', name: 'Desa ParkCity' },
    { '@type': 'City', name: 'Damansara Heights' },
  ],
};

const services = [
  {
    title: 'Luxury Condo Renovation',
    description:
      "Sri Hartamas offers some of KL’s most desirable condominiums. We transform developer units into refined, personalised homes with excellent flow, premium finishes, and smart storage solutions.",
    icon: '🏙️',
  },
  {
    title: 'Cluster Home & Townhouse Design',
    description:
      "For the popular cluster homes and townhouses in Sri Hartamas, we create modern, functional layouts that maximise space while maintaining a luxurious, contemporary feel.",
    icon: '🏡',
  },
  {
    title: 'Master Suite & Spa-Like Bathrooms',
    description:
      'We design serene master bedrooms and luxurious bathrooms with proper waterproofing, layered lighting, and custom storage tailored to the lifestyle of Sri Hartamas residents.',
    icon: '🛏️',
  },
  {
    title: 'Open Living & Dining Spaces',
    description:
      'Sri Hartamas families enjoy entertaining. We design open, welcoming living and dining areas that feel spacious, elegant, and perfect for both daily living and social gatherings.',
    icon: '🛋️',
  },
  {
    title: 'Modern Functional Kitchens',
    description:
      'From sleek open kitchens for casual dining to practical wet-dry combinations for Malaysian cooking — we create kitchens that are both beautiful and highly efficient.',
    icon: '🍳',
  },
  {
    title: 'Full Turnkey Renovation & Project Management',
    description:
      'End-to-end service with single-point contact, strict quality control, and transparent timelines — ideal for busy professionals in Sri Hartamas.',
    icon: '🔨',
  },
];

const whyUs = [
  {
    title: "We Know Sri Hartamas Well",
    body: "We understand the different property types in Sri Hartamas — from modern high-rises to charming cluster homes and landed properties — and what each demands in terms of design and functionality.",
  },
  {
    title: 'Family-Oriented Luxury',
    body: "Sri Hartamas attracts many young professionals and families who want both style and practicality. We design homes that are elegant yet highly livable for real family life.",
  },
  {
    title: 'Tropical-Smart Detailing',
    body: "We pay close attention to ventilation, humidity control, and material durability while delivering the clean, modern aesthetic preferred in Sri Hartamas.",
  },
  {
    title: 'Convenient & Responsive Service',
    body: "Our studio in Bukit Jalil is only 10–15 minutes from Sri Hartamas, allowing us to provide frequent site visits and quick response times.",
  },
  {
    title: 'Transparent Pricing',
    body: "Detailed, itemised quotations. Condo renovations in Sri Hartamas typically start from RM 65,000–RM 140,000+, while cluster homes and landed properties start higher depending on scope.",
  },
  {
    title: 'Heart-Led Craftsmanship',
    body: "We focus on the small but important details — consistent reveals, quiet cabinetry, beautiful lighting, and finishes that feel luxurious every single day.",
  },
];

const craftPoints = [
  'Every dimension drawn and approved before construction begins',
  'Material selections optimised for tropical conditions',
  'Consistent reveal gaps and high-quality millwork',
  'Lighting designed for both daytime brightness and evening warmth',
  'Post-handover touch-up visit included',
  'Single dedicated project lead from start to handover',
];

const directions = [
  { name: 'Sri Hartamas Main Area', distance: '10–15 mins', landmark: 'Via Jalan Sri Hartamas' },
  { name: 'Sri Hartamas Condominiums', distance: '8–12 mins', landmark: 'Near 1 Mont Kiara' },
  { name: 'Mont Kiara', distance: '5–10 mins', landmark: 'Short direct drive' },
  { name: 'Desa ParkCity', distance: '12–18 mins', landmark: 'Via connecting roads' },
];

const faqs = [
  {
    question: 'Do you serve Sri Hartamas even though your studio is in Bukit Jalil?',
    answer:
      "Yes — Sri Hartamas is one of our core service areas. The drive from our studio at The Link, 2, Bukit Jalil takes only 10–15 minutes. We conduct regular site visits and are very familiar with the neighbourhood.",
  },
  {
    question: "Can you renovate both condos and cluster homes in Sri Hartamas?",
    answer:
      "Absolutely. We have extensive experience with both high-rise condos and the popular cluster homes/townhouses in Sri Hartamas, understanding the different requirements for each.",
  },
  {
    question: 'What is the typical budget for renovation in Sri Hartamas?',
    answer:
      'Condo renovations in Sri Hartamas usually start from RM 65,000 for a standard unit and can reach RM 140,000+ for full custom work. Cluster homes and landed properties start from RM 150,000 depending on scope. We provide fully itemised quotations.',
  },
  {
    question: 'How long does a typical Sri Hartamas renovation take?',
    answer:
      "Condo projects generally take 8–14 weeks. Cluster homes and larger properties usually require 12–20 weeks. We provide clear timelines and coordinate efficiently with building management.",
  },
  {
    question: 'Do you work with expat families in Sri Hartamas?',
    answer:
      "Yes, frequently. Sri Hartamas has a vibrant mix of local and international families. We offer clear communication, regular updates, and flexible scheduling to suit busy lifestyles.",
  },
  {
    question: 'What makes Voala Interior different in Sri Hartamas?',
    answer:
      "We combine modern luxury aesthetics with practical, family-friendly solutions. Our designs look sophisticated and feel comfortable for everyday living in Sri Hartamas.",
  },
];

export default function SriHartamasPage() {
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
              <span className="text-sm font-medium">Serving Sri Hartamas & Upscale KL Neighbourhoods</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Sri Hartamas
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Sophisticated interior design and renovation for Sri Hartamas luxury condos, 
              cluster homes and landed properties. Modern living with heart-led craftsmanship.
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
              Serving Sri Hartamas, Mont Kiara, Desa ParkCity & greater KL
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Your Sri Hartamas Interior Design Partner
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Sri Hartamas is one of Kuala Lumpur’s most desirable upscale neighbourhoods — 
                known for its excellent location, international schools, vibrant community, and mix of modern condominiums and cluster homes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                At Voala Interior, we specialise in creating refined, functional, and contemporary interiors 
                that suit the dynamic lifestyle of Sri Hartamas residents. Our studio in Bukit Jalil is conveniently 
                located just 10–15 minutes away, enabling us to provide attentive and responsive service.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you own a stylish condo or a spacious cluster home, we design spaces that feel luxurious, 
                practical, and perfectly suited to modern family living in KL.
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
              Why Sri Hartamas Residents Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Modern luxury that works for real life.
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
              Interior Design Services for Sri Hartamas Homes
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Tailored for the contemporary lifestyle of Sri Hartamas.
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
              <h3 className="text-2xl font-bold mb-4">What Our Sri Hartamas Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "Voala Interior helped us turn our Sri Hartamas condo into a warm, stylish home that perfectly suits our family. 
                The attention to detail and practical layout exceeded our expectations."
              </blockquote>
              <p className="text-sm text-gray-400">— The Chen Family, Sri Hartamas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for Sri Hartamas
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                Sri Hartamas residents appreciate modern design that is both beautiful and practical. 
                We focus on the details that make daily living better — smooth cabinetry, thoughtful storage, 
                beautiful lighting, and layouts that flow naturally for family life.
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
                View Our Sri Hartamas Projects
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
              Easy to Reach from Sri Hartamas
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Directions from Sri Hartamas</h3>

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
                      <span><strong>We Come to You:</strong> Free consultation at your Sri Hartamas home</span>
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
                    Flexible scheduling for Sri Hartamas clients, including evenings and weekends where needed.
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
                    title="Voala Interior Studio - 10-15 minutes from Sri Hartamas"
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
              Frequently Asked Questions – Sri Hartamas Interior Design
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
              Let’s Design Your Sri Hartamas Home
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Create a modern, luxurious, and practical home that perfectly suits your lifestyle in Sri Hartamas.
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
                10–15 minutes from Sri Hartamas · Serving Mont Kiara, Desa ParkCity & surrounding areas
              </p>
              <p>Voala Interior, L2-29 & 30, The Link, 2, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
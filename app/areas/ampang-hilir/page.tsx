// app/areas/ampang-hilir/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Star, CheckCircle2, Clock,
  ArrowRight, Mail 
} from 'lucide-react';
import type { Metadata } from 'next';
import SignatureProjects from '@/components/SignatureProjects';


export const metadata: Metadata = {
  title: 'Interior Designer Ampang Hilir | Luxury Condos & Homes KL – Voala Interior',
  description:
    'Premium interior designer serving Ampang Hilir, Embassy Row and surrounding areas. Expert renovation and interior design for luxury condos, semi-Ds and landed homes in one of KL’s most prestigious neighbourhoods.',
  keywords:
    'interior designer Ampang Hilir, interior design Ampang Hilir, luxury condo renovation Ampang Hilir, embassy row interior designer KL',
  alternates: {
    canonical: 'https://voalainterior.com/areas/ampang-hilir',
  },
  openGraph: {
    title: 'Interior Designer Ampang Hilir — Voala Interior',
    description:
      'High-end interior design and renovation for Ampang Hilir luxury condos, semi-Ds and landed homes. Serving Embassy Row and greater KL.',
    url: 'https://voalainterior.com/areas/ampang-hilir',
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
  description: 'Premium interior design studio serving Ampang Hilir, Embassy Row, KLCC and greater KL.',
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
    { '@type': 'City', name: 'Ampang Hilir' },
    { '@type': 'City', name: 'Embassy Row' },
    { '@type': 'City', name: 'KLCC' },
    { '@type': 'City', name: 'Bukit Bintang' },
  ],
};

const services = [
  {
    title: 'Luxury Condo Renovation',
    description:
      "Ampang Hilir’s high-rise condos (including many near Embassy Row) attract executives and diplomats. We transform blank developer units into sophisticated, personalised homes with excellent flow and premium finishes.",
    icon: '🏙️',
  },
  {
    title: 'Semi-D & Landed Home Makeovers',
    description:
      "For the beautiful semi-detached and landed properties scattered across Ampang Hilir, we deliver thoughtful renovations that respect the original architecture while updating for modern tropical living.",
    icon: '🏡',
  },
  {
    title: 'Master Bedroom & Spa-Like Bathrooms',
    description:
      'We design serene master suites with proper waterproofing, layered lighting and generous storage — essential for KL’s humidity and the lifestyle of busy professionals in Ampang Hilir.',
    icon: '🛏️',
  },
  {
    title: 'Entertainment & Living Spaces',
    description:
      'Ampang Hilir homes often host diplomatic gatherings and private entertaining. We create elegant yet comfortable living and dining areas that impress guests while remaining practical for daily family life.',
    icon: '🛋️',
  },
  {
    title: 'Modern Kitchen Design',
    description:
      'From sleek open-plan kitchens favoured by younger professionals to practical wet-dry kitchen combinations that suit Malaysian cooking, we design kitchens that are both beautiful and highly functional.',
    icon: '🍳',
  },
  {
    title: 'Full Turnkey Project Management',
    description:
      'End-to-end renovation service with single-point contact, strict quality control and transparent timelines — especially important in high-density condo environments.',
    icon: '🔨',
  },
];

const whyUs = [
  {
    title: "We Know Ampang Hilir Intimately",
    body: "From the leafy streets near Embassy Row to the premium high-rises along Jalan Ampang and Jalan Tun Razak, we understand the different building types, strata rules, and lifestyle expectations in this prestigious area.",
  },
  {
    title: 'Diplomatic & Expat-Friendly Service',
    body: "Ampang Hilir is home to many embassies and international professionals. We excel at managing projects for clients who may not be on-site daily, with clear communication and detailed progress updates.",
  },
  {
    title: 'Climate-Appropriate Luxury',
    body: "We select materials and detailing that perform well in KL’s humidity while delivering the refined, elegant look expected in Ampang Hilir homes.",
  },
  {
    title: 'Proximity & Responsiveness',
    body: "Our studio in Bukit Jalil is only 15–20 minutes from Ampang Hilir, making frequent site visits and quick response times easy and practical.",
  },
  {
    title: 'Transparent Pricing for Premium Work',
    body: "Detailed, itemised quotations. Luxury condo renovations in Ampang Hilir typically start from RM 80,000–RM 150,000+, while landed homes start from RM 180,000 depending on scope.",
  },
  {
    title: 'Heart-Led Craftsmanship',
    body: "We pay attention to the small but critical details — consistent reveals, perfectly matched materials, and lighting that feels luxurious at any time of day.",
  },
];

const craftPoints = [
  'Every dimension carefully drawn and approved before work begins',
  'Proper waterproofing and ventilation for KL’s tropical climate',
  'Consistent reveal gaps and high-quality millwork',
  'Lighting design that enhances both day and night living',
  'Post-handover touch-up visit included',
  'Single dedicated project coordinator throughout',
];

const directions = [
  { name: 'Embassy Row & Jalan Ampang', distance: '15–20 mins', landmark: 'Via AKLEH or Jalan Tun Razak' },
  { name: 'Ampang Hilir Condominiums', distance: '12–18 mins', landmark: 'Near KLCC corridor' },
  { name: 'KLCC & Bukit Bintang', distance: '18–22 mins', landmark: 'Direct highway access' },
  { name: 'Damansara Heights', distance: '20–25 mins', landmark: 'Sprint Highway' },
];

const faqs = [
  {
    question: 'Do you serve Ampang Hilir even though your studio is in Bukit Jalil?',
    answer:
      "Yes — Ampang Hilir is one of our key service areas. The journey from our studio at The Link, 2, Bukit Jalil takes approximately 15–20 minutes via major highways. We conduct regular site visits and are very familiar with the area.",
  },
  {
    question: "Can you handle high-rise condo renovations in Ampang Hilir?",
    answer:
      "Absolutely. We are experienced with strata rules, hacking restrictions, service lift scheduling, and building management requirements common in Ampang Hilir condominiums.",
  },
  {
    question: 'What is the typical cost for renovation in Ampang Hilir?',
    answer:
      'Luxury condo renovations in Ampang Hilir usually start from RM 80,000 for a standard 3-bedroom unit and can go significantly higher for full customisation. Landed and semi-D projects typically start from RM 180,000. We provide fully itemised quotations.',
  },
  {
    question: 'How long does a typical Ampang Hilir renovation take?',
    answer:
      "Condo renovations generally take 8–14 weeks. Semi-D or landed homes usually require 14–22 weeks. We provide clear timelines and maintain strong coordination with building management.",
  },
  {
    question: 'Do you work with expats and diplomatic families?',
    answer:
      "Yes, frequently. Many of our clients in Ampang Hilir are expatriates or work with embassies. We offer flexible communication, virtual updates, and reliable project management for clients who travel often.",
  },
  {
    question: 'What makes Voala Interior different in Ampang Hilir?',
    answer:
      "We combine luxury design sensibility with practical tropical solutions. We focus on details that matter daily — quiet cabinetry, beautiful lighting, durable yet elegant finishes, and layouts that truly enhance how you live.",
  },
];

export default function AmpangHilirPage() {
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
              <span className="text-sm font-medium">Serving Ampang Hilir, Embassy Row & KLCC Corridor</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Ampang Hilir
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Sophisticated interior design and renovation for Ampang Hilir luxury condos, 
              semi-Ds and landed homes. Heart-led craftsmanship for one of Kuala Lumpur’s most prestigious addresses.
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
              Serving Ampang Hilir, Embassy Row, KLCC, Bukit Bintang & surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Your Ampang Hilir Interior Design Partner
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Ampang Hilir is one of Kuala Lumpur’s most desirable addresses — known for its leafy surroundings, 
                proximity to embassies, excellent connectivity to KLCC, and a mix of luxury high-rises and elegant landed homes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                At Voala Interior, we bring refined, heart-led craftsmanship to this prestigious neighbourhood. 
                Our studio in Bukit Jalil is conveniently located just 15–20 minutes away, allowing us to provide attentive, 
                responsive service throughout your renovation journey.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you live in a sleek high-rise condo near Embassy Row or a charming semi-D, 
                we create sophisticated, functional, and timeless interiors tailored to the lifestyle of Ampang Hilir residents.
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
              Why Ampang Hilir Residents Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Prestige and convenience combined with exceptional attention to detail.
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
              Interior Design Services for Ampang Hilir Homes
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Tailored solutions for the unique mix of luxury condos and landed properties in Ampang Hilir.
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
              <h3 className="text-2xl font-bold mb-4">What Our Ampang Hilir Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "We renovated our condo in Ampang Hilir with Voala Interior. The attention to detail and understanding of our lifestyle needs exceeded our expectations. 
                The space now feels luxurious yet incredibly liveable."
              </blockquote>
              <p className="text-sm text-gray-400">— A Diplomatic Family, Ampang Hilir</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for Ampang Hilir
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                Ampang Hilir residents appreciate refined living. We focus on the details that matter daily — 
                quiet operation of cabinetry, beautiful and functional lighting, durable yet elegant materials, 
                and layouts that make everyday life smoother and more enjoyable.
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
                View Our Ampang Hilir Projects
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
              Easy to Reach from Ampang Hilir
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Directions from Ampang Hilir</h3>

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
                      <span><strong>Visit Our Studio:</strong> Material samples & portfolio viewing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>We Come to You:</strong> Free site consultation at your Ampang Hilir home</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Virtual Consultation:</strong> Ideal for busy professionals and expats</span>
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
                    Flexible scheduling for Ampang Hilir clients, including evenings and weekends where needed.
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
                    title="Voala Interior Studio - 15-20 minutes from Ampang Hilir"
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
              Frequently Asked Questions – Ampang Hilir Interior Design
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
              Let’s Design Your Ampang Hilir Home
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether it’s a luxury condo near Embassy Row or a beautiful landed home, 
              we create sophisticated interiors that reflect your lifestyle and the prestige of Ampang Hilir.
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
                15–20 minutes from Ampang Hilir · Serving Embassy Row, KLCC & surrounding prestige areas
              </p>
              <p>Voala Interior, L2-29 & 30, The Link, 2, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
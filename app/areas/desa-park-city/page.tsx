// app/areas/desa-parkcity/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Star, CheckCircle2, Clock,
  ArrowRight, Mail 
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Designer Desa ParkCity | Luxury Homes KL – Voala Interior',
  description:
    'Premium interior designer for Desa ParkCity. Specialising in luxury condo, cluster home, and lakeside residence renovations in Kuala Lumpur’s most sought-after master-planned community.',
  keywords:
    'interior designer Desa ParkCity, interior design Desa ParkCity, luxury condo renovation Desa ParkCity, lakeside home designer KL',
  alternates: {
    canonical: 'https://voalainterior.com/areas/desa-parkcity',
  },
  openGraph: {
    title: 'Interior Designer Desa ParkCity — Voala Interior',
    description:
      'Expert luxury interior design and renovation for Desa ParkCity condos, cluster homes and lakeside residences. Heart-led craftsmanship for KL’s premier resort-style living.',
    url: 'https://voalainterior.com/areas/desa-parkcity',
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
  description: 'Premium interior design studio serving Desa ParkCity, Mont Kiara, Sri Hartamas and greater KL.',
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
  email: 'askvoala@gmail.com.com',
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
    { '@type': 'City', name: 'Desa ParkCity' },
    { '@type': 'City', name: 'Mont Kiara' },
    { '@type': 'City', name: 'Sri Hartamas' },
    { '@type': 'City', name: 'Kepong' },
  ],
};

const services = [
  {
    title: 'Luxury Condo & Cluster Home Renovation',
    description:
      "Desa ParkCity’s modern condos and cluster homes feature generous layouts and lake views. We transform these into sophisticated, resort-inspired living spaces that maximise natural light and lake breezes.",
    icon: '🏙️',
  },
  {
    title: 'Lakeside Villa & Townhouse Design',
    description:
      "For the exclusive lakeside villas and townhouses, we create elegant interiors that blend indoor-outdoor living, taking full advantage of the park-like setting and water views.",
    icon: '🏡',
  },
  {
    title: 'Master Suite & Spa Bathrooms',
    description:
      'We design serene master retreats with spa-like bathrooms, proper waterproofing, layered lighting, and custom storage — perfect for the relaxed yet luxurious lifestyle in Desa ParkCity.',
    icon: '🛏️',
  },
  {
    title: 'Open Living & Entertainment Spaces',
    description:
      'Desa ParkCity families love to entertain. We design open-plan living and dining areas that feel spacious, welcoming, and perfectly suited for both casual weekends and special gatherings.',
    icon: '🛋️',
  },
  {
    title: 'Modern Functional Kitchens',
    description:
      'From sleek dry kitchens for entertaining to practical wet kitchens for Malaysian cooking — we design kitchens that are beautiful, efficient, and family-friendly.',
    icon: '🍳',
  },
  {
    title: 'Full Turnkey Renovation & Project Management',
    description:
      'End-to-end service with single-point contact, strict quality control, and minimal disruption — ideal for busy professionals living in Desa ParkCity.',
    icon: '🔨',
  },
];

const whyUs = [
  {
    title: "We Understand Desa ParkCity Living",
    body: "We know the unique resort-style lifestyle of Desa ParkCity — the emphasis on indoor-outdoor flow, lake views, community amenities, and family-oriented spaces.",
  },
  {
    title: 'Tropical Resort-Inspired Design',
    body: "We specialise in creating light, airy, and breathable interiors that make the most of Desa ParkCity’s greenery and water features while staying practical in KL’s humidity.",
  },
  {
    title: 'Detail-Oriented Craftsmanship',
    body: "Heart-led craftsmanship means consistent detailing, perfectly matched materials, thoughtful lighting, and finishes that age gracefully in a lakeside environment.",
  },
  {
    title: 'Convenient Access',
    body: "Our studio in Bukit Jalil is only 15–20 minutes from Desa ParkCity via major highways, making frequent site visits and responsive service easy.",
  },
  {
    title: 'Transparent Premium Pricing',
    body: "Detailed, itemised quotations. Condo renovations in Desa ParkCity typically start from RM 70,000–RM 150,000+, while larger cluster homes and villas start from RM 180,000+.",
  },
  {
    title: 'Family & Expat Experience',
    body: "Desa ParkCity attracts many international families and professionals. We excel at managing projects with clear communication and flexible scheduling.",
  },
];

const craftPoints = [
  'Every dimension drawn and approved before construction begins',
  'Material selections optimised for tropical humidity and lake proximity',
  'Consistent reveal gaps and high-quality millwork',
  'Lighting designed to enhance lake views by day and create ambiance at night',
  'Post-handover touch-up visit included',
  'Single dedicated project lead from concept to keys',
];

const directions = [
  { name: 'Desa ParkCity Lake Club & Main Entrance', distance: '15–20 mins', landmark: 'Via Duke Highway or Sprint' },
  { name: 'Desa ParkCity Condominiums & Cluster Homes', distance: '12–18 mins', landmark: 'Mont Kiara direction' },
  { name: 'Sri Hartamas & Mont Kiara', distance: '10–15 mins', landmark: 'Short connecting roads' },
  { name: 'Damansara Heights', distance: '20–25 mins', landmark: 'Via Sprint Highway' },
];

const faqs = [
  {
    question: 'Do you serve Desa ParkCity even though your studio is in Bukit Jalil?',
    answer:
      "Yes — Desa ParkCity is one of our most active service areas. The drive from our studio at The Link 2, Bukit Jalil takes approximately 15–20 minutes via the Duke or Sprint Highway. We conduct regular site visits and are very familiar with the community.",
  },
  {
    question: "Can you maximise lake views and indoor-outdoor flow in Desa ParkCity homes?",
    answer:
      "Absolutely. We specialise in designing layouts that open up to the lake and greenery, creating seamless indoor-outdoor living while maintaining privacy and comfort in KL’s climate.",
  },
  {
    question: 'What is the typical budget for renovation in Desa ParkCity?',
    answer:
      'Condo renovations in Desa ParkCity usually start from RM 70,000 for a standard unit and go up to RM 150,000+ for full customisation. Larger cluster homes and villas start from RM 180,000 depending on scope. We provide fully itemised quotations.',
  },
  {
    question: 'How long does a typical Desa ParkCity renovation take?',
    answer:
      "Condo projects generally take 8–14 weeks. Cluster homes and larger villas usually require 14–22 weeks. We provide clear timelines and coordinate efficiently with the management office.",
  },
  {
    question: 'Do you work with expat families in Desa ParkCity?',
    answer:
      "Yes, very often. Many of our clients in Desa ParkCity are international families. We offer clear communication, regular updates, and flexible scheduling to suit busy lifestyles.",
  },
  {
    question: 'What makes Voala Interior different in Desa ParkCity?',
    answer:
      "We combine resort-inspired aesthetics with practical, family-friendly functionality. Our designs look beautiful in photos and feel even better to live in every single day.",
  },
];

export default function DesaParkCityPage() {
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
              <span className="text-sm font-medium">Serving Desa ParkCity & KL’s Premier Lakeside Community</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Desa ParkCity
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Luxury interior design and renovation for Desa ParkCity condos, cluster homes, 
              and lakeside residences. Resort-inspired living with heart-led craftsmanship.
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
              Serving Desa ParkCity, Mont Kiara, Sri Hartamas & greater KL
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Your Desa ParkCity Interior Design Partner
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Desa ParkCity is Kuala Lumpur’s most successful master-planned community — 
                famous for its beautiful lake, lush greenery, resort-style living, and strong sense of community.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                At Voala Interior, we understand the unique lifestyle here. Our designs celebrate 
                the indoor-outdoor connection, maximise natural light and lake views, while remaining 
                highly practical for family living in KL’s tropical climate.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you live in a modern condo, a spacious cluster home, or a premium lakeside villa, 
                we create sophisticated, comfortable, and timeless interiors that truly feel like home.
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
              Why Desa ParkCity Residents Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Resort living deserves resort-level design and attention to detail.
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
              Interior Design Services for Desa ParkCity Homes
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Tailored for the unique resort-style lifestyle of Desa ParkCity.
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
              <h3 className="text-2xl font-bold mb-4">What Our Desa ParkCity Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "Voala Interior perfectly captured the resort feel we wanted for our Desa ParkCity home. 
                The attention to detail, especially with lighting and flow to the lake view, has made every day feel like a holiday."
              </blockquote>
              <p className="text-sm text-gray-400">— The Wong Family, Desa ParkCity</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for Desa ParkCity
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                Desa ParkCity is about living beautifully every day. We focus on the details that matter — 
                how light plays on surfaces, how spaces flow toward the lake, and how every cabinet, 
                hinge, and light fitting feels just right.
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
                View Our Desa ParkCity Projects
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
              Easy to Reach from Desa ParkCity
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Directions from Desa ParkCity</h3>

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
                      <span><strong>We Come to You:</strong> Free consultation at your Desa ParkCity home</span>
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
                    <a href="mailto:askvoala@gmail.com.com" className="hover:underline">askvoala@gmail.com.com</a>
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
                    Flexible scheduling for Desa ParkCity residents, including evenings and weekends.
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
                    title="Voala Interior Studio - 15-20 minutes from Desa ParkCity"
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
              Frequently Asked Questions – Desa ParkCity Interior Design
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
              Let’s Design Your Desa ParkCity Home
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Create a beautiful, functional home that celebrates the resort lifestyle of Desa ParkCity.
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
                15–20 minutes from Desa ParkCity · Serving Mont Kiara, Sri Hartamas & surrounding areas
              </p>
              <p>Voala Interior, L2-29 & 30, The Link 2, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
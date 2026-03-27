/**
 * ============================================================
 * VOALA INTERIOR — BANGSAR SOUTH NEIGHBORHOOD LANDING PAGE
 * File: app/locations/bangsar-south/page.tsx
 * ============================================================
 *
 * ── HYPERLOCAL INTENT ANALYSIS ──────────────────────────────
 *
 * PRIMARY INTENT CLUSTERS
 * ┌─────────────────────────────────────────────────────────┐
 * │ 1. "interior designer Bangsar South"                    │
 * │    → Transactional. User ready to hire. Wants local.    │
 * │ 2. "interior design Bangsar South"                      │
 * │    → Mixed: research + hire intent. Needs proof+trust.  │
 * │ 3. "best interior designer in Bangsar South"            │
 * │    → Comparison intent. Wants social proof + awards.    │
 * │ 4. "interior designer The Vertical / Nexus / The Sphere"│
 * │    → Building-specific. High purchase intent.           │
 * │ 5. "interior design condo KL"                           │
 * │    → Broad; needs local specificity to rank/convert.    │
 * └─────────────────────────────────────────────────────────┘
 *
 * NEIGHBORHOOD AUDIENCE INSIGHTS (2025–2026)
 *  • Bangsar South (formerly Kampung Kerinchi) is a fully
 *    planned township — branded, walkable, corporate-heavy.
 *  • Key developments: The Vertical (Business Suites),
 *    Nexus @ Bangsar South, The Sphere, Crest Jalan Kerinchi,
 *    Ativo @ Damansara, 8 Kinrara.
 *  • Residents skew 28–45, dual-income professionals, many
 *    working within the township itself (UOA, Google, Grab HQs).
 *  • High expat density. English-comfortable, design-literate.
 *  • Pain points: developer-generic units, small floorplates
 *    (800–1,200 sqft), building management hacking restrictions,
 *    need for smart storage and home office integration.
 *  • Unlike old Bangsar, there are no heritage properties here —
 *    every unit is modern high-rise. The challenge is
 *    personalisation within a tight, standardised shell.
 *
 * PAGE OUTLINE (H1–H3)
 * ─────────────────────
 * H1: Interior Designer Bangsar South — Voala Interior
 * H2: Designed for the Bangsar South Lifestyle
 * H2: Why Bangsar South Residents Choose Voala Interior
 *   H3: We Know Your Building
 *   H3: Smart Design for Compact, High-Rise Living
 *   H3: A Studio 10 Minutes Away
 * H2: Interior Design Services for Bangsar South Condos
 *   H3: Full Condo Renovation
 *   H3: Home Office Integration
 *   H3: Master Bedroom & Bathroom
 *   H3: Living & Dining
 *   H3: Kitchen Design
 * H2: Heart-Led Craftsmanship & Exceptional Detail
 * H2: Frequently Asked Questions
 * H2: Let's Design Your Bangsar South Home Together
 * ============================================================
 */

import React from 'react';
import Link from 'next/link';
import {
  MapPin, Heart, Star, CheckCircle, Clock,
  Home, ChevronRight, MessageCircle, Award, Laptop
} from 'lucide-react';
import StandardButton from '../../../components/ui/standard-button';
import type { Metadata } from 'next';

// ── ON-PAGE SEO ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Interior Designer Bangsar South | Condo Interior Design KL – Voala Interior',
  description:
    'Looking for an interior designer in Bangsar South? Voala Interior specialises in condo renovations at The Vertical, Nexus, The Sphere & more. Heart-led craftsmanship, 10 min from Bangsar South. Call +60 12 505 3395.',
  keywords:
    'interior designer Bangsar South, interior design Bangsar South, interior designer The Vertical, interior designer Nexus Bangsar South, condo interior design KL',
  alternates: {
    canonical: 'https://voalainterior.com/locations/bangsar-south',
  },
  openGraph: {
    title: 'Interior Designer Bangsar South — Voala Interior',
    description:
      'Premium interior design studio serving Bangsar South condos — The Vertical, Nexus, The Sphere & beyond. Heart-led craftsmanship, 10 minutes away. Call +60 12 505 3395.',
    url: 'https://voalainterior.com/locations/bangsar-south',
    images: [
      {
        url: 'https://voalainterior.com/images/bangsar-south-interior-design-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Voala Interior premium condo interior design for Bangsar South, Kuala Lumpur',
      },
    ],
  },
};

// ── SCHEMA.ORG JSON-LD ────────────────────────────────────────
// <script type="application/ld+json">
// {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   "@id": "https://voalainterior.com/#business",
//   "name": "Voala Interior",
//   "description": "Premium interior design studio serving Bangsar South condos including The Vertical, Nexus, and The Sphere. Heart-led craftsmanship for modern high-rise living.",
//   "url": "https://voalainterior.com",
//   "telephone": "+60125053395",
//   "priceRange": "RM RM",
//   "image": "https://voalainterior.com/images/voala-interior-bangsar-south.jpg",
//   "address": {
//     "@type": "PostalAddress",
//     "streetAddress": "L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3",
//     "addressLocality": "Bukit Jalil",
//     "addressRegion": "Kuala Lumpur",
//     "postalCode": "57000",
//     "addressCountry": "MY"
//   },
//   "geo": {
//     "@type": "GeoCoordinates",
//     "latitude": 3.0558,
//     "longitude": 101.6747
//   },
//   "openingHoursSpecification": [
//     {
//       "@type": "OpeningHoursSpecification",
//       "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
//       "opens": "10:00",
//       "closes": "18:00"
//     },
//     {
//       "@type": "OpeningHoursSpecification",
//       "dayOfWeek": ["Saturday"],
//       "opens": "10:00",
//       "closes": "16:00"
//     }
//   ],
//   "areaServed": [
//     "Bangsar South", "Kerinchi", "Pantai Hillpark", "Bangsar", "Kuala Lumpur"
//   ],
//   "hasMap": "https://maps.google.com/?q=Voala+Interior+The+Link+2+Bukit+Jalil",
//   "sameAs": [
//     "https://www.facebook.com/voalainterior",
//     "https://www.instagram.com/voalainterior"
//   ]
// }
// </script>

// ── SUGGESTED IMAGE ALT TEXTS ────────────────────────────────
// 1. "Voala Interior condo renovation at The Vertical Bangsar South Kuala Lumpur"
// 2. "Modern open-plan living room design for Nexus Bangsar South by Voala Interior"
// 3. "Home office integration in Bangsar South condo by Voala Interior KL"
// 4. "Compact kitchen design with smart storage for Bangsar South high-rise"
// 5. "Master bedroom built-in wardrobe design for The Sphere Bangsar South"
// 6. "Interior designer Bangsar South – Voala team at site consultation"

// ── INTERNAL LINKING SUGGESTIONS ─────────────────────────────
// 1. /services/bedroom        → "master bedroom & bathroom design" anchor
// 2. /services/kitchen        → "kitchen design" anchor
// 3. /services/living-dining  → "living & dining room" anchor
// 4. /projects                → "see our completed projects" anchor
// 5. /contact                 → every CTA button
// 6. /services                → "full list of our services" anchor
// 7. /locations/bangsar       → "we also serve old Bangsar" anchor
// 8. /locations/bukit-jalil   → "our Bukit Jalil studio" anchor

// ── PAGE DATA ────────────────────────────────────────────────

const services = [
  {
    title: 'Full Condo Renovation',
    description:
      'From bare developer unit to a home that feels entirely yours. We handle everything — demolition scheduling around building management rules, permit paperwork, material sourcing, carpentry, electrical, and final styling — so you don\'t have to manage ten different contractors.',
  },
  {
    title: 'Home Office Integration',
    description:
      'Half of Bangsar South works from home at least part of the week. We design dedicated workspaces within condo bedrooms and living areas that are genuinely productive, acoustically considered, and look professional on video calls — not an afterthought desk in a corner.',
    link: '/services',
  },
  {
    title: 'Master Bedroom & Bathroom',
    description:
      'The master suite in a Bangsar South condo is often 150–200 sqft of underused potential. We maximise it with humidity-resistant finishes, layered lighting, and bespoke built-in storage that actually fits your wardrobe — not a generic carpenter\'s template.',
    link: '/services/bedroom',
  },
  {
    title: 'Living & Dining',
    description:
      'Open-plan layouts that breathe. We design for the reality of Bangsar South living: hosting colleagues mid-week, relaxing on weekends, and making a 900 sqft space feel twice its size through material, light, and furniture choices.',
  },
  {
    title: 'Kitchen Design',
    description:
      'Most Bangsar South units have a single dry kitchen. We redesign these for real use — proper countertop depth, pull-out storage, under-cabinet lighting, and finishes that stay looking good past the first year.',
  },
];

const whyUs = [
  {
    icon: <Home className="w-5 h-5" />,
    title: 'We Know Your Building',
    body: 'The Vertical, Nexus, The Sphere, Crest Jalan Kerinchi — each has its own management rules, hacking hours, lift access constraints, and unit layout quirks. We\'ve worked across Bangsar South\'s key towers and handle all the coordination so it doesn\'t land on you.',
  },
  {
    icon: <Laptop className="w-5 h-5" />,
    title: 'Smart Design for Compact High-Rise Living',
    body: 'Bangsar South condos are well-located but space is premium. We specialise in layouts that make 800–1,200 sqft feel genuinely spacious — with built-ins that eliminate clutter, multi-use furniture, and spatial tricks that open up even the tightest floor plan.',
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: 'A Studio 10 Minutes Away',
    body: 'Our studio at The Link 2, Bukit Jalil is roughly 10 minutes from Bangsar South via the NPE. Close enough for frequent site visits and sample reviews mid-project — without the inconvenience of chasing a firm based on the other side of KL.',
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
  'The Vertical Business Suites',
  'Nexus @ Bangsar South',
  'The Sphere',
  'Crest Jalan Kerinchi',
  'Ativo Suite',
  '8 Kinrara',
  'Pantai Hillpark Condominiums',
  'Other Bangsar South developments',
];

const faqs = [
  {
    q: 'Do you work in specific Bangsar South buildings?',
    a: 'We\'ve worked across most major developments in Bangsar South — The Vertical, Nexus, The Sphere, Crest Jalan Kerinchi, and others. Each building has its own management rules and we handle all the coordination, permit submissions, and scheduling around building hours.',
  },
  {
    q: 'My condo is only about 900 sqft. Is it worth doing a proper renovation?',
    a: 'Absolutely — and compact spaces are where good design makes the biggest difference. A well-designed 900 sqft unit lives better than a poorly designed 1,400 sqft one. We\'ve transformed studios and 2-bedroom Bangsar South units into genuinely spacious-feeling homes through smart layouts, built-in storage, and material choices.',
  },
  {
    q: 'How much does a condo renovation in Bangsar South typically cost?',
    a: 'A full renovation for a 2–3 bedroom condo in Bangsar South typically starts from RM 60,000 depending on scope and material selections. We provide detailed, itemised quotations — no vague ranges, no hidden charges. Book a consultation and you\'ll walk away with a clear number.',
  },
  {
    q: 'How long will the renovation take? I\'m renting elsewhere during the works.',
    a: 'A standard 2–3 bedroom condo renovation takes 8–12 weeks once permits are cleared and materials are confirmed. We\'ll give you a proper timeline before works begin and are transparent about milestone updates throughout, so you\'re not guessing when you can move back in.',
  },
  {
    q: 'Can you work around Bangsar South building management restrictions?',
    a: 'Yes — this is part of what we do. Bangsar South buildings typically have strict hacking hours (usually 9am–5pm weekdays), lift protection requirements, and noise curfews. We\'re familiar with these and build them into the project schedule from day one. We handle all the paperwork and liaise with the management on your behalf.',
  },
  {
    q: 'I work from home most days. Can you design a proper home office within my condo?',
    a: 'This is one of the most common briefs we get from Bangsar South residents. We design dedicated work areas within condo layouts — sometimes carved out of a bedroom, sometimes integrated into the living area with smart dividers. Proper cable management, acoustic consideration, and lighting for video calls are all part of the brief.',
  },
  {
    q: 'I\'m an expat and may not be around during the renovation. Can you manage it remotely?',
    a: 'We do this regularly. We provide progress updates with photos and videos at each milestone, and you\'ll have a single point of contact throughout. For key decisions, we use WhatsApp and video calls. We won\'t ask you to fly back for something we can resolve ourselves.',
  },
  {
    q: 'Do you handle furniture sourcing as well, or just the built-ins and renovation works?',
    a: 'Both. We can manage the full scope — renovation works, custom carpentry, loose furniture sourcing, and final styling — or work on just the built-in and structural elements if you prefer to handle furniture yourself. We\'ll scope it based on what you actually need.',
  },
  {
    q: 'What\'s the difference between your service and a cheaper contractor from Mudah or Facebook?',
    a: 'A straightforward answer: a contractor manages workers. We manage the entire design and build — concept, drawings, material specifications, contractor coordination, quality control, and post-handover follow-up. The difference shows up in the details: the reveal gaps, the finishing, the way a drawer closes five years later. We stand behind our work.',
  },
  {
    q: 'How do I get started?',
    a: 'WhatsApp us at +60 12 505 3395 or visit our studio at L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil — about 10 minutes from Bangsar South. The first consultation is a proper conversation, not a sales pitch. We listen first.',
  },
];

// ── COMPONENT ────────────────────────────────────────────────

const BangsarSouthPage: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">

      {/* ── SECTION 1: HEADER / H1 ──────────────────────────── */}
      <div className="mb-10">
        <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Serving Bangsar South, Kerinchi & Surrounding KL Neighbourhoods
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6 leading-tight">
          Interior Designer Bangsar South —<br className="hidden md:block" /> Voala Interior
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Bangsar South was built for people who mean business — and who expect the same
          standard at home. The township's towers along{' '}
          <strong>Jalan Kerinchi</strong> house some of KL's most design-conscious
          residents: dual-income professionals, expats on long-term postings, remote
          workers who spend more time at home than at the office. The interiors should
          reflect that.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          We're Voala Interior — a premium interior design studio based at{' '}
          <strong>L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil</strong>,
          roughly 10 minutes from Bangsar South via the NPE. We design and build
          interiors for condos across{' '}
          <strong>The Vertical, Nexus, The Sphere, Crest Jalan Kerinchi</strong>, and
          the broader Bangsar South and Kerinchi corridor. Heart-led craftsmanship and
          exceptional detail in every unit we touch.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Whether you've just collected your keys, are finally doing something about that
          developer-spec unit, or want a home that actually works for how you live in
          2025 — we'd love to help.
        </p>
      </div>

      {/* ── SECTION 2: BUILDINGS WE SERVE ───────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          Designed for the Bangsar South Lifestyle
        </h2>
        <p className="text-gray-500 mb-5">
          We've worked across Bangsar South's key developments. Here's where you'll
          find our work.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {buildings.map((building, i) => (
            <div
              key={i}
              className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700 text-center"
            >
              {building}
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-4">
          Don't see your building? We likely serve it.{' '}
          <a
            href="https://wa.me/60125053395?text=Hi! I'd like to ask about interior design for my condo in Bangsar South."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#59514e] font-medium hover:underline"
          >
            WhatsApp us to confirm →
          </a>
        </p>
      </div>

      {/* ── SECTION 3: WHY US ──────────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          Why Bangsar South Residents Choose Voala Interior
        </h2>
        <p className="text-gray-500 mb-6">
          Knowing the towers is only the beginning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyUs.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-[#59514e]/10 rounded-lg flex items-center justify-center text-[#59514e] mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-5 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>2025–2026 context:</strong> Bangsar South continues to attract
            major corporate tenants and a steady flow of new condo handovers. With
            companies like Google, Grab, and UOA anchoring the township, the resident
            pool is increasingly international and design-conscious. Demand for interior
            designers who understand the specific constraints and layouts of Bangsar
            South towers has grown substantially — and we're here to meet it.
          </p>
        </div>
      </div>

      {/* ── SECTION 4: SERVICES ──────────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          Interior Design Services for Bangsar South Condos
        </h2>
        <p className="text-gray-500 mb-6">
          Everything a modern Bangsar South home needs — designed and built properly.
        </p>
        <div className="space-y-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-[#59514e] text-white rounded-lg flex items-center justify-center text-sm font-bold">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  {service.link && (
                    <Link
                      href={service.link}
                      className="text-[#59514e] text-xs font-medium flex items-center gap-1 hover:underline"
                    >
                      Learn more <ChevronRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-4">
          Need something not listed?{' '}
          <Link href="/services" className="text-[#59514e] font-medium hover:underline">
            See our full list of services →
          </Link>
        </p>
      </div>

      {/* ── SECTION 5: HEART-LED CRAFTSMANSHIP ──────────────── */}
      <div className="mb-10 p-7 bg-[#59514e] rounded-2xl text-white">
        <div className="flex items-start gap-4 mb-5">
          <Heart className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Heart-Led Craftsmanship & Exceptional Detail
            </h2>
            <p className="text-white/80 leading-relaxed">
              Bangsar South residents spend a lot of time at home — and they notice things.
              The way a cabinet closes. The quality of a light switch. Whether the grout
              lines are consistent. These aren't small things. They're the difference
              between a home that feels finished and one that quietly frustrates you every
              day. We build for people who notice.
            </p>
          </div>
        </div>
        <p className="text-white/80 leading-relaxed mb-5">
          Heart-led craftsmanship means we care about the invisible work as much as the
          photographable work. The wiring run behind a feature wall. The waterproofing
          under a wet area. The hinge adjustment on a drawer that gets opened ten times
          a day. These are the things that make a home last — and feel right — three and
          four years after we've handed it over.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {craftPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
              <span className="text-white/90 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 6: FAQs ──────────────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mb-6">
          Real questions from Bangsar South residents — answered directly.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-gray-50 border border-gray-100"
            >
              <p className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                <span className="text-[#59514e] flex-shrink-0">Q.</span>
                {faq.q}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed pl-5">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 7: FINAL CTA ─────────────────────────────── */}
      <div className="pt-8 border-t border-gray-200">
        <div className="p-7 bg-gradient-to-br from-[#59514e] to-[#3d3532] rounded-2xl text-white text-center md:text-left">
          <div className="flex items-start gap-4 mb-4">
            <Award className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Let's Design Your Bangsar South Home Together
              </h2>
              <p className="text-white/80 leading-relaxed mb-1">
                We're 10 minutes from Bangsar South and ready to talk about your condo.
                First consultation is a proper conversation — not a sales pitch. We come
                prepared, we listen first, and we'll tell you honestly what's possible
                within your budget.
              </p>
              <p className="text-white/70 text-sm">
                📍 L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil,
                57000 Kuala Lumpur &nbsp;|&nbsp;{' '}
                <a href="tel:+60125053395" className="text-amber-300 font-semibold hover:underline">
                  +60 12 505 3395
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-5">
            <Link href="/contact">
              <StandardButton variant="primary" showArrow>
                Book a Free Consultation
              </StandardButton>
            </Link>
            <a
              href="https://wa.me/60125053395?text=Hi! I'd like to discuss interior design for my condo in Bangsar South."
              target="_blank"
              rel="noopener noreferrer"
            >
              <StandardButton variant="secondary">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us Now
              </StandardButton>
            </a>
          </div>

          <div className="mt-6 pt-5 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { label: 'Response Time', value: 'Within 2 Hours' },
              { label: 'First Consultation', value: 'No Charge' },
              { label: 'Areas Served', value: 'Bangsar South · The Vertical · Nexus · The Sphere · Kerinchi' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-white/60 text-xs uppercase tracking-wide">{stat.label}</p>
                <p className="text-white font-semibold text-sm mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default BangsarSouthPage;
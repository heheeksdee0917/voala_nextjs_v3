/**
 * ============================================================
 * VOALA INTERIOR — BUKIT JALIL NEIGHBORHOOD LANDING PAGE
 * File: app/locations/bukit-jalil/page.tsx
 * ============================================================
 *
 * ── HYPERLOCAL INTENT ANALYSIS ──────────────────────────────
 *
 * PRIMARY INTENT CLUSTERS
 * ┌─────────────────────────────────────────────────────────┐
 * │ 1. "interior designer Bukit Jalil"                      │
 * │    → Transactional. User ready to hire. Wants local.    │
 * │ 2. "interior design Bukit Jalil"                        │
 * │    → Mixed: research + hire intent. Needs proof+trust.  │
 * │ 3. "best interior designer in Bukit Jalil"              │
 * │    → Comparison intent. Wants social proof + awards.    │
 * │ 4. "interior designer near KLCC"                        │
 * │    → Proximity intent. Include directions from KLCC.    │
 * │ 5. "interior design Kuala Lumpur"                       │
 * │    → Broad; needs local specificity to rank/convert.    │
 * └─────────────────────────────────────────────────────────┘
 *
 * NEIGHBORHOOD AUDIENCE INSIGHTS (2025–2026)
 *  • Bukit Jalil is rapidly densifying — Pavilion Bukit Jalil
 *    (opened 2021) drew retail, F&B and young professionals.
 *  • Mix of high-rise condos (The Link, The Park, Ativo Suite)
 *    and landed homes in Kinrara/Sri Petaling.
 *  • Buyers skew 28–42, dual-income, design-conscious.
 *  • Pain points: small condo floorplates, high humidity,
 *    generic developer finishes they want to upgrade.
 *
 * PAGE OUTLINE (H1–H3)
 * ─────────────────────
 * H1: Interior Designer Bukit Jalil — Voala Interior
 * H2: We're Right Here in Bukit Jalil
 * H2: Why Bukit Jalil Homeowners Choose Voala Interior
 *   H3: We Understand Your Building
 *   H3: We Work Around KL's Climate
 *   H3: We're Genuinely Close By
 * H2: Interior Design Services for Bukit Jalil Homes
 *   H3: Full Condo Renovation
 *   H3: Master Bedroom & Bathroom
 *   H3: Living & Dining
 *   H3: Kitchen Design
 *   H3: Home Office
 * H2: Heart-Led Craftsmanship & Exceptional Detail
 * H2: How to Find Us
 * H2: Frequently Asked Questions
 * H2: Let's Design Your Home Together
 * ============================================================
 */

import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Heart, Star, CheckCircle, Clock,
  Home, ChevronRight, MessageCircle, Award
} from 'lucide-react';
import StandardButton from '../../../components/ui/standard-button';
import type { Metadata } from 'next';

// ── ON-PAGE SEO ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Interior Designer Bukit Jalil | Best Interior Design KL – Voala Interior',
  description:
    'Looking for an interior designer in Bukit Jalil? Voala Interior is located at The Link 2, Bukit Jalil. Heart-led craftsmanship for condos & landed homes across KL. Call +60 12 505 3395.',
  keywords:
    'interior designer Bukit Jalil, interior design Bukit Jalil, best interior designer in Bukit Jalil, interior designer near KLCC, interior design Kuala Lumpur',
  alternates: {
    canonical: 'https://voalainterior.com/locations/bukit-jalil',
  },
  openGraph: {
    title: 'Interior Designer Bukit Jalil — Voala Interior',
    description:
      'Heart-led interior design studio at The Link 2, Bukit Jalil. Serving Bukit Jalil, Sri Petaling, Taman Desa, Kinrara & KLCC. Call us today.',
    url: 'https://voalainterior.com/locations/bukit-jalil',
    images: [
      {
        url: 'https://voalainterior.com/images/bukit-jalil-interior-design-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Voala Interior showroom at The Link 2 Bukit Jalil, Kuala Lumpur',
      },
    ],
  },
};

// ── SCHEMA.ORG JSON-LD ────────────────────────────────────────
// Place this in a <Script> tag with strategy="beforeInteractive"
// in your layout.tsx, or embed directly in the page <head>.
//
// <script type="application/ld+json">
// {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   "@id": "https://voalainterior.com/#business",
//   "name": "Voala Interior",
//   "description": "Premium interior design studio in Bukit Jalil, KL. Heart-led craftsmanship for condos and landed homes.",
//   "url": "https://voalainterior.com",
//   "telephone": "+60125053395",
//   "priceRange": "RM RM",
//   "image": "https://voalainterior.com/images/voala-interior-bukit-jalil.jpg",
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
//     "Bukit Jalil", "Sri Petaling", "Taman Desa", "Kinrara", "KLCC", "Kuala Lumpur"
//   ],
//   "hasMap": "https://maps.google.com/?q=Voala+Interior+The+Link+2+Bukit+Jalil",
//   "sameAs": [
//     "https://www.facebook.com/voalainterior",
//     "https://www.instagram.com/voalainterior"
//   ]
// }
// </script>

// ── SUGGESTED IMAGE ALT TEXTS ────────────────────────────────
// 1. "Voala Interior showroom at The Link 2 Jalan Jalil Perkasa 3 Bukit Jalil KL"
// 2. "Luxury condo living room interior design in Bukit Jalil by Voala Interior"
// 3. "Master bedroom renovation with built-in wardrobe for Bukit Jalil condo"
// 4. "Modern kitchen cabinet design for Sri Petaling home by Voala Interior KL"
// 5. "Interior designer Bukit Jalil – Voala team at client consultation"
// 6. "Detailed joinery and carpentry craftsmanship by Voala Interior Kuala Lumpur"

// ── INTERNAL LINKING SUGGESTIONS ─────────────────────────────
// 1. /services/bedroom       → "master bedroom & bathroom design" anchor
// 2. /services/kitchen       → "kitchen cabinet design" anchor
// 3. /services/living-dining → "living & dining room" anchor
// 4. /portfolio              → "see our completed projects" anchor
// 5. /about                  → "our story and team" anchor
// 6. /contact                → every CTA button
// 7. /services               → "full list of our services" anchor
// 8. /locations/sri-petaling → "we also serve Sri Petaling" anchor (future page)

// ── PAGE DATA ────────────────────────────────────────────────

const services = [
  {
    title: 'Full Condo Renovation',
    description:
      'We transform developer-bland units at Ativo Suite, The Park Residences, or any Bukit Jalil high-rise into genuinely personal homes — from flooring and lighting to every last cabinet handle.',
  },
  {
    title: 'Master Bedroom & Bathroom',
    description:
      'Humidity-proof design with proper waterproofing, layered lighting, and smart storage built for KL life. No mould surprises six months later.',
    link: '/services/bedroom',
  },
  {
    title: 'Living & Dining',
    description:
      'Open-plan layouts that feel airy even in compact Bukit Jalil condos. We love feature walls, statement lighting, and furniture arrangements that actually let people breathe.',
  },
  {
    title: 'Kitchen Design',
    description:
      'Malaysian kitchens work hard. We design wet and dry kitchens that handle daily cooking, resist humidity, and still look stunning the morning after a steamboat dinner.',
  },
  {
    title: 'Home Office',
    description:
      'Post-2020, a proper workspace is non-negotiable. We create focused, calm offices within condo bedrooms or landed home study rooms — beautiful on video calls, productive always.',
  },
];

const whyUs = [
  {
    icon: <Home className="w-5 h-5" />,
    title: 'We Understand Your Building',
    body: 'Our studio is right here at The Link 2 on Jalan Jalil Perkasa 3. We\'ve worked in the condos nearby and know the quirks — unusual column placements, low ceiling heights, load-bearing walls that can\'t move. No surprises in your quote.',
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: 'We Work Around KL\'s Climate',
    body: 'Bukit Jalil sits at roughly 120m elevation — slightly cooler than the city centre, but humidity is still relentless. Every project we handle gets proper ventilation planning, mould-resistant finishes, and materials chosen for the tropics.',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'We\'re Genuinely Close By',
    body: 'When you need a site visit, a sample check, or just a quick chat mid-project, we\'re 10 minutes away — not a faraway design firm sending a junior to represent them.',
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

const faqs = [
  {
    q: 'Where exactly is your office? Can I visit without an appointment?',
    a: 'We\'re at L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil, 57000 Kuala Lumpur — on the second level. We love walk-ins, but a quick WhatsApp to +60 12 505 3395 means we\'ll have coffee ready.',
  },
  {
    q: 'Do you serve areas beyond Bukit Jalil?',
    a: 'Yes. We regularly work in Sri Petaling, Taman Desa, Kinrara, and the KLCC area. If your home is within the Kuala Lumpur city limits, reach out — we\'ll let you know our availability.',
  },
  {
    q: 'How much does interior design in Bukit Jalil typically cost?',
    a: 'A full condo renovation in the Bukit Jalil area typically starts from RM 60,000 for a 3-bedroom unit, depending on material choices and scope. We give detailed, itemised quotations with no hidden charges — book a consultation and you\'ll get a clear number, not a vague range.',
  },
  {
    q: 'How long does a typical renovation take?',
    a: 'A standard 3-room condo takes 8–12 weeks once permits are in order. Landed homes vary by scope. We\'ll give you a proper timeline at the design stage — and we stick to it.',
  },
  {
    q: 'Can you work with condos under JMBS/management restrictions?',
    a: 'Absolutely. We\'re familiar with the building management requirements common in Bukit Jalil condos and handle all the paperwork, hacking permits, and scheduling around building hours.',
  },
  {
    q: 'Do you help with small homes or just large ones?',
    a: 'Some of our favourite projects have been compact studios and 2-bedroom condos near Bukit Jalil Park. Small spaces need smarter thinking — that\'s where our detail work really shines.',
  },
  {
    q: 'What makes Voala Interior different from other KL designers?',
    a: 'Honestly? We care about the corners. The parts you can\'t see in photos — how a joint meets, how a drawer closes, how light falls on a surface at 7pm. We call it heart-led craftsmanship, and it shows in homes we\'ve built three and four years later.',
  },
  {
    q: 'How do I get started?',
    a: 'WhatsApp us at +60 12 505 3395 or drop by the studio at The Link 2, Bukit Jalil. The first consultation is a proper conversation, not a sales pitch — we listen first.',
  },
  {
    q: 'Do you handle landed homes in Kinrara and Sri Petaling?',
    a: 'Yes — we have active and completed projects in both neighbourhoods. Landed homes give us more structural freedom, and we love the challenge of full-floor layouts with proper dry kitchen, wet kitchen, and utility planning.',
  },
  {
    q: 'Can I see your completed projects before deciding?',
    a: 'Of course. Visit our portfolio online, or ask us to share photos of projects similar to your home type. For qualified clients, we can sometimes arrange a site visit to a completed project with the homeowner\'s permission.',
  },
];

// ── COMPONENT ────────────────────────────────────────────────

const BukitJalilPage: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">

      {/* ── SECTION 1: HEADER / H1 ──────────────────────────── */}
      <div className="mb-10">
        <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Serving Bukit Jalil & Surrounding KL Neighbourhoods
        </div>

        {/* H1 — Primary keyword in exact match form */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6 leading-tight">
          Interior Designer Bukit Jalil —<br className="hidden md:block" /> Voala Interior
        </h1>

        {/* ── SECTION 2: LOCAL HOOK ──────────────────────────── */}
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          If you live or are moving to Bukit Jalil, you already know what draws people here:
          the green lungs of <strong>Bukit Jalil Park</strong>, the energy around the{' '}
          <strong>National Sports Complex</strong>, easy access to Pavilion Bukit Jalil, and
          a neighbourhood that feels like a genuine community rather than just another KL
          address. Your home should reflect that.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          We're Voala Interior — a premium interior design studio located right here at{' '}
          <strong>L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil</strong>. We
          design and build interiors for condos, apartments, and landed homes across Bukit
          Jalil, Sri Petaling, Taman Desa, Kinrara, and the KLCC corridor. Heart-led
          craftsmanship and exceptional detail aren't marketing words for us — they're the
          standard we hold every project to.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Whether you've just collected your keys or want to finally renovate that
          developer-spec unit you've lived with for five years, we'd love to help you create
          a home worth coming back to every day.
        </p>
      </div>

      {/* ── SECTION 3: WHY US ──────────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          Why Bukit Jalil Homeowners Choose Voala Interior
        </h2>
        <p className="text-gray-500 mb-6">
          Proximity matters — but it's only the beginning.
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
            <strong>2025–2026 context:</strong> Bukit Jalil is seeing significant new handovers
            from several high-rise projects along the LRT Bukit Jalil corridor. Demand for
            quality interior designers who understand the specific unit layouts and building
            management requirements in this area has never been higher. We're here, we're
            ready, and our calendar fills up — so get in touch early.
          </p>
        </div>
      </div>

      {/* ── SECTION 4: SERVICES ──────────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          Interior Design Services Tailored for Bukit Jalil Homes
        </h2>
        <p className="text-gray-500 mb-6">
          We don't do one-size-fits-all. Here's how we approach KL homes specifically.
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
              We believe a well-designed home isn't finished when the last coat of paint dries —
              it's finished when every single detail is exactly right. The reveal gap on a
              cabinet door. The way a sconce casts light at 9pm. The hinge tension on a drawer
              you open ten times a day. These things don't show up in a wide-angle portfolio photo,
              but you feel them every single day you live there.
            </p>
          </div>
        </div>
        <p className="text-white/80 leading-relaxed mb-5">
          This is what we mean when we say heart-led craftsmanship. It's a commitment to doing
          the parts no one will photograph with the same care as the parts everyone will see.
          It's why homeowners in Bukit Jalil, Sri Petaling, and Taman Desa recommend us to their
          friends three years after we've finished their homes.
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

      {/* ── SECTION 6: DIRECTIONS ──────────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          How to Find Us
        </h2>
        <p className="text-gray-600 mb-6">
          We're easy to reach from most parts of KL and Selangor — and if you're local to
          Bukit Jalil, you may already walk past our building.
        </p>

        <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-blue-900 mb-1">Voala Interior</p>
              <p className="text-blue-800 text-sm">
                L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3,<br />
                Bukit Jalil, 57000 Kuala Lumpur, Malaysia
              </p>
              <p className="text-blue-800 text-sm mt-1">
                📞{' '}
                <a href="tel:+60125053395" className="font-semibold hover:underline">
                  +60 12 505 3395
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            {
              from: 'From KLCC',
              route:
                'Take the LRT Kelana Jaya Line southbound to Bukit Jalil station (~30 min). The Link 2 is a short 5-minute walk. By car: Federal Highway or MEX, exit Bukit Jalil — approximately 20–25 minutes outside peak hours.',
            },
            {
              from: 'From Sri Petaling',
              route:
                'We\'re your nearest premium design studio. Head along Jalan Jalil Perkasa — The Link 2 is roughly 5 minutes by car. You can also take the LRT from Sri Petaling station (2 stops to Bukit Jalil).',
            },
            {
              from: 'From National Stadium / Sports City',
              route:
                'Bukit Jalil National Stadium is right in our neighbourhood. From the stadium, head to Jalan Jalil Perkasa 3 — The Link 2 is less than 2km away.',
            },
            {
              from: 'From Taman Desa / Kinrara',
              route:
                'Via Jalan Klang Lama or the NPE, we\'re roughly 10–15 minutes away. Ample parking is available at The Link 2 shopping centre.',
            },
          ].map((dir, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-gray-50 border border-gray-100"
            >
              <p className="font-bold text-gray-900 mb-1 text-sm">{dir.from}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{dir.route}</p>
            </div>
          ))}
        </div>

        {/* ── GOOGLE MAPS EMBED ──────────────────────────────
            Replace the src URL below with your actual Google Maps embed URL.
            Get it from: Google Maps → Share → Embed a map
            Example URL pattern:
            https://www.google.com/maps/embed?pb=!1m18!1m12!...
        ─────────────────────────────────────────────────── */}
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm h-64 bg-gray-100 flex items-center justify-center">
          {/*
            REPLACE this placeholder with your actual embed:

            <iframe
              src="YOUR_GOOGLE_MAPS_EMBED_URL"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Voala Interior location at The Link 2 Bukit Jalil Kuala Lumpur"
            />
          */}
          <div className="text-center text-gray-400 px-6">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm font-medium">Google Maps Embed</p>
            <p className="text-xs mt-1">
              Replace this div with your &lt;iframe&gt; Google Maps embed.<br />
              L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://maps.google.com/?q=Voala+Interior+The+Link+2+Jalan+Jalil+Perkasa+3+Bukit+Jalil+Kuala+Lumpur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Open in Google Maps
          </a>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            Mon–Fri 10am–6pm &nbsp;|&nbsp; Sat 10am–4pm
          </div>
        </div>
      </div>

      {/* ── SECTION 7: FAQs ──────────────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mb-6">
          Real questions from Bukit Jalil and KL homeowners — answered honestly.
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

      {/* ── SECTION 8: FINAL CTA ─────────────────────────────── */}
      <div className="pt-8 border-t border-gray-200">
        <div className="p-7 bg-gradient-to-br from-[#59514e] to-[#3d3532] rounded-2xl text-white text-center md:text-left">
          <div className="flex items-start gap-4 mb-4">
            <Award className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Let's Design Your Home Together
              </h2>
              <p className="text-white/80 leading-relaxed mb-1">
                We're right here in Bukit Jalil, and we'd love to hear about your home.
                Not a sales call — a real conversation about what you want to create.
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
              href="https://wa.me/60125053395?text=Hi! I'd like to discuss interior design for my home in Bukit Jalil / KL."
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
              { label: 'Areas Served', value: 'Bukit Jalil · Sri Petaling · Taman Desa · Kinrara · KLCC' },
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

export default BukitJalilPage;
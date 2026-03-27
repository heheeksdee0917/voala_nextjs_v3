/**
 * ============================================================
 * VOALA INTERIOR — BUKIT BINTANG NEIGHBORHOOD LANDING PAGE
 * File: app/locations/bukit-bintang/page.tsx
 * ============================================================
 *
 * ── HYPERLOCAL INTENT ANALYSIS ──────────────────────────────
 *
 * PRIMARY INTENT CLUSTERS
 * ┌─────────────────────────────────────────────────────────┐
 * │ 1. "interior designer Bukit Bintang"                    │
 * │    → Transactional. User ready to hire. Wants local.    │
 * │ 2. "interior design Bukit Bintang"                      │
 * │    → Mixed: research + hire intent. Needs proof+trust.  │
 * │ 3. "best interior designer in Bukit Bintang"            │
 * │    → Comparison intent. Wants social proof + awards.    │
 * │ 4. "interior designer KLCC condo"                       │
 * │    → Building-specific. High purchase intent.           │
 * │ 5. "luxury interior design KL city centre"              │
 * │    → Premium intent. Wants high-end references.         │
 * └─────────────────────────────────────────────────────────┘
 *
 * NEIGHBORHOOD AUDIENCE INSIGHTS (2025–2026)
 *  • Bukit Bintang is KL's most cosmopolitan address —
 *    Pavilion KL, Starhill Gallery, The Row, and a skyline
 *    of luxury condos and serviced apartments.
 *  • Key residential developments: Pavilion Suites, Bintang
 *    Goldhill, Marc Residence, Angkasa Raya, Stonor Park,
 *    Hampshire Place, Quadro Residences.
 *  • Residents skew 30–55, high net worth, internationally
 *    travelled, often own multiple properties. Many are
 *    investors renting out units who want a premium finish
 *    that commands higher rental yield.
 *  • Heavy expat and short-term resident population.
 *    English-first. Strong aesthetic literacy — they've
 *    lived in well-designed spaces abroad and expect the same.
 *  • Pain points: luxury-priced units with developer finishes
 *    that don't match the price tag, small floor plates in
 *    serviced apartments, high-traffic investor units needing
 *    durable but beautiful finishes, noise from the city.
 *  • Bukit Bintang is NOT just Jalan Bukit Bintang —
 *    it includes Jalan Imbi, Jalan Raja Chulan, Jalan Sultan
 *    Ismail, and the luxury condo belt stretching toward KLCC.
 *
 * PAGE OUTLINE (H1–H3)
 * ─────────────────────
 * H1: Interior Designer Bukit Bintang — Voala Interior
 * H2: KL's Most Sought-After Address Deserves More
 * H2: Why Bukit Bintang Homeowners Choose Voala Interior
 *   H3: We Understand City-Centre Living
 *   H3: Luxury Finishes That Actually Last
 *   H3: Investment-Grade Design for Rental Properties
 * H2: Interior Design Services for Bukit Bintang Homes
 *   H3: Luxury Condo Renovation
 *   H3: Serviced Apartment Design
 *   H3: Investment Unit Fit-Out
 *   H3: Master Bedroom & Bathroom
 *   H3: Living & Dining
 * H2: Heart-Led Craftsmanship & Exceptional Detail
 * H2: Frequently Asked Questions
 * H2: Let's Design Your Bukit Bintang Home Together
 * ============================================================
 */

import React from 'react';
import Link from 'next/link';
import {
  MapPin, Heart, Star, CheckCircle,
  Home, ChevronRight, MessageCircle, Award, TrendingUp
} from 'lucide-react';
import StandardButton from '../../../components/ui/standard-button';
import type { Metadata } from 'next';

// ── ON-PAGE SEO ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Interior Designer Bukit Bintang | Luxury Condo Interior Design KL – Voala Interior',
  description:
    'Looking for an interior designer in Bukit Bintang? Voala Interior designs luxury condos and serviced apartments across Pavilion Suites, Marc Residence, Stonor Park & more. Call +60 12 505 3395.',
  keywords:
    'interior designer Bukit Bintang, interior design Bukit Bintang, luxury interior design KL, interior designer KLCC condo, interior designer Pavilion Suites, condo renovation Bukit Bintang',
  alternates: {
    canonical: 'https://voalainterior.com/locations/bukit-bintang',
  },
  openGraph: {
    title: 'Interior Designer Bukit Bintang — Voala Interior',
    description:
      'Premium interior design for Bukit Bintang luxury condos and serviced apartments. Pavilion Suites, Marc Residence, Stonor Park & beyond. Call +60 12 505 3395.',
    url: 'https://voalainterior.com/locations/bukit-bintang',
    images: [
      {
        url: 'https://voalainterior.com/images/bukit-bintang-interior-design-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Voala Interior luxury condo interior design for Bukit Bintang, Kuala Lumpur',
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
//   "description": "Premium interior design studio serving Bukit Bintang luxury condos — Pavilion Suites, Marc Residence, Stonor Park, and beyond. Heart-led craftsmanship for KL city-centre living.",
//   "url": "https://voalainterior.com",
//   "telephone": "+60125053395",
//   "priceRange": "RM RM RM",
//   "image": "https://voalainterior.com/images/voala-interior-bukit-bintang.jpg",
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
//     "Bukit Bintang", "KLCC", "Jalan Imbi", "Jalan Raja Chulan", "Kuala Lumpur City Centre"
//   ],
//   "hasMap": "https://maps.google.com/?q=Voala+Interior+The+Link+2+Bukit+Jalil",
//   "sameAs": [
//     "https://www.facebook.com/voalainterior",
//     "https://www.instagram.com/voalainterior"
//   ]
// }
// </script>

// ── SUGGESTED IMAGE ALT TEXTS ────────────────────────────────
// 1. "Voala Interior luxury condo renovation at Pavilion Suites Bukit Bintang KL"
// 2. "High-end living room interior design for Bukit Bintang condo by Voala Interior"
// 3. "Premium master bedroom with custom joinery for Marc Residence KL"
// 4. "Investment unit fit-out for serviced apartment in Bukit Bintang by Voala Interior"
// 5. "Luxury kitchen design for Stonor Park residence Kuala Lumpur"
// 6. "Interior designer Bukit Bintang – Voala Interior design consultation"

// ── INTERNAL LINKING SUGGESTIONS ─────────────────────────────
// 1. /services/bedroom        → "master bedroom & bathroom design" anchor
// 2. /services/kitchen        → "kitchen design" anchor
// 3. /services/living-dining  → "living & dining room" anchor
// 4. /projects                → "see our completed projects" anchor
// 5. /contact                 → every CTA button
// 6. /services                → "full list of our services" anchor
// 7. /locations/bangsar-south → "we also serve Bangsar South" anchor
// 8. /locations/bangsar       → "we also serve Bangsar" anchor

// ── PAGE DATA ────────────────────────────────────────────────

const services = [
  {
    title: 'Luxury Condo Renovation',
    description:
      'Bukit Bintang condos carry a premium price tag — the interior should match. We transform units at Pavilion Suites, Marc Residence, Angkasa Raya, and across the Bukit Bintang skyline into homes that justify every ringgit of their address.',
  },
  {
    title: 'Serviced Apartment Design',
    description:
      'Smaller footprint, higher expectations. Bukit Bintang serviced apartments demand clever layouts, durable finishes, and an aesthetic that feels elevated rather than compressed. We design for the reality of city-centre living at its most compact.',
  },
  {
    title: 'Investment Unit Fit-Out',
    description:
      'Many Bukit Bintang units are purchased as investments. We design rental-ready interiors that command premium short- and long-term rental rates — durable enough for high-traffic use, beautiful enough to photograph well and attract quality tenants.',
    link: '/services',
  },
  {
    title: 'Master Bedroom & Bathroom',
    description:
      'In a city-centre condo, the master suite is the refuge. We design with proper waterproofing, acoustic consideration for urban noise, layered lighting, and bespoke storage that feels genuinely luxurious — not just expensive-looking.',
    link: '/services/bedroom',
  },
  {
    title: 'Living & Dining',
    description:
      'Floor-to-ceiling city views deserve a living space designed around them. We design layouts, lighting, and furniture arrangements that frame the Bukit Bintang skyline as the focal point — rather than competing with it.',
  },
];

const whyUs = [
  {
    icon: <Home className="w-5 h-5" />,
    title: 'We Understand City-Centre Living',
    body: 'Bukit Bintang condos come with specific realities: building management noise curfews, strict delivery windows, lift size constraints for furniture, and floors where vibration from the city matters. We plan around all of it from day one — no surprises mid-project.',
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: 'Luxury Finishes That Actually Last',
    body: 'High-end materials chosen carelessly degrade fast in KL\'s heat and humidity. We specify finishes that are genuinely suited to the climate — not just impressive in the showroom. Marble, engineered timber, lacquer, and stone selected for longevity, not just aesthetics.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Investment-Grade Design for Rental Properties',
    body: 'If your Bukit Bintang unit is an investment, design is a financial decision. A well-designed interior commands 20–30% higher rental yields and photographs better for platforms like Airbnb and PropertyGuru. We understand what high-end tenants actually want.',
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
  'Pavilion Suites',
  'Marc Residence',
  'Angkasa Raya',
  'Stonor Park',
  'Hampshire Place',
  'Quadro Residences',
  'Bintang Goldhill',
  'Other Bukit Bintang developments',
];

const faqs = [
  {
    q: 'Do you serve Bukit Bintang even though your studio is in Bukit Jalil?',
    a: 'Yes — Bukit Bintang is well within our active service area. Our studio at The Link 2, Bukit Jalil is roughly 20–25 minutes from Bukit Bintang via the KL city expressways. We do site visits, consultations, and full project management across all Bukit Bintang developments.',
  },
  {
    q: 'My unit is in a serviced apartment block with strict management rules. Can you still renovate?',
    a: 'Yes, and we\'re used to it. Many Bukit Bintang buildings have tight hacking windows, noise curfews, and strict lift protection requirements. We factor all of this into the project plan from the start — coordinating with management, scheduling trades around allowed hours, and handling all the permit paperwork on your behalf.',
  },
  {
    q: 'How much does a luxury condo renovation in Bukit Bintang typically cost?',
    a: 'For a mid-size condo (800–1,500 sqft) in Bukit Bintang with premium material selections, renovations typically start from RM 80,000–100,000. Smaller serviced apartments start from RM 50,000. Investment unit fit-outs can be scoped to a tighter budget while maintaining a strong visual standard. We provide fully itemised quotes — no vague estimates.',
  },
  {
    q: 'I bought the unit as a rental investment. What design approach do you recommend?',
    a: 'Investment units in Bukit Bintang need to work hard. We design for durability first — surfaces that handle high turnover, materials that clean easily, and layouts that photograph well for listing platforms. We also prioritise finishes that communicate premium without inflating costs unnecessarily. A well-designed rental unit in this location commands significantly higher yields.',
  },
  {
    q: 'Can you design around an existing city view from a high floor?',
    a: 'This is one of the best briefs we get. Floor-to-ceiling city views from a Bukit Bintang high-rise are a design asset, not just a backdrop. We design layouts, lighting, window treatments, and furniture arrangements specifically to frame and enhance the view — not compete with it.',
  },
  {
    q: 'Do you handle luxury material sourcing — marble, engineered timber, imported tiles?',
    a: 'Yes. We have established relationships with suppliers for premium materials across marble, engineered timber, imported porcelain, lacquered finishes, and specialty lighting. We can present options at your consultation and source samples for your review before anything is committed.',
  },
  {
    q: 'I\'m based overseas and own a Bukit Bintang investment unit. Can you manage the project without me being present?',
    a: 'We do this regularly. You\'ll have a single point of contact, progress photos and videos at every milestone, and WhatsApp access throughout. For key decisions, we\'ll use video calls with material samples shown on camera. You won\'t need to fly in to manage a project we\'re running.',
  },
  {
    q: 'How long will a renovation in Bukit Bintang take?',
    a: 'For a standard condo renovation (800–1,200 sqft), expect 8–12 weeks once permits are cleared and materials confirmed. Larger or more complex units with bespoke joinery and imported materials may run 14–18 weeks. We build a realistic timeline before works begin and communicate proactively if anything shifts.',
  },
  {
    q: 'Can you help improve acoustics in a city-centre condo with road noise?',
    a: 'Yes — and this is a common concern in Bukit Bintang. We recommend acoustic treatment strategies during the design stage: appropriate wall and ceiling treatments, window specification advice, and soft furnishing choices that meaningfully reduce urban noise inside the unit.',
  },
  {
    q: 'How do I get started?',
    a: 'WhatsApp us at +60 12 505 3395 or visit our studio at L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil. First consultation is a real conversation about your home and what you want to achieve — not a pitch. We come prepared and we listen first.',
  },
];

// ── COMPONENT ────────────────────────────────────────────────

const BukitBintangPage: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">

      {/* ── SECTION 1: HEADER / H1 ──────────────────────────── */}
      <div className="mb-10">
        <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Serving Bukit Bintang, KLCC Corridor & KL City Centre
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6 leading-tight">
          Interior Designer Bukit Bintang —<br className="hidden md:block" /> Voala Interior
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Bukit Bintang is KL at its most concentrated — <strong>Pavilion KL</strong>,{' '}
          <strong>Starhill Gallery</strong>, rooftop restaurants, and a skyline of
          condominiums and serviced apartments that carry some of the city's highest price
          tags. The people who live here have seen exceptional interiors. They know the
          difference between a space that looks expensive and one that actually feels
          considered.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          We're Voala Interior — a premium interior design studio based at{' '}
          <strong>L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil</strong>,
          about 20–25 minutes from Bukit Bintang. We design and build interiors for luxury
          condos and serviced apartments across{' '}
          <strong>Pavilion Suites, Marc Residence, Stonor Park, Angkasa Raya</strong>, and
          the broader Bukit Bintang and KLCC corridor. Heart-led craftsmanship for homes
          where the standard is genuinely high.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Whether you've just acquired a city-centre unit, own an investment property that
          deserves a proper fit-out, or want to finally bring your home in line with the
          address it carries — we'd like to help.
        </p>
      </div>

      {/* ── SECTION 2: BUILDINGS WE SERVE ───────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          KL's Most Sought-After Address Deserves More
        </h2>
        <p className="text-gray-500 mb-5">
          We've designed interiors across Bukit Bintang's key residential towers. Here's
          where you'll find our work.
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
            href="https://wa.me/60125053395?text=Hi! I'd like to ask about interior design for my condo in Bukit Bintang."
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
          Why Bukit Bintang Homeowners Choose Voala Interior
        </h2>
        <p className="text-gray-500 mb-6">
          A premium address demands a premium approach — inside and out.
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
            <strong>2025–2026 context:</strong> Bukit Bintang continues to attract
            high-net-worth buyers and investors drawn by its walkability, retail density,
            and proximity to the KLCC corridor. With tourism and corporate activity at
            sustained levels, short-term rental yields for well-designed units in this
            area remain among the strongest in KL. If your unit is sitting on developer
            finishes, it's likely underperforming its location.
          </p>
        </div>
      </div>

      {/* ── SECTION 4: SERVICES ──────────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          Interior Design Services for Bukit Bintang Homes
        </h2>
        <p className="text-gray-500 mb-6">
          From full luxury renovations to investment unit fit-outs — designed and built
          to the standard Bukit Bintang demands.
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
              At a Bukit Bintang price point, there's no excuse for average. The people
              who live here have been in beautiful spaces across Singapore, Tokyo, London,
              and Dubai — and they know instinctively when something is well-made versus
              when it's just well-photographed. We build for people who know the
              difference.
            </p>
          </div>
        </div>
        <p className="text-white/80 leading-relaxed mb-5">
          Heart-led craftsmanship is our commitment to doing the invisible work with the
          same care as the visible. The waterproofing behind marble. The acoustic
          treatment inside a wall. The consistency of a reveal gap across every single
          cabinet door. These are the things that make a home feel genuinely right —
          and that hold up five years later when cheaper work has already started to show
          its age.
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
          Real questions from Bukit Bintang homeowners and investors — answered directly.
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
                Let's Design Your Bukit Bintang Home Together
              </h2>
              <p className="text-white/80 leading-relaxed mb-1">
                We're ready to talk about your home or investment unit. First
                consultation is a genuine conversation — we come prepared, we listen,
                and we'll give you an honest picture of what's possible and what it'll
                cost. No pressure, no pitch.
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
              href="https://wa.me/60125053395?text=Hi! I'd like to discuss interior design for my home in Bukit Bintang."
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
              { label: 'Areas Served', value: 'Bukit Bintang · KLCC · Jalan Imbi · Jalan Sultan Ismail · Jalan Raja Chulan' },
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

export default BukitBintangPage;
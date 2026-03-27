import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Heart, Star, CheckCircle, Clock,
  Home, ChevronRight, MessageCircle, Award, Trees
} from 'lucide-react';
import StandardButton from '../../../components/ui/standard-button';
import type { Metadata } from 'next';

// ── ON-PAGE SEO ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Interior Designer Bangsar | Best Interior Design KL – Voala Interior',
  description:
    'Looking for an interior designer in Bangsar? Voala Interior brings heart-led craftsmanship to Bangsar bungalows, semi-Ds, and luxury condos. Studio at The Link 2, Bukit Jalil. Call +60 12 505 3395.',
  keywords:
    'interior designer Bangsar, interior design Bangsar, best interior designer in Bangsar, interior designer Bangsar South, interior design Kuala Lumpur',
  alternates: {
    canonical: 'https://voalainterior.com/locations/bangsar',
  },
  openGraph: {
    title: 'Interior Designer Bangsar — Voala Interior',
    description:
      'Premium interior design studio serving Bangsar, Bangsar South, Damansara Heights & KL. Heart-led craftsmanship for bungalows, semi-Ds, and luxury condos. Call us today.',
    url: 'https://voalainterior.com/locations/bangsar',
    images: [
      {
        url: 'https://voalainterior.com/images/bangsar-interior-design-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Voala Interior premium interior design for Bangsar homes, Kuala Lumpur',
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
//   "description": "Premium interior design studio serving Bangsar, Bangsar South, Damansara Heights and KL. Heart-led craftsmanship for bungalows, semi-Ds, and luxury condos.",
//   "url": "https://voalainterior.com",
//   "telephone": "+60125053395",
//   "priceRange": "RM RM",
//   "image": "https://voalainterior.com/images/voala-interior-bangsar.jpg",
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
//     "Bangsar", "Bangsar South", "Damansara Heights", "Kerinchi", "Pantai Hillpark", "Kuala Lumpur"
//   ],
//   "hasMap": "https://maps.google.com/?q=Voala+Interior+The+Link+2+Bukit+Jalil",
//   "sameAs": [
//     "https://www.facebook.com/voalainterior",
//     "https://www.instagram.com/voalainterior"
//   ]
// }
// </script>

// ── SUGGESTED IMAGE ALT TEXTS ────────────────────────────────
// 1. "Voala Interior luxury bungalow renovation in Bangsar Kuala Lumpur"
// 2. "Open-plan living room interior design for Bangsar South condo by Voala Interior"
// 3. "Master bedroom with custom joinery for Bangsar semi-D home renovation"
// 4. "Wet and dry kitchen design for landed home in Bangsar KL by Voala Interior"
// 5. "Interior designer Bangsar – Voala team at client consultation"
// 6. "Heritage bungalow interior transformation in Bangsar by Voala Interior"

// ── INTERNAL LINKING SUGGESTIONS ─────────────────────────────
// 1. /services/bedroom        → "master bedroom & bathroom design" anchor
// 2. /services/kitchen        → "kitchen design" anchor
// 3. /services/living-dining  → "living & dining room" anchor
// 4. /projects                → "see our completed projects" anchor
// 5. /contact                 → every CTA button
// 6. /services                → "full list of our services" anchor
// 7. /locations/bukit-jalil   → "our Bukit Jalil studio" anchor
// 8. /locations/sri-petaling  → "we also serve Sri Petaling" anchor (future page)

// ── PAGE DATA ────────────────────────────────────────────────

const services = [
  {
    title: 'Full Bungalow & Semi-D Renovation',
    description:
      'Bangsar‘s landed homes carry character — original timber floors, high ceilings, mature gardens. We renovate these with deep respect for what‘s worth keeping and bold vision for what should change. Full gut or sensitive refresh, we do both well.',
  },
  {
    title: 'Luxury Condo Interior Design',
    description:
      'Bangsar South’s Nexus, Vertical, and The Sphere towers attract a discerning crowd. We transform developer-blank units into refined, personal spaces that reflect the lifestyle of the people who live in them — not just a showroom aesthetic.',
  },
  {
    title: 'Master Bedroom & Bathroom',
    description:
      'For Bangsar homeowners, the master suite is a retreat. We design with proper waterproofing, layered lighting, and bespoke storage — and we treat humidity like the real design variable it is in KL.',
    link: '/services/bedroom',
  },
  {
    title: 'Living & Dining',
    description:
      'Bangsar homes entertain often. We design living and dining spaces that feel welcoming for a dinner party of twelve and intimate for a quiet Sunday morning — with layouts, joinery, and lighting that flex beautifully between both.',
  },
  {
    title: 'Kitchen Design',
    description:
      'From heritage wet kitchens in old Bangsar bungalows to sleek open-plan dry kitchens in Bangsar South condos, we design kitchens that work for Malaysian cooking and look stunning doing it.',
  },
];

const whyUs = [
  {
    icon: <Home className="w-5 h-5" />,
    title: 'We Know Bangsar\'s Building Types',
    body: 'Bangsar is not one neighbourhood — it\'s several. Old bungalows along Jalan Ara and Jalan Limau behave very differently from Bangsar South high-rises. We\'ve worked across both and understand what each demands structurally, spatially, and aesthetically.',
  },
  {
    icon: <Trees className="w-5 h-5" />,
    title: 'Heritage-Sensitive, Climate-Conscious Design',
    body: 'Many Bangsar properties are older — some have load-bearing walls, asbestos roofing, or original timber that deserves to stay. We handle heritage homes with care and material intelligence, while making sure every project is built for KL\'s heat and humidity.',
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: 'Close Enough to Care, Far Enough to See Clearly',
    body: 'Our studio is at The Link 2, Bukit Jalil — under 15 minutes from Bangsar via NPE or the LRT Kelana Jaya Line. Close enough for frequent site visits; far enough to bring fresh eyes to your space rather than a neighbourhood-blinker perspective.',
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
    q: 'Do you serve Bangsar even though your studio is in Bukit Jalil?',
    a: 'Yes — Bangsar is one of our most active service areas. Our studio at The Link 2, Bukit Jalil is roughly 12–15 minutes from central Bangsar via the NPE or LRT. We do site visits, consultations, and project management across the entire Bangsar and Bangsar South area.',
  },
  {
    q: 'Can you renovate an older Bangsar bungalow without losing its character?',
    a: 'This is actually one of our favourite briefs. Older Bangsar homes — especially those along Jalan Ara, Jalan Limau, and Cangkat Bangsar — have genuine character in their proportions, ceiling heights, and original details. We approach these with an eye for what to preserve and what to reinvent. We\'ll never bulldoze charm in favour of trend.',
  },
  {
    q: 'How much does a full renovation in Bangsar typically cost?',
    a: 'For a mid-sized bungalow or semi-D in Bangsar, full renovation typically starts from RM 150,000 depending on scope, materials, and structural work required. Condo renovations in Bangsar South start from around RM 60,000 for a 2–3 bedroom unit. We provide detailed, itemised quotations — no vague ranges, no surprise add-ons.',
  },
  {
    q: 'How long does a Bangsar landed home renovation take?',
    a: 'A landed home in Bangsar — semi-D or bungalow — typically takes 12–20 weeks depending on structural scope and permit timelines. We\'ll give you a proper project timeline at the design stage and are transparent about milestones throughout.',
  },
  {
    q: 'Do you handle Bangsar South condos differently from Bangsar landed homes?',
    a: 'Yes. Bangsar South high-rises (Nexus, Vertical, The Sphere, etc.) have their own building management rules, hacking restrictions, and service hour schedules. We\'re familiar with these and handle all the coordination so you don\'t have to. Landed homes involve more structural considerations — we address each based on what your property actually needs.',
  },
  {
    q: 'Can you help with heritage properties that may have asbestos or old wiring?',
    a: 'We work with qualified contractors for structural assessments and hazardous material handling where required. If your property is pre-1990s, we\'ll flag anything we spot during early site visits and factor it into the proper scope of work. We don\'t ignore it and hope for the best.',
  },
  {
    q: 'Do you work with expats or overseas clients who own property in Bangsar?',
    a: 'Often. Bangsar and Bangsar South have a significant expat and returning diaspora community. We\'re comfortable managing projects with owners who aren\'t on-site daily — with clear communication, progress updates, and a single point of contact throughout.',
  },
  {
    q: 'What makes Voala Interior different from Bangsar-based design firms?',
    a: 'We care about the corners — the parts that don\'t photograph well but define how a home feels every day. The hinge tension on a cabinet door. The way light falls on a surface at 7pm. The reveal gap that stays consistent for years. We call it heart-led craftsmanship, and it shows in homes three and four years after we\'ve finished them.',
  },
  {
    q: 'Do you also serve areas near Bangsar like Damansara Heights or Pantai Hillpark?',
    a: 'Yes. We regularly work in Damansara Heights, Pantai Hillpark, Kerinchi, and the broader KL city corridor. If your home is within greater KL, reach out — we\'ll be honest about our availability and timeline.',
  },
  {
    q: 'How do I get started?',
    a: 'WhatsApp us at +60 12 505 3395 or visit our studio at L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil. The first consultation is a proper conversation about your home, not a sales pitch. We listen first — always.',
  },
];

// ── COMPONENT ────────────────────────────────────────────────

const BangsarPage: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">

      {/* ── SECTION 1: HEADER / H1 ──────────────────────────── */}
      <div className="mb-10">
        <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Serving Bangsar, Bangsar South & Surrounding KL Neighbourhoods
        </div>

        {/* H1 — Primary keyword in exact match form */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6 leading-tight">
          Interior Designer Bangsar —<br className="hidden md:block" /> Voala Interior
        </h1>

        {/* ── SECTION 2: LOCAL HOOK ──────────────────────────── */}
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Bangsar has always had its own standard. The tree-lined streets off{' '}
          <strong>Jalan Ara and Jalan Limau</strong>, the neighbourhood energy around{' '}
          <strong>Bangsar Shopping Centre</strong>, the buzz of{' '}
          <strong>Bangsar South's</strong> corporate towers and rooftop restaurants — this
          is one of KL's most established, most discerning enclaves. The homes here should
          match that.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          We're Voala Interior — a premium interior design studio based at{' '}
          <strong>L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil</strong>,
          roughly 12–15 minutes from central Bangsar. We design and build interiors for
          bungalows, semi-Ds, and luxury condos across Bangsar, Bangsar South, Damansara
          Heights, Pantai Hillpark, and the broader KL corridor. Heart-led craftsmanship
          and exceptional detail are the standards we hold every project to — not marketing
          language.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Whether you've just acquired a Bangsar South unit, inherited a character bungalow
          in old Bangsar, or finally decided to do justice to a home you've loved for years
          — we'd be glad to help you create something worth coming home to every day.
        </p>
      </div>

      {/* ── SECTION 3: WHY US ──────────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          Why Bangsar Homeowners Choose Voala Interior
        </h2>
        <p className="text-gray-500 mb-6">
          Bangsar deserves more than a generic design firm. Here's what we bring specifically.
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
            corporate tenants, multinational offices, and young professional residents
            across Nexus, Vertical, and The Sphere. At the same time, old Bangsar's
            bungalow belt is seeing a wave of renovations as the next generation inherits
            or purchases landed homes and wants to bring them into the present without
            erasing their soul. If that sounds like you, we should talk sooner rather
            than later — our calendar fills up.
          </p>
        </div>
      </div>

      {/* ── SECTION 4: SERVICES ──────────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-2">
          Interior Design Services for Bangsar Homes
        </h2>
        <p className="text-gray-500 mb-6">
          Every Bangsar property is different. Here's how we approach the range.
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
              Bangsar homeowners have seen enough interiors to know the difference between
              a home that photographs well and one that actually lives well. We build for
              the latter. The reveal gap on a cabinet door. The way a pendant casts light
              at 9pm. The hinge tension on a drawer you open ten times a day. These things
              don't make it into wide-angle portfolio shots, but you feel them every single
              day you're home.
            </p>
          </div>
        </div>
        <p className="text-white/80 leading-relaxed mb-5">
          This is what we mean by heart-led craftsmanship. It's a commitment to doing the
          invisible parts with the same care as the parts everyone sees. It's why homeowners
          in Bangsar, Damansara Heights, and Pantai Hillpark still recommend us to their
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
          How to Find Us from Bangsar
        </h2>
        <p className="text-gray-600 mb-6">
          Our studio is at The Link 2, Bukit Jalil — an easy drive or LRT ride from
          Bangsar. Come in for a proper conversation over coffee.
        </p>

        <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-blue-900 mb-1">Voala Interior — Studio</p>
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
              from: 'From Bangsar Village / BSC',
              route:
                'Take the LRT Kelana Jaya Line from Bangsar station southbound — change at KL Sentral to the Sri Petaling Line, alight at Bukit Jalil (~25–30 min). The Link 2 is a 5-minute walk. By car: NPE southbound, exit Bukit Jalil — approximately 12–15 minutes outside peak hours.',
            },
            {
              from: 'From Bangsar South (Nexus / Vertical)',
              route:
                'Bangsar South is roughly 10 minutes from our studio via the NPE or Jalan Kerinchi Link. By LRT: Kerinchi station (Kelana Jaya Line) to Bukit Jalil — about 20 minutes with one interchange at KL Sentral.',
            },
            {
              from: 'From Damansara Heights',
              route:
                'Via Sprint Highway connecting to NPE, we\'re roughly 15–20 minutes away. Ample parking is available at The Link 2 shopping centre — park on Level 1 or 2 and walk straight to our studio.',
            },
            {
              from: 'From Pantai Hillpark / Kerinchi',
              route:
                'You\'re already close. Head toward NPE and exit at Bukit Jalil — The Link 2 is under 10 minutes. We\'re on Level 2, units 29 & 30. WhatsApp us before you come and we\'ll have the door open.',
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
          Real questions from Bangsar and KL homeowners — answered honestly.
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
                Let's Design Your Bangsar Home Together
              </h2>
              <p className="text-white/80 leading-relaxed mb-1">
                We're 15 minutes from Bangsar and ready to talk about your home. Not a
                sales call — a real conversation about what you want to create, starting
                with what you already have.
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
              href="https://wa.me/60125053395?text=Hi! I'd like to discuss interior design for my home in Bangsar / KL."
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
              { label: 'Areas Served', value: 'Bangsar · Bangsar South · Damansara Heights · Pantai Hillpark · KLCC' },
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

export default BangsarPage;
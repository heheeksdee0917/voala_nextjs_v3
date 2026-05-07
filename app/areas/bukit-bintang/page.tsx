// app/areas/bukit-bintang/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Star, CheckCircle2, Clock,
  Mail, ArrowRight, Building2, TrendingUp
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Designer Bukit Bintang | Luxury Condo Interior Design KL – Voala Interior',
  description:
    'Looking for an interior designer in Bukit Bintang? Voala Interior designs luxury condos and serviced apartments across Pavilion Suites, Marc Residence, Stonor Park & more. Call +60 12 505 3395.',
  keywords:
    'interior designer Bukit Bintang, interior design Bukit Bintang, luxury interior design KL, interior designer KLCC condo, interior designer Pavilion Suites, condo renovation Bukit Bintang',
  alternates: {
    canonical: 'https://voalainterior.com/areas/bukit-bintang',
  },
  openGraph: {
    title: 'Interior Designer Bukit Bintang — Voala Interior',
    description:
      'Premium interior design for Bukit Bintang luxury condos and serviced apartments. Pavilion Suites, Marc Residence, Stonor Park & beyond. Call +60 12 505 3395.',
    url: 'https://voalainterior.com/areas/bukit-bintang',
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
    'Premium interior design studio serving Bukit Bintang luxury condos — Pavilion Suites, Marc Residence, Stonor Park, and beyond.',
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
    { '@type': 'City', name: 'Bukit Bintang' },
    { '@type': 'City', name: 'KLCC' },
    { '@type': 'City', name: 'Jalan Imbi' },
    { '@type': 'City', name: 'Jalan Raja Chulan' },
  ],
};

const services = [
  {
    title: 'Luxury Condo Renovation',
    description:
      'Bukit Bintang condos carry a premium price tag — the interior should match. We transform units at Pavilion Suites, Marc Residence, Angkasa Raya, and across the Bukit Bintang skyline into homes that justify every ringgit of their address.',
    icon: '🏙️',
  },
  {
    title: 'Serviced Apartment Design',
    description:
      'Smaller footprint, higher expectations. Bukit Bintang serviced apartments demand clever layouts, durable finishes, and an aesthetic that feels elevated rather than compressed. We design for the reality of city-centre living at its most compact.',
    icon: '🏢',
  },
  {
    title: 'Investment Unit Fit-Out',
    description:
      'Many Bukit Bintang units are purchased as investments. We design rental-ready interiors that command premium short- and long-term rental rates — durable enough for high-traffic use, beautiful enough to photograph well and attract quality tenants.',
    icon: '📈',
  },
  {
    title: 'Master Bedroom & Bathroom',
    description:
      'In a city-centre condo, the master suite is the refuge. We design with proper waterproofing, acoustic consideration for urban noise, layered lighting, and bespoke storage that feels genuinely luxurious — not just expensive-looking.',
    icon: '🛏️',
  },
  {
    title: 'Living & Dining',
    description:
      'Floor-to-ceiling city views deserve a living space designed around them. We design layouts, lighting, and furniture arrangements that frame the Bukit Bintang skyline as the focal point — rather than competing with it.',
    icon: '🛋️',
  },
  {
    title: 'Full Furnishing & Styling',
    description:
      'Beyond the build — we source and install furniture, lighting, and décor that complete the space. One team, one handover, everything done to the standard the address demands.',
    icon: '✨',
  },
];

const whyUs = [
  {
    title: 'We Understand City-Centre Living',
    body: "Bukit Bintang condos come with specific realities: building management noise curfews, strict delivery windows, lift size constraints for furniture, and floors where vibration from the city matters. We plan around all of it from day one — no surprises mid-project.",
  },
  {
    title: 'Luxury Finishes That Actually Last',
    body: "High-end materials chosen carelessly degrade fast in KL's heat and humidity. We specify finishes genuinely suited to the climate — not just impressive in the showroom. Marble, engineered timber, lacquer, and stone selected for longevity, not just aesthetics.",
  },
  {
    title: 'Investment-Grade Design',
    body: "If your Bukit Bintang unit is an investment, design is a financial decision. A well-designed interior commands 20–30% higher rental yields and photographs better for platforms like Airbnb and PropertyGuru. We understand what high-end tenants actually want.",
  },
  {
    title: 'Remote Project Management',
    body: "We manage projects for overseas owners regularly. Progress updates with photos and videos at every milestone, WhatsApp access throughout, and video calls for key decisions. You won't need to fly in for something we can resolve ourselves.",
  },
  {
    title: 'Acoustic & Climate Expertise',
    body: "Urban noise is a real concern in city-centre condos. We recommend acoustic treatment strategies during the design stage — wall and ceiling treatments, window specifications, and soft furnishing choices that meaningfully reduce road noise inside your unit.",
  },
  {
    title: 'Award-Winning Excellence',
    body: "Recognised across Malaysia for design innovation and craftsmanship. We bring this same level of excellence to every Bukit Bintang home — whether it's a pied-à-terre, a family residence, or a premium investment unit.",
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
  { name: 'Pavilion Suites', type: 'Luxury Condo' },
  { name: 'Marc Residence', type: 'High-Rise Residence' },
  { name: 'Angkasa Raya', type: 'Serviced Residence' },
  { name: 'Stonor Park', type: 'Luxury Condo' },
  { name: 'Hampshire Place', type: 'Serviced Residence' },
  { name: 'Quadro Residences', type: 'Modern Condo' },
];

const directions = [
  { name: 'Bukit Bintang / Pavilion KL', distance: '20–25 mins', landmark: 'Bukit Bintang MRT Station' },
  { name: 'KLCC Corridor', distance: '~25 mins', landmark: 'Petronas Twin Towers' },
  { name: 'Jalan Imbi / Jalan Raja Chulan', distance: '20–25 mins', landmark: 'KL City Centre' },
  { name: 'Bangsar South', distance: '~10 mins', landmark: 'NPE Highway' },
];

const faqs = [
  {
    question: 'Do you serve Bukit Bintang even though your studio is in Bukit Jalil?',
    answer:
      "Yes — Bukit Bintang is well within our active service area. Our studio at The Link 2, Bukit Jalil is roughly 20–25 minutes from Bukit Bintang via the KL city expressways. We do site visits, consultations, and full project management across all Bukit Bintang developments.",
  },
  {
    question: 'My unit is in a serviced apartment block with strict management rules. Can you still renovate?',
    answer:
      "Yes, and we're used to it. Many Bukit Bintang buildings have tight hacking windows, noise curfews, and strict lift protection requirements. We factor all of this into the project plan from the start — coordinating with management, scheduling trades around allowed hours, and handling all the permit paperwork on your behalf.",
  },
  {
    question: 'How much does a luxury condo renovation in Bukit Bintang typically cost?',
    answer:
      "For a mid-size condo (800–1,500 sqft) in Bukit Bintang with premium material selections, renovations typically start from RM 80,000–100,000. Smaller serviced apartments start from RM 50,000. Investment unit fit-outs can be scoped to a tighter budget while maintaining a strong visual standard. We provide fully itemised quotes — no vague estimates.",
  },
  {
    question: 'I bought the unit as a rental investment. What design approach do you recommend?',
    answer:
      "Investment units in Bukit Bintang need to work hard. We design for durability first — surfaces that handle high turnover, materials that clean easily, and layouts that photograph well for listing platforms. We also prioritise finishes that communicate premium without inflating costs unnecessarily. A well-designed rental unit in this location commands significantly higher yields.",
  },
  {
    question: 'Can you design around an existing city view from a high floor?',
    answer:
      "This is one of the best briefs we get. Floor-to-ceiling city views from a Bukit Bintang high-rise are a design asset, not just a backdrop. We design layouts, lighting, window treatments, and furniture arrangements specifically to frame and enhance the view — not compete with it.",
  },
  {
    question: 'Do you handle luxury material sourcing — marble, engineered timber, imported tiles?',
    answer:
      "Yes. We have established relationships with suppliers for premium materials across marble, engineered timber, imported porcelain, lacquered finishes, and specialty lighting. We can present options at your consultation and source samples for your review before anything is committed.",
  },
  {
    question: "I'm based overseas and own a Bukit Bintang investment unit. Can you manage the project without me being present?",
    answer:
      "We do this regularly. You'll have a single point of contact, progress photos and videos at every milestone, and WhatsApp access throughout. For key decisions, we'll use video calls with material samples shown on camera. You won't need to fly in to manage a project we're running.",
  },
  {
    question: 'How long will a renovation in Bukit Bintang take?',
    answer:
      "For a standard condo renovation (800–1,200 sqft), expect 8–12 weeks once permits are cleared and materials confirmed. Larger or more complex units with bespoke joinery and imported materials may run 14–18 weeks. We build a realistic timeline before works begin and communicate proactively if anything shifts.",
  },
  {
    question: 'Can you help improve acoustics in a city-centre condo with road noise?',
    answer:
      "Yes — and this is a common concern in Bukit Bintang. We recommend acoustic treatment strategies during the design stage: appropriate wall and ceiling treatments, window specification advice, and soft furnishing choices that meaningfully reduce urban noise inside the unit.",
  },
  {
    question: 'How do I get started?',
    answer:
      "WhatsApp us at +60 12 505 3395 or visit our studio at L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil. First consultation is a real conversation about your home and what you want to achieve — not a pitch. We come prepared and we listen first.",
  },
];

export default function BukitBintangPage() {
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
              <span className="text-sm font-medium">Serving Bukit Bintang, KLCC Corridor & KL City Centre</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Bukit Bintang
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Luxury condo and serviced apartment design for Pavilion Suites, Marc Residence,
              Stonor Park & beyond. Heart-led craftsmanship for KL's most sought-after address.
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
              Serving Pavilion Suites · Marc Residence · Stonor Park · Angkasa Raya & all of Bukit Bintang
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              KL's Most Sought-After Address Deserves More
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Bukit Bintang is KL at its most concentrated —{' '}
                <strong>Pavilion KL</strong>, <strong>Starhill Gallery</strong>, rooftop
                restaurants, and a skyline of condominiums and serviced apartments that carry some
                of the city's highest price tags. The people who live here have seen exceptional
                interiors. They know the difference between a space that looks expensive and one
                that actually feels considered.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We're Voala Interior — a premium interior design studio based at{' '}
                <strong>The Link 2, Bukit Jalil</strong>, about 20–25 minutes from Bukit Bintang.
                We design and build interiors for luxury condos and serviced apartments across{' '}
                <strong>Pavilion Suites, Marc Residence, Stonor Park, Angkasa Raya</strong>, and
                the broader Bukit Bintang and KLCC corridor. Heart-led craftsmanship for homes
                where the standard is genuinely high.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you've just acquired a city-centre unit, own an investment property that
                deserves a proper fit-out, or want to finally bring your home in line with the
                address it carries — we'd like to help.
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
              Why Bukit Bintang Homeowners Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              A premium address demands a premium approach — inside and out.
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
                <strong>2025–2026 context:</strong> Bukit Bintang continues to attract
                high-net-worth buyers and investors drawn by its walkability, retail density,
                and proximity to the KLCC corridor. With tourism and corporate activity at
                sustained levels, short-term rental yields for well-designed units in this area
                remain among the strongest in KL. If your unit is sitting on developer finishes,
                it's likely underperforming its location.
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
              Interior Design Services for Bukit Bintang Homes
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              From full luxury renovations to investment unit fit-outs — designed and built
              to the standard Bukit Bintang demands.
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
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Bukit Bintang Buildings We Serve</h3>
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
                  href="https://wa.me/60125053395?text=Hi! I'd like to ask about interior design for my condo in Bukit Bintang."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  WhatsApp us to confirm →
                </a>
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">What Bukit Bintang Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "We purchased a unit at Stonor Park as an investment and wanted it designed to
                command a premium rental. Voala Interior delivered exactly that — durable,
                beautiful, and it photographs brilliantly. Our yield is up significantly."
              </blockquote>
              <p className="text-sm text-gray-400">— Property Investor, Stonor Park, Bukit Bintang</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for Bukit Bintang Homes
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                At a Bukit Bintang price point, there's no excuse for average. The people who live
                here have been in beautiful spaces across Singapore, Tokyo, London, and Dubai — and
                they know instinctively when something is well-made versus when it's just
                well-photographed. We build for people who know the difference.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Heart-led craftsmanship is our commitment to doing the invisible work with the same
                care as the visible. The waterproofing behind marble. The acoustic treatment inside
                a wall. The consistency of a reveal gap across every single cabinet door. These are
                the things that make a home feel genuinely right — and that hold up five years later
                when cheaper work has already started to show its age.
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
              Easy to Reach from Bukit Bintang
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Directions from Bukit Bintang</h3>

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
                          <strong>Via:</strong> {area.landmark} → KL Expressways → Bukit Jalil
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
                      <span><strong>Visit Our Studio:</strong> See our portfolio and material samples in Bukit Jalil</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>We Come to You:</strong> Free consultation at your Bukit Bintang unit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Virtual Consultation:</strong> Perfect for overseas investors and expats</span>
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
                    Call or WhatsApp +60 12 505 3395 to schedule. Evening and weekend
                    appointments available for Bukit Bintang residents.
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
                    title="Voala Interior Studio - 20 minutes from Bukit Bintang"
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
              Frequently Asked Questions About Interior Design in Bukit Bintang
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
              Let's Design Your Bukit Bintang Home Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're ready to talk about your home or investment unit. First consultation is a
              genuine conversation — we come prepared, we listen, and we'll give you an honest
              picture of what's possible and what it'll cost. No pressure, no pitch.
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
                20–25 minutes from Bukit Bintang · Serving KLCC · Jalan Imbi · Jalan Sultan Ismail · Jalan Raja Chulan
              </p>
              <p>Voala Interior, L2-29 & 30, The Link 2, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
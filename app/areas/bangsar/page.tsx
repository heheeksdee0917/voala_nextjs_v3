// app/areas/bangsar/page.tsx
import React from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Heart, Star, CheckCircle2, Clock,
  Home, ChevronRight, MessageCircle, Award, Trees, Mail, ArrowRight, Building2
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Designer Bangsar | Best Interior Design KL – Voala Interior',
  description:
    'Looking for an interior designer in Bangsar? Voala Interior brings heart-led craftsmanship to Bangsar bungalows, semi-Ds, and luxury condos. Studio at The Link 2, Bukit Jalil. Call +60 12 505 3395.',
  keywords:
    'interior designer Bangsar, interior design Bangsar, best interior designer in Bangsar, interior designer Bangsar South, interior design Kuala Lumpur',
  alternates: {
    canonical: 'https://voalainterior.com/areas/bangsar',
  },
  openGraph: {
    title: 'Interior Designer Bangsar — Voala Interior',
    description:
      'Premium interior design studio serving Bangsar, Bangsar South, Damansara Heights & KL. Heart-led craftsmanship for bungalows, semi-Ds, and luxury condos.',
    url: 'https://voalainterior.com/areas/bangsar',
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
  description: 'Premium interior design studio serving Bangsar, Bangsar South, Damansara Heights and KL.',
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
    { '@type': 'City', name: 'Bangsar' },
    { '@type': 'City', name: 'Bangsar South' },
    { '@type': 'City', name: 'Damansara Heights' },
    { '@type': 'City', name: 'Pantai Hillpark' },
  ],
};

const services = [
  {
    title: 'Full Bungalow & Semi-D Renovation',
    description:
      "Bangsar's landed homes carry character — original timber floors, high ceilings, mature gardens. We renovate these with deep respect for what's worth keeping and bold vision for what should change. Full gut or sensitive refresh, we do both well.",
    icon: '🏡',
  },
  {
    title: 'Luxury Condo Interior Design',
    description:
      "Bangsar South's Nexus, Vertical, and The Sphere towers attract a discerning crowd. We transform developer-blank units into refined, personal spaces that reflect the lifestyle of the people who live in them — not just a showroom aesthetic.",
    icon: '🏙️',
  },
  {
    title: 'Master Bedroom & Bathroom',
    description:
      'For Bangsar homeowners, the master suite is a retreat. We design with proper waterproofing, layered lighting, and bespoke storage — treating humidity like the real design variable it is in KL.',
    icon: '🛏️',
  },
  {
    title: 'Living & Dining',
    description:
      'Bangsar homes entertain often. We design living and dining spaces that feel welcoming for a dinner party of twelve and intimate for a quiet Sunday morning — with layouts, joinery, and lighting that flex beautifully between both.',
    icon: '🛋️',
  },
  {
    title: 'Kitchen Design',
    description:
      'From heritage wet kitchens in old Bangsar bungalows to sleek open-plan dry kitchens in Bangsar South condos, we design kitchens that work for Malaysian cooking and look stunning doing it.',
    icon: '🍳',
  },
  {
    title: 'Full Renovation & Build',
    description:
      'End-to-end project management from concept to key handover. One team, one point of contact, seamless execution across all trades.',
    icon: '🔨',
  },
];

const whyUs = [
  {
    title: "We Know Bangsar's Building Types",
    body: "Bangsar is not one neighbourhood — it's several. Old bungalows along Jalan Ara and Jalan Limau behave very differently from Bangsar South high-rises. We've worked across both and understand what each demands structurally, spatially, and aesthetically.",
  },
  {
    title: 'Heritage-Sensitive, Climate-Conscious Design',
    body: "Many Bangsar properties are older — some have load-bearing walls, asbestos roofing, or original timber that deserves to stay. We handle heritage homes with care and material intelligence, while making sure every project is built for KL's heat and humidity.",
  },
  {
    title: 'Close Enough to Care',
    body: "Our studio is at The Link 2, Bukit Jalil — under 15 minutes from Bangsar via NPE or the LRT Kelana Jaya Line. Close enough for frequent site visits; far enough to bring fresh eyes to your space.",
  },
  {
    title: 'Expat & Diaspora Experience',
    body: "Bangsar and Bangsar South have a significant expat and returning diaspora community. We're comfortable managing projects with owners who aren't on-site daily — clear communication, regular updates, single point of contact throughout.",
  },
  {
    title: 'Transparent Quotations',
    body: "Detailed, itemised quotations — no vague ranges, no surprise add-ons. For a mid-sized bungalow or semi-D, full renovation typically starts from RM 150,000. Bangsar South condos from around RM 60,000 for a 2–3 bedroom unit.",
  },
  {
    title: 'Award-Winning Excellence',
    body: "Recognised across Malaysia for design innovation and craftsmanship. We bring this same level of excellence to every Bangsar home, regardless of size or budget.",
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

const directions = [
  { name: 'Bangsar Village / BSC', distance: '12–15 mins', landmark: 'Bangsar LRT Station' },
  { name: 'Bangsar South', distance: '~10 mins', landmark: 'Nexus & Vertical Towers' },
  { name: 'Damansara Heights', distance: '15–20 mins', landmark: 'Sprint Highway' },
  { name: 'Pantai Hillpark / Kerinchi', distance: '<10 mins', landmark: 'NPE exit Bukit Jalil' },
];

const faqs = [
  {
    question: 'Do you serve Bangsar even though your studio is in Bukit Jalil?',
    answer:
      "Yes — Bangsar is one of our most active service areas. Our studio at The Link 2, Bukit Jalil is roughly 12–15 minutes from central Bangsar via the NPE or LRT. We do site visits, consultations, and project management across the entire Bangsar and Bangsar South area.",
  },
  {
    question: "Can you renovate an older Bangsar bungalow without losing its character?",
    answer:
      "This is actually one of our favourite briefs. Older Bangsar homes — especially those along Jalan Ara, Jalan Limau, and Cangkat Bangsar — have genuine character in their proportions, ceiling heights, and original details. We approach these with an eye for what to preserve and what to reinvent. We'll never bulldoze charm in favour of trend.",
  },
  {
    question: 'How much does a full renovation in Bangsar typically cost?',
    answer:
      'For a mid-sized bungalow or semi-D in Bangsar, full renovation typically starts from RM 150,000 depending on scope, materials, and structural work required. Condo renovations in Bangsar South start from around RM 60,000 for a 2–3 bedroom unit. We provide detailed, itemised quotations — no vague ranges, no surprise add-ons.',
  },
  {
    question: 'How long does a Bangsar landed home renovation take?',
    answer:
      "A landed home in Bangsar — semi-D or bungalow — typically takes 12–20 weeks depending on structural scope and permit timelines. We'll give you a proper project timeline at the design stage and are transparent about milestones throughout.",
  },
  {
    question: 'Do you handle Bangsar South condos differently from Bangsar landed homes?',
    answer:
      "Yes. Bangsar South high-rises (Nexus, Vertical, The Sphere, etc.) have their own building management rules, hacking restrictions, and service hour schedules. We're familiar with these and handle all the coordination so you don't have to. Landed homes involve more structural considerations — we address each based on what your property actually needs.",
  },
  {
    question: 'Can you help with heritage properties that may have asbestos or old wiring?',
    answer:
      "We work with qualified contractors for structural assessments and hazardous material handling where required. If your property is pre-1990s, we'll flag anything we spot during early site visits and factor it into the proper scope of work. We don't ignore it and hope for the best.",
  },
  {
    question: 'Do you work with expats or overseas clients who own property in Bangsar?',
    answer:
      "Often. Bangsar and Bangsar South have a significant expat and returning diaspora community. We're comfortable managing projects with owners who aren't on-site daily — with clear communication, progress updates, and a single point of contact throughout.",
  },
  {
    question: 'What makes Voala Interior different from Bangsar-based design firms?',
    answer:
      "We care about the corners — the parts that don't photograph well but define how a home feels every day. The hinge tension on a cabinet door. The way light falls on a surface at 7pm. The reveal gap that stays consistent for years. We call it heart-led craftsmanship, and it shows in homes three and four years after we've finished them.",
  },
  {
    question: 'Do you also serve areas near Bangsar like Damansara Heights or Pantai Hillpark?',
    answer:
      "Yes. We regularly work in Damansara Heights, Pantai Hillpark, Kerinchi, and the broader KL city corridor. If your home is within greater KL, reach out — we'll be honest about our availability and timeline.",
  },
  {
    question: 'How do I get started?',
    answer:
      "WhatsApp us at +60 12 505 3395 or visit our studio at L2-29 & 30, The Link 2, Jalan Jalil Perkasa 3, Bukit Jalil. The first consultation is a proper conversation about your home, not a sales pitch. We listen first — always.",
  },
];

export default function BangsarPage() {
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
              <span className="text-sm font-medium">Serving Bangsar, Bangsar South & Surrounding KL Neighbourhoods</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Bangsar
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Heart-led craftsmanship for Bangsar bungalows, semi-Ds, and Bangsar South condos.
              Award-winning interior design with 10+ years of experience in KL's most discerning neighbourhood.
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
              Serving Bangsar Village, Bangsar South, Damansara Heights, Pantai Hillpark & all of KL
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Your Bangsar Interior Design Partner
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Bangsar has always had its own standard. The tree-lined streets off{' '}
                <strong>Jalan Ara and Jalan Limau</strong>, the neighbourhood energy around{' '}
                <strong>Bangsar Shopping Centre</strong>, the buzz of{' '}
                <strong>Bangsar South's</strong> corporate towers and rooftop restaurants —
                this is one of KL's most established, most discerning enclaves. The homes here
                should match that.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We're Voala Interior — a premium interior design studio based at{' '}
                <strong>The Link 2, Bukit Jalil</strong>, roughly 12–15 minutes from central
                Bangsar. We design and build interiors for bungalows, semi-Ds, and luxury condos
                across Bangsar, Bangsar South, Damansara Heights, Pantai Hillpark, and the broader
                KL corridor. Heart-led craftsmanship and exceptional detail are the standards we
                hold every project to — not marketing language.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you've just acquired a Bangsar South unit, inherited a character bungalow
                in old Bangsar, or finally decided to do justice to a home you've loved for years
                — we'd be glad to help you create something worth coming home to every day.
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
              Why Bangsar Homeowners Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Bangsar deserves more than a generic design firm. Here's what we bring specifically.
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
                <strong>2025–2026 context:</strong> Bangsar South continues to attract corporate
                tenants and young professional residents across Nexus, Vertical, and The Sphere.
                At the same time, old Bangsar's bungalow belt is seeing a wave of renovations as
                the next generation inherits or purchases landed homes and wants to bring them into
                the present without erasing their soul. If that sounds like you, we should talk
                sooner rather than later — our calendar fills up.
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
              Interior Design Services for Bangsar Homes
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Every Bangsar property is different. Here's how we approach the range.
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
              <h3 className="text-2xl font-bold mb-4">What Bangsar Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "We inherited a 1980s bungalow in Bangsar and weren't sure whether to sell or renovate.
                Voala Interior helped us see what the house could become. Three years on, it's the home
                we always wanted — and the neighbours keep asking who did it."
              </blockquote>
              <p className="text-sm text-gray-400">— The Tan Family, Jalan Ara, Bangsar</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for Bangsar Homes
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                Bangsar homeowners have seen enough interiors to know the difference between a home
                that photographs well and one that actually lives well. We build for the latter. The
                reveal gap on a cabinet door. The way a pendant casts light at 9pm. The hinge tension
                on a drawer you open ten times a day. These things don't make it into wide-angle
                portfolio shots, but you feel them every single day you're home.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                This is what we mean by heart-led craftsmanship. It's a commitment to doing the
                invisible parts with the same care as the parts everyone sees. It's why homeowners
                in Bangsar, Damansara Heights, and Pantai Hillpark still recommend us to their
                friends three years after we've finished their homes.
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
                View Bangsar Projects
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
              Easy to Reach from Bangsar
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Directions from Bangsar</h3>

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
                          <strong>Via:</strong> {area.landmark} → NPE → Bukit Jalil
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
                      <span><strong>We Come to You:</strong> Free consultation at your Bangsar property</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Virtual Consultation:</strong> Perfect for overseas owners or expats relocating</span>
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
                    Call or WhatsApp +60 12 505 3395 to schedule. We're flexible with timing
                    for Bangsar residents — evening and weekend appointments available.
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
                    title="Voala Interior Studio - 15 minutes from Bangsar"
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
              Frequently Asked Questions About Interior Design in Bangsar
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
              Let's Design Your Bangsar Home Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're renovating a character bungalow on Jalan Ara, transforming a
              Bangsar South condo, or upgrading a semi-D you've loved for years — let's
              create a home worth coming back to. Schedule your free consultation.
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
                12–15 minutes from Bangsar · Serving Bangsar South · Damansara Heights · Pantai Hillpark · KL
              </p>
              <p>Voala Interior, L2-29 & 30, The Link 2, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
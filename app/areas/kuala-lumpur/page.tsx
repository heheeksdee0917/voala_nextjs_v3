// app/areas/kuala-lumpur/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin, Phone, ArrowRight, CheckCircle, CheckCircle2,
  Star, Heart, Award, Home, Building2, MessageCircle, ChevronRight
} from 'lucide-react';
import StandardButton from '../../../components/ui/standard-button';

export const metadata: Metadata = {
  title: 'Interior Designer Kuala Lumpur | Award-Winning Design Studio | Voala Interior',
  description:
    'Leading interior designer in Kuala Lumpur with 15+ years of heart-led craftsmanship. Serving KLCC, Bukit Jalil, Bangsar, Mont Kiara & across KL. Call +60 12 505 3395 for exceptional interior design.',
  keywords:
    'interior designer Kuala Lumpur, interior design KL, best interior designer in Kuala Lumpur, interior designer near me KL, residential interior design Kuala Lumpur, commercial interior design KL',
  alternates: {
    canonical: 'https://voalainterior.com/areas/kuala-lumpur',
  },
  openGraph: {
    title: 'Interior Designer Kuala Lumpur | Voala Interior',
    description:
      'Award-winning interior design studio in Kuala Lumpur. Heart-led craftsmanship for homes and businesses across KL.',
    url: 'https://voalainterior.com/areas/kuala-lumpur',
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
  description: 'Award-winning interior design studio in Kuala Lumpur with 15+ years of heart-led experience',
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
  email: 'hello@voalainterior.com',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  priceRange: '$$$-$$$$',
  areaServed: [
    { '@type': 'City', name: 'Kuala Lumpur' },
    { '@type': 'City', name: 'KLCC' },
    { '@type': 'City', name: 'Bukit Jalil' },
    { '@type': 'City', name: 'Bangsar' },
    { '@type': 'City', name: 'Mont Kiara' },
  ],
};

const services = [
  {
    icon: '🏠',
    title: 'Residential Interior Design',
    description:
      'Custom home design for condos, apartments, and landed properties across Kuala Lumpur.',
  },
  {
    icon: '🏢',
    title: 'Commercial Interior Design',
    description: 'Professional office and retail space design for KL businesses.',
  },
  {
    icon: '🏙️',
    title: 'Condo & Apartment Design',
    description:
      'Space-maximising solutions for KLCC, Bangsar, and Mont Kiara condos.',
  },
  {
    icon: '🏡',
    title: 'Landed Property Design',
    description:
      'Bespoke design for terrace houses, semi-Ds, and bungalows in KL.',
  },
  {
    icon: '🎨',
    title: '3D Visualisation',
    description:
      'Photorealistic renderings so you can see your space before we build.',
  },
  {
    icon: '🔨',
    title: 'Full Renovation & Build',
    description:
      'End-to-end project management from concept to key handover.',
  },
];

const whyUs = [
  {
    title: '15+ Years in Kuala Lumpur',
    body: 'Deep understanding of KL homes — from KLCC high-rises to Bangsar landed properties. We know the building regulations, common space constraints, and design opportunities unique to each neighbourhood.',
  },
  {
    title: 'Award-Winning Design Excellence',
    body: 'Our work has been recognised across Malaysia for innovation, craftsmanship, and attention to detail. We bring this same excellence to every Kuala Lumpur project, regardless of size or budget.',
  },
  {
    title: 'Heart-Led Craftsmanship',
    body: 'We don\'t just design spaces — we create homes that reflect who you are. Every detail is considered, every material carefully selected, every corner thoughtfully planned with your lifestyle in mind.',
  },
  {
    title: 'True One-Stop Service',
    body: 'From initial concept to final handover, we manage everything. No need to coordinate multiple contractors — we handle design, permits, renovation, furnishing, and installation across Kuala Lumpur.',
  },
  {
    title: 'Transparent Communication',
    body: 'Clear timelines, detailed quotations, regular updates. We treat your Kuala Lumpur project with the care and respect it deserves, keeping you informed every step of the way.',
  },
  {
    title: 'Local Studio, Personal Service',
    body: 'Our Bukit Jalil studio is easily accessible from anywhere in KL. We\'re your neighbours, invested in this city and community — not a faraway firm sending a junior to represent them.',
  },
];

const klSolutions = [
  {
    area: 'KLCC & City Centre Condos',
    detail: 'Maximising space in high-rises, optimising views, soundproofing from traffic noise.',
  },
  {
    area: 'Bangsar Landed Properties',
    detail: 'Heritage-sensitive renovations, maximising natural ventilation, garden integration.',
  },
  {
    area: 'Mont Kiara Apartments',
    detail: 'Contemporary international aesthetic, smart storage solutions, family-friendly layouts.',
  },
  {
    area: 'Bukit Jalil & Southern KL',
    detail: 'Value-maximising designs, modern finishes, practical family homes.',
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

const neighborhoods = [
  { name: 'KLCC & City Centre', distance: '~15 mins', landmark: 'Petronas Twin Towers' },
  { name: 'Bukit Jalil', distance: '~5 mins', landmark: 'National Stadium' },
  { name: 'Bangsar', distance: '~20 mins', landmark: 'Bangsar Village' },
  { name: 'Mont Kiara', distance: '~25 mins', landmark: 'Plaza Mont Kiara' },
  { name: 'Sri Petaling', distance: '~10 mins', landmark: 'Sri Petaling LRT' },
  { name: 'Cheras', distance: '~15 mins', landmark: 'IKEA Cheras' },
];

const faqs = [
  {
    q: 'How much does interior design cost in Kuala Lumpur?',
    a: 'Costs vary based on project scope, size, and finishes. For a typical 1,000 sq ft condo in KLCC or Bangsar, full design and renovation typically starts from RM 80,000. We provide detailed, itemised quotations after understanding your vision — no vague ranges, no hidden charges.',
  },
  {
    q: 'Do you serve all areas of Kuala Lumpur?',
    a: 'Yes. We serve the entire Kuala Lumpur area including KLCC, Bangsar, Mont Kiara, Bukit Jalil, Sri Petaling, Cheras, Damansara, and surrounding neighbourhoods. Our studio in Bukit Jalil is easily accessible from anywhere in KL.',
  },
  {
    q: 'How long does an interior design project take in KL?',
    a: 'A typical condo renovation takes 8–12 weeks from design approval to completion. Landed properties may take 12–16 weeks depending on scope. We provide a detailed project timeline at consultation and we stick to it.',
  },
  {
    q: 'What makes Voala Interior different from other KL interior designers?',
    a: 'We combine 15+ years of award-winning expertise with heart-led craftsmanship and genuine attention to detail. Unlike corporate design firms, we treat every KL home as unique — listening deeply before drawing a single line. Our clients become part of the Voala family.',
  },
  {
    q: 'Can I see examples of your work in Kuala Lumpur?',
    a: 'Absolutely. We have completed 200+ projects across Kuala Lumpur, including residential designs in KLCC, Bangsar, and Bukit Jalil, plus commercial projects throughout KL. Visit our portfolio or schedule a consultation to see our work firsthand.',
  },
  {
    q: 'Do you offer free consultations in Kuala Lumpur?',
    a: 'Yes — our initial consultation is complimentary. We can meet at your property or at our Bukit Jalil studio. During the session we discuss your vision, budget, and timeline, and share preliminary ideas. No sales pressure, just a real conversation.',
  },
  {
    q: 'What areas of Kuala Lumpur do you specialise in?',
    a: 'We work extensively in KLCC condos, Bangsar landed properties, Mont Kiara apartments, Bukit Jalil homes, Damansara developments, and throughout greater KL. We understand the unique characteristics of each neighbourhood — from high-rise constraints in KLCC to maximising landed potential in Bangsar.',
  },
  {
    q: 'How do I get started?',
    a: 'WhatsApp us or book a consultation online. The first conversation is a proper listening session — we want to understand your home, your lifestyle, and your vision before we talk design. No portfolios shoved at you before we\'ve heard what you need.',
  },
];

export default function KualaLumpurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">

        {/* ── HEADER / H1 ─────────────────────────────────────── */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-[#59514e]" />
            Award-Winning Interior Design Studio
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6 leading-tight">
            Interior Designer in Kuala Lumpur —<br className="hidden md:block" /> Voala Interior
          </h1>

          {/* ── LOCAL HOOK ──────────────────────────────────────── */}
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Kuala Lumpur is a city of contrasts and possibilities — from the towering glass and
            steel of <strong>KLCC</strong> to the leafy streets of <strong>Bangsar</strong>, from
            modern <strong>Mont Kiara</strong> condos to heritage shophouses in Brickfields. Living
            in KL means navigating real challenges: optimising space in high-rise apartments,
            managing tropical heat and humidity, and creating homes that feel calm amidst the
            city's energy.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            For over 15 years, we've been designing exceptional interiors for Kuala Lumpur
            families and businesses. Our studio in Bukit Jalil — just minutes from the National
            Stadium and easily accessible from KLCC, Bangsar, and across KL — has become a
            trusted name for those who want more than just beautiful spaces. We create homes and
            workplaces that understand how you actually live, work, and thrive in this city.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you're transforming a condo with a view of the Petronas Towers, renovating a
            landed property in Damansara, or finally upgrading a developer-spec unit in Sri
            Petaling, we bring the same heart-led approach: listening deeply, designing
            thoughtfully, and building with exceptional attention to detail.
          </p>
        </div>

        {/* ── WHY US ──────────────────────────────────────────── */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-2">
            Why Kuala Lumpur Residents Choose Voala Interior
          </h2>
          <p className="text-gray-500 mb-6">
            Experience and proximity matter — but they're only the beginning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#59514e]/10 rounded-lg flex items-center justify-center text-[#59514e]">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SERVICES ────────────────────────────────────────── */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-2">
            Interior Design Services Tailored for Kuala Lumpur Homes
          </h2>
          <p className="text-gray-500 mb-6">
            Every neighbourhood in KL has its own character and challenges. We design with deep
            understanding of how KL residents live, work, and entertain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 text-2xl">{service.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* KL-specific solutions */}
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h3 className="font-bold text-amber-900 mb-4">Neighbourhood-Specific Solutions</h3>
            <div className="space-y-3">
              {klSolutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <p className="text-amber-800 text-sm">
                    <strong>{s.area}:</strong> {s.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-amber-700 text-sm mt-4">
              Need something specific?{' '}
              <Link href="/services" className="font-semibold hover:underline">
                See our full list of services →
              </Link>
            </p>
          </div>
        </div>

        {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
        <div className="mb-10 p-7 bg-[#59514e] rounded-2xl text-white">
          <div className="flex items-start gap-4 mb-5">
            <Heart className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Heart-Led Craftsmanship & Exceptional Detail
              </h2>
              <p className="text-white/80 leading-relaxed">
                What does "heart-led craftsmanship" mean in practice? It means we don't design to
                trends or formulas — we design to <em>you</em>. Your story, your family, how you
                start your mornings and end your evenings. When a young family in KLCC tells us
                they want their children to grow up surrounded by warmth despite living 40 floors
                up, we listen. When a Bangsar couple shares their dream of hosting intimate
                gatherings, we design around that vision.
              </p>
            </div>
          </div>
          <p className="text-white/80 leading-relaxed mb-5">
            Exceptional detail is in the things others overlook: the perfect counter height based
            on how you cook, the lighting that makes your art collection sing, the storage hidden
            so seamlessly you forget it's there. It's in how we source materials — not just
            beautiful, but practical for Kuala Lumpur's climate. It's in the finish quality that
            makes guests ask, <em>"Who designed this?"</em>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {craftPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">{point}</span>
              </div>
            ))}
          </div>
          <Link href="/projects">
            <span className="inline-flex items-center gap-2 bg-white text-[#59514e] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-amber-50 transition-colors">
              View Our KL Projects <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        {/* ── HOW TO FIND US ───────────────────────────────────── */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-2">
            How to Find Us from Across KL
          </h2>
          <p className="text-gray-500 mb-6">
            Our studio in Bukit Jalil is easy to reach from most parts of the city.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {neighborhoods.map((area, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#59514e]" />
                  <p className="font-bold text-gray-900 text-sm">{area.name}</p>
                </div>
                <p className="text-gray-500 text-xs pl-6">{area.distance} · near {area.landmark}</p>
              </div>
            ))}
          </div>

          {/* Google Maps embed */}
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.157997312472!2d101.6763731!3d3.052340896923446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69a2f2d66962931b%3A0x8e36de1214eefe17!2sVoala%20Interior!5e0!3m2!1sen!2smy!4v1773220412930!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Voala Interior Studio Location in Bukit Jalil, Kuala Lumpur"
            />
          </div>
        </div>

        {/* ── FAQs ─────────────────────────────────────────────── */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#59514e] mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mb-6">
            Real questions from Kuala Lumpur homeowners — answered honestly.
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

        {/* ── FINAL CTA ────────────────────────────────────────── */}
        <div className="pt-8 border-t border-gray-200">
          <div className="p-7 bg-gradient-to-br from-[#59514e] to-[#3d3532] rounded-2xl text-white text-center md:text-left">
            <div className="flex items-start gap-4 mb-4">
              <Award className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Ready to Transform Your Kuala Lumpur Home?
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Let's create a space that truly feels like home. Schedule your free consultation
                  with KL's award-winning interior design studio — no sales pitch, just a real
                  conversation about what you want to build.
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
                href="https://wa.me/60125053395?text=Hi! I'd like to discuss interior design for my home in Kuala Lumpur."
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
                { label: 'Experience', value: '15+ Years in KL' },
                { label: 'First Consultation', value: 'No Charge' },
                { label: 'Areas Served', value: 'KLCC · Bangsar · Mont Kiara · Bukit Jalil · Sri Petaling · Cheras' },
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
    </>
  );
}
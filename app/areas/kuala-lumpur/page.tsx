import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin, Phone, ArrowRight, CheckCircle2,
  Star, Clock, Mail
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Award-Winning Interior Designer in Kuala Lumpur | Voala Interior',
  description: 'Best interior designer in Kuala Lumpur. Award-winning residential & commercial interior design studio in KL. Serving KLCC, Bukit Jalil, Bangsar, Mont Kiara & across Kuala Lumpur. Free consultation available.',
  keywords: 'interior designer in Kuala Lumpur, interior designer KL, best interior designer Kuala Lumpur, interior design KL, residential interior design Kuala Lumpur, commercial interior design Kuala Lumpur',
  alternates: {
    canonical: 'https://voalainterior.com/areas/kuala-lumpur',
  },
  openGraph: {
    title: 'Award-Winning Interior Designer in Kuala Lumpur | Voala Interior',
    description: 'Leading interior design studio in KL with heart-led craftsmanship. Residential, commercial & renovation services across Kuala Lumpur.',
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
  description: 'Award-winning interior design studio in Kuala Lumpur with 10+ years of heart-led experience',
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
    title: '10+ Years in Kuala Lumpur',
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
    question: 'How much does interior design cost in Kuala Lumpur?',
    answer:
      'Costs vary based on project scope, size, and finishes. For a typical 1,000 sq ft condo in KLCC or Bangsar, full design and renovation typically starts from RM 80,000. We provide detailed, itemised quotations after understanding your vision — no vague ranges, no hidden charges.',
  },
  {
    question: 'Do you serve all areas of Kuala Lumpur?',
    answer:
      'Yes. We serve the entire Kuala Lumpur area including KLCC, Bangsar, Mont Kiara, Bukit Jalil, Sri Petaling, Cheras, Damansara, and surrounding neighbourhoods. Our studio in Bukit Jalil is easily accessible from anywhere in KL.',
  },
  {
    question: 'How long does an interior design project take in KL?',
    answer:
      'A typical condo renovation takes 8–12 weeks from design approval to completion. Landed properties may take 12–16 weeks depending on scope. We provide a detailed project timeline at consultation and we stick to it.',
  },
  {
    question: 'What makes Voala Interior different from other KL interior designers?',
    answer:
      'We combine 10+ years of award-winning expertise with heart-led craftsmanship and genuine attention to detail. Unlike corporate design firms, we treat every KL home as unique — listening deeply before drawing a single line. Our clients become part of the Voala family.',
  },
  {
    question: 'Can I see examples of your work in Kuala Lumpur?',
    answer:
      'Absolutely. We have completed 200+ projects across Kuala Lumpur, including residential designs in KLCC, Bangsar, and Bukit Jalil, plus commercial projects throughout KL. Visit our portfolio or schedule a consultation to see our work firsthand.',
  },
  {
    question: 'Do you offer free consultations in Kuala Lumpur?',
    answer:
      'Yes — our initial consultation is complimentary. We can meet at your property or at our Bukit Jalil studio. During the session we discuss your vision, budget, and timeline, and share preliminary ideas. No sales pressure, just a real conversation.',
  },
  {
    question: 'What areas of Kuala Lumpur do you specialise in?',
    answer:
      'We work extensively in KLCC condos, Bangsar landed properties, Mont Kiara apartments, Bukit Jalil homes, Damansara developments, and throughout greater KL. We understand the unique characteristics of each neighbourhood — from high-rise constraints in KLCC to maximising landed potential in Bangsar.',
  },
  {
    question: 'How do I get started?',
    answer:
      'WhatsApp us or book a consultation online. The first conversation is a proper listening session — we want to understand your home, your lifestyle, and your vision before we talk design. No portfolios shoved at you before we\'ve heard what you need.',
  },
];
export default function KualaLumpurPage() {
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
              <span className="text-sm font-medium">Award-Winning Interior Design Studio</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Award-Winning Interior Designer in{' '}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Kuala Lumpur
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Heart-led craftsmanship for homes and businesses across KL. 10+ years serving KLCC,
              Bangsar, Mont Kiara, Bukit Jalil & beyond. Studio at The Link, 2 — your neighbours in design.
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
              L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3, Bukit Jalil · Serving all of Kuala Lumpur
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HOOK ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Designing Homes Across Kuala Lumpur
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Kuala Lumpur is a city of contrasts and possibilities — from the towering glass
                and steel of <strong>KLCC</strong> to the leafy streets of <strong>Bangsar</strong>,
                from modern <strong>Mont Kiara</strong> condos to heritage shophouses in Brickfields.
                Living in KL means navigating real challenges: optimising space in high-rise
                apartments, managing tropical heat and humidity, and creating homes that feel calm
                amidst the city's energy.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                For over 10+, we've been designing exceptional interiors for Kuala Lumpur
                families and businesses. Our studio in Bukit Jalil — just minutes from the National
                Stadium and easily accessible from KLCC, Bangsar, and across KL — has become a
                trusted name for those who want more than just beautiful spaces. We create homes and
                workplaces that understand how you actually live, work, and thrive in this city.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're transforming a condo with a view of the Petronas Towers, renovating
                a landed property in Damansara, or finally upgrading a developer-spec unit in Sri
                Petaling, we bring the same heart-led approach: listening deeply, designing
                thoughtfully, and building with exceptional attention to detail.
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
              Why Kuala Lumpur Residents Choose Voala Interior
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Experience and proximity matter — but they're only the beginning.
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
              Interior Design Services Tailored for Kuala Lumpur Homes
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Every neighbourhood in KL has its own character and challenges. We design with deep
              understanding of how KL residents live, work, and entertain.
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

            {/* KL-specific solutions */}
            <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Neighbourhood-Specific Solutions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {klSolutions.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">{s.area}</p>
                      <p className="text-gray-700 text-sm">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART-LED CRAFTSMANSHIP ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship & Exceptional Detail
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                What does "heart-led craftsmanship" mean in practice? It means we don't design to
                trends or formulas — we design to <em>you</em>. Your story, your family, how you
                start your mornings and end your evenings. When a young family in KLCC tells us they
                want their children to grow up surrounded by warmth despite living 40 floors up, we
                listen. When a Bangsar couple shares their dream of hosting intimate gatherings, we
                design around that vision.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Exceptional detail is in the things others overlook: the perfect counter height based
                on how you cook, the lighting that makes your art collection sing, the storage hidden
                so seamlessly you forget it's there. It's in how we source materials — not just
                beautiful, but practical for Kuala Lumpur's climate. It's in the finish quality that
                makes guests ask, <em>"Who designed this?"</em>
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
                View Our KL Projects
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
              How to Find Us from Across KL
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Getting Here</h3>

                <div className="space-y-4 mb-8">
                  {neighborhoods.map((area, i) => (
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
                      <span><strong>Walk In:</strong> We're at The Link, 2, Level 2 — walk-ins welcome, WhatsApp ahead for coffee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>We Come to You:</strong> Free consultation at your KL home</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Virtual Consultation:</strong> Available for busy schedules or out-of-town owners</span>
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
                      <p className="font-semibold text-gray-900 mb-2">By Appointment & Walk-Ins Welcome</p>
                      <p className="text-gray-700">Monday – Friday: 10:00 AM – 6:00 PM</p>
                      <p className="text-gray-700">Saturday: 10:00 AM – 4:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Call or WhatsApp +60 12 505 3395 before visiting so we can set time aside
                    for you. Evening appointments available on request.
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
                    title="Voala Interior Studio at The Link, 2, Bukit Jalil"
                  />
                </div>

                <div className="mt-4">
                  <a
                    href="https://maps.google.com/?q=Voala+Interior+The+Link+2+Jalan+Jalil+Perkasa+3+Bukit+Jalil+Kuala+Lumpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </a>
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
              Frequently Asked Questions About Interior Design in Kuala Lumpur
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
              Ready to Transform Your Kuala Lumpur Home?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a space that truly feels like home. Schedule your free consultation with
              KL's award-winning interior design studio — no sales pitch, just a real conversation
              about what you want to build.
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
                L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3, Bukit Jalil · Serving KLCC · Bangsar · Mont Kiara · Sri Petaling
              </p>
              <p>Voala Interior, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
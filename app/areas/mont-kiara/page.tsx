// app/areas/mont-kiara/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, Star, Home, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interior Designer Mont Kiara | Luxury Condo & Apartment Design | Voala Interior',
  description: 'Leading interior designer in Mont Kiara specializing in luxury condos & apartments. 10+ years serving expat families & locals in Mont Kiara, Dutamas, Segambut. Call +60 12 505 3395.',
  keywords: 'interior designer Mont Kiara, interior design Mont Kiara, condo interior design Mont Kiara, apartment design Mont Kiara, expat interior designer KL, luxury interior design Mont Kiara',
  openGraph: {
    title: 'Interior Designer Mont Kiara | Luxury Condo Design | Voala Interior',
    description: 'Award-winning interior design for Mont Kiara condos & apartments. Heart-led craftsmanship for international families.',
    url: 'https://voalainterior.com/areas/mont-kiara',
    siteName: 'Voala Interior',
    locale: 'en_MY',
    type: 'website',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://voalainterior.com',
  name: 'Voala Interior',
  image: 'https://voalainterior.com/Voala/Voala_OG.png',
  description: 'Award-winning interior designer in Mont Kiara specializing in luxury condo and apartment design for expat and local families',
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
    { '@type': 'City', name: 'Mont Kiara' },
    { '@type': 'City', name: 'Sri Hartamas' },
    { '@type': 'City', name: 'Dutamas' },
    { '@type': 'City', name: 'Segambut' },
  ],
};

export default function MontKiaraPage() {
  const services = [
    {
      title: 'Luxury Condo Interior Design',
      description: 'Sophisticated designs for high-rise living in Mont Kiara condos like Arcoris, 11 Mont Kiara, and The Hartamas',
      icon: '🏙️',
    },
    {
      title: 'Expat-Friendly Design Solutions',
      description: 'International aesthetic with practical Malaysian living – we understand your unique needs',
      icon: '🌍',
    },
    {
      title: 'Space Optimization',
      description: 'Smart storage and layout solutions maximizing every square foot of your Mont Kiara apartment',
      icon: '📐',
    },
    {
      title: 'Family-Focused Layouts',
      description: 'Child-safe, pet-friendly designs perfect for Mont Kiara families with growing children',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'Contemporary Kitchen Design',
      description: 'Modern, functional kitchens balancing open-plan entertaining with practical cooking spaces',
      icon: '🍳',
    },
    {
      title: 'Full Renovation & Styling',
      description: 'End-to-end service from permits to furniture – one team, seamless execution',
      icon: '✨',
    },
  ];

  const buildings = [
    { name: 'Arcoris Mont Kiara', type: 'Luxury Condo', units: 'Multiple projects completed' },
    { name: '11 Mont Kiara', type: 'High-Rise', units: '5+ units designed' },
    { name: 'The Hartamas', type: 'Serviced Residence', units: 'Regular clients' },
    { name: 'Verticas Residensi', type: 'Modern Condo', units: '3+ projects' },
    { name: 'Seni Mont Kiara', type: 'Luxury Living', units: 'Featured projects' },
    { name: 'Plaza Mont Kiara', type: 'Established Condo', units: 'Renovation specialist' },
  ];

  const neighborhoods = [
    { name: 'Mont Kiara Central', distance: '20-25 mins', landmark: 'Plaza Mont Kiara, Publika' },
    { name: 'Sri Hartamas', distance: '18-22 mins', landmark: 'Hartamas Shopping Centre' },
    { name: 'Dutamas', distance: '15-20 mins', landmark: 'Segambut KTM Station' },
    { name: 'Bukit Damansara', distance: '15-18 mins', landmark: 'Starhill Gallery' },
  ];

  const faqs = [
    {
      question: 'How much does interior design cost for a Mont Kiara condo?',
      answer: 'Interior design costs for Mont Kiara condos typically range from RM 100,000 to RM 300,000+ for a full renovation, depending on unit size, finishes, and scope. For a typical 1,400-1,800 sq ft unit in buildings like Arcoris or 11 Mont Kiara, expect RM 150,000-250,000 for quality design and renovation. We provide detailed, transparent quotations after understanding your vision. Contact us at +60 12 505 3395 for a free consultation at your Mont Kiara property.',
    },
    {
      question: 'Do you work with expat families in Mont Kiara?',
      answer: 'Absolutely! A significant portion of our Mont Kiara clients are expat families from Europe, Australia, Japan, Korea, and beyond. We understand the unique needs of international families – from voltage compatibility for imported appliances to designing spaces that feel like home while embracing Malaysian tropical living. We communicate clearly in English and manage all local coordination, permits, and contractor relationships so you can focus on settling in.',
    },
    {
      question: 'Which Mont Kiara buildings do you have experience with?',
      answer: 'We have extensive experience designing interiors across Mont Kiara including Arcoris Mont Kiara, 11 Mont Kiara, The Hartamas, Verticas Residensi, Seni Mont Kiara, Plaza Mont Kiara, and many others. We understand the specific layouts, building regulations, and management requirements for each development. Our familiarity with Mont Kiara buildings means smoother approvals and faster project timelines.',
    },
    {
      question: 'How long does a Mont Kiara condo renovation take?',
      answer: 'A typical Mont Kiara condo renovation takes 8-14 weeks from design approval to completion, depending on scope. Full renovations (kitchen, bathrooms, flooring, built-ins) typically take 10-12 weeks. Lighter refreshes (painting, furniture, styling) can be done in 4-6 weeks. We coordinate with building management for permits and access, ensuring minimal disruption. Most Mont Kiara buildings have specific renovation hours (typically 9 AM - 5 PM on weekdays) which we factor into our timeline.',
    },
    {
      question: 'Can you design child-safe and pet-friendly spaces?',
      answer: 'Yes! Many of our Mont Kiara clients have young children and pets. We incorporate safety features like rounded furniture corners, non-toxic finishes, secure window treatments, and durable, easy-to-clean materials. We also design clever storage solutions for toys, create dedicated play areas, and choose stain-resistant fabrics perfect for family living. Pet-friendly features include scratch-resistant flooring, easy-clean surfaces, and designated pet zones.',
    },
    {
      question: 'What makes your service different for Mont Kiara residents?',
      answer: 'We understand Mont Kiara living: balancing sophisticated international aesthetics with Malaysian practicality. Our designs address tropical climate challenges (humidity, mold prevention), optimize cross-ventilation, incorporate smart storage for diverse lifestyles, and create spaces that feel spacious despite typical condo constraints. We also manage all coordination with Mont Kiara building managements, understand their specific requirements, and ensure smooth approvals and execution.',
    },
    {
      question: 'Do you offer furniture sourcing and installation?',
      answer: 'Yes, we provide complete turnkey service. We source furniture from international and local suppliers, coordinate delivery and installation, and handle all the logistics. Many Mont Kiara expats appreciate not having to navigate local furniture shopping – we curate pieces that match your aesthetic, fit your budget, and suit your lifestyle. We also help with custom-built furniture for optimal space utilization in your specific unit layout.',
    },
    {
      question: 'How do I schedule a consultation for my Mont Kiara property?',
      answer: 'Contact us at +60 12 505 3395 or askvoala@gmail.com to schedule a free consultation. We can meet you at your Mont Kiara condo or apartment, or you can visit our studio in Bukit Jalil (about 25 minutes from Mont Kiara). During the consultation, we discuss your vision, lifestyle needs, budget, and timeline. We typically provide preliminary design concepts and a quotation within 5-7 days after the consultation.',
    },
    {
      question: 'Can you work within my building\'s renovation guidelines?',
      answer: 'Absolutely. We have extensive experience working with Mont Kiara building managements and understand their specific requirements – renovation hours, noise restrictions, lift booking procedures, contractor access protocols, and permit requirements. We handle all documentation, coordinate with building management, and ensure full compliance with your condo\'s house rules and renovation guidelines.',
    },
    {
      question: 'Do you offer virtual consultations for expats relocating to Mont Kiara?',
      answer: 'Yes! We offer virtual consultations via video call for families relocating to Mont Kiara. We can review floor plans remotely, provide design recommendations, and start planning before you arrive. Once you\'re in Kuala Lumpur, we conduct a site visit and refine the design. This is particularly helpful for expats who want to have their new home ready upon arrival. Many of our international clients start the process remotely 2-3 months before their move.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium">Trusted by Mont Kiara Families Since 2009</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Interior Designer in <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Mont Kiara</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Award-winning interior design for luxury condos and apartments in Mont Kiara. Heart-led craftsmanship and exceptional detail for expat families and locals seeking sophisticated, family-friendly spaces.
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
              Serving Arcoris, 11 Mont Kiara, The Hartamas & all Mont Kiara condos
            </p>
          </div>
        </div>
      </section>

      {/* Local Hook Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Your Mont Kiara Interior Design Partner
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Mont Kiara is unlike anywhere else in Kuala Lumpur. With its international community, tree-lined streets, cosmopolitan cafés, and family-friendly atmosphere, this enclave of luxury condos and apartments attracts expat families, returning Malaysians, and locals seeking a global lifestyle. Living in Mont Kiara means navigating unique design challenges: making the most of compact condo layouts, creating sophisticated spaces that feel both international and tropical, and designing homes where children can play safely while parents entertain in style.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                For over 15 years, we've been the trusted interior design partner for Mont Kiara residents. From the penthouses of Arcoris Mont Kiara to family apartments in 11 Mont Kiara, from established condos like Plaza Mont Kiara to newer developments like Verticas Residensi – we understand the specific layouts, building regulations, and lifestyle needs unique to this neighborhood. Our studio in Bukit Jalil is just 20-25 minutes from Mont Kiara, making us easily accessible for site visits and consultations.
              </p>

              <p className="text-lg leading-relaxed">
                We know what Mont Kiara families need: clever storage solutions for diverse lifestyles, child-safe yet sophisticated designs, kitchens that balance entertaining with practical cooking, and spaces that feel spacious despite typical 1,200-1,800 sq ft footprints. Whether you're an expat family settling into your first Kuala Lumpur home or a local family upgrading within Mont Kiara, we bring heart-led craftsmanship and exceptional attention to detail to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mont Kiara Residents Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Why Mont Kiara Families Choose Voala Interior
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Mont Kiara Building Expertise</h3>
                <p className="text-gray-700">
                  We've completed projects in Arcoris, 11 Mont Kiara, The Hartamas, Seni, Verticas, and Plaza Mont Kiara. We know each building's layouts, management requirements, and approval processes inside out.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Expat-Friendly Service</h3>
                <p className="text-gray-700">
                  Clear English communication, understanding of international aesthetics, and management of all local coordination. We help expat families navigate Malaysian renovation processes seamlessly.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Family-Focused Design</h3>
                <p className="text-gray-700">
                  Child-safe, pet-friendly designs that don't compromise on sophistication. We create spaces where kids can be kids while parents enjoy elegant, grown-up aesthetics.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Space Maximization</h3>
                <p className="text-gray-700">
                  Expert at making Mont Kiara's typical 1,200-1,800 sq ft units feel spacious and functional. Smart storage, multi-purpose areas, and clever layouts that enhance your lifestyle.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">One-Stop Turnkey Service</h3>
                <p className="text-gray-700">
                  From design to furniture to final styling – we handle everything. No need to coordinate multiple contractors or navigate local shopping. One team, seamless execution.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Award-Winning Excellence</h3>
                <p className="text-gray-700">
                  Recognized across Malaysia for design innovation and craftsmanship. We bring this same level of excellence to every Mont Kiara home, regardless of size or budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Interior Design Services for Mont Kiara Condos & Apartments
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Tailored solutions for the unique needs of Mont Kiara high-rise living and international family lifestyles.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <div key={index} className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Mont Kiara Buildings We Serve</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {buildings.map((building, index) => (
                  <div key={index} className="bg-white p-4 rounded border border-gray-200">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">{building.name}</h4>
                        <p className="text-sm text-gray-600">{building.type}</p>
                        <p className="text-xs text-gray-500 mt-1">{building.units}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6 text-center">
                + Many other Mont Kiara, Sri Hartamas, and Dutamas developments
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">What Mont Kiara Clients Say</h3>
              <blockquote className="text-lg italic mb-4">
                "As an expat family from Australia, we were worried about navigating a renovation in KL. Voala Interior made it seamless. They understood exactly what we needed – modern, functional, child-friendly – and delivered beyond our expectations. Our 11 Mont Kiara apartment now feels like home."
              </blockquote>
              <p className="text-sm text-gray-400">— The Williams Family, 11 Mont Kiara</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heart-Led Craftsmanship */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Heart-Led Craftsmanship for Mont Kiara Families
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6 text-gray-300">
                What does "heart-led craftsmanship" mean for a Mont Kiara family? It means we take time to understand how you really live. When a Japanese family tells us they need a traditional entryway (genkan) in their Arcoris condo, we design it thoughtfully. When British parents share they want their children to have space to play cricket indoors on rainy days, we create flexible zones. When a returning Malaysian couple wants to blend international sophistication with local warmth, we curate that perfect balance.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-gray-300">
                Exceptional detail is everywhere: the perfect lighting that makes your KLCC view shine at night without creating glare on screens, the storage solutions that accommodate both bulky sports equipment and delicate serveware, the kitchen layout that works for your helper while you host dinner parties. It's in materials chosen specifically for Mont Kiara's challenges – finishes that withstand tropical humidity, fabrics that stay fresh despite constant air-conditioning, surfaces easy to maintain in a busy family home.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                Our Mont Kiara clients often tell us we didn't just renovate their condo – we created a sanctuary that reflects their global lifestyle while embracing the best of Malaysian living. That's the difference heart makes.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Mont Kiara Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Find Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Easy to Reach from Mont Kiara
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Directions from Mont Kiara</h3>
                
                <div className="space-y-6 mb-8">
                  {neighborhoods.map((area, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <MapPin className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{area.name}</h4>
                        <p className="text-gray-700 text-sm mb-1">
                          <strong>Drive time:</strong> {area.distance}
                        </p>
                        <p className="text-gray-600 text-sm">
                          <strong>Via:</strong> {area.landmark} → SPRINT Highway → Bukit Jalil
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-4 text-gray-900">Studio Visit Options</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Visit Our Studio:</strong> Come see our portfolio and material samples in Bukit Jalil</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>We Come to You:</strong> Free consultation at your Mont Kiara condo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Virtual Consultation:</strong> Perfect for expats relocating to Mont Kiara</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-black text-white rounded-lg">
                  <h4 className="font-bold mb-4">Contact Us</h4>
                  <p className="mb-2">
                    <strong>Voala Interior</strong><br />
                    L2-29 & 30, The Link 2<br />
                    Jalan Jalil Perkasa 3<br />
                    Bukit Jalil, 57000 Kuala Lumpur
                  </p>
                  <p className="mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    <a href="tel:+60125053395" className="hover:underline">+60 12 505 3395</a>
                  </p>
                  <p>
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
                      <p className="text-gray-700">Monday - Friday: 10:00 AM - 7:00 PM</p>
                      <p className="text-gray-700">Saturday: By Appointment</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Call or WhatsApp +60 12 505 3395 to schedule. We're flexible with timing for Mont Kiara residents – evening and weekend appointments available.
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
                    title="Voala Interior Studio - 20 minutes from Mont Kiara"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Frequently Asked Questions About Interior Design in Mont Kiara
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transform Your Mont Kiara Condo Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're settling into Arcoris, upgrading in 11 Mont Kiara, or renovating Plaza Mont Kiara – let's create a home that reflects your lifestyle. Schedule your free consultation.
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

            <div className="text-gray-400">
              <p className="mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                20-25 minutes from Mont Kiara Central • Serving all Mont Kiara, Sri Hartamas & Dutamas condos
              </p>
              <p>Voala Interior, L2-29 & 30, The Link 2, Bukit Jalil, 57000 Kuala Lumpur</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
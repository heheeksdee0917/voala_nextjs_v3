// pages/services/ResidentialDesign.tsx
import React from 'react';
import { Sofa, BedDouble, ChefHat, Bath, Home, CheckCircle, Hammer, Lightbulb, Paintbrush } from 'lucide-react';
import Link from 'next/link';
import StandardButton from '../../../components/ui/standard-button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Interior Design & Built KL | Full Home Renovation – Voala Interior',
  description: 'Complete residential interior design and built services in Kuala Lumpur. From living rooms and bedrooms to kitchens and bathrooms — we design and build your entire home with precision and style.',
  keywords: 'residential interior design KL, home renovation Kuala Lumpur, full home interior design Malaysia, bedroom kitchen bathroom renovation KL, condo interior design built',
  alternates: {
    canonical: 'https://voalainterior.com/services/residential-interior-design',
  },
  openGraph: {
    title: 'Residential Interior Design & Built KL | Full Home Renovation – Voala Interior',
    description: 'Complete residential interior design and built services in Kuala Lumpur. Living rooms, bedrooms, kitchens, bathrooms — designed and built to perfection.',
    url: 'https://voalainterior.com/services/residential-interior-design',
    images: [
      {
        url: 'https://voalainterior.com/Voala/ProjectSource/Award-Winning-Projects/Aria/5.avif',
        width: 1200,
        height: 630,
        alt: 'Residential interior design and built in Kuala Lumpur by Voala Interior',
      },
    ],
  },
};

const rooms = [
  {
    icon: <Sofa className="w-6 h-6" />,
    title: 'Living Room',
    description: 'The heart of your home — we design seating layouts, feature walls, entertainment integration, and layered lighting that balances relaxation with everyday life.',
    highlights: [
      'L-shaped & modular sofa layouts',
      'Recessed TV niches & cable management',
      'Fluted wood & textured feature walls',
      'Dimmable layered lighting systems',
    ],
  },
  {
    icon: <BedDouble className="w-6 h-6" />,
    title: 'Bedroom',
    description: 'Your personal sanctuary — we craft restful spaces with smart storage, wardrobe systems, and calming palettes tailored to how you sleep and live.',
    highlights: [
      'Built-in wardrobes & walk-in closets',
      'Platform beds with storage bases',
      'Blackout & mood lighting design',
      'Acoustic considerations for better sleep',
    ],
  },
  {
    icon: <ChefHat className="w-6 h-6" />,
    title: 'Kitchen',
    description: 'Functional and beautiful — we design kitchens around your cooking habits, maximising workflow, storage, and durability for Malaysia\'s cooking style.',
    highlights: [
      'Wet & dry kitchen separation',
      'Custom cabinet & countertop design',
      'Ventilation & hood placement planning',
      'Durable materials for high-heat cooking',
    ],
  },
  {
    icon: <Bath className="w-6 h-6" />,
    title: 'Bathroom',
    description: 'From master ensuites to compact bathrooms — we design waterproofing, fixtures, and finishes that are both luxurious and practical in KL\'s humid climate.',
    highlights: [
      'Full waterproofing & anti-slip flooring',
      'Rainfall showers & freestanding baths',
      'Vanity & mirror lighting design',
      'Space-saving layouts for small bathrooms',
    ],
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Overall Home',
    description: 'A cohesive home is more than the sum of its parts — we ensure every room connects seamlessly in style, material, and flow from entry to bedroom.',
    highlights: [
      'Consistent design language throughout',
      'Material & colour palette coordination',
      'Open-concept space planning',
      'Smart home & lighting integration',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Consultation & Brief',
    description: 'We understand your lifestyle, needs, and budget before putting pen to paper.',
  },
  {
    step: '02',
    title: '3D Design & Planning',
    description: 'Photorealistic renders and detailed drawings so you see exactly what you\'re getting.',
  },
  {
    step: '03',
    title: 'Material Selection',
    description: 'We guide you through finishes, fabrics, and fittings that balance beauty with durability.',
  },
  {
    step: '04',
    title: 'Built & Fit-Out',
    description: 'Our team manages all contractors and trades to deliver on time and within budget.',
  },
  {
    step: '05',
    title: 'Styling & Handover',
    description: 'Final touches, snagging, and a walkthrough to ensure everything is perfect.',
  },
];

const commonMistakes = [
  'Designing each room in isolation — no cohesive flow throughout the home',
  'Ignoring ventilation — critical in Malaysia\'s heat and humidity',
  'Skipping waterproofing — leads to costly repairs within 2–3 years',
  'Prioritising aesthetics over storage — homes become cluttered fast',
  'No lighting plan — single overhead lights make every room look flat',
  'Choosing materials without considering maintenance in tropical climate',
];

const preparationChecklist = [
  'Measure all rooms accurately (ceiling height, beams, columns)',
  'List must-haves vs nice-to-haves for each room',
  'Note any existing furniture you want to keep',
  'Collect 15–20 inspiration images per room',
  'Check MC or developer guidelines for renovation',
  'Prepare realistic budget range per room',
  'Note any structural walls or M&E constraints',
];

const ResidentialDesign: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">

      {/* Header */}
      <div className="mb-10">
        <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Full Home Transformation
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
          Residential Interior Design & Built
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Your home should reflect how you live — not just how it looks in photos. We handle everything
          from initial concept to final handover, designing and building every room with the same
          attention to detail, so your entire home feels intentional, cohesive, and uniquely yours.
        </p>
      </div>

      {/* Rooms */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#59514e] mb-8">
          Every Room, Done Right
        </h2>
        <div className="space-y-6">
          {rooms.map((room, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#59514e]/10 rounded-lg flex items-center justify-center text-[#59514e]">
                  {room.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{room.title}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {room.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#59514e] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process */}
      <div className="mb-12 p-6 bg-[#59514e]/5 rounded-xl border border-[#59514e]/20">
        <div className="flex items-start gap-4 mb-6">
          <Hammer className="w-8 h-8 text-[#59514e] flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-[#59514e]">Our Design & Built Process</h2>
            <p className="text-gray-600 mt-1">From brief to handover — a clear, managed journey.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {process.map((step, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg border border-[#59514e]/10">
              <div className="text-2xl font-bold text-[#59514e]/30 mb-2">{step.step}</div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h3>
              <p className="text-gray-500 text-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Full Home Design */}
      <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-start gap-4">
          <Paintbrush className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              Why Full-Home Design Works Better
            </h2>
            <p className="text-blue-800 mb-4">
              Renovating room by room leads to mismatched styles, repeated costs, and wasted time.
              A full-home approach means:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                'One consistent design language throughout',
                'Bulk material orders reduce costs',
                'Single contractor coordination — less stress',
                'M&E (electrical, plumbing) planned holistically',
                'Phased payments spread across the project',
                'Faster completion vs. room-by-room renovation',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-800 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lighting */}
      <div className="mb-12 p-6 bg-amber-50 rounded-xl border border-amber-200">
        <div className="flex items-start gap-4 mb-4">
          <Lightbulb className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-amber-900">Lighting — Planned for Every Room</h2>
            <p className="text-amber-800 mt-1">
              Lighting is the most overlooked element in Malaysian home renovations. We plan it for every room:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            'Living room: dimmable downlights + cove + floor lamps',
            'Bedroom: warm tone + blackout-friendly task lighting',
            'Kitchen: bright task lights under cabinets',
            'Bathroom: vanity lighting at face level, not overhead',
            'Hallways: subtle LED strips for night navigation',
            'Smart controls for whole-home mood switching',
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2 text-amber-800">
              <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="mb-12 p-6 bg-red-50 rounded-xl border border-red-200">
        <h2 className="text-2xl font-bold text-red-900 mb-4">
          Common Residential Renovation Mistakes in KL
        </h2>
        <ul className="space-y-2">
          {commonMistakes.map((mistake, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-red-600 font-bold flex-shrink-0">✗</span>
              <span>{mistake}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Preparation Checklist */}
      <div className="mb-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-[#59514e] mb-4">
          Prepare for Your Home Consultation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {preparationChecklist.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#59514e] mb-6">Common Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How long does a full home renovation take in KL?',
              a: 'Typically 3–6 months depending on size, scope, and material lead times. We provide a detailed timeline before work begins.',
            },
            {
              q: 'Do you handle permits and MC approvals?',
              a: 'Yes — we coordinate with building management and relevant authorities for any approvals required.',
            },
            {
              q: 'Can we phase the renovation room by room?',
              a: 'Yes, we offer phased renovation plans — though full-home design upfront saves time and cost in the long run.',
            },
            {
              q: 'What\'s your minimum project size for residential?',
              a: 'We work with condos, apartments, and landed homes of all sizes. Reach out with your details and we\'ll advise.',
            },
          ].map((faq, index) => (
            <div key={index} className="border-l-4 border-[#59514e] pl-4">
              <h3 className="font-bold text-gray-900 mb-1">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pt-8 border-t border-gray-200">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#59514e] mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-gray-600 mb-6">
            Whether you're moving into a new place or refreshing your current home,
            we'll design and build every room to feel exactly the way you imagined.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/contact">
              <StandardButton variant="primary" showArrow>
                Book a Home Consultation
              </StandardButton>
            </Link>
            <a
              href="https://wa.me/60125053395?text=Hi! I'd like to discuss a full home interior design project."
              target="_blank"
              rel="noopener noreferrer"
            >
              <StandardButton variant="secondary">
                WhatsApp Us
              </StandardButton>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ResidentialDesign;
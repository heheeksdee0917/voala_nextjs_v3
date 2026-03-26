import React from 'react';
import { Building2, ShoppingBag, Lightbulb, Package, Wind, Shield, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import StandardButton from '../../../components/ui/standard-button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Interior Design KL - Office & Retail Spaces | Voala Interior',
  description: 'Commercial interior design in Kuala Lumpur: office and retail space design that balances brand identity, functionality, and compliance. Real KL commercial projects.',
  keywords: 'commercial interior design KL, office interior design Malaysia, retail interior design Kuala Lumpur, commercial renovation KL, office fitout Malaysia',
  alternates: {
    canonical: 'https://voalainterior.com/services/commercial',
  },
  openGraph: {
    title: 'Commercial Interior Design KL - Office & Retail Spaces | Voala Interior',
    description: 'Expert commercial interior design for KL offices and retail spaces: brand-driven design, compliance, lighting and space planning.',
    url: 'https://voalainterior.com/services/commercial',
    images: [
      {
        url: 'https://voalainterior.com/Voala/ProjectSource/Award-Winning-Projects/Aria/5.avif',
        width: 1200,
        height: 630,
        alt: 'Commercial interior design in Kuala Lumpur by Voala Interior',
      },
    ],
  },
};

const Commercial: React.FC = () => {
  const coreElements = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Office Design',
      description: 'Open-plan workstations, private meeting rooms, breakout zones — designed for productivity and culture'
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: 'Retail Design',
      description: 'Customer flow planning, display systems, brand-consistent finishes — designed to convert browsers into buyers'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Lighting Design',
      description: 'Task lighting for offices, accent lighting for retail displays, energy-efficient LED systems throughout'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Storage & Millwork',
      description: 'Custom built-ins, display shelving, reception counters, storage walls — functional and brand-aligned'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Compliance & Safety',
      description: 'BOMBA fire requirements, DOSH workplace safety, accessibility guidelines — handled from the start'
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'M&E Coordination',
      description: 'Air-conditioning zoning, electrical planning, data & AV points — coordinated with your building\'s systems'
    }
  ];

  const commonMistakes = [
    'Ignoring BOMBA requirements early → costly redesigns before handover',
    'No customer flow planning in retail → dead zones and poor conversion',
    'Single AC zone for entire office → hot spots and cold complaints',
    'Poor acoustic planning in offices → productivity drops significantly',
    'Overlooking signage & wayfinding → confusing experience for visitors',
    'No data & power point planning → cables everywhere after move-in'
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Offices & Retail Spaces
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
          Commercial Interior Design
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          A well-designed commercial space does more than look impressive — it drives productivity,
          reinforces your brand, and creates experiences your clients and staff remember. Whether
          it's a KL office fit-out or a retail concept, we design spaces that work as hard as you do.
        </p>
      </div>

      {/* Why It Matters */}
      <div className="mb-10 p-6 bg-amber-50 rounded-xl border border-amber-200">
        <h2 className="text-2xl font-bold text-amber-900 mb-3">
          Why Commercial Design Matters More Than You Think
        </h2>
        <p className="text-amber-800 leading-relaxed">
          In KL's competitive market, your space is part of your brand. A poorly designed office
          signals poor attention to detail to clients and drives away top talent. A badly planned
          retail floor loses customers before they reach the counter. Good commercial design isn't
          a luxury — it's a business decision.
        </p>
      </div>

      {/* Core Elements */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-6">
          6 Essential Elements for KL Commercial Spaces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreElements.map((element, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-[#59514e]/10 rounded-lg flex items-center justify-center text-[#59514e]">
                {element.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{element.title}</h3>
                <p className="text-gray-600">{element.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office Design Details */}
      <div className="mb-10 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-start gap-4">
          <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              What We Focus On for Office Fit-Outs
            </h2>
            <p className="text-blue-800 mb-3">
              A productive office isn't just workstations in a row. Here's what we always plan:
            </p>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Zoned layout — focused work, collaboration, and breakout areas clearly separated</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Acoustic panels and partitions to reduce noise between zones</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Data, power, and AV points planned before any walls go up</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Brand identity integrated into reception, feature walls, and wayfinding</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Retail Design Details */}
      <div className="mb-10 p-6 bg-purple-50 rounded-xl border border-purple-200">
        <div className="flex items-start gap-4">
          <ShoppingBag className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-purple-900 mb-3">
              What We Focus On for Retail Spaces
            </h2>
            <p className="text-purple-800 mb-3">
              Retail design is about guiding customers to buy. Here's what drives our retail approach:
            </p>
            <ul className="space-y-2 text-purple-800 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Customer flow mapping — directing movement naturally toward high-margin products</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Display systems designed for flexibility — easy to update with new stock</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Accent lighting on hero products — draws the eye and elevates perceived value</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Brand-consistent finishes from shopfront to fitting room</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="mb-10 p-6 bg-red-50 rounded-xl border border-red-200">
        <h2 className="text-2xl font-bold text-red-900 mb-4">
          Common Commercial Renovation Mistakes in KL
        </h2>
        <ul className="space-y-2 text-gray-700">
          {commonMistakes.map((mistake, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>{mistake}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Smart Space Ideas */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#59514e] mb-4">
          Smart Space Ideas We Use Frequently
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Glass-partitioned meeting rooms — open feel without noise bleed',
            'Modular workstations that expand as your team grows',
            'Feature reception wall with brand logo and lighting',
            'Retail window displays designed for maximum street visibility',
            'Staff-only zones clearly separated from customer areas',
            'Integrated POS counter design for seamless retail checkout'
          ].map((solution, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{solution}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pt-8 border-t border-gray-200">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#59514e] mb-3">
            Ready to Design Your Commercial Space?
          </h2>
          <p className="text-gray-600 mb-6">
            Whether it's a new office fit-out or a retail concept, let's build a space
            that represents your brand and works for your team and customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <StandardButton variant="primary" showArrow>
                Book a Commercial Consultation
              </StandardButton>
            </Link>
            <a
              href="https://wa.me/60125053395?text=Hi! I'd like to discuss a commercial interior design project."
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

export default Commercial;
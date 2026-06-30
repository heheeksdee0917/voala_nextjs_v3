// pages/services/commercial-interior-design.tsx
import React from 'react';
import { 
  Building2, 
  Sparkles, 
  Users, 
  Briefcase, 
  Clock, 
  CheckCircle, 
  Palette 
} from 'lucide-react';
import Link from 'next/link';
import StandardButton from '../../../components/ui/standard-button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Interior Design KL - Office, Retail & F&B Spaces | Voala Interior',
  description: 'Commercial interior design in Kuala Lumpur: professional office, retail, restaurant and F&B space design. Functional layouts, brand-aligned aesthetics and durable commercial-grade solutions.',
  alternates: {
    canonical: 'https://voalainterior.com/services/commercial-interior-design',
  },
  openGraph: {
    title: 'Commercial Interior Design KL - Spaces That Work & Impress',
    description: 'Expert commercial interior design for offices, retail stores, restaurants and F&B outlets in Kuala Lumpur. Functional, brand-driven and built for high-traffic environments.',
    url: 'https://voalainterior.com/services/commercial-interior-design',
    images: [
      {
        url: 'https://voalainterior.com/Voala/Voala_OG.png', // Replace with actual project image
        width: 1200,
        height: 630,
      },
    ],
  },
};

const CommercialInteriorDesignPage: React.FC = () => {
  const designServices = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Space Planning & Zoning',
      description: 'Efficient layouts that maximise usable area while ensuring smooth traffic flow and compliance with commercial regulations'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Brand-Aligned Aesthetics',
      description: 'Designs that reflect your company identity using corporate colours, materials and mood that strengthen brand presence'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Workplace & Collaboration Design',
      description: 'Modern offices with flexible workstations, meeting rooms, breakout areas and employee well-being in mind'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Retail & F&B Specialisation',
      description: 'Customer-focused retail stores and inviting restaurant interiors that drive foot traffic and dwell time'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Durable Commercial Finishes',
      description: 'High-traffic materials: commercial-grade flooring, wear-resistant surfaces and easy-to-maintain solutions'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Lighting & Atmosphere',
      description: 'Layered commercial lighting that enhances product visibility, creates mood and meets safety standards'
    }
  ];

  const klChallenges = [
    'High rental costs demanding maximum space efficiency',
    'Strict commercial building regulations and fire safety requirements',
    'Heavy daily foot traffic requiring durable materials',
    'Balancing aesthetics with operational functionality',
    'Tight timelines to minimise business downtime',
    'Need to impress clients and customers while staying practical'
  ];

  const commonMistakes = [
    'Prioritising looks over functionality → beautiful but inefficient workspaces',
    'Using residential-grade materials → quick wear and tear in high-traffic areas',
    'Poor space planning → congested areas and awkward circulation',
    'Ignoring acoustic treatment → noisy offices that reduce productivity',
    'Inadequate lighting design → unflattering spaces that fail to highlight products',
    'Underestimating renovation timelines → prolonged business disruption'
  ];

  const preparationChecklist = [
    'Provide floor plans, lease documents and building regulations',
    'Share your brand guidelines, logo and desired corporate image',
    'Define number of staff/guests and operational requirements',
    'Set a clear budget and project timeline',
    'List must-have spaces (meeting rooms, display areas, kitchen, etc.)',
    'Prepare any existing photos or reference designs',
    'Be ready for site measurements and multiple stakeholder meetings'
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">

          {/* Header */}
          <div className="mb-8">
            <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Spaces That Work & Impress
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
              Commercial Interior Design
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We design functional, brand-driven commercial spaces in Kuala Lumpur — from modern offices and retail stores 
              to restaurants and F&B outlets. Our designs balance aesthetics, durability, and operational efficiency 
              to help your business thrive.
            </p>
          </div>

          {/* Why It's Essential */}
          <div className="mb-12 p-6 bg-indigo-50 rounded-xl border border-indigo-200">
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  Why Commercial Design Matters in KL
                </h2>
                <p className="text-indigo-800 mb-4">
                  In competitive Kuala Lumpur, your commercial space is a powerful business tool. 
                  A well-designed office boosts productivity and staff retention, while inviting retail and F&B spaces attract and retain customers.
                </p>
                <div className="space-y-2">
                  {klChallenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-2 text-indigo-800">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#59514e] mb-6">
              What Our Commercial Interior Design Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designServices.map((service, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#59514e]/10 rounded-lg flex items-center justify-center text-[#59514e]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-12 p-6 bg-green-50 rounded-xl border border-green-200">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              What Your Business Will Gain
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Maximised usable space and improved workflow',
                'Stronger brand identity through thoughtful design',
                'Higher customer dwell time and conversion rates',
                'Better staff productivity and satisfaction',
                'Durable finishes that withstand daily commercial use',
                'Professional image that impresses clients and visitors'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Timeline */}
          <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-3">
                  Typical Project Timeline
                </h2>
                <p className="text-blue-800">
                  Office fit-outs: 8–14 weeks. Retail stores: 6–10 weeks. 
                  Full F&B restaurants: 12–20 weeks. We provide detailed schedules and work efficiently to minimise disruption to your business operations.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="mb-12 p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="flex items-start gap-4">
              <Briefcase className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-purple-900 mb-3">
                  Built for High-Traffic Commercial Environments
                </h2>
                <p className="text-purple-800">
                  We understand KL’s commercial realities — from strata rules and fire safety compliance 
                  to heavy foot traffic and the need for quick turnaround. Our designs are practical, durable, 
                  and tailored to deliver measurable business value.
                </p>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mb-12 p-6 bg-red-50 rounded-xl border border-red-200">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              Common Commercial Design Mistakes in KL
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

          {/* Preparation Checklist */}
          <div className="mb-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-[#59514e] mb-4">
              How to Prepare for Your Commercial Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {preparationChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick FAQ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#59514e] mb-6">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#59514e] pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Do you handle fit-out construction as well?</h3>
                <p className="text-gray-600">
                  Yes — we provide full turnkey services including design, contractor coordination and project management.
                </p>
              </div>
              <div className="border-l-4 border-[#59514e] pl-4">
                <h3 className="font-bold text-gray-900 mb-1">How do you ensure minimal business disruption?</h3>
                <p className="text-gray-600">
                  We phase works carefully, often working after hours or in stages so your business can continue operating.
                </p>
              </div>
              <div className="border-l-4 border-[#59514e] pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Can you work within a tight budget?</h3>
                <p className="text-gray-600">
                  Absolutely. We prioritise high-impact areas and suggest cost-effective material alternatives without compromising quality.
                </p>
              </div>
              <div className="border-l-4 border-[#59514e] pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Do you design for F&B outlets?</h3>
                <p className="text-gray-600">
                  Yes — we specialise in restaurants, cafés and food courts with proper kitchen zoning, hygiene considerations and customer flow.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-gray-200">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-[#59514e] mb-4">
                Ready to Transform Your Commercial Space?
              </h2>
              <p className="text-gray-600 mb-6">
                Let’s create a commercial interior that enhances your brand, improves operations, 
                and delivers real business results in Kuala Lumpur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/contact">
                  <StandardButton variant="primary" showArrow>
                    Start Your Commercial Project
                  </StandardButton>
                </Link>
                <a
                  href="https://wa.me/60125053395?text=Hi! I'd like to discuss commercial interior design for my KL business."
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
      </div>
    </div>
  );
};

export default CommercialInteriorDesignPage;
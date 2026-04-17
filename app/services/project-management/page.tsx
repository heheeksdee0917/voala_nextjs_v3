// pages/services/project-management.tsx
import React from 'react';
import { 
  ClipboardList, 
  Sparkles, 
  Users, 
  Clock, 
  Shield, 
  CheckCircle, 
  Hammer 
} from 'lucide-react';
import Link from 'next/link';
import StandardButton from '../../../components/ui/standard-button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Renovation Project Management KL - Stress-Free Home Renovation | Voala Interior',
  description: 'Professional renovation project management in Kuala Lumpur: end-to-end coordination, timeline control, quality assurance and budget management for hassle-free condo and house renovations.',
  keywords: 'renovation project management KL, home renovation project manager Kuala Lumpur, interior design project management Malaysia',
  alternates: {
    canonical: 'https://voalainterior.com/services/project-management',
  },
  openGraph: {
    title: 'Renovation Project Management KL - On Time, On Budget, Stress-Free',
    description: 'Expert project management for home renovations in Kuala Lumpur. We handle contractors, timelines, quality control and budgets so you don’t have to.',
    url: 'https://voalainterior.com/services/project-management',
    images: [
      {
        url: 'https://voalainterior.com/images/project-management-og.jpg', // Replace with actual project image
        width: 1200,
        height: 630,
      },
    ],
  },
};

const ProjectManagementPage: React.FC = () => {
  const managementServices = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: 'Detailed Project Planning',
      description: 'Comprehensive timelines, milestones, and contractor schedules tailored to your renovation scope'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Contractor Coordination',
      description: 'Vetted contractors, clear scopes of work, and daily/weekly progress management'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Control & Inspections',
      description: 'Regular site inspections, material verification, and workmanship checks at every stage'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Timeline & Delay Management',
      description: 'Proactive tracking to keep your renovation on schedule even with KL’s common challenges'
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'Budget & Variation Control',
      description: 'Transparent cost tracking, variation approvals, and preventing unexpected expenses'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Handover & Defect Management',
      description: 'Final walkthroughs, snagging list resolution, and clean handover with warranty support'
    }
  ];

  const klChallenges = [
    'Unreliable contractors and unclear scopes of work',
    'Frequent delays due to material availability and weather',
    'Hidden costs and uncontrolled variations',
    'Poor communication between multiple trades',
    'Difficulty supervising while working full-time',
    'Quality issues that only appear after handover'
  ];

  const commonMistakes = [
    'Hiring contractors directly without proper coordination → constant delays and miscommunication',
    'No detailed timeline or milestones → renovation drags on for months',
    'Skipping regular site inspections → substandard workmanship goes unnoticed',
    'Approving variations without proper documentation → budget blows up',
    'Poor handover process → defects left unresolved after moving in',
    'Underestimating the complexity of KL condo renovations → endless stress'
  ];

  const preparationChecklist = [
    'Have approved floor plans and 3D visuals ready',
    'Decide on your must-have items vs nice-to-have',
    'Prepare a realistic budget with 15-20% contingency',
    'Clear your schedule for key decision meetings',
    'Gather all existing documents (strata title, plans, etc.)',
    'Be ready to make timely decisions on variations',
    'Plan temporary accommodation if major works are involved'
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">

          {/* Header */}
          <div className="mb-8">
            <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Stress-Free Renovation
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
              Renovation Project Management
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Let us handle the chaos of your KL home renovation. From planning to final handover, 
              our professional project management ensures your renovation stays on time, on budget, 
              and meets quality standards — so you can focus on enjoying the end result.
            </p>
          </div>

          {/* Why It's Essential */}
          <div className="mb-12 p-6 bg-indigo-50 rounded-xl border border-indigo-200">
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  Why Professional Project Management Matters in KL
                </h2>
                <p className="text-indigo-800 mb-4">
                  Renovating in Kuala Lumpur comes with unique challenges — unreliable trades, material delays, 
                  and constant decision-making. Without proper management, even small projects can become stressful and expensive.
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
              What Our Project Management Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {managementServices.map((service, index) => (
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
              What You Gain With Professional Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Peace of mind knowing your project is under control',
                'Fewer delays and surprises during renovation',
                'Better quality workmanship through regular inspections',
                'Controlled budget with transparent tracking',
                'Clear communication and regular progress updates',
                'Smooth final handover with defects properly resolved'
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
                  Typical Timeline
                </h2>
                <p className="text-blue-800">
                  Small renovations: 6–10 weeks. Medium condo units: 12–16 weeks. 
                  Full landed home renovations: 4–7 months. We provide a detailed Gantt chart at the start and update it weekly.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="mb-12 p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-purple-900 mb-3">
                  Experienced in KL Renovation Realities
                </h2>
                <p className="text-purple-800">
                  We understand the unique challenges of renovating in Kuala Lumpur — from strata rules and lift access restrictions 
                  to material sourcing delays and tropical weather interruptions. Our systems keep your project moving forward.
                </p>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mb-12 p-6 bg-red-50 rounded-xl border border-red-200">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              Common Project Management Mistakes in KL
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
              How to Prepare for Your Renovation
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
                <h3 className="font-bold text-gray-900 mb-1">Do I still need an interior designer?</h3>
                <p className="text-gray-600">
                  Yes — we work best when paired with proper design. We can manage projects designed by us or by your own designer.
                </p>
              </div>
              <div className="border-l-4 border-[#59514e] pl-4">
                <h3 className="font-bold text-gray-900 mb-1">How do you control the budget?</h3>
                <p className="text-gray-600">
                  We provide detailed cost breakdowns, get multiple quotes, and require written approval for any variations.
                </p>
              </div>
              <div className="border-l-4 border-[#59514e] pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Can you manage only part of the renovation?</h3>
                <p className="text-gray-600">
                  Yes — many clients use us for contractor coordination and quality control even if they handle some trades themselves.
                </p>
              </div>
              <div className="border-l-4 border-[#59514e] pl-4">
                <h3 className="font-bold text-gray-900 mb-1">What if delays happen?</h3>
                <p className="text-gray-600">
                  We build buffer time into the schedule and actively manage risks. You’ll get regular updates so there are no surprises.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-gray-200">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-[#59514e] mb-4">
                Ready for a Stress-Free Renovation?
              </h2>
              <p className="text-gray-600 mb-6">
                Let our experienced team manage your KL home renovation from start to finish — on time, on budget, and with proper quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/contact">
                  <StandardButton variant="primary" showArrow>
                    Get Project Management Quote
                  </StandardButton>
                </Link>
                <a
                  href="https://wa.me/60125053395?text=Hi! I'd like to discuss renovation project management for my KL home."
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

export default ProjectManagementPage;
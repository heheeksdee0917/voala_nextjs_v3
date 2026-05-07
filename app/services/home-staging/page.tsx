// pages/services/home-staging.tsx
import React from 'react';
import { 
  Home, 
  Sparkles, 
  Eye, 
  Users, 
  Clock, 
  CheckCircle, 
  Palette 
} from 'lucide-react';
import Link from 'next/link';
import StandardButton from '../../../components/ui/standard-button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Staging KL - Sell Faster & Higher in Kuala Lumpur | Voala Interior',
  description: 'Professional home staging in Kuala Lumpur: make your condo or house look move-in ready. Boost buyer appeal with tropical-friendly styling, decluttering & photogenic setups.',
  keywords: 'home staging KL, property staging Kuala Lumpur, home staging Malaysia, sell house faster KL',
  alternates: {
    canonical: 'https://voalainterior.com/services/home-staging',
  },
  openGraph: {
    title: 'Home Staging KL - Make Buyers Fall in Love Instantly',
    description: 'Expert home staging services in Kuala Lumpur. Sell your property faster and at a higher price with professional styling tailored for tropical homes.',
    url: 'https://voalainterior.com/services/home-staging',
    images: [
      {
        url: 'https://voalainterior.com/Voala/Voala_OG.png', // Replace with actual image
        width: 1200,
        height: 630,
      },
    ],
  },
};

const HomeStagingPage: React.FC = () => {
  const stagingServices = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Decluttering & Depersonalising',
      description: 'Remove personal items and excess furniture to help buyers envision themselves living in the space'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Tropical-Friendly Styling',
      description: 'Light, airy colour palettes, natural textures and breathable fabrics suited for KL humidity'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Strategic Furniture Arrangement',
      description: 'Optimise flow and make small KL condos (600–1,200 sq ft) feel spacious and functional'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Accessory & Decor Curation',
      description: 'Fresh plants, tasteful art, cushions and lighting that photograph beautifully'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Virtual & In-Person Staging',
      description: 'Physical staging or virtual staging for listings and 3D walkthroughs'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick Turnaround Packages',
      description: 'From same-week refresh to full premium staging before open houses'
    }
  ];

  const klChallenges = [
    'High humidity that affects fabrics and fresh flowers',
    'Small condo footprints that feel cramped when cluttered',
    'Strong natural light that highlights every flaw',
    'Buyers who expect modern tropical resort-like feel',
    'Need to appeal to both local and expatriate buyers'
  ];

  const commonMistakes = [
    'Leaving too many personal photos and items → buyers can’t visualise themselves living there',
    'Using heavy dark colours and thick curtains → makes rooms feel smaller and hotter',
    'Overcrowding with too much furniture → circulation paths disappear',
    'Ignoring lighting layers → rooms look flat in photos and viewings',
    'Skipping decluttering of kitchens and bathrooms → feels unclean',
    'Using cheap artificial plants or mismatched decor → looks unprofessional'
  ];

  const preparationChecklist = [
    'Deep clean the entire unit (especially kitchens and bathrooms)',
    'Remove all personal photos, certificates and religious items',
    'Declutter wardrobes, cabinets and storage areas',
    'Repair any minor damages (paint chips, leaky taps)',
    'Prepare a list of recent renovation/upgrades',
    'Clear balcony and outdoor areas',
    'Be ready for professional photography session'
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">

          {/* Header */}
          <div className="mb-8">
            <div className="inline-block bg-[#59514e]/10 text-[#59514e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Sell Faster. Sell Higher.
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-6">
              Professional Home Staging
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              First impressions matter. Professional home staging helps potential buyers fall in love with your KL property instantly — making it look spacious, bright, and move-in ready while highlighting its best features.
            </p>
          </div>

          {/* Why It's Essential */}
          <div className="mb-12 p-6 bg-indigo-50 rounded-xl border border-indigo-200">
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  Why Home Staging Matters in KL
                </h2>
                <p className="text-indigo-800 mb-4">
                  In a competitive Kuala Lumpur property market, staged homes sell faster and often at higher prices. Buyers in tropical climates expect light, airy, and practical spaces — not cluttered or stuffy ones.
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
              What Professional Home Staging Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stagingServices.map((service, index) => (
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
              What Buyers Experience With Proper Staging
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Spaces feel larger and more inviting',
                'Natural light is maximised for tropical living',
                'Rooms have clear, practical functions',
                'Property photographs stand out on portals',
                'Buyers can emotionally connect faster',
                'Fewer objections during viewings'
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
                  Basic refresh: 3–7 days. Full staging for photography & viewings: 1–2 weeks. 
                  We can work around your schedule and coordinate with agents for open houses.
                </p>
              </div>
            </div>
          </div>

          {/* Accuracy / Trust Section - adapted */}
          <div className="mb-12 p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="flex items-start gap-4">
              <Eye className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-purple-900 mb-3">
                  Designed for Real KL Buyers
                </h2>
                <p className="text-purple-800">
                  Our staging uses light, breathable materials and tropical colour palettes that perform well in KL’s humidity and strong sunlight. 
                  The result? Homes that look fresh, spacious, and desirable in both photos and physical viewings.
                </p>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mb-12 p-6 bg-red-50 rounded-xl border border-red-200">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              Common Home Staging Mistakes in KL
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
              How to Prepare for Home Staging
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
                <h3 className="font-bold text-gray-900 mb-1">Does staging really help sell faster?</h3>
                <p className="text-gray-600">
                  Yes — professionally staged homes in KL typically sell 30–70% faster and often achieve higher offers.
                </p>
              </div>
              <div className="border-l-4 border-[#59514e] pl-4">
                <h3 className="font-bold text-gray-900 mb-1">What if my unit is vacant?</h3>
                <p className="text-gray-600">
                  We offer full furniture rental packages or virtual staging options that look realistic in photos.
                </p>
              </div>
              <div className="border-l-4 border-[#59514e] pl-4">
                <h3 className="font-bold text-gray-900 mb-1">How much does it cost?</h3>
                <p className="text-gray-600">
                  Packages start from basic refresh to premium full staging. Cost is usually a small fraction of the potential increase in sale price.
                </p>
              </div>
              <div className="border-l-4 border-[#59514e] pl-4">
                <h3 className="font-bold text-gray-900 mb-1">Do you coordinate with property agents?</h3>
                <p className="text-gray-600">
                  Yes — we work closely with agents for photography sessions, open houses, and timing.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-gray-200">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-[#59514e] mb-4">
                Ready to Make Your KL Property Stand Out?
              </h2>
              <p className="text-gray-600 mb-6">
                Let us transform your home into a desirable, photogenic space that attracts serious buyers quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/contact">
                  <StandardButton variant="primary" showArrow>
                    Get a Staging Quote
                  </StandardButton>
                </Link>
                <a
                  href="https://wa.me/60125053395?text=Hi! I'd like to discuss home staging for my KL property."
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

export default HomeStagingPage;
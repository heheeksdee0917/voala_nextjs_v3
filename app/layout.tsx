import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const samsungSharpSans = localFont({
  src: [
    {
      path: '../public/Voala/ProjectSource/fonts/samsungsharpsans.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Voala/ProjectSource/fonts/samsungsharpsans-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/Voala/ProjectSource/fonts/samsungsharpsans-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-samsung-sharp-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Award-Winning Interior Designer in KL | Voala Interior',
    template: '%s | Voala Interior',
  },
  description: "Malaysia's award-winning interior design & build studio with over 10 years of heart-led experience in residential and commercial spaces.",
  keywords: 'interior designer KL, interior design Kuala Lumpur, home renovation Malaysia, office interior design KL, award winning interior design Malaysia, condo renovation KL',
  openGraph: {
    siteName: 'Voala Interior',
    locale: 'en_MY',
    type: 'website',
    images: [
      {
        url: 'https://voalainterior.com/Voala/1.avif',
        width: 1200,
        height: 630,
        alt: 'Voala Interior - Award-winning Interior Design Studio in Kuala Lumpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://voalainterior.com/Voala/1.avif'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://voalainterior.com',
  name: 'Voala Interior',
  alternateName: 'Voala Interior Design',
  description: "Malaysia's award-winning interior design & build studio with over 10 years of heart-led experience. Specializing in residential and commercial interior design in Kuala Lumpur.",
  url: 'https://voalainterior.com',
  telephone: '+60125053395',
  email: 'hello@voalainterior.com',
  priceRange: '$$$$',
  image: [
    'https://voalainterior.com/Voala/1.avif',
    'https://voalainterior.com/Voala/ProjectSource/Logo/VOALA%20NEW_BLACK.png',
  ],
  logo: {
    '@type': 'ImageObject',
    url: 'https://voalainterior.com/Voala/ProjectSource/Logo/VOALA%20NEW_BLACK.png',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3',
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Kuala Lumpur' },
    { '@type': 'City', name: 'Petaling Jaya' },
    { '@type': 'City', name: 'Selangor' },
    { '@type': 'AdministrativeArea', name: 'Klang Valley' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 3.052340896923446,
      longitude: 101.67637307497074,
    },
    geoRadius: '50000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Interior Design Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Interior Design',
          description: 'Custom home interior design for condos, apartments, and landed properties in Kuala Lumpur',
          areaServed: 'Kuala Lumpur',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Interior Design',
          description: 'Professional office and commercial space interior design services in Kuala Lumpur',
          areaServed: 'Kuala Lumpur',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Space Planning',
          description: 'Complete renovation and build services for homes and offices in Kuala Lumpur',
          areaServed: 'Kuala Lumpur',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Design Consultation',
          description: 'Professional interior design consultation services in Kuala Lumpur',
          areaServed: 'Kuala Lumpur',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '3D Visualization',
          description: 'Photorealistic 3D rendering and visualization services to help you visualize your space before renovation begins',
          areaServed: 'Kuala Lumpur',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bedroom Interior Design',
          description: 'Custom bedroom design tailored to your lifestyle, from master suites to children rooms in Kuala Lumpur',
          areaServed: 'Kuala Lumpur',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Living Room Interior Design',
          description: 'Bespoke living room design that balances aesthetics and comfort for modern Malaysian homes',
          areaServed: 'Kuala Lumpur',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Material Selection',
          description: 'Expert material and finishes selection including tiles, flooring, wallpaper, and furnishings for your interior space',
          areaServed: 'Kuala Lumpur',
        },
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/hellovoala',
    'https://www.instagram.com/hellovoala/',
    'https://www.linkedin.com/company/voala-interior/',
    'https://www.youtube.com/@hellovoala9163',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '8',
    bestRating: '5',
    worstRating: '1',
  },
  foundingDate: '2016',
  slogan: 'Award-winning interior design with heart-led experience',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  currenciesAccepted: 'MYR',
  knowsAbout: [
    'Interior Design',
    'Home Renovation',
    'Commercial Design',
    'Residential Design',
    'Space Planning',
    'Interior Architecture',
    '3D Visualization',
    'Material Selection',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${samsungSharpSans.variable} min-h-screen bg-white font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded"
        >
          Skip to main content
        </a>

        <Navigation />

        <main id="main-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
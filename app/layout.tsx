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
    default: 'Best Interior Design in Kuala Lumpur - If you are looking for the BEST Interior Designer in KL for Commercial or Residential Design - Voala Interior it is',
    template: '%s | Voala Interior'
  },
  description: "We are Malaysia's award-winning interior design & build studio in KL with years of heart-led experience.",
  keywords: 'interior design, home design, renovation, Malaysia interior designer',
  openGraph: {
    title: 'Best Interior Design in Kuala Lumpur - Voala Interior Design',
    description: 'We are Malaysia‘s award-winning interior design & build studio in KL with years of heart-led experience.',
    url: 'https://voalainterior.com',
    siteName: 'Voala Interior',
    images: [
      {
        url: '/Voala/1.avif',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voala Interior Design',
    description: 'We are Malaysia’s award-winning interior design & build studio in KL with years of heart-led experience.',
    images: ['/Voala/1.avif'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://voalainterior.com",
  "name": "Voala Interior",
  "alternateName": "Voala Interior Design",
  "description": "Malaysia's award-winning interior design & build studio with years of heart-led experience. Specializing in residential and commercial interior design in Kuala Lumpur.",
  "url": "https://voalainterior.com",
  "telephone": "+60125053395",
  "email": "hello@voalainterior.com", // Add if you want this public
  "priceRange": "$$$$",
  "image": [
    "https://voalainterior.com/Voala/1.avif",
    "https://voalainterior.com/Voala/ProjectSource/Logo/VOALA%20NEW_BLACK.png" // Add your logo
  ],
  "logo": {
    "@type": "ImageObject",
    "url": "https://voalainterior.com/Voala/ProjectSource/Logo/VOALA%20NEW_BLACK.png" // Add your logo URL
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3",
    "addressLocality": "Bukit Jalil",
    "addressRegion": "Kuala Lumpur",
    "postalCode": "57000",
    "addressCountry": "MY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 3.052340896923446,
    "longitude": 101.67637307497074
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Kuala Lumpur"
    },
    {
      "@type": "City",
      "name": "Petaling Jaya"
    },
    {
      "@type": "City",
      "name": "Selangor"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Klang Valley"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 3.052340896923446,
      "longitude": 101.67637307497074
    },
    "geoRadius": "50000" // 50km radius from your location
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Interior Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Interior Design",
          "description": "Custom home interior design for condos, apartments, and landed properties in Kuala Lumpur",
          "areaServed": "Kuala Lumpur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Interior Design",
          "description": "Professional office and commercial space interior design services",
          "areaServed": "Kuala Lumpur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Renovation & Build Services",
          "description": "Complete renovation and build services for homes and offices",
          "areaServed": "Kuala Lumpur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Interior Design Consultation",
          "description": "Professional interior design consultation services",
          "areaServed": "Kuala Lumpur"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/hellovoala",
    "https://www.instagram.com/hellovoala/",
    "https://www.linkedin.com/company/voala-interior/",
    "https://www.youtube.com/@hellovoala9163"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0", // Update with your actual Google rating
    "reviewCount": "8", // Update with your actual review count
    "bestRating": "5",
    "worstRating": "1"
  },
  "foundingDate": "2016", 
  "slogan": "Award-winning interior design with heart-led experience",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "MYR",
  "knowsAbout": [
    "Interior Design",
    "Home Renovation",
    "Commercial Design",
    "Residential Design",
    "Space Planning",
    "Interior Architecture"
  ]
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
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={`${samsungSharpSans.variable} min-h-screen bg-white font-sans antialiased`}>
        {/* Skip to main content for accessibility */}
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
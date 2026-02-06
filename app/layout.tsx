import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
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
    default: 'Best Interior Design in KL - If you are looking for the BEST Interior Designer in KL for Commercial or Residential Design - Voala Interior it is',
    template: '%s | Voala Interior' // This adds "| Voala Interior" to all page titles
  },
  description: "We are Malaysia's award-winning interior design & build studio in KL with 15+ years of heart-led experience.",
  keywords: 'interior design, home design, renovation, Malaysia interior designer',
  openGraph: {
    title: 'Best Interior Design in KL - Voala Interior Design',
    description: 'We are Malaysia‘s award-winning interior design & build studio in KL with 15+ years of heart-led experience.',
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
    description: 'We are Malaysia‘s award-winning interior design & build studio in KL with 15+ years of heart-led experience.',
    images: ['/Voala/1.avif'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Voala Interior",
              "image": "https://voalainterior.com/Voala/1.avif",
              "@id": "https://voalainterior.com",
              "url": "https://voalainterior.com",
              "telephone": "+60125053395",
              "priceRange": "$$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "L2-29 & 30, The Link, 2, Jalan Jalil Perkasa 3",
                "addressLocality": "Bukit Jalil",
                "postalCode": "57000",
                "addressRegion": "Kuala Lumpur",
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
              "areaServed": {
                "@type": "Place",
                "name": "Kuala Lumpur, Klang Valley, Bukit Jalil and surrounding areas"
              },
              "sameAs": [
                "https://www.instagram.com/hellovoala/",
                "https://www.facebook.com/hellovoala",
                "https://www.youtube.com/@hellovoala9163"
              ]
            })
          }}
        />
      </head>
      <body className={`${samsungSharpSans.variable} min-h-screen bg-white font-sans antialiased`}>
        {/* Navigation will go here once we migrate it */}
        
        <main>
          {children}
        </main>
        
        {/* Footer will go here once we migrate it */}
        <Footer />
      </body>
    </html>
  )
}
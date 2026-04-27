// app/contact/page.tsx — server component, owns the metadata
import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Book a Free Interior Design Consultation | Voala Interior KL',
  description:
    'Contact Voala Interior in Bukit Jalil, Kuala Lumpur. Book a free consultation for your condo or home renovation. Call +60 12 505 3395 or WhatsApp us today.',
  keywords:
    'contact interior designer KL, book interior design consultation Kuala Lumpur, interior designer Bukit Jalil contact, free consultation interior design Malaysia',
  alternates: {
    canonical: 'https://voalainterior.com/contact',
  },
  openGraph: {
    title: 'Book a Free Consultation | Voala Interior Kuala Lumpur',
    description:
      'Get in touch with Voala Interior — heart-led craftsmanship for condos and homes across KL. Studio at The Link 2, Bukit Jalil. Call +60 12 505 3395.',
    url: 'https://voalainterior.com/contact',
    siteName: 'Voala Interior',
    locale: 'en_MY',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
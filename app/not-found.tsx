// app/not-found.tsx
import Link from 'next/link';
import StandardButton from '@/components/ui/standard-button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-[#59514e] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Sorry, we couldn't find the page you're looking for. 
          Perhaps you'd like to explore our portfolio or get in touch?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <StandardButton variant="primary" showArrow>
              Back to Home
            </StandardButton>
          </Link>
          <Link href="/projects">
            <StandardButton variant="secondary">
              View Projects
            </StandardButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
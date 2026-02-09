// app/award-winning/[projectId]/page.tsx
import { projectsData } from '@/data/projectsData';
import AwardWinningProjectDetailContent from '@/components/AwardWinningProjectDetailContent';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { projectId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projectId = params.projectId;
  
  // Only The Bear House is award-winning
  if (projectId !== 'the-bear-house') {
    return {
      title: 'Redirecting... | Voala Interior',
    };
  }
  
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return {
      title: 'Project Not Found | Voala Interior',
    };
  }
  
  return {
    title: `${project.name} - Award-Winning ${project.type === 'residential' ? 'Residential' : 'Commercial'} Interior Design | Voala Interior`,
    description: `${project.description} Award-winning interior design project by Voala Interior in ${project.location}. ${project.overview?.replace(/<[^>]*>/g, '').substring(0, 150)}...`,
    keywords: `${project.name}, award winning interior design, ${project.type} design, ${project.location}, interior designer KL`,
    alternates: {
      canonical: `https://voalainterior.com/award-winning/${projectId}`,
    },
    openGraph: {
      title: `${project.name} - Award-Winning Interior Design Project`,
      description: `${project.description} Award-winning design by Voala Interior.`,
      url: `https://voalainterior.com/award-winning/${projectId}`,
      images: [
        {
          url: `https://voalainterior.com${project.image}`,
          width: 1200,
          height: 630,
          alt: `${project.name} award-winning interior design project by Voala Interior`,
        },
      ],
    },
  };
}

// Only generate static params for The Bear House
export function generateStaticParams() {
  return [
    { projectId: 'the-bear-house' }
  ];
}

export default function AwardWinningProjectDetailPage({ params }: { params: { projectId: string } }) {
  // Redirect to regular project page if not The Bear House
  if (params.projectId !== 'the-bear-house') {
    redirect(`/${params.projectId}`);
  }
  
  return <AwardWinningProjectDetailContent projectId={params.projectId} />;
}
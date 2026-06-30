// app/award-winning-projects/[projectId]/page.tsx
import { projectsData } from '@/data/projectsData';
import AwardWinningProjectDetailContent from '@/components/AwardWinningProjectDetailContent';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { projectId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find(p => p.id === params.projectId);

  // If project doesn't exist or isn't featured award-winning, return basic metadata
  if (!project || !project.isAwardWinningFeatured) {
    return {
      title: 'Redirecting... | Voala Interior',
    };
  }

  return {
    title: `${project.name} - Award-Winning ${project.type === 'residential' ? 'Residential' : 'Commercial'} Interior Design | Voala Interior`,
    description: `${project.description} Award-winning interior design project by Voala Interior in ${project.location}. ${project.overview?.replace(/<[^>]*>/g, '').substring(0, 150)}...`,
    keywords: `${project.name}, award winning interior design, ${project.type} design, ${project.location}, interior designer KL`,
    alternates: {
      canonical: `https://voalainterior.com/award-winning-projects/${params.projectId}`,
    },
    openGraph: {
      title: `${project.name} - Award-Winning Interior Design Project`,
      description: `${project.description} Award-winning design by Voala Interior.`,
      url: `https://voalainterior.com/award-winning-projects/${params.projectId}`,
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

// Generate static params only for featured award-winning projects
export function generateStaticParams() {
  return projectsData
    .filter(project => project.isAwardWinningFeatured === true)
    .map(project => ({
      projectId: project.id
    }));
}

export default function AwardWinningProjectDetailPage({ params }: { params: { projectId: string } }) {
  const project = projectsData.find(p => p.id === params.projectId);

  // Redirect if project doesn't exist or isn't featured award-winning
  if (!project || !project.isAwardWinningFeatured) {
    redirect(`/projects/${params.projectId}`);
  }

  return <AwardWinningProjectDetailContent projectId={params.projectId} />;
}
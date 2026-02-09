import { projectsData } from '../../../data/projectsData';
import type { Metadata } from 'next';

type Props = {
  params: { projectId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projectId = params.projectId;
  
  // Find the actual project to get its name
  const project = projectsData.find(p => p.id === projectId);
  
  // Fallback if project not found
  if (!project) {
    return {
      title: 'Project Not Found | Voala Interior',
    };
  }
  
  return {
    title: `${project.name} - ${project.type === 'residential' ? 'Residential' : 'Commercial'} Interior Design | Voala Interior`,
    description: `${project.description} ${project.overview?.replace(/<[^>]*>/g, '').substring(0, 150)}...`,
    keywords: `${project.name}, ${project.type} interior design, ${project.location}, interior designer KL`,
    alternates: {
      canonical: `https://voalainterior.com/${projectId}`,
    },
    openGraph: {
      title: `${project.name} - Interior Design Project`,
      description: project.description,
      url: `https://voalainterior.com/${projectId}`,
      images: [
        {
          url: `https://voalainterior.com${project.image}`,
          width: 1200,
          height: 630,
          alt: `${project.name} interior design project by Voala Interior`,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    projectId: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { projectId: string } }) {
  return <ProjectDetailContent projectId={params.projectId} />;
}
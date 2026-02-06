import { projectsData } from '@/data/projectsData';
import ProjectDetailContent from '@/components/ProjectDetailContent';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    projectId: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { projectId: string } }) {
  return <ProjectDetailContent projectId={params.projectId} />;
}

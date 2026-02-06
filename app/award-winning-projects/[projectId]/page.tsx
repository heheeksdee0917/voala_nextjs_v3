import { projectsData } from '@/data/projectsData';
import AwardWinningProjectDetailContent from '@/components/AwardWinningProjectDetailContent';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    projectId: project.id,
  }));
}

export default function AwardWinningProjectDetailPage({ params }: { params: { projectId: string } }) {
  return <AwardWinningProjectDetailContent projectId={params.projectId} />;
}

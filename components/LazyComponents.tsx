
import { lazy } from 'react';

// Lazy load components that are not immediately visible
export const LazyAboutSection = lazy(() => import('./AboutSection'));
export const LazySignatureProjects = lazy(() => import('./SignatureProjects'));
export const LazyTestimonialCarousel = lazy(() => import('./TestimonialCarousel'));
export const LazyCallUsNowCTA = lazy(() => import('./CallUsNowCTA'));
export const LazyRecognitionGrid = lazy(() => import('./RecognitionGrid'));
export const LazyFooter = lazy(() => import('./Footer'));
export const LazyProjectsPage = lazy(() => import('../app/projects/page'));
export const LazyProjectDetailPage = lazy(() => import('../app/projectdetail/page'));
export const LazyAwardWinningProjectDetailPage = lazy(() => import('../app/award-winning-projects/[projectId]/page'));
export const LazyService = lazy(() => import('./Service'));
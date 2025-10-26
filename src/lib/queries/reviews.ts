import { Review } from '@/types';

export async function fetchReviews(): Promise<Review[]> {
  const response = await fetch('/api/reviews', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to fetch reviews: ${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data?.reviews) ? data.reviews : [];
}

export async function fetchReviewsExistence(): Promise<boolean> {
  const response = await fetch('/api/reviews/exists', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to check review availability: ${response.status}`);
  }

  const data = await response.json();
  return Boolean(data?.hasReviews);
}
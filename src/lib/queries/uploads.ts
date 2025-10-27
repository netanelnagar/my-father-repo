export type ProjectMediaFile = { filename: string; url: string };

export type UploadsResponse = {
  images: ProjectMediaFile[];
  videos: ProjectMediaFile[];
};

export async function fetchUploads(): Promise<UploadsResponse> {
  const res = await fetch('/api/admin/uploads', {
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch uploads: ${res.status}`);
  }

  const data = await res.json();

  if (!data?.success) {
    throw new Error(data?.error ?? 'Uploads fetch failed');
  }

  return {
    images: Array.isArray(data.images) ? data.images : [],
    videos: Array.isArray(data.videos) ? data.videos : [],
  };
}
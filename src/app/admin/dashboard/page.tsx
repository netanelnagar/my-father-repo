'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Review } from '@/types';
import { TabsNav } from '@/components/TabsNav';
import { ReviewsTable } from '@/components/ReviewsTable';
import { ProjectImages } from '@/components/ProjectImages';
import { SharedCustomerReviews } from '@/components/SharedCustomerReviews';
import { AdminTabKey } from '@/types';
import UploadReview from '@/components/UploadReview';

// Add a local type that can carry optional "name" for display
type AdminReview = Review & { name?: string };

// Fake reviews (UUID ids to match your DB)
const fakeReviews: AdminReview[] = [
  {
    id: '11111111-1111-4111-8111-111111111111',
    name: 'Sophia Clark',
    rating: 5,
    content: "The home lift has greatly improved my mobility. It's reliable and easy to use.",
    image_filename: null as any,
    created_at: new Date('2024-06-05').toISOString(),
  },
  {
    id: '22222222-2222-4222-8222-222222222222',
    name: 'Ethan Carter',
    rating: 4,
    content: 'Installation was smooth, and the lift is a perfect fit for our home.',
    image_filename: null as any,
    created_at: new Date('2024-05-20').toISOString(),
  },
  {
    id: '33333333-3333-4333-8333-333333333333',
    name: 'Olivia Bennett',
    rating: 3,
    content: 'The lift is a bit noisy, but it works well and looks great.',
    image_filename: null as any,
    created_at: new Date('2024-05-01').toISOString(),
  },
  {
    id: '44444444-4444-4444-8444-444444444444',
    name: 'Noah Parker',
    rating: 5,
    content: 'Excellent service and a high-quality lift. Highly recommend.',
    image_filename: null as any,
    created_at: new Date('2024-04-15').toISOString(),
  },
  {
    id: '55555555-5555-4555-8555-555555555555',
    name: 'Ava Reynolds',
    rating: 4,
    content: 'The lift is functional, but the design could be more modern.',
    image_filename: null as any,
    created_at: new Date('2024-04-01').toISOString(),
  },
];

export default function AdminDashboard() {
  const [reviews, setReviews] = useState<AdminReview[]>(fakeReviews);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTabKey>('reviews');
  
  // Form states
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadLoading, setUploadMessage] = useState('');
  const [uploadError, setUploadError] = useState('');

  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    content: '',
    image_filename: ''
  });
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewMessage, setReviewMessage] = useState('');

  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (authenticated && activeTab === 'reviews') {
      fetchReviews();
    }
  }, [authenticated, activeTab]);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/verify', {
        credentials: 'include'
      });
      
      if (response.ok) {
        setAuthenticated(true);
      } else {
        router.push('/admin/login');
      }
    } catch (error) {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      if (!response.ok) {
        setReviews(fakeReviews);
        return;
      }
      const data = await response.json();
      if (data?.success && Array.isArray(data.reviews)) {
        // Allow API to override our seed; if empty, keep fakes
        setReviews(data.reviews.length ? data.reviews : fakeReviews);
      } else {
        setReviews(fakeReviews);
      }
    } catch {
      setReviews(fakeReviews);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
        credentials: 'include'
      });
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) return;

    // setUploadLoading(true);
    setUploadMessage('');

    const formData = new FormData();
    formData.append('image', uploadFile);

    try {
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });

      const data = await response.json();
      if (data.success) {
        setUploadMessage(`הקובץ הועלה בהצלחה: ${data.filename}`);
        setUploadFile(null);
        // Reset the file input
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setUploadMessage(`שגיאה: ${data.error}`);
      }
    } catch (error) {
      setUploadMessage('שגיאה בהעלאת הקובץ');
    } finally {
      // setUploadLoading(false);
    }
  };

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setReviewLoading(true);
    setReviewMessage('');

    try {
      const response = await fetch('/api/admin/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewForm),
        credentials: 'include'
      });

      const data = await response.json();
      if (data.success) {
        setReviewMessage('הביקורת נוספה בהצלחה!');
        setReviewForm({ rating: 5, content: '', image_filename: '' });
        // Refresh reviews if on reviews tab
        if (activeTab === 'reviews') {
          fetchReviews();
        }
      } else {
        setReviewMessage(`שגיאה: ${data.error}`);
      }
    } catch (error) {
      setReviewMessage('שגיאה בהוספת הביקורת');
    } finally {
      setReviewLoading(false);
    }
  };

  // Use string UUID (DB uses UUID)
  const handleDeleteReview = async (reviewId: string) => {
    if (!confirm('האם אתה בטוח שברצונך למחוק את הביקורת?')) return;
    try {
      const response = await fetch(`/api/admin/reviews/${reviewId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        // Optimistic update
        setReviews((prev) => prev.filter((r) => r.id !== reviewId));
      } else {
        alert(`שגיאה במחיקה: ${data.error}`);
      }
    } catch {
      alert('שגיאה במחיקת הביקורת');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('he-IL');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>טוען...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return null; // Will redirect to login
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-4 text-[#111618]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_330)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#111618] text-lg font-bold leading-tight tracking-[-0.015em]">LiftCo Admin</h2>
          </div>
          <div className="flex items-center gap-3 pr-4">
            <button onClick={handleLogout} className="text-sm text-[#617c89] hover:underline">Logout</button>
          </div>
        </header>

        {/* Tabs */}
        <TabsNav activeTab={activeTab} onChange={setActiveTab} />

        <div className="px-4 sm:px-6 lg:px-10 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px]">
            {activeTab === 'reviews' && (
              <ReviewsTable reviews={reviews} onDelete={handleDeleteReview} />
            )}

            {activeTab === 'gallery' && (
              <ProjectImages />
            )}

            {activeTab === 'customer-reviews' && (
              <SharedCustomerReviews />
            )}

            {activeTab === 'upload-review' && (
              <UploadReview />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
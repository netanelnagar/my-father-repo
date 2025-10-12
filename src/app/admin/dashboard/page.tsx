'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Review } from '@/types';

export default function AdminDashboard() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'reviews' | 'upload' | 'add-review'>('reviews');
  
  // Form states
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  
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
      const data = await response.json();
      if (data.success) {
        setReviews(data.reviews || []);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
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

    setUploadLoading(true);
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
      setUploadLoading(false);
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

  const handleDeleteReview = async (reviewId: number) => {
    if (!confirm('האם אתה בטוח שברצונך למחוק את הביקורת?')) return;

    try {
      const response = await fetch(`/api/admin/reviews/${reviewId}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      const data = await response.json();
      if (data.success) {
        fetchReviews(); // Refresh the list
      } else {
        alert(`שגיאה במחיקה: ${data.error}`);
      }
    } catch (error) {
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">פאנל אדמין - מנופי רמון</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              התנתק
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-reverse space-x-8">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              ביקורות ({reviews.length})
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'upload'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              העלאת קבצים
            </button>
            <button
              onClick={() => setActiveTab('add-review')}
              className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'add-review'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              הוספת ביקורת
            </button>
          </nav>
        </div>

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="bg-white shadow-sm rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">ביקורות לקוחות</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {reviews.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  אין עדיין ביקורות
                </div>
              ) : (
                reviews.map((review) => (
                  <div key={review.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {renderStars(review.rating)}
                          <span className="mr-2 text-sm text-gray-500">
                            {formatDate(review.created_at)}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">{review.content}</p>
                        {review.image_filename && (
                          <p className="text-sm text-gray-500">תמונה: {review.image_filename}</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleDeleteReview(review.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        מחק
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <div className="bg-white shadow-sm rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">העלאת קבצים</h2>
            </div>
            <div className="p-6">
              <form onSubmit={handleFileUpload} className="space-y-4">
                <div>
                  <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
                    בחר קובץ תמונה
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                    className="block w-full text-sm text-gray-500 file:ml-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-primary-dark"
                    disabled={uploadLoading}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    קבצי תמונה בלבד (JPG, PNG, GIF, WebP) - מקסימום 5MB
                  </p>
                </div>
                
                {uploadMessage && (
                  <div className={`p-3 rounded-md ${uploadMessage.includes('שגיאה') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {uploadMessage}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={!uploadFile || uploadLoading}
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {uploadLoading ? 'מעלה...' : 'העלה קובץ'}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Add Review Tab */}
        {activeTab === 'add-review' && (
          <div className="bg-white shadow-sm rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">הוספת ביקורת חדשה</h2>
            </div>
            <div className="p-6">
              <form onSubmit={handleAddReview} className="space-y-6">
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                    דירוג (1-5 כוכבים)
                  </label>
                  <select
                    id="rating"
                    value={reviewForm.rating}
                    onChange={(e) => setReviewForm({ ...reviewForm, rating: parseInt(e.target.value) })}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    disabled={reviewLoading}
                  >
                    <option value={1}>1 כוכב</option>
                    <option value={2}>2 כוכבים</option>
                    <option value={3}>3 כוכבים</option>
                    <option value={4}>4 כוכבים</option>
                    <option value={5}>5 כוכבים</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    תוכן הביקורת
                  </label>
                  <textarea
                    id="content"
                    rows={4}
                    required
                    value={reviewForm.content}
                    onChange={(e) => setReviewForm({ ...reviewForm, content: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="כתוב כאן את תוכן הביקורת..."
                    disabled={reviewLoading}
                  />
                </div>

                <div>
                  <label htmlFor="image_filename" className="block text-sm font-medium text-gray-700 mb-2">
                    שם קובץ תמונה (אופציונלי)
                  </label>
                  <input
                    type="text"
                    id="image_filename"
                    value={reviewForm.image_filename}
                    onChange={(e) => setReviewForm({ ...reviewForm, image_filename: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary ltr"
                    placeholder="שם הקובץ עם סיומת, לדוגמה: image.jpg"
                    disabled={reviewLoading}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    יש להעלות קודם את התמונה בלשונית "העלאת קבצים" ואז להזין כאן את שם הקובץ
                  </p>
                </div>

                {reviewMessage && (
                  <div className={`p-3 rounded-md ${reviewMessage.includes('שגיאה') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                    {reviewMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={reviewLoading}
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {reviewLoading ? 'מוסיף...' : 'הוסף ביקורת'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
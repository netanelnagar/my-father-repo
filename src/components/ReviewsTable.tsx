'use client';

import { fakeReviews } from '@/data/fakeReviews';
import { useEffect, useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import { toast } from 'sonner';
import { Review } from '@/types';

const tablesHeaders = ['שם', 'ביקורת', 'דירוג', 'פעולות'];

type ReviewsTableProps = {
  flagForReloadReviews?: boolean;
};

export function ReviewsTable({ flagForReloadReviews }: ReviewsTableProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);


  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/reviews');
      if (!response.ok) {
        setReviews(fakeReviews);
        return;
      }
      const data = await response.json();
      if (data?.success && Array.isArray(data.reviews)) {
        setReviews(data.reviews);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReview = async (reviewId: string, name: string) => {
    toast(`האם אתה בטוח שברצונך למחוק את הביקורת של ${name}?`, {
      action: {
        label: 'מחק',
        onClick: async () => {
          const t = toast.loading(`מוחק ביקורת, ${name}…`);
          try {
            const response = await fetch(`/api/admin/reviews/${reviewId}`, {
              method: 'DELETE',
              credentials: 'include',
            });
            const data = await response.json();
            if (data.success) {
              setReviews((prev) => prev.filter((r) => r.id !== reviewId));
              toast.success('הביקורת נמחקה', { id: t });
            } else {
              toast.error(`שגיאה במחיקה: ${data.error}`, { id: t });
            }
          } catch {
            toast.error('שגיאה במחיקת הביקורת', { id: t });
          }
        },
      },
      cancel: {
        label: 'ביטול',
        onClick: () => {
          toast.dismiss();
        },
      },
    });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
      fetchReviews();
  }, [flagForReloadReviews]);

  return (
    <section className="w-full">
      <h2 className="text-[#111618] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-5">
        כל הביקורות
      </h2>
      <div className="px-4 sm:px-6 py-3">
        <div className="flex overflow-x-auto  rounded-lg border border-[#dbe2e6] bg-white">
          <table className="flex-1 ">
            <thead>
              <tr className="bg-white">
                {tablesHeaders.map((h, index) => (
                  <th key={h} className={" px-4 py-3 text-right text-[#111618] text-sm font-medium leading-normal" + (index <= 1 ? " w-[400px]" : " w-60")}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody >
              {loading ?
                (
                  <tr className="border-t border-t-[#dbe2e6]">
                    <td colSpan={4} className="px-4 py-6">
                      <div className="flex items-center justify-center gap-2">
                        <FiLoader className="w-5 h-5 text-[#13a4ec] animate-spin" />
                        <span className="text-[#617c89] text-sm">טוען ביקורות…</span>
                      </div>
                    </td>
                  </tr>
                ) : reviews.length === 0 ?
                  (
                    <tr className="border-t border-t-[#dbe2e6]">
                      <td colSpan={4} className="px-4 py-6 text-sm text-[#617c89]">
                        No reviews yet.
                      </td>
                    </tr>
                  ) :
                  reviews.map((r) => (
                    <tr key={r.id} className="border-t border-t-[#dbe2e6]">
                      <td className=" h-[72px] px-4 py-2 w-[400px] text-[#111618] text-sm font-normal leading-normal">
                        {r.name || 'Anonymous'}
                      </td>
                      <td className=" h-[72px] px-4 py-2 w-[400px] text-[#617c89] text-sm font-normal leading-normal">
                        {r.content}
                      </td>
                      <td className=" h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f3f4] text-[#111618] text-sm font-medium leading-normal w-full">
                          <span className="truncate">{r.rating} כוכבים</span>
                        </button>
                      </td>
                      <td className=" h-[72px] px-4 py-2 w-60 text-[#617c89] text-sm font-bold leading-normal tracking-[0.015em]">
                        <button onClick={() => { handleDeleteReview(r.id, r.name) }} className="text-[#111618] hover:underline">
                          מחק ביקורת
                        </button>
                      </td>
                    </tr>
                  ))
              }


            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
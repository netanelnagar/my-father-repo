
import { PiStarFill } from 'react-icons/pi';
interface ReviewCardProps {
  review: {
    id?: string;
    name?: string;
    image_filename?: string;
    created_at?: string;
    rating?: number;
    content?: string;
  };
  idx: number;
}

const formatReviewDate = (value?: string | null) => {
  if (!value) return '';
  // Already a readable label (e.g. “לפני חודש”)?
  if (value.length && /\d/.test(value) === false) return value;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat('he-IL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};


const ReviewCard = ({ review, idx }: ReviewCardProps) => {

  return (
    <article
      key={`${review.id ?? review.name}-${idx}`}
      className="flex min-w-[280px] max-w-[320px] mx-1 shrink-0 flex-col gap-4 rounded-lg border border-[#dbe2e6] bg-white p-5 shadow-sm"
    >
      <header className="flex items-center gap-3">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
          style={{
            backgroundImage: `url("${review.image_filename
              ? `/${review.image_filename}`
              : 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgTDoqAuxOnxR2lOoCXmjTWeDWQbOMMclChMz5t8wiNIYLDSKKJ-GeXQsxfLriV09eboFcxrGQDx-M3sWlEAxJrIn5R0Vx5Bzya3AJ8jz1Q_IYnxeNqweWOyp2wuG3stui5kuuwukCyNqLzMDUBE5z6p-y9RkXDTENb9s80mMChuVPw8wTUMTXQjL-4mYnP4s7A6jkycP9Ba5sEeEA2ujzdHRbd8Gm_vdIR24ngepEh9XjhVyizb-GhqcxWDBh4E43-Ey3mop8-ki9'
              }")`,
          }}
          aria-hidden="true"
        />
        <div className="flex-1">
          <p className="text-[#111618] text-base font-semibold leading-tight">
            {review.name ?? 'לקוח מרוצה'}
          </p>
          <p className="text-[#617c89] text-xs font-normal leading-tight">
            {formatReviewDate(review.created_at)}
          </p>
        </div>
      </header>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <PiStarFill
            key={i}
            size={18}
            className={i < (review.rating ?? 0) ? 'text-[#facc15]' : 'text-[#dbe2e6]'}
          />
        ))}
      </div>
      <p className="text-[#111618] text-sm leading-relaxed">
        {review.content ?? ''}
      </p>
    </article>
  );
};

export default ReviewCard;
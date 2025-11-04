import Marquee from "react-fast-marquee";
import ReviewCard from "../ReviewCard";
import { fetchReviews } from '@/lib/queries/reviews';

export default async function ReviewsSection() {
  const { reviews = [] } = await fetchReviews();

  return (
    <>
      {reviews.length === 0 ? (
        <p className="text-[#617c89] text-base font-normal leading-normal px-4 py-3">
          לא נמצאו המלצות
        </p>
      ) : (
        <div>

          <div className="md:hidden my-6 px-4">
            <div className="flex gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] py-8">
              {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} className="mx-2" />
              ))}
            </div>
          </div>

          <div className="hidden md:block my-6 px-4" dir="ltr">
            <Marquee
              speed={120}
              pauseOnHover={true}
              gradient={true}
              gradientWidth={60}
              autoFill={true}
            >
              {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} className="mx-2" />
              ))}
            </Marquee>
          </div>
        </div>
      )}
    </>
  );
}

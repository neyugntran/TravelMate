import { IconStarReview } from "../../../../Svg";

export default function SayAbout() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">
        What Travelers Say About Hotels in Ho Chi Minh City
      </h1>
      <div className="flex w-1/3 flex-col gap-4 border border-[#E5E7EB] rounded-xl p-6">
        <div className="flex items-center gap-4">
          <img src="/images/destinations/avatar.png" alt="" />
          <div className="flex flex-col">
            <p className="font-semibold">Michael Chen</p>
            <div className="flex items-center flex-row">
              <IconStarReview />
              <IconStarReview />
              <IconStarReview />
              <IconStarReview />
              <IconStarReview />
            </div>
          </div>
        </div>
        <p className="text-[#4B5563]">
          Amazing experience! The cruise was luxurious and the staff was
          incredibly attentive. The views of Halong Bay were breathtaking...
        </p>
        <div className="flex items-center gap-4">
          <img
            className="rounded-xl w-24 h-24"
            src="/images/tours/tour1.png"
            alt=""
          />
          <img
            className="rounded-xl w-24 h-24"
            src="/images/tours/tour1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

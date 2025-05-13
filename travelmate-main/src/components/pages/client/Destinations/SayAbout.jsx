import { IconStarReview } from "../../../../Svg";

export default function SayAbout() {
  return (
    <div className="hotel-deals bg-white flex items-center gap-16 flex-col w-full py-14">
      <h1 className="text-2xl font-semibold">
        What Travelers Say About Ha Long Bay
      </h1>
      <div className="flex card-featured w-full max-w-[1440px] justify-center gap-8">
        <div className="p-6 flex flex-col gap-4 rounded-xl w-1/2 bg-white shadow-[8px_0_15px_-5px_rgba(0,0,0,0.1),-8px_0_15px_-5px_rgba(0,0,0,0.1),0_20px_15px_-5px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <img src="/images/destinations/avatar.png" alt="" />
              <div className="flex flex-col">
                <p className="font-semibold">Sarah Johnson</p>
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
              Amazing experience! The limestone karsts are breathtaking, and the
              sunset cruise was unforgettable. Highly recommend the kayaking
              tours around the hidden caves.
            </p>
          </div>
        </div>
        <div className="p-6 flex flex-col gap-4 rounded-xl w-1/2 bg-white shadow-[8px_0_15px_-5px_rgba(0,0,0,0.1),-8px_0_15px_-5px_rgba(0,0,0,0.1),0_20px_15px_-5px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-2">
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
              The overnight cruise was worth every penny. Waking up to the misty
              bay views was magical. The staff was incredibly friendly and the
              food was excellent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

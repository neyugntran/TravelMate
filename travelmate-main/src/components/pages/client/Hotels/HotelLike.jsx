import { IconStarReview } from "../../../../Svg";

export default function HotelLike() {
  return (
    <div className="tour-like bg-[#E5E7EB] flex items-center gap-16 flex-col w-full py-14">
      <div className="flex flex-col justify-center gap-8 w-full max-w-[1240px]">
        <h1 className="text-2xl font-semibold">Similar Tours You Might Like</h1>
        <div className="relative flex w-full sm:w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img src="/images/slide/slide1.png" alt="" />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Ha Long Bay Luxury Cruises
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center flex-row">
                  <IconStarReview />
                  <IconStarReview />
                  <IconStarReview />
                  <IconStarReview />
                  <IconStarReview />
                </div>
                <p>(128 reviews)</p>
              </div>
              <p>4 Days - 3 Nights</p>
            </div>
            <p className="text-2xl font-semibold text-[#30b8b8]">From $299</p>
          </div>
          <div className="p-6 pt-0">
            <button className="w-full cursor-pointer overflow-hidden relative border-2 rounded-lg border-[#30b8b8] group px-4 py-2">
              <span className="relative z-10 text-[#30b8b8] group-hover:text-white text-xl duration-500">
                View Details
              </span>
              <span className="absolute w-full h-full bg-[#30b8b8] -left-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-[#30b8b8] -right-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

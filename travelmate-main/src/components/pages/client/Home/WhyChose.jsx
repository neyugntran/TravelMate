import {
  IconAiRec,
  IconGif,
  IconLocation,
  IconSecurity,
  IconStarChose,
  IconUserChose,
} from "../../../../Svg";

export default function WhyChose() {
  return (
    <div className="why-chose flex items-center gap-16 flex-col w-full pb-14">
      <h1 className="text-2xl font-semibold">Why Choose TravelMate</h1>
      <div className="w-full max-w-[1248px] flex gap-8 flex-wrap justify-center">
        <div className="flex flex-col w-[380px] text-center items-center">
          <div className="bg-[#008080] p-6 rounded-full">
            <IconAiRec />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              AI-Powered Recommendations
            </p>
            <p>
              Get personalized tour suggestions based on your preferences and
              travel style.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[380px] text-center items-center">
          <div className="bg-[#008080] p-6 rounded-full">
            <IconLocation />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              100+ Unique Destinations
            </p>
            <p>
              Explore the most beautiful and authentic locations across Vietnam.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[380px] text-center items-center">
          <div className="bg-[#008080] p-6 rounded-full">
            <IconStarChose />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Verified Reviews & Ratings
            </p>
            <p>
              Real feedback from real travelers to help you make informed
              decisions.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[380px] text-center items-center">
          <div className="bg-[#008080] p-6 rounded-full">
            <IconSecurity />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Secure & Easy Booking
            </p>
            <p>
              Safe and hassle-free booking process with instant confirmation.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[380px] text-center items-center">
          <div className="bg-[#008080] p-6 rounded-full">
            <IconGif />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Exclusive Deals & Discounts
            </p>
            <p>
              Access to special offers and seasonal promotions for our members.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[380px] text-center items-center">
          <div className="bg-[#008080] p-6 rounded-full">
            <IconUserChose />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Top-rated Local Guides
            </p>
            <p>
              Professional and knowledgeable guides for an authentic experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { IconStarReview } from "../../../../Svg";

export default function Filter() {
  return (
    <div className="flex flex-col gap-4 border border-[#E5E7EB] py-4 px-8 rounded-lg">
      <p className="font-semibold">Filter</p>
      <div className="flex flex-col gap-4">
        <p className="font-medium">Price Range</p>
        <div className="justify-between flex items-center">
          <p>500</p>
        </div>
        <div className="justify-between flex items-center">
          <p>$0</p>
          <p>$1000</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-medium">Rating</p>
        <div className="pl-4 flex items-center gap-2">
          <IconStarReview />
          <IconStarReview />
          <IconStarReview />
          <IconStarReview />
          <IconStarReview />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-medium">Hotel Type</p>
        <div className="pl-4 flex flex-col gap-2">
          <p>Luxury</p>
          <p>Budget</p>
          <p>Resort</p>
          <p>Homestay</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-medium">Amenities</p>
        <div className="pl-4 flex flex-col gap-2">
          <p>Pool</p>
          <p>Free Breakfast</p>
          <p>Gym</p>
          <p>Parking</p>
        </div>
      </div>
    </div>
  );
}

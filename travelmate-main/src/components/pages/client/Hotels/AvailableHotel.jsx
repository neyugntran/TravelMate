import { useEffect, useState } from "react";
import {
  IconArrowDown,
  IconBtnQuestion,
  IconKinfe,
  IconLocation,
  IconMenuHotels,
  IconPool,
  IconStarReview,
  IconWifi,
} from "../../../../Svg";
import { Rate, Tooltip } from "antd";
import { Link } from "react-router-dom";
import axiosInstance from "../../../../ultis/axiosInstance";
export default function AvailableHotel() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));

    const fetchHotels = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/user/get-hotels`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setHotels(response.data.data);
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  const [showAll, setShowAll] = useState(false);
  const visibleHotels = showAll ? hotels : hotels.slice(0, 3);

  return (
    <div className="flex flex-col justify-center gap-12 w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-semibold">
          Similar Hotels You Might Like
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative" id="input">
            <select className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]">
              <option value="1">Sort by: Popular</option>
              <option value="2">Sort by: Newest</option>
              <option value="3">Sort by: Price</option>
            </select>
            <div className="absolute top-3 right-3">
              <IconArrowDown />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconBtnQuestion />
            <IconMenuHotels />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-12">
        {visibleHotels.map((hotel, idx) => (
          <div
            key={idx}
            className="relative w-full sm:w-[360px] flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-[8px_0_15px_-5px_rgba(0,0,0,0.1),-8px_0_15px_-5px_rgba(0,0,0,0.1),0_20px_15px_-5px_rgba(0,0,0,0.1)]"
          >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              {hotel.featured && (
                <div className="absolute right-4 top-4 p-1 bg-white text-[#008080] flex items-center justify-center rounded-lg">
                  <p>Featured</p>
                </div>
              )}
              <img
                src={hotel.image_url || "/images/slide/slide1.png"}
                alt={hotel.name}
              />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <Tooltip title={hotel.name}>
                <p className="max-w-[350px] overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {hotel.name}
                </p>
              </Tooltip>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center flex-row gap-2">
                    <Rate disabled allowHalf value={hotel.averageRating} />
                  </div>
                  <p>({hotel.reviewCount || 0} reviews)</p>
                </div>
                <div className="flex items-center gap-2">
                  <IconLocation />
                  <Tooltip title={hotel.location}>
                    <p className="overflow-hidden max-w-[250px] text-ellipsis whitespace-nowrap">
                      {hotel.location || "Unknown"}
                    </p>
                  </Tooltip>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {hotel.features?.includes("wifi") && (
                    <div className="p-1 bg-[#E5E7EB] rounded-lg flex items-center gap-2">
                      <IconWifi />
                      <p>Free Wifi</p>
                    </div>
                  )}
                  {hotel.features?.includes("pool") && (
                    <div className="p-1 bg-[#E5E7EB] rounded-lg flex items-center gap-2">
                      <IconPool />
                      <p>Pool</p>
                    </div>
                  )}
                  {hotel.features?.includes("restaurant") && (
                    <div className="p-1 bg-[#E5E7EB] rounded-lg flex items-center gap-2">
                      <IconKinfe />
                      <p>Restaurant</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex flex-row justify-between items-center">
              <p className="text-xl font-semibold text-[#30b8b8]">
                From ${hotel.price}/night
              </p>
              <Link
                to={`/hotels/${hotel.hotel_id}`}
                className="text-center w-[40%] cursor-pointer p-2 bg-[#008080] text-white rounded-lg shadow-lg hover:bg-[#008080]/70 transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
      {hotels.length > 3 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer text-[#008080] font-semibold hover:underline"
          >
            {showAll ? "Hide" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}

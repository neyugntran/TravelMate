import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function HotelDeals({ city }) {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false); // To toggle showing more items

  useEffect(() => {
    if (!city) return;
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    const fetchHotels = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/user/hotels/by-city`,
          {
            params: { city: city.city },
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          setHotels(response.data.data);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching hotels by city:", error);
        setError("An error occurred while fetching hotels.");
      }
    };

    fetchHotels();
  }, [city]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="hotel-deals bg-white flex items-center gap-16 flex-col w-full py-14">
      <h1 className="text-2xl font-semibold">Best Hotel Deals for Your Trip</h1>
      <div className="flex flex-row flex-wrap gap-12 w-full max-w-[1240px] justify-center">
        {hotels.length > 0 ? (
          hotels.slice(0, showMore ? hotels.length : 3).map((hotel) => (
            <div
              key={hotel.hotel_id}
              className="relative flex w-full md:w-[calc(30%)] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-[8px_0_15px_-5px_rgba(0,0,0,0.1),-8px_0_15px_-5px_rgba(0,0,0,0.1),0_20px_15px_-5px_rgba(0,0,0,0.1)]"
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={hotel.image_url} alt={hotel.name} />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <Tooltip title={hotel.name}>
                  <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased max-w-[350px] overflow-hidden whitespace-nowrap text-ellipsis">
                    {hotel.name}
                  </p>
                </Tooltip>
                <p>{hotel.location}</p>
                <p className="text-xl font-semibold text-[#30b8b8]">
                  From ${hotel.price}/night
                </p>
              </div>
              <div className="p-6 pt-0">
                <button className="w-full cursor-pointer overflow-hidden relative border-2 rounded-lg border-[#30b8b8] group px-4 py-2">
                  <span className="relative z-10 text-[#30b8b8] group-hover:text-white text-xl duration-500">
                    Book Now
                  </span>
                  <span className="absolute w-full h-full bg-[#30b8b8] -left-56 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                  <span className="absolute w-full h-full bg-[#30b8b8] -right-56 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hotels available for the selected city.</p>
        )}
      </div>
      {/* {hotels.length > 3 && (
        <button
          onClick={toggleShowMore}
          className="mt-4 text-[#30b8b8] text-xl font-semibold"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )} */}
      {hotels.length > 3 && !showMore && (
        <button
          onClick={toggleShowMore}
          className="cursor-pointer px-6 py-2 text-white bg-[#30b8b8] rounded-lg"
        >
          Show More
        </button>
      )}
      {showMore && (
        <button
          onClick={toggleShowMore}
          className="cursor-pointer px-6 py-2 text-white bg-[#ff4d4f] rounded-lg"
        >
          Hide
        </button>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

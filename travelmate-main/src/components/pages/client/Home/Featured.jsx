import { useEffect, useState } from "react";
import { Rate, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function Featured({ city }) {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);
  const [visibleTours, setVisibleTours] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!city) return;
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    const fetchTours = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/user/tours/by-city`,
          {
            params: { city: city.city },
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          setTours(response.data.data);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching tours by city:", error);
        setError("An error occurred while fetching tours.");
      }
    };

    fetchTours();
  }, [city]);

  const handleShowMore = () => {
    setIsExpanded(true);
    setVisibleTours(tours.length);
  };

  const handleHide = () => {
    setIsExpanded(false);
    setVisibleTours(4);
  };

  const handleViewDetails = (tourId) => {
    navigate(`/tours/${tourId}`); // Navigate to the tour detail page
  };
  return (
    <div className="featured pt-12 flex items-center gap-16 flex-col">
      <h1 className="text-2xl font-semibold">Featured Tours</h1>
      <div className="flex card-featured flex-wrap justify-center gap-14">
        {tours.length > 0 ? (
          tours.slice(0, visibleTours).map((tour) => (
            <div
              key={tour.tour_id}
              className="relative flex w-full sm:w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl"
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img className="w-full" src={tour.image_url} alt={tour.name} />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <Tooltip title={tour.name}>
                  <p className="text-xl max-w-[270px] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased truncate">
                    {tour.name}
                  </p>
                </Tooltip>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center flex-row gap-2">
                      <Rate disabled allowHalf value={tour.averageRating} />
                    </div>
                    <p>({tour.reviewCount} reviews)</p>
                  </div>
                  <p>{tour.duration} Days</p>
                </div>
                <p className="text-2xl font-semibold text-[#30b8b8]">
                  From ${tour.price}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleViewDetails(tour.tour_id)}
                  className="w-full cursor-pointer overflow-hidden relative border-2 rounded-lg border-[#30b8b8] group px-4 py-2"
                >
                  <span className="relative z-10 text-[#30b8b8] group-hover:text-white text-xl duration-500">
                    View Details
                  </span>
                  <span className="absolute w-full h-full bg-[#30b8b8] -left-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                  <span className="absolute w-full h-full bg-[#30b8b8] -right-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-red-500">
            {error || "No tours available."}
          </div>
        )}
      </div>

      {tours.length > visibleTours && !isExpanded && (
        <button
          onClick={handleShowMore}
          className="cursor-pointer px-6 py-2 text-white bg-[#30b8b8] rounded-lg"
        >
          Show More
        </button>
      )}
      {isExpanded && (
        <button
          onClick={handleHide}
          className="cursor-pointer px-6 py-2 text-white bg-[#ff4d4f] rounded-lg"
        >
          Hide
        </button>
      )}
    </div>
  );
}

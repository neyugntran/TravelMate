import { useEffect, useState } from "react";
import { Tooltip } from "antd";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function Destinations() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));

    const fetchTours = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/user/get-tours`,
          {
            params: {
              limit: 3,
              page: 1,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTours(response.data.data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="destinations bg-white flex items-center gap-16 flex-col w-full py-14">
      <h1 className="text-2xl font-semibold">Top Destinations in Vietnam</h1>
      <div className="flex card-featured flex-wrap justify-center gap-8">
        {tours.map((tour, index) => {
          const isExpanded = expandedIndex === index;
          const shortDesc =
            tour.description.length > 100
              ? tour.description.slice(0, 100) + "..."
              : tour.description;

          return (
            <div
              className="card-des"
              style={{ "--tour-img": `url(${tour.image_url})` }}
              key={index}
            >
              <div className="z-10 h-full w-full px-4 text-white flex flex-col justify-end gap-2 pb-6">
                <Tooltip title={tour.name}>
                  <p className="max-w-[350px] overflow-hidden whitespace-nowrap text-ellipsis text-lg font-semibold">
                    🌿 {tour.name}
                  </p>
                </Tooltip>
                <p>{isExpanded ? tour.description : shortDesc}</p>
                {tour.description.length > 100 && (
                  <button
                    className="self-start bg-[#E5E7EB]/50 text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#E5E7EB]/70 transition"
                    onClick={() => toggleDescription(index)}
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

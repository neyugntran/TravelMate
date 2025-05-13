import { useEffect, useState } from "react";
import BookTour from "./BookTour";
import TourDetail from "./TourDetail";
import TourLike from "./TourLike";
import { useParams } from "react-router-dom";
import ReviewTours from "./ReviewTour";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function Tour() {
  const { tourId } = useParams();
  const [tourDetail, setTourDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    const fetchTourDetail = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/user/tours-details/${tourId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTourDetail(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tour details:", error);
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/user/tours/review/${tourId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    if (tourId) {
      fetchReviews();
      fetchTourDetail();
    }
  }, [tourId]);
  return (
    <div className="pt-12 flex flex-col items-center w-full gap-16 bg-white">
      <div className="w-full max-w-[1280px] flex gap-24">
        <div className="w-[60%] flex flex-col gap-8">
          <TourDetail tourDetail={tourDetail} loading={loading} />
          <ReviewTours reviews={reviews} tourId={tourId} />
        </div>
        <BookTour
          favoriteId={tourDetail?.favoriteTours}
          price={tourDetail?.price}
          tourId={tourId}
        />
      </div>
      <TourLike />
    </div>
  );
}

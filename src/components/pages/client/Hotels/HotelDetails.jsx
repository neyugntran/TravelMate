import React, { useState, useEffect } from "react";
import { Details } from "./Details";
import { useParams } from "react-router-dom";
import ReviewHotel from "./ReviewHotel";
import BookHotel from "./BookHotel";
import HotelLike from "./HotelLike";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function HotelDetails() {
  const [hotelData, setHotelData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { hotelId } = useParams();

  useEffect(() => {
    const apiUrl = `${
      import.meta.env.VITE_API_URL
    }/user/hotels-details/${hotelId}`;
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    const fetchHotelData = async () => {
      try {
        const response = await axiosInstance.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHotelData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/user/hotels/review/${hotelId}`,
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

    if (hotelId) {
      fetchReviews();
      fetchHotelData();
    }
  }, [hotelId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="pt-12 flex flex-col items-center w-full gap-16 bg-white">
      <div className="w-full max-w-[1280px] flex gap-24">
        <div className="w-[60%] flex flex-col gap-8">
          <Details hotelData={hotelData} />
          <ReviewHotel reviews={reviews} hotelId={hotelId} />
        </div>
        <BookHotel
          favoriteId={hotelData?.favoriteHotels}
          hotelId={hotelId}
          price={hotelData?.price}
        />
      </div>
      <HotelLike />
    </div>
  );
}

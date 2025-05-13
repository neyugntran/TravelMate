import { useEffect, useState } from "react";
import { Rate } from "antd";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function ReviewTours({ reviews, tourId }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [userReviews, setUserReviews] = useState([]);
  const [images, setImages] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false); // NEW

  useEffect(() => {
    setUserReviews(reviews || []);
  }, [reviews]);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const user = JSON.parse(localStorage.getItem("user"));

      const formData = new FormData();
      formData.append("tour_id", tourId);
      formData.append("user_id", user.userId);
      formData.append("rating", rating);
      formData.append("comment", comment);
      images.forEach((image) => {
        formData.append("images", image);
      });

      const res = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/user/tours/review`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUserReviews([res.data, ...userReviews]);
      setRating(5);
      setComment("");
      setImages([]);
    } catch (err) {
      console.error("Error submitting review:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 3) {
      alert("You can upload up to 3 images only!");
    } else {
      setImages([...images, ...files]);
    }
  };

  const displayedReviews = showAllReviews
    ? userReviews
    : userReviews.slice(0, 1);

  return (
    <div className="flex flex-col gap-6">
      {/* Write Review Section */}
      <div className="border border-slate-300 rounded-xl p-6 flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Write a Review</h2>
        <div className="flex items-center gap-2">
          <Rate
            allowHalf
            value={rating}
            onChange={(value) => setRating(value)}
            className="text-yellow-500"
          />
        </div>
        <textarea
          className="border border-slate-300 rounded-lg p-3 text-sm"
          rows="4"
          value={comment}
          placeholder="Share your experience..."
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="border border-slate-300 rounded-lg p-3 text-sm"
        />
        <div className="mt-2">
          {images.length > 0 && (
            <p>
              {images.length} {images.length > 1 ? "images" : "image"} selected
            </p>
          )}
        </div>

        <button
          className="text-center cursor-pointer p-4 bg-[#008080] text-white rounded-lg shadow-lg hover:bg-[#008080]/70 transition"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit Review"}
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Traveler Reviews</h1>
        {displayedReviews.map((review, index) => (
          <div
            key={index}
            className="w-full flex flex-col gap-4 border border-[#E5E7EB] rounded-xl p-6"
          >
            <div className="flex items-center gap-4">
              <img
                src="/images/destinations/avatar.png"
                alt="User Avatar"
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <p className="font-semibold">
                  {review.Users?.name || "Anonymous"}
                </p>
                <div className="flex items-center flex-row">
                  <Rate disabled value={review.rating} />
                </div>
              </div>
            </div>
            <p className="text-[#4B5563]">{review.comment}</p>
            <div className="flex flex-row items-center gap-4">
              {review.ReviewImages &&
                review.ReviewImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={`${import.meta.env.VITE_IMAGE_REVIEW}/${img.image_url}`}
                    alt="Review"
                    className="w-20 h-20 rounded-lg"
                  />
                ))}
            </div>
          </div>
        ))}

        {userReviews.length > 3 && (
          <button
            className="text-[#008080] cursor-pointer underline text-sm self-start mt-2"
            onClick={() => setShowAllReviews(!showAllReviews)}
          >
            {showAllReviews ? "Hide Reviews" : "Show More Reviews"}
          </button>
        )}
      </div>
    </div>
  );
}

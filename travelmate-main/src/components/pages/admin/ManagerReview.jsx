import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Input, Rate, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../../ultis/axiosInstance";

export default function ManagerReview() {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]); // New state for filtered reviews
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));

    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/admin/list-review`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setReviews(response.data);
        setFilteredReviews(response.data); // Set initial filtered reviews
      } catch (error) {
        console.error("Lỗi lấy review:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [shouldRefetch]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredReviews(
        reviews.filter((review) =>
          review.Tours.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredReviews(reviews);
    }
  }, [searchTerm, reviews]);

  const columns = [
    {
      title: "User",
      dataIndex: "Users",
      render: (user) => user?.name,
    },
    {
      title: "Tour",
      dataIndex: "Tours",
      render: (tour) => tour?.name,
    },
    {
      title: "Image",
      key: "image",
      render: (_, record) => {
        const image = record.ReviewImages?.[0]?.image_url;
        return image ? (
          <img
            src={`${import.meta.env.VITE_IMAGE_REVIEW}/${image}`}
            alt="review"
            className="w-20 h-20 rounded-lg object-cover"
          />
        ) : (
          <span>No image</span>
        );
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex flex-row items-center gap-2">
          <Button
            className="!text-white !bg-blue-500"
            onClick={() => handleEditReview(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this review?"
            onConfirm={() => handleDeleteReview(record.review_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleDeleteReview = async (reviewId) => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    try {
      await axiosInstance.delete(
        `${import.meta.env.VITE_API_URL}/admin/reviews/${reviewId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Review deleted successfully!");
      setLoading(false);
      setShouldRefetch(true);
    } catch (error) {
      console.error("Lỗi khi xóa review:", error);
      toast.error("Failed to delete review.");
    }
  };

  const handleEditReview = (review) => {
    setSelectedReview(review.review_id);
    setRating(review.rating);
    setComment(review.comment);
    setIsModalVisible(true);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 3) {
      alert("You can upload up to 3 images only!");
    } else {
      setImages([...images, ...files]);
    }
  };

  const handleUpdateReview = async () => {
    const formData = new FormData();
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    formData.append("review_id", selectedReview);
    formData.append("rating", rating);
    formData.append("comment", comment);
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/admin/update-review`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setIsModalVisible(false);
      setShouldRefetch(true);
      setImages([]);
      toast.success("Review updated successfully!");
    } catch (error) {
      console.error("Lỗi khi cập nhật review:", error);
      toast.error("Failed to update review.");
    }
  };

  return (
    <div className="flex-1 p-6">
      <div className="rounded-lg bg-white px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold">Manage Review</h1>
      </div>

      <div className="text-sm text-gray-500 my-4" aria-label="Breadcrumb">
        <ol className="list-reset flex space-x-2">
          <li>
            <Link to="/admin-dashboard" className="hover:underline">
              Admin
            </Link>
          </li>
          <li>/</li>
          <li>List Review</li>
        </ol>
      </div>

      <div className="rounded-lg bg-white p-6 shadow min-h-[280px]">
        <div className="my-4">
          <Input
            placeholder="Search by Tour"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Table
          columns={columns}
          dataSource={filteredReviews}
          rowKey="review_id"
          loading={loading}
          pagination={false}
        />
      </div>

      <Modal
        title="Edit Review"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleUpdateReview}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <span>Rating:</span>
            <Rate value={rating} onChange={(value) => setRating(value)} />
          </div>
          <div className="flex flex-col gap-2">
            <span>Comment:</span>
            <Input.TextArea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <span>Image:</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="border border-slate-300 rounded-lg p-3 text-sm"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

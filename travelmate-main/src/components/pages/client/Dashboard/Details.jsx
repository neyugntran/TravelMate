import { useEffect, useState } from "react";
import {
  IconCardPay,
  IconEarth,
  IconNotif,
  IconProfile,
} from "../../../../Svg";
import Profile from "./Profile";
import { toast } from "react-toastify";
import { Table, Tooltip } from "antd";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../ultis/axiosInstance";
import dayjs from "dayjs";

const settings = {
  infinite: true,
  speed: 500,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function Details() {
  const navigate = useNavigate();
  const [active, setActive] = useState("success");
  const [selectedTab, setSelectedTab] = useState("default");
  const [favorites, setFavorites] = useState([]);
  const [favoritesHotel, setFavoritesHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [selectedTabWishlít, setSelectedWishlist] = useState("tour");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchHistory = async () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    try {
      const response = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/user/payment/history`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
      setFilteredData(response.data);
    } catch (err) {
      toast.error("Failed to load payment history");
    } finally {
      setLoading(false);
    }
  };

  const filterData = (status) => {
    if (status === "pending") {
      setFilteredData(data.filter((item) => item.status === "pending"));
    } else if (status === "success") {
      setFilteredData(data.filter((item) => item.status === "success"));
    } else if (status === "canceled") {
      setFilteredData(data.filter((item) => item.status === "cancelled"));
    }
  };
  const columns = [
    {
      title: "Order Code",
      dataIndex: "order_code",
      key: "order_code",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => `${amount.toLocaleString()}₫`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const color =
          status === "success"
            ? "green"
            : status === "pending"
            ? "yellow"
            : "red";
        return (
          <div
            className="bg-gray-200 font-semibold p-1 uppercase text-center rounded-lg"
            style={{ color }}
          >
            {status}
          </div>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
      render: (value) => dayjs(value).format("YYYY-MM-DD HH:mm"),
    },
  ];

  useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    if (user && user.userId) {
      fetchFavoriteTours(user.userId);
      fetchFavoriteHotels(user.userId);
      setReload(false);
    }
  }, [reload]);
console.log(filteredData, "filteredData");

  const handleRemoveFromWishlist = async (tourId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const response = await axiosInstance.delete(
        `${import.meta.env.VITE_API_URL}/user/favorite/tour`,
        {
          data: { tourId, userId: user.userId },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.info("Removed from wishlist:", response.data);
    } catch (error) {
      console.error("Failed to remove from wishlist", error);
    } finally {
      setReload(true);
    }
  };
  const handleRemoveWishListHotel = async (hotelId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const response = await axiosInstance.delete(
        `${import.meta.env.VITE_API_URL}/user/favorite/hotel`,
        {
          data: { hotelId, userId: user.userId },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.info("Removed from wishlist:", response.data);
    } catch (error) {
      console.error("Failed to remove from wishlist", error);
    } finally {
      setReload(true);
    }
  };

  const fetchFavoriteTours = async (userId) => {
    try {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const response = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/user/favorite/tour/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFavorites(response.data);
    } catch (err) {
      setError(err);
      toast.error("Failed to fetch favorite tours.");
    } finally {
      setLoading(false);
    }
  };

  const fetchFavoriteHotels = async (userId) => {
    try {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const response = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/user/favorite/hotel/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFavoritesHotel(response.data);
    } catch (err) {
      setError(err);
      toast.error("Failed to fetch favorite hotels.");
    } finally {
      setLoading(false);
    }
  };

  function handleClick(nav) {
    setActive(nav);
    filterData(nav);
  }

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10">{error}</div>;

  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-12">
      <div className="flex flex-row gap-12">
        <div className="w-[20%] flex self-start flex-col p-4 bg-white gap-4 rounded-xl">
          <p className="text-xl font-medium">Account Settings</p>
          <div className="flex flex-col gap-2">
            <div
              className={`cursor-pointer flex items-center gap-2 ${
                selectedTab === "profile" ? "text-[#0D9488]" : ""
              }`}
              onClick={() => setSelectedTab("profile")}
            >
              <IconProfile />
              <p>Profile</p>
            </div>
            <div
              className={`cursor-pointer flex items-center gap-2 ${
                selectedTab === "notifications" ? "text-[#0D9488]" : ""
              }`}
              onClick={() => setSelectedTab("notifications")}
            >
              <IconNotif />
              <p>Notifications</p>
            </div>
            <div
              className={`cursor-pointer flex items-center gap-2 ${
                selectedTab === "payments" ? "text-[#0D9488]" : ""
              }`}
              onClick={() => setSelectedTab("payments")}
            >
              <IconCardPay />
              <p>Payment Methods</p>
            </div>
            <div
              className={`cursor-pointer flex items-center gap-2 ${
                selectedTab === "language" ? "text-[#0D9488]" : ""
              }`}
              onClick={() => setSelectedTab("language")}
            >
              <IconEarth />
              <p>Language & Currency</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[80%]">
          {selectedTab === "default" && (
            <>
              <div className="flex flex-col p-6 bg-white gap-4 rounded-xl">
                <p className="text-xl font-medium">Your Bookings</p>
                <div className="flex items-center gap-4">
                  <p
                    onClick={() => handleClick("pending")}
                    className={`p-2 rounded-lg cursor-pointer border border-gray-300 ${
                      active === "pending"
                        ? "bg-[#0D9488] text-white border-none"
                        : ""
                    }`}
                  >
                    Pending
                  </p>
                  <p
                    onClick={() => handleClick("success")}
                    className={`p-2 rounded-lg cursor-pointer border border-gray-300 ${
                      active === "success"
                        ? "bg-[#0D9488] text-white border-none"
                        : ""
                    }`}
                  >
                    Success
                  </p>
                  <p
                    onClick={() => handleClick("canceled")}
                    className={`p-2 rounded-lg cursor-pointer border border-gray-300 ${
                      active === "canceled"
                        ? "bg-[#0D9488] text-white border-none"
                        : ""
                    }`}
                  >
                    Cancelled
                  </p>
                </div>
                <Table
                  columns={columns}
                  dataSource={filteredData}
                  rowKey="id"
                  loading={loading}
                  pagination={{ pageSize: 5 }}
                />
              </div>
              <div className="flex flex-col p-6 bg-white gap-8 rounded-xl">
                <p className="text-xl font-medium">Your Wishlist</p>
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => setSelectedWishlist("tour")}
                    className={`cursor-pointer p-2 rounded-lg border ${
                      selectedTabWishlít === "tour"
                        ? "bg-[#0D9488] text-white"
                        : ""
                    }`}
                  >
                    Tours
                  </button>
                  <button
                    onClick={() => setSelectedWishlist("hotel")}
                    className={`cursor-pointer p-2 rounded-lg border ${
                      selectedTabWishlít === "hotel"
                        ? "bg-[#0D9488] text-white"
                        : ""
                    }`}
                  >
                    Hotels
                  </button>
                </div>
                {selectedTabWishlít === "tour" ? (
                  <>
                    {favorites.length > 3 ? (
                      <Slider className="slide-blog" {...settings}>
                        {favorites.map((favorite) => (
                          <div
                            onClick={() =>
                              navigate(`/tours/${favorite.tour.tour_id}`)
                            }
                            key={favorite.favorite_id}
                            className="relative flex w-[50%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-[8px_0_15px_-5px_rgba(0,0,0,0.1),-8px_0_15px_-5px_rgba(0,0,0,0.1),0_20px_15px_-5px_rgba(0,0,0,0.1)]"
                          >
                            <div className="relative mx-4  h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                              <img
                                className="w-full h-full"
                                src={favorite.tour.image_url}
                                alt={favorite.tour.name}
                              />
                            </div>
                            <div className="p-6 flex flex-col gap-4">
                              <Tooltip title={favorite.tour.name}>
                                <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                  {favorite.tour.name}
                                </p>
                              </Tooltip>
                              <Tooltip title={favorite.tour.location}>
                                <p className="text-[#8e9297] max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                  {favorite.tour.location}
                                </p>
                              </Tooltip>
                              <p className="max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                {favorite.tour.description}
                              </p>
                              <p className="text-2xl font-semibold text-[#30b8b8]">
                                From ${favorite.tour.price}
                              </p>
                              <button
                                onClick={(event) => {
                                  event.stopPropagation();
                                  handleRemoveFromWishlist(
                                    favorite.tour.tour_id
                                  );
                                }}
                                className="cursor-pointer w-full p-2 text-center border border-gray-300 rounded-lg"
                              >
                                Remove from Wishlist
                              </button>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <div className="flex gap-4">
                        {favorites.map((favorite) => (
                          <div
                            onClick={() =>
                              navigate(`/tours/${favorite.tour.tour_id}`)
                            }
                            key={favorite.favorite_id}
                            className="cursor-pointer relative flex w-[40%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-[8px_0_15px_-5px_rgba(0,0,0,0.1),-8px_0_15px_-5px_rgba(0,0,0,0.1),0_20px_15px_-5px_rgba(0,0,0,0.1)]"
                          >
                            <div className="relative mx-4 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                              <img
                                className="w-full h-full"
                                src={favorite.tour.image_url}
                                alt={favorite.tour.name}
                              />
                            </div>
                            <div className="p-6 flex flex-col gap-4">
                              <Tooltip title={favorite.tour.name}>
                                <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                  {favorite.tour.name}
                                </p>
                              </Tooltip>
                              <p className="text-[#8e9297] max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                {favorite.tour.location}
                              </p>
                              <p className="max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                {favorite.tour.description}
                              </p>
                              <p className="text-2xl font-semibold text-[#30b8b8]">
                                From ${favorite.tour.price}
                              </p>
                              <button
                                onClick={(event) => {
                                  event.stopPropagation();
                                  handleRemoveFromWishlist(
                                    favorite.tour.tour_id
                                  );
                                }}
                                className="cursor-pointer w-full p-2 text-center border border-gray-300 rounded-lg"
                              >
                                Remove from Wishlist
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {favoritesHotel.length > 3 ? (
                      <Slider className="slide-blog" {...settings}>
                        {favoritesHotel.map((favorite) => (
                          <div
                            onClick={() =>
                              navigate(`/hotels/${favorite.hotel.hotel_id}`)
                            }
                            key={favorite.favorite_id}
                            className="cursor-pointer relative flex w-[50%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-[8px_0_15px_-5px_rgba(0,0,0,0.1),-8px_0_15px_-5px_rgba(0,0,0,0.1),0_20px_15px_-5px_rgba(0,0,0,0.1)]"
                          >
                            <div className="relative mx-4  h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                              <img
                                className="w-full h-full"
                                src={favorite.hotel?.image_url}
                                alt={favorite.hotel?.name}
                              />
                            </div>
                            <div className="p-6 flex flex-col gap-4">
                              <Tooltip title={favorite.hotel?.name}>
                                <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                  {favorite.hotel?.name}
                                </p>
                              </Tooltip>
                              <Tooltip title={favorite.hotel?.location}>
                                <p className="text-[#8e9297] max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                  {favorite.hotel?.location}
                                </p>
                              </Tooltip>
                              <p className="max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                {favorite.hotel?.description}
                              </p>
                              <p className="text-2xl font-semibold text-[#30b8b8]">
                                From ${favorite.hotel?.price}
                              </p>
                              <button
                                onClick={(event) => {
                                  event.stopPropagation();
                                  handleRemoveWishListHotel(
                                    favorite.hotel?.hotel_id
                                  );
                                }}
                                className="cursor-pointer w-full p-2 text-center border border-gray-300 rounded-lg"
                              >
                                Remove from Wishlist
                              </button>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <div className="flex gap-4">
                        {favoritesHotel.map((favorite) => (
                          <div
                            onClick={() =>
                              navigate(`/hotels/${favorite.hotel.hotel_id}`)
                            }
                            key={favorite.favorite_id}
                            className="cursor-pointer relative flex w-[50%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-[8px_0_15px_-5px_rgba(0,0,0,0.1),-8px_0_15px_-5px_rgba(0,0,0,0.1),0_20px_15px_-5px_rgba(0,0,0,0.1)]"
                          >
                            <div className="relative mx-4 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                              <img
                                className="w-full h-full"
                                src={favorite.hotel?.image_url}
                                alt={favorite.hotel?.name}
                              />
                            </div>
                            <div className="p-6 flex flex-col gap-4">
                              <Tooltip title={favorite.hotel?.name}>
                                <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                  {favorite.hotel?.name}
                                </p>
                              </Tooltip>
                              <p className="text-[#8e9297] max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                {favorite.hotel?.location}
                              </p>
                              <p className="max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                {favorite.hotel?.description}
                              </p>
                              <p className="text-2xl font-semibold text-[#30b8b8]">
                                From ${favorite.hotel?.price}
                              </p>
                              <button
                                onClick={(event) => {
                                  event.stopPropagation();
                                  handleRemoveWishListHotel(
                                    favorite.hotel?.hotel_id
                                  );
                                }}
                                className="cursor-pointer w-full p-2 text-center border border-gray-300 rounded-lg"
                              >
                                Remove from Wishlist
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </>
          )}

          {selectedTab === "profile" && (
            <div className="p-6 bg-white rounded-xl flex flex-col gap-4">
              {selectedTab !== "default" && (
                <button
                  onClick={() => setSelectedTab("default")}
                  className="cursor-pointer self-start text-sm text-[#0D9488] hover:underline"
                >
                  ← Back
                </button>
              )}
              <Profile />
            </div>
          )}

          {selectedTab === "notifications" && (
            <div className="p-6 bg-white rounded-xl flex flex-col gap-4">
              {selectedTab !== "default" && (
                <button
                  onClick={() => setSelectedTab("default")}
                  className="cursor-pointer self-start text-sm text-[#0D9488] hover:underline"
                >
                  ← Back
                </button>
              )}
              <p className="text-xl font-medium mb-4">Notifications</p>
              <p>You have 3 new messages.</p>
            </div>
          )}

          {selectedTab === "payments" && (
            <div className="p-6 bg-white rounded-xl flex flex-col gap-4">
              {selectedTab !== "default" && (
                <button
                  onClick={() => setSelectedTab("default")}
                  className="cursor-pointer self-start text-sm text-[#0D9488] hover:underline"
                >
                  ← Back
                </button>
              )}
              <p className="text-xl font-medium mb-4">Payment Methods</p>
              <p>Visa **** 1234</p>
            </div>
          )}

          {selectedTab === "language" && (
            <div className="p-6 bg-white rounded-xl flex flex-col gap-4">
              {selectedTab !== "default" && (
                <button
                  onClick={() => setSelectedTab("default")}
                  className="cursor-pointer self-start text-sm text-[#0D9488] hover:underline"
                >
                  ← Back
                </button>
              )}
              <p className="text-xl font-medium mb-4">Language & Currency</p>
              <p>Language: English</p>
              <p>Currency: USD</p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full rounded-lg bg-[#0D9488] flex flex-col items-center gap-4 p-6">
        <p className="text-white text-xl font-medium">
          Share the Joy of Travel!
        </p>
        <p className="text-white">
          Invite your friends and earn rewards for every successful referral!
        </p>
        <button class="cursor-pointer mx-auto self-start p-4 bg-white text-[#008080] rounded-lg shadow-md hover:bg-white/70 transition">
          Invite Friends
        </button>
      </div>
    </div>
  );
}

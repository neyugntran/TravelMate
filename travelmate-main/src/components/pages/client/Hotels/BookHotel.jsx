import { useEffect, useState } from "react";
import { IconArrowDown, IconHeart, IconHeartAdd } from "../../../../Svg";
import { toast } from "react-toastify";
import ModalPayment from "../../../modal/ModalPayment";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function BookHotel({ price, favoriteId, hotelId }) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderCode, setOrderCode] = useState(null);
  const [paymentDataOS, setPaymentDataOS] = useState(null);

  const generateOrderCode = () => {
    const timestamp = Date.now(); // Get current timestamp in milliseconds
    return timestamp;
  };
  const showModal = async () => {
    try {
      const orderCode = generateOrderCode();
      setOrderCode(orderCode);
      setIsModalOpen(true);
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const res = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/user/payment/create`,
        {
          amount: 2000,
          description: "Thanh toán đơn hàng",
          orderCode: orderCode,
          returnUrl: "http://localhost:3001/payment-success",
          cancelUrl: "http://localhost:3001/payment-cancel",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPaymentDataOS(res.data);
    } catch (error) {
      console.error("Lỗi tạo thanh toán:", error);
    }
  };
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = async () => {
    setIsModalOpen(false);
    try {
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/user/payment/cancel`,
        {
          orderCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.warning("Cancel Successfully");
    } catch (error) {
      console.error("Error in cancelPaymentLink:", error);
      throw error;
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (
      favoriteId &&
      favoriteId.some((favorite) => favorite.user_id === user.userId)
    ) {
      setIsFavorite(true);
    }
  }, [favoriteId]);
  const handleAddToWishlist = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("tokenUser"));
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/user/favorite/hotel`,
        { hotelId, userId: user.userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsFavorite(true);
      toast.info("Added to wishlist:", response.data);
    } catch (error) {
      console.error("Failed to add to wishlist", error);
    }
  };

  const handleRemoveFromWishlist = async () => {
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
      setIsFavorite(false);
      toast.info("Removed from wishlist:", response.data);
    } catch (error) {
      console.error("Failed to remove from wishlist", error);
    }
  };

  const handleAdultsChange = (e) => {
    setAdults(Number(e.target.value));
  };

  const handleChildrenChange = (e) => {
    setChildren(Number(e.target.value));
  };

  const totalPrice = price * adults + (price / 2) * children;
  return (
    <div className="flex flex-col gap-4 self-start border border-gray-300 rounded-xl p-6">
      <h1 className="text-2xl font-semibold">Book This Hotel</h1>

      <div className="flex flex-col gap-1">
        <p className="font-semibold">Select Date</p>
        <input
          type="text"
          className="w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-semibold">Travelers</p>
        <div className="flex items-center gap-2">
          <div className="relative" id="input">
            <select
              value={adults}
              onChange={handleAdultsChange}
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:outline-primary pr-[48px]"
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
            <div className="absolute top-3 right-3">
              <IconArrowDown />
            </div>
          </div>

          <div className="relative" id="input">
            <select
              value={children}
              onChange={handleChildrenChange}
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:outline-primary pr-[48px]"
            >
              <option value="0">No Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3">3 Children</option>
            </select>
            <div className="absolute top-3 right-3">
              <IconArrowDown />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-[#E5E7EB] pt-4">
        <div className="flex items-center justify-between">
          <p>Price per children</p>
          <p className="text-xl font-semibold">${price / 2}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Price per person</p>
          <p className="text-xl font-semibold">${price}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Total price</p>
          <p className="text-xl font-semibold text-[#008080]">${totalPrice}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <button
          onClick={showModal}
          className="text-center cursor-pointer p-4 bg-[#008080] text-white rounded-lg shadow-lg hover:bg-[#008080]/70 transition"
        >
          Book Now
        </button>
        <button
          onClick={isFavorite ? handleRemoveFromWishlist : handleAddToWishlist}
          className="flex items-center justify-center gap-2 text-center cursor-pointer border border-gray-300 p-4 bg-white text-[#008080] rounded-lg shadow-lg hover:bg-white/70 transition"
        >
          {isFavorite ? <IconHeartAdd /> : <IconHeart />}
          <p>{isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}</p>
        </button>
      </div>
      <ModalPayment
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        paymentDataOS={paymentDataOS}
      />
    </div>
  );
}

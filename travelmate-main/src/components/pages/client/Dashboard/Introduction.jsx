import { useEffect, useState } from "react";
import { IconHeartDashboard, IconPastTrip, IconTrip } from "../../../../Svg";
import { Avatar } from "antd";
import { toast } from "react-toastify";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function Introduction() {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid user JSON in localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.userId) {
      fetchFavoriteTours(user.userId);
    }
  }, []);

  const fetchFavoriteTours = async (userId) => {
    try {
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
      toast.error("Failed to fetch favorite tours.", err);
    }
  };

  return (
    <div className="bg-white w-full h-[500px] flex flex-col items-center justify-end gap-6 pb-16">
      <div className="flex items-center flex-col gap-2 text-center">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <Avatar className="!bg-[#87d068] !w-[150px] !h-[150px] flex items-center justify-center !text-4xl font-semibold">
            {user?.name.charAt(0).toUpperCase() || "A"}
          </Avatar>
        )}
        <h1 className="text-2xl font-semibold">
          Hello {user?.name || "Guest"}!
        </h1>
        <p className="text-[#4B5563]">Welcome back to your travel dashboard</p>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-row gap-8 items-center border border-gray-300 rounded-lg py-4 px-6">
          <div className="flex flex-col gap-2">
            <p className="text-[#4B5563]">Upcoming Trips</p>
            <p className="text-xl font-medium">3</p>
          </div>
          <IconTrip />
        </div>
        <div className="flex flex-row gap-8 items-center border border-gray-300 rounded-lg py-4 px-6">
          <div className="flex flex-col gap-2">
            <p className="text-[#4B5563]">Past Trips</p>
            <p className="text-xl font-medium">12</p>
          </div>
          <IconPastTrip />
        </div>
        <div className="flex flex-row gap-8 items-center border border-gray-300 rounded-lg py-4 px-6">
          <div className="flex flex-col gap-2">
            <p className="text-[#4B5563]">Wishlist Items</p>
            <p className="text-xl font-medium">{favorites?.length}</p>
          </div>
          <IconHeartDashboard />
        </div>
      </div>
    </div>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../../../ultis/axiosInstance";
export default function LayoutAdmin({ children }) {
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "1",
      label: "Manage Users",
      path: "/admin-users",
    },
    {
      key: "2",
      label: "Manage Tours",
      path: "/admin-tours",
    },
    {
      key: "3",
      label: "Manage Hotels",
      path: "/admin-hotels",
    },
    {
      key: "5",
      label: "Manage Review Tour",
      path: "/admin-review",
    },
    {
      key: "4",
      label: "Manage Review Hotel",
      path: "/admin-review-hotel",
    },
  ];
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setAdmin(parsedUser);
      } catch (error) {
        console.error("Invalid user JSON in localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("tokenUser");
    if (token) {
      try {
        setToken(JSON.parse(token));
      } catch (error) {
        console.error("Invalid token JSON in localStorage:", error);
      }
    }
  }, [token]);

  const handleLogout = async () => {
    try {
      await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Logout successfully!");
      localStorage.removeItem("user");
      localStorage.removeItem("tokenUser");
      setAdmin(null);
      navigate("/started");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className="h-[100vh] bg-[#E5E7EB] scroll-smooth flex gap-4">
      <div className="flex flex-col gap-2 w-[250px] self-start bg-white shadow-lg rounded-lg m-4 p-4">
        <h1 className="text-2xl text-center font-semibold">{admin?.name}</h1>
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.key}>
              <Link
                to={item.path}
                className={`flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 transition ${
                  location.pathname === item.path
                    ? "bg-gray-200 font-medium"
                    : ""
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="bg-[#0D9488] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#008080] transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        stacked
        theme="light"
      />
    </div>
  );
}

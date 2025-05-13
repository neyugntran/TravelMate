import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import {
  IconStart1,
  IconStart2,
  IconStart3,
  IconStart4,
  IconStart5,
  IconStart6,
} from "../../Svg";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";
import { Avatar } from "antd";
import axiosInstance from "../../ultis/axiosInstance";
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(location.pathname);
  const { user, setUser } = useContext(UserContext);
  const [sticky, setSticky] = useState(false);
  const [token, setToken] = useState(false);
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
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
    setActiveNav(location.pathname);
  }, [location.pathname]);
  const handleNavigation = (path) => {
    setActiveNav(path);
    navigate(path);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
  }, []);

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
      setUser(null);
      navigate("/started");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <header
      className={`header 
        ${activeNav === "/dashboard" ? "border-b border-gray-300" : ""}
        inset-x-0 top-0 z-40 mx-auto flex w-full bg-white items-center ${
          sticky
            ? "fixed top-4 py-2 z-[9999] w-1/3 md:w-[80%] shadow-[#30b8b8] shadow-lg rounded-full bg-opacity-80 !transition-all !duration-500"
            : "absolute bg-transparent duration-500 justify-center py-4"
        }`}
    >
      <div className={`container ${sticky ? "py-2 px-2" : ""}`}>
        <div className="relative flex items-center justify-between">
          <div className="flex w-full justify-between items-center px-4 gap-6">
            <p
              onClick={() => navigate("/home")}
              className="cursor-pointer text-[#008080] text-2xl font-bold"
            >
              TravelMate
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => handleNavigation("/home")}
                className={`btn-nav cursor-pointer`}
              >
                <p
                  className={`${
                    activeNav === "/home" ? "!text-[#30b8b8]" : ""
                  } home`}
                >
                  Home
                </p>
              </button>
              <button
                onClick={() => handleNavigation("/destinations")}
                className="btn-nav cursor-pointer"
              >
                <p
                  className={`${
                    activeNav === "/destinations" ? "!text-[#30b8b8]" : ""
                  } destinations`}
                >
                  Destinations
                </p>
              </button>
              <button
                onClick={() => handleNavigation("/tours")}
                className="btn-nav cursor-pointer"
              >
                <p
                  className={`${
                    activeNav === "/tours" ? "!text-[#30b8b8]" : ""
                  } tours`}
                >
                  Tours
                </p>
              </button>
              <button
                onClick={() => handleNavigation("/hotels")}
                className="btn-nav cursor-pointer"
              >
                <p
                  className={`${
                    activeNav === "/hotels" ? "!text-[#30b8b8]" : ""
                  } hotels`}
                >
                  Hotels
                </p>
              </button>
              {/* <button
                onClick={() => handleNavigation("/community")}
                className="btn-nav cursor-pointer"
              >
                <p
                  className={`${
                    activeNav === "/community" ? "!text-[#30b8b8]" : ""
                  } community`}
                >
                  Community
                </p>
              </button> */}
              <button
                onClick={() => handleNavigation("/blog")}
                className="btn-nav cursor-pointer"
              >
                <p
                  className={`${
                    activeNav === "/blog" ? "!text-[#30b8b8]" : ""
                  } blog`}
                >
                  Blog
                </p>
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className="btn-contact relative text-white shadow-[0_0_0_#10ace68c] transition-all duration-[0.3s] ease-[ease-in-out] cursor-pointer px-[25px] py-2 rounded-lg border-[2px] border-solid border-[#30b8b8] bg-[#30b8b8]"
              >
                <p>Contact</p>
                <div className="star-1">
                  <IconStart1 />
                </div>
                <div className="star-2">
                  <IconStart2 />
                </div>
                <div className="star-3">
                  <IconStart3 />
                </div>
                <div className="star-4">
                  <IconStart4 />
                </div>
                <div className="star-5">
                  <IconStart5 />
                </div>
                <div className="star-6">
                  <IconStart6 />
                </div>
              </button>
            </div>
            <div className="flex items-center gap-6">
              {/* <div>
                <span>EN</span> / <span>VN</span>
              </div> */}
              <div className="flex items-center gap-2">
                {!user?.name ? (
                  <button
                    onClick={() => navigate("/started")}
                    className="bg-[#30b8b8] border border-[#008080] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md cursor-pointer hover:brightness-125 hover:border-t-4 hover:border-b active:opacity-80 outline-none duration-300 group"
                  >
                    <span className="bg-[#30b8b8] shadow-[#008080] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Sign In / Register
                  </button>
                ) : (
                  <div className="relative" ref={dropdownRef}>
                    {user?.avatar ? (
                      <img
                        onClick={() => setShowDropdown((prev) => !prev)}
                        src={user.avatar}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full cursor-pointer caret-transparent"
                      />
                    ) : (
                      <Avatar
                        onClick={() => setShowDropdown((prev) => !prev)}
                        className="!bg-[#87d068] !w-[50px] !h-[50px] flex items-center justify-center !text-xl font-semibold cursor-pointer caret-transparent"
                      >
                        {user?.name.charAt(0).toUpperCase() || "A"}
                      </Avatar>
                    )}
                    {showDropdown && (
                      <div
                        className="absolute right-[-100%] z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                      >
                        <div className="py-1" role="none">
                          <Link
                            className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                            to="/dashboard"
                          >
                            Profile Account
                          </Link>
                          <p
                            className="cursor-pointer hover:bg-gray-100 block w-full px-4 py-2 text-left text-sm text-gray-700"
                            to="/dashboard"
                            onClick={handleLogout}
                          >
                            Sign out
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

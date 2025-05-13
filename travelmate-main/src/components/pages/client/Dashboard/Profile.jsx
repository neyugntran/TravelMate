import { useContext, useEffect, useState } from "react";
import { IconLoading } from "../../../../Svg";
import { toast } from "react-toastify";
import { UserContext } from "../../../../context/UserContext";
import axiosInstance from "../../../../ultis/axiosInstance";

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    userId: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);

  const [tokenUser, setTokenUser] = useState("");
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));
    if (token) setTokenUser(token);
    if (user) setProfile(user);
  }, [user]);

  const handleChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleUpdate = async () => {
    setLoading(true);

    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/user/update`,
        profile,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenUser}`,
          },
        }
      );
      
      toast.success("Profile updated successfully!");
      localStorage.setItem("user", JSON.stringify(profile));
      setUser(profile);
    } catch (error) {
      toast.error("Update error:", error.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]">
      <label className="flex flex-col gap-1">
        <span className="text-sm text-gray-600">Name</span>
        <input
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm text-gray-600">Email</span>
        <input
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm text-gray-600">Phone</span>
        <input
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm text-gray-600">Password</span>
        <input
          type="password"
          name="password"
          value={profile.password}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2"
        />
      </label>

      <button
        onClick={handleUpdate}
        className=" bg-[#0D9488] flex items-center justify-center cursor-pointer text-white px-4 py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? <IconLoading /> : "Update Profile"}
      </button>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../../ultis/axiosInstance";

export default function ResetPassword({ token }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/user/reset-password`,
        {
          token,
          newPassword: password,
          confirmPassword,
        }
      );

      toast.success(response.message);
      navigate("/started");
    } catch (err) {
      const msg = err.error || "Network error. Please try again.";
      setError(msg);
    }
  };

  return (
    <div className="form-box">
      <form onSubmit={handleReset}>
        <h1>Reset Password</h1>
        <div className="input-box">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="btn">
          Reset Password
        </button>
      </form>
    </div>
  );
}

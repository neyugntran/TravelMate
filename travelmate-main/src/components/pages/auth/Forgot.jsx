import { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../../ultis/axiosInstance";

export default function ForgotPassword({ setIsForgotPassword }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/user/forgot-password`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      toast.success("Reset password email sent!");
      setIsForgotPassword(true);
      setEmail("");
    } catch (err) {
      setError(err.error);
    }
  };
  return (
    <div className="form-box forgot">
      <form onSubmit={handleForgotPassword}>
        <h1>Forgot Password</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="btn">
          Send Reset Link
        </button>
        <button
          type="button"
          className="btn mt-2"
          onClick={() => {
            setIsForgotPassword(false);
            setError("");
          }}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}

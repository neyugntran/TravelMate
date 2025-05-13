import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./ResetPass";
import ForgotPassword from "./Forgot";
import axiosInstance from "../../../ultis/axiosInstance";

export default function Started() {
  const { token } = useParams();
  const isReset = Boolean(token);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isReset) {
      setIsRegistering(false);
      setIsForgotPassword(false);
    }
  }, [isReset]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const url = isRegistering
      ? `${import.meta.env.VITE_API_URL}/user/register`
      : `${import.meta.env.VITE_API_URL}/user/login`;
    const payload = isRegistering
      ? { name, email, password, phone, role: "user" }
      : { email, password };

    try {
      const res = await axiosInstance.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (password.length < 8) {
        setError("Password must be at least 8 characters.");
        return;
      }

      const data = res.data;

      if (isRegistering) {
        setIsRegistering(false);
        setEmail("");
        setPassword("");
        setError("");
        toast.success("Registration successful!");
      } else {
        const accessToken = data.accessToken;
        const refreshToken = data.refreshToken;

        const decodedToken = jwtDecode(accessToken);

        if (decodedToken.isBlocked) {
          toast.error("Your account has been blocked.");
          return;
        }

        toast.success("Login successful!");
        localStorage.setItem("tokenUser", JSON.stringify(accessToken));
        localStorage.setItem("user", JSON.stringify(decodedToken));
        localStorage.setItem("refreshToken", refreshToken);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;

              try {
                const response = await fetch(
                  `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                );
                const data = await response.json();

                let rawCity =
                  data.address.city ||
                  data.address.town ||
                  data.address.village;

                if (rawCity && rawCity.includes("Thành phố")) {
                  rawCity = rawCity.replace("Thành phố", "").trim();
                }

                localStorage.setItem(
                  "userLocation",
                  JSON.stringify({ latitude, longitude, city: rawCity })
                );
              } catch (err) {
                console.error("Error fetching city:", err);
                toast.error("Unable to retrieve city name.");
              }
            },
            (error) => {
              console.error("Error getting location:", error);
              toast.error("Unable to retrieve location.");
            }
          );
        }

        if (decodedToken.role === "admin") {
          navigate("/admin-dashboard");
        }
        if (decodedToken.role === "user") {
          navigate("/home");
        }
      }
    } catch (err) {
      setError(err.error || "Something went wrong");
    }
  };

  return (
    <div className={`container-form ${isRegistering ? "active" : ""}`}>
      {!isRegistering && !isForgotPassword && !isReset && (
        <div className="form-box login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <div className="forgot-link">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setError("");
                  setIsForgotPassword(true);
                }}
              >
                Forgot Password?
              </a>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      )}

      {isRegistering && !isForgotPassword && !isReset && (
        <div className="form-box register">
          <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="btn">
              Register
            </button>
          </form>
        </div>
      )}

      {isForgotPassword && !isReset && (
        <ForgotPassword setIsForgotPassword={setIsForgotPassword} />
      )}

      {isReset && <ResetPassword token={token} />}

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button
            className="btn"
            onClick={() => {
              setIsRegistering(true);
              setIsForgotPassword(false);
              navigate("/started");
            }}
          >
            Register
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button
            className="btn"
            onClick={() => {
              setIsRegistering(false);
              navigate("/started");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

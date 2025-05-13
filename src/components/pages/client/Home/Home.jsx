import { useEffect, useState } from "react";
import Community from "./Community";
import Destinations from "./Destinations";
import Featured from "./featured";
import "./home.css";
import HotelDeals from "./HotelDeals";
import Subscribe from "./Subscribe";
import WhyChose from "./WhyChose";
export default function Home() {
  const [city, setCity] = useState(null); // State for city

  useEffect(() => {
    const storedCity = JSON.parse(localStorage.getItem("userLocation")); // Get city from localStorage
    if (storedCity) {
      setCity(storedCity); // Set the city to state if it's available
    }
  }, []);
  return (
    <div className="flex flex-col items-center w-full gap-16 bg-[#E5E7EB]">
      <Featured city={city} />
      <Destinations />
      <Community />
      <HotelDeals city={city} />
      <WhyChose />
      <Subscribe />
    </div>
  );
}

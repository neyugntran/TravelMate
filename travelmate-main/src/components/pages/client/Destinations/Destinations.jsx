import Attractions from "./Attractions";
import BestHotel from "./BestHotel";
import Find from "./Find";
import SayAbout from "./SayAbout";
import TipandWeather from "./TipandWeather";

export default function Destinations() {
  return (
    <div className="flex flex-col items-center w-full gap-16 bg-[#E5E7EB]">
      <Attractions />
      <BestHotel />
      <TipandWeather />
      <div className="w-full flex flex-col">
        <SayAbout />
        <Find />
      </div>
    </div>
  );
}

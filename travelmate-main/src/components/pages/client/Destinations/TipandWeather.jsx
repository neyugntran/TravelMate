import { IconCar, IconPhoto, IconSun, IconSunMini } from "../../../../Svg";

export default function TipandWeather() {
  return (
    <div className="flex items-center gap-16 flex-col w-full py-14">
      <div className="flex card-featured w-full max-w-[1440px] justify-center gap-8">
        <div className="p-6 flex flex-col gap-4 rounded-xl w-1/2 bg-white">
          <p className="text-2xl font-semibold">Current Weather</p>
          <div className="flex justify-between w-full">
            <div className="flex gap-4 items-center">
              <IconSun />
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-semibold">28°C</p>
                <p className="text-[#4B5563]">Sunny</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#4B5563]">Best Season</p>
              <p className="font-semibold">October - March</p>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col gap-4 rounded-xl w-1/2 bg-white">
          <p className="text-2xl font-semibold">Travel Tips</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-4">
              <IconCar />
              <p>Book cruises early during peak season (Oct-Mar)</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <IconSunMini />
              <p>Bring sunscreen and light clothing</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <IconPhoto />
              <p>Best photos during sunrise and sunset</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

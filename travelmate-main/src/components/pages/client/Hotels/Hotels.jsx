import { IconCardPay, IconLock, IconLockTime } from "../../../../Svg";
import AvailableHotel from "./AvailableHotel";
import Filter from "./Filter";
import SayAbout from "./SayAbout";
import TopRate from "./TopRate";

export default function Hotels() {
  return (
    <div className="flex flex-col items-center w-full gap-16 bg-white">
      <div className="py-12 w-full max-w-[1440px] flex flex-col gap-12">
        <div className="w-full max-w-[1440px] flex flex-row gap-12 items-start">
          <Filter />
          <AvailableHotel />
        </div>
        {/* <SayAbout /> */}
      </div>
      <div className="bg-[#0D9488] w-full">
        <div className="py-12 w-full flex justify-center flex-row gap-12">
          <div className="text-white font-medium flex items-center gap-2">
            <IconLock />
            <p>Secure Payment</p>
          </div>
          <div className="text-white font-medium flex items-center gap-2">
            <IconCardPay />
            <p>Multiple Payment Methods</p>
          </div>
          <div className="text-white font-medium flex items-center gap-2">
            <IconLockTime />
            <p>Free Cancellation Before 3 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

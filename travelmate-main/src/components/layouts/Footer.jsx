import { IconFb, IconIns, IconTiktok, IconYtb } from "../../Svg";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white p-4 flex items-center gap-8 flex-col justify-center pt-14">
      <div className="flex flex-row w-full max-w-[1280px] justify-center gap-8">
        <div className="w-[288px] flex flex-col gap-4">
          <p className="text-2xl font-semibold">About TravelMate</p>
          <p className="text-[#9CA3AF]">
            Your trusted partner for discovering the beauty and culture of
            Vietnam through personalized travel experiences.
          </p>
        </div>
        <div className="w-[288px] flex flex-col gap-4">
          <p className="text-2xl font-semibold">Support</p>
          <div className="flex flex-col gap-2">
            <p className="cursor-pointer text-[#9CA3AF]">FAQs</p>
            <p className="cursor-pointer text-[#9CA3AF]">Booking Terms</p>
            <p className="cursor-pointer text-[#9CA3AF]">Privacy Policy</p>
            <p className="cursor-pointer text-[#9CA3AF]">Contact Support</p>
          </div>
        </div>
        <div className="w-[288px] flex flex-col gap-4">
          <p className="text-2xl font-semibold">Partners</p>
          <div className="flex flex-col gap-2">
            <p className="cursor-pointer text-[#9CA3AF]">
              Local Travel Agencies
            </p>
            <p className="cursor-pointer text-[#9CA3AF]">Hotel Networks</p>
            <p className="cursor-pointer text-[#9CA3AF]">Transportation</p>
            <p className="cursor-pointer text-[#9CA3AF]">Become a Partner</p>
          </div>
        </div>
        <div className="w-[288px] flex flex-col gap-4">
          <p className="text-2xl font-semibold">Follow Us</p>
          <div className="flex flex-row items-center gap-2">
            <IconFb />
            <IconIns />
            <IconYtb />
            <IconTiktok />
          </div>
        </div>
      </div>
      <div className="text-[#9CA3AF] text-center border-t border-[#9CA3AF] border-solid w-full max-w-[1280px] mt-8">
        <p className="pt-2">© 2025 TravelMate. All rights reserved.</p>
      </div>
    </footer>
  );
}

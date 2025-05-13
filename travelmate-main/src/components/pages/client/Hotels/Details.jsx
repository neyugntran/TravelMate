import {
  IconArrowDown,
  IconBed,
  IconBus,
  IconGuide,
  IconKinfe,
  IconPerson,
  IconShield,
  IconWallet,
} from "../../../../Svg";

export function Details({ hotelData }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="font-semibold flex items-center justify-between">
            <p>{hotelData?.name}</p>
            <IconArrowDown />
          </div>
          <p className="text-[#4B5563]">{hotelData?.description}</p>
          <div className="w-full flex items-center gap-4">
            <img className="rounded-xl" src={hotelData?.image_url} alt="hotel" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">What's Included & Excluded</h1>
        <div className="flex w-full flex-row items-start gap-4">
          <div className="p-6 rounded-xl bg-[#E5E7EB] h-full flex w-1/2 flex-col gap-4">
            <p className="font-semibold">✅ Included</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <IconBed />
                <p>Luxury Accommodation</p>
              </div>
              <div className="flex items-center gap-2">
                <IconKinfe />
                <p>All Meals</p>
              </div>
              <div className="flex items-center gap-2">
                <IconBus />
                <p>Transportation</p>
              </div>
              <div className="flex items-center gap-2">
                <IconGuide />
                <p>Professional Guide</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-[#E5E7EB] h-full flex w-1/2 flex-col gap-4">
            <p className="font-semibold">❌ Excluded</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <IconWallet />
                <p>Personal Expenses</p>
              </div>
              <div className="flex items-center gap-2">
                <IconShield />
                <p>Travel Insurance</p>
              </div>
              <div className="flex items-center gap-2">
                <IconPerson />
                <p>Optional Activities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

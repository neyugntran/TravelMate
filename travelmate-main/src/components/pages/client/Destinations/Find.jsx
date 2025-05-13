export default function Find() {
  return (
    <div className="find bg-[#008080] w-full flex items-center gap-10 flex-col w-full pb-14">
      <div className="flex flex-col text-center pt-18 gap-4 w-full max-w-[1280px]">
        <p className="text-2xl !text-white font-semibold">
          Ready to Explore Ha Long Bay?
        </p>
        <p className="text-white">
          Book your dream vacation today and create unforgettable memories
        </p>
        <button className="cursor-pointer mx-auto self-start p-4 bg-white text-[#008080] rounded-lg shadow-md hover:bg-white/70 transition">
            Find Tours & Hotels
        </button>
      </div>
    </div>
  );
}

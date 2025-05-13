export default function Subscribe() {
  return (
    <div className="sybscribe border-t border-solid border-gray-300 flex items-center gap-10 flex-col w-full pb-14">
      <div className="flex flex-col text-center pt-18 gap-4 w-full max-w-[1280px]">
        <h1 className="text-2xl font-semibold">
          Get the Best Travel Deals & Personalized Offers!
        </h1>
        <p>
          Subscribe to our newsletter and never miss out on exclusive deals and
          travel tips.
        </p>
      </div>
      <div className="flex flex-row w-full items-center gap-4 justify-center">
        <div className="relative rounded-lg w-1/3 bg-white overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-[#008080] before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-[#008080] after:right-12 after:top-3 after:rounded-full after:blur-lg">
          <input
            placeholder="Enter your mail"
            className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 text-sm rounded-lg focus:ring-[#008080] placeholder-opacity-60 focus:border-[#008080] block w-full p-2.5"
            type="text"
          />
        </div>
        <button className=" bg-[#008080] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#008080]/70 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
}

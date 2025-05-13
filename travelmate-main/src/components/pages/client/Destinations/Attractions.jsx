export default function Attractions() {
  return (
    <div className="attractions pt-12 flex items-center gap-16 flex-col w-full max-w-[1440px]">
      <h1 className="text-2xl font-semibold">Top Attractions in Ha Long Bay</h1>
      <div className="flex card-community justify-center gap-8 w-full">
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              className="w-full"
              src="/images/destinations/card.png"
              alt=""
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Titop Island
            </p>
            <p>
              A must-visit spot offering panoramic views of the bay from its
              summit.
            </p>
          </div>
        </div>
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              className="w-full"
              src="/images/destinations/card2.png"
              alt=""
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Sung Sot Cave
            </p>
            <p>
              Explore the magnificent limestone formations in this stunning cave
              system.
            </p>
          </div>
        </div>
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              className="w-full"
              src="/images/destinations/card3.png"
              alt=""
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Floating Villages
            </p>
            <p>
              Experience local life in the traditional floating fishing
              villages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

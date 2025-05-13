import { IconArrowRight } from "../../../../Svg";

export default function Community() {
  return (
    <div className="community flex items-center gap-16 flex-col w-full max-w-[1440px]">
      <h1 className="text-2xl font-semibold">Join Our Travel Community</h1>
      <div className="flex card-community justify-center gap-8 w-full">
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              className="w-full"
              src="/images/home/communitypng.png"
              alt=""
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              5 Hidden Gems in Vietnam You Must Visit
            </p>
            <p>
              Discover the untouched beauty of Vietnam's secret locations...
            </p>
            <di className="cursor-pointer flex items-center gap-2 text-[#30b8b8] group-hover:text-white text-xl duration-500">
              <p>Read more</p>
              <IconArrowRight />
            </di>
          </div>
        </div>
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              className="w-full"
              src="/images/home/communitypng.png"
              alt=""
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              5 Hidden Gems in Vietnam You Must Visit
            </p>
            <p>
              Discover the untouched beauty of Vietnam's secret locations...
            </p>
            <di className="cursor-pointer flex items-center gap-2 text-[#30b8b8] group-hover:text-white text-xl duration-500">
              <p>Read more</p>
              <IconArrowRight />
            </di>
          </div>
        </div>
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              className="w-full"
              src="/images/home/communitypng.png"
              alt=""
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <p className="text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              5 Hidden Gems in Vietnam You Must Visit
            </p>
            <p>
              Discover the untouched beauty of Vietnam's secret locations...
            </p>
            <di className="cursor-pointer flex items-center gap-2 text-[#30b8b8] group-hover:text-white text-xl duration-500">
              <p>Read more</p>
              <IconArrowRight />
            </di>
          </div>
        </div>
      </div>
    </div>
  );
}

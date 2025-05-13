export default function Slider() {
  return (
    <div className="w-full h-[700px] relative">
      <img
        className="w-full h-full"
        src="/images/slide/slide1.png"
        alt="Image description"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(25,25,25,0)] via-transparent to-[#191919]"></div>
    </div>
  );
}

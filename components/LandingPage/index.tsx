import Image from "next/image";
import BackGroundImage from "../../assets/backgroung-image.png";

const LandingPage = () => {
  return (
    <div className="h-[100vh] bg-white relative">
      <div className="h-full w-full">
        <Image alt="backgroung-image" src={BackGroundImage} className="w-full h-full" />
      </div>
      <div className="absolute top-[22vh] px-6 py-4 md:px-12 lg:px-16 xl:px-[80px] 2xl:px-[100px]">
        <span className="border-yellow-300 border">
          <h2 className="font-bold text-[32px] leading-[40px]  md:text-[47px] md:leading-[55px] xl:text-[58px] 2xl:leading-[78.4px] 2xl:text-[64px] text-[#101828] font-plus">Your Journey to Qur'an </h2>
          <h2 className="font-bold text-[32px] leading-[40px]  md:text-[47px] md:leading-[55px] xl:text-[58px] 2xl:leading-[78.4px] 2xl:text-[64px] text-[#101828] font-plus">Memorization Made Simple</h2>
        </span>
        <span>
          <p className="text-[#475467] text-sm md:text-base font-plus">Learn at your own pace with flexible scheduling, easy progress </p>
          <p className="text-[#475467] text-sm md:text-base font-plus">tracking, and teacher support every step of the way.</p>
        </span>
        <button className="bg-[#0DAC5C] text-white p-3 rounded-[8px] text-sm md:text-base hover:bg-green-700 font-semibold mt-11 w-[100px] md:w-[124px]">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

"use client"
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter()
  return (
    <div className="h-[100vh] bg-white relative">
      <div className="h-full w-full ">
        <video autoPlay muted loop playsInline className="w-[100vw] h-full object-cover" controls={false}>
          <source src="./back-video.mp4" type="video/mp4" />
        </video>
        {/* <Image
          alt="backgroung-image"
          src={BackGroundImage}
          className="w-full h-full"
        /> */}
      </div>
      <div className="absolute top-[22vh] px-6 py-4 md:px-12 lg:px-16 xl:px-[80px] 2xl:px-[100px]">
        <span className="">
          <h2 className="font-bold text-[32px] leading-[40px]  md:text-[47px] md:leading-[55px] xl:text-[58px] 2xl:leading-[78.4px] 2xl:text-[64px] text-[#101828] font-plus">
            Your Journey to Qur'an
          </h2>
          <h2 className="font-bold text-[32px] leading-[40px]  md:text-[47px] md:leading-[55px] xl:text-[58px] 2xl:leading-[78.4px] 2xl:text-[64px] text-[#101828] font-plus">
            Memorization Made Simple
          </h2>
        </span>
        <span>
          <p className="text-[#475467] text-sm md:text-base font-plus">
            Learn at your own pace with flexible scheduling, easy progress
          </p>
          <p className="text-[#475467] text-sm md:text-base font-plus">
            tracking, and teacher support every step of the way.
          </p>
        </span>
        <button className="bg-[#0DAC5C] text-white p-3 rounded-[8px] text-sm md:text-base hover:bg-green-700 font-semibold mt-11 w-[100px] md:w-[124px]"
        onClick={() => router.push("/signup")}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

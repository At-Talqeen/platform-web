"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Journey = () => {
  const router = useRouter();

  return (
    <div className="px-6 py-16 md:px-12 xl:px-[80px] 2xl:px-[100px] flex flex-col items-center">
      <div className="rounded-[24px] bg-[#0DAC5C] w-full relative flex h-[403px]">
        <div className=" h-full bg-gradient-to-b from-[#F9FAFB00] to-[#F9FAFB] opacity-[0.3] w-full"></div>
        <div className="absolute h-full bg-transparent w-full flex-col flex items-center justify-center">
          <span className=" w-[80%] xl:w-[50%] lg:w-[65%] md:w-[70%]">
            <p className="text-[32px] text-center leading-[40px] font-bold text-[#FFFFFF] md:text-[47px] md:leading-[55px] xl:text-[58px] 2xl:leading-[78.4px] 2xl:text-[64px] font-plus">
              Begin your learning journey today.
            </p>
          </span>

          <button
            className="bg-[#FFFFFF] text-[#0DAC5C] p-3 rounded-[8px] text-sm lg:text-base font-semibold mt-11 xl:w-[164px] md:w-[144px] w-[124px]"
            onClick={() => router.push("/signup")}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Journey;

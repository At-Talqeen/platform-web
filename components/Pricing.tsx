"use client";
import React from "react";
import CheckMark from "../assets/checkmark.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Pricing = () => {
  const router = useRouter();
  const [plan, setPlan] = React.useState("Monthly");
  const Monthly = [
    "Unlimited access to live classes",
    "Personalized progress tracker",
    "Full access to class recordings",
    "Flexible scheduling to fit your routine",
    "Dedicated teacher support",
    "Secure, hassle-free payments",
  ];
  return (
    <div className="flex flex-col items-center px-6 py-16 md:px-12 xl:px-[80px] 2xl:px-[100px]">
      <div className="2xl:w-[50%] xl:w-[60%] md:w-[75%] lg:w-[65%] w-[90%]">
        <p className="text-center text-[#0DAC5C] font-medium font-inter">
          Pricing
        </p>
        <h3 className="font-plus text-[#101828] text-[24px] leading-[40.48px] md:text-[32px] md:leading-[45.48px] lg:text-[38px] lg:leading-[50.48px] xl:text-[42px] xl:leading-[55.48px] 2xl:text-[48px] 2xl:leading-[60.48px] mt-4 text-center font-bold">
          Enjoy all the features you need with one simple monthly price
        </h3>
      </div>
      <div className="flex gap-3 border border-[#F2F4F7] lg:p-3 p-2 rounded-[8px] mt-4">
        {["Monthly", "Quarterly"].map((item, index) => (
          <button
            className={` ${
              plan === item
                ? "bg-[#0DAC5C] text-white rounded-[8px] hover:bg-green-700"
                : " bg-transparent text-[#101828]"
            } p-3  md:text-base text-sm  font-semibold w-[85px] md:w-[110px] xl:w-[124px]`}
            key={index}
            onClick={() => {
              setPlan(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex flex-col md:flex-row border border-[#EAECF0] rounded-[12px] justify-between w-[95%]  lg:w-[82%] xl:w-[75%] 2xl:w-[70%] p-[18px] md:p-[24px] lg:p-[32px] xl:p-[35px] 2xl:p-[40px] gap-y-7">
          <div className="flex flex-col w-full md:w-[47%] gap-5 ">
            <h5 className="font-plus font-bold xl:text-2xl lg:text-xl text-lg text-[#101828]">
              Join Today
            </h5>
            <p className="font-inter text-[#475467] lg:text-base text-sm">
              One price for everything you need—unlimited classes, progress
              tracking, class recordings, and more. No hidden fees or surprise
              charges.
            </p>
            {plan === "Monthly" ? (
              <span className="flex items-baseline">
                <h3 className="font-bold font-plus xl:text-6xl lg:text-4xl text-3xl text-[#101828]">
                  $40
                </h3>
                <p className="font-plus lg:text-xl md:text-lg text-base text-[#475467]">
                  /monthly
                </p>
              </span>
            ) : (
              <span className="flex items-baseline">
                <h3 className="font-bold font-plus xl:text-6xl lg:text-4xl text-3xl text-[#101828]">
                  $35
                </h3>
                <p className="font-plus lg:text-xl md:text-lg text-base text-[#475467]">
                  /quarterly
                </p>
              </span>
            )}

            <button
              className="bg-[#0DAC5C] text-white p-3 rounded-[8px] hover:bg-green-700  font-semibold w-full"
              onClick={() => router.push("/signup")}
            >
              Get Started
            </button>
          </div>
          <div className=" w-full md:w-[47%] flex flex-col justify-between">
            {Monthly?.map((item, index) => (
              <div className="flex gap-3 mt-3 md:mt-0 items-start" key={index}>
                <div className="lg:w-6 lg:h-6 h-4 w-4">
                  <Image alt="check-mark.png" src={CheckMark} />
                </div>
                <p className="font-inter text-[#475467] lg:text-base text-sm ">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

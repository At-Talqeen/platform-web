import React from "react";
import FeatSchedule from "../assets/feat-schedule.png";
import FeatProgress from "../assets/features-progress.png";
import FeatRecords from "../assets/feat-records.png";
import FeatTeacher1 from "../assets/feat-teacher1.png";
import FeatTeacher2 from "../assets/feat-teacher2.png";
import Image from "next/image";

const Features = () => {
  return (
    <div className="flex flex-col items-center px-6 py-16 md:px-12 xl:px-[80px] 2xl:px-[100px]">
      <div className=" w-[84%] xl:w-[50%] 2xl:w-[42%] lg:w-[50%]">
        <p className="text-center text-[#0DAC5C] font-medium font-inter">
          Features
        </p>
        <h3 className="font-plus text-[#101828] text-[24px] leading-[40.48px] md:text-[32px] md:leading-[45.48px] lg:text-[38px] lg:leading-[50.48px] xl:text-[42px] xl:leading-[55.48px] 2xl:text-[48px] 2xl:leading-[60.48px] mt-4 text-center font-bold">
          Everything you need to stay on track
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5 my-12">
        <div className="  bg-[#F9FAFB] rounded-[24px] border border-[#EAECF0] xl:h-[580px] lg:h-[500px] md:h-[450px] h-[420px] flex flex-col justify-between items-center gap-5 xl:py-10 lg:py-7 py-5 xl:px-8 md:px-6 px-5">
          <div className=" overflow-hidden h-[240px] md:h-[310px] lg:h-[230px] xl:h-[320px]">
            <Image alt="feat-schedule" src={FeatSchedule} className="w-[250px] lg:w-[260px] md:w-[330px] xl:w-[338px]"/>
          </div>
          <div className="">
            <h4 className="text-[#101828] font-plus font-semibold xl:text-[30px] xl:leading-[38px] lg:text-[24px] lg:leading-[33px] md:text-lg text-base">Flexible Class Scheduling</h4>
            <p className="text-[#475467] font-inter font-normal mt-3 xl:text-base lg:text-sm text-xs">
            Stay motivated with a progress tracker that helps you see exactly how far you've come. Watch your progress grow, step by step, at your own pace.
            </p>
          </div>
        </div>
        <div className="  bg-[#F9FAFB] rounded-[24px] border border-[#EAECF0] xl:h-[580px] lg:h-[500px] md:h-[450px] h-[420px] flex flex-col justify-between  gap-5 xl:py-10 lg:py-7 py-5 ">
          <div className=" flex justify-end mt-7 h-[230px] md:h-[250px] lg:h-[230px] xl:h-[320px] ">
            <Image alt="feat-schedule" src={FeatProgress} className="w-[85%] xl:w-[80%]" width={700}/>
          </div>
          <div className="xl:px-8 md:px-6 px-5">
            <h4 className="text-[#101828] font-plus font-semibold xl:text-[30px] xl:leading-[38px] lg:text-[24px] lg:leading-[33px] md:text-lg text-base">Personalized Progress Tracking</h4>
            <p className="text-[#475467] font-inter font-normal mt-3 xl:text-base lg:text-sm text-xs">
              Life’s busy, we get it. That’s why you can schedule your classes
              at times that work best for you. Just choose an available slot,
              and you’re set
            </p>
          </div>
        </div>

        <div className="  bg-[#F9FAFB] rounded-[24px] border border-[#EAECF0] xl:h-[580px] lg:h-[500px] md:h-[450px] h-[420px] flex flex-col justify-between items-center gap-5 xl:py-10 lg:py-7 py-5 xl:px-8 md:px-6 px-5">
          <div className=" overflow-hidden h-[210px] md:h-[260px] lg:h-[240px] xl:h-[289px] mt-4">
            <Image alt="feat-schedule" src={FeatRecords} className="w-[300px] lg:w-[340px] md:w-[380px] xl:w-[434px]"/>
            {/* <FeatRecords/> */}
          </div>
          <div className="">
            <h4 className="text-[#101828] font-plus font-semibold xl:text-[30px] xl:leading-[38px] lg:text-[24px] lg:leading-[33px] md:text-lg text-base">Access to Class Recordings</h4>
            <p className="text-[#475467] font-inter font-normal mt-3 xl:text-base lg:text-sm text-xs">
            Missed a session or need a refresher? No problem! All classes are recorded, so you can rewatch any time you like and never miss a thing.
            </p>
          </div>
        </div>

        <div className="  bg-[#F9FAFB] rounded-[24px] border border-[#EAECF0] xl:h-[580px] lg:h-[520px] md:h-[470px] h-[420px] flex flex-col justify-between items-center gap-5 xl:py-10 lg:py-7 py-5 xl:px-8 md:px-6 px-5">
          <div className="flex  items-end justify-center flex-row gap-5 w-[250px] lg:w-[370px] md:w-[360px] xl:w-[434px] h-[210px] md:h-[230px] lg:h-[210px] xl:h-[260px] mt-6 ">
            <Image alt="feat-schedule" src={FeatTeacher2} className="w-[50%] "/>
            <Image alt="feat-schedule" src={FeatTeacher1} className="w-[50%] "/>

          </div>
          <div className="">
            <h4 className="text-[#101828] font-plus font-semibold xl:text-[30px] xl:leading-[38px] lg:text-[24px] lg:leading-[33px] md:text-lg text-base">Dedicated Teacher Support</h4>
            <p className="text-[#475467] font-inter font-normal mt-3 xl:text-base lg:text-sm text-xs">
            Our teachers are here to help, whether it’s during a class or whenever you have questions. They’re dedicated to making sure you succeed.
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Features;

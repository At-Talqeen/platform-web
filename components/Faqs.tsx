"use client";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Faqs = () => {
  const [selected, setselected] = React.useState<number | null>(0);

  const arr = [
    {
      no: "01",
      title: "How do I get started?",
      text: " It’s easy! Just sign up, and you’ll be able to schedule a trial class to assess your level. From there, you can dive right in and start your learning journey.",
    },
    {
      no: "01",
      title: "Can I access class recordings?",
      text: "Yes! All your classes are recorded, so you can go back and review any lesson whenever you need. This way, you won’t miss a thing and can reinforce your learning.",
    },
    {
      no: "01",
      title: "How does the progress tracker work?",
      text: "Our progress tracker is like a roadmap just for you. It tracks the pages of the Qur'an you’re working on and gives you a clear view of your progress, so you can see how much you’ve accomplished and what’s next.",
    },
    {
      no: "01",
      title: "Can I choose my own class times?",
      text: "Absolutely! We know schedules vary, so you can book classes at times that fit your life. Just check your teacher’s availability and pick a slot that works for you.",
    },
    {
      no: "01",
      title: "How does payment work?",
      text: "We use secure direct debit for subscriptions and fees. Once you’re signed up, everything is handled automatically, so you can focus on learning without any worries.",
    },
    {
      no: "01",
      title: "Is the platform mobile-friendly?",
      text: "Yes! You can use the platform on your phone, tablet, or computer, so you can learn anywhere that works best for you",
    },
    {
      no: "01",
      title: "Can I connect with my teacher outside of class?",
      text: "Of course! Your teacher is here to support you, and we’ve made it easy for you to stay connected. You can reach out to them for extra help or guidance when you need it.",
    },
  ];

  return (
    <div className=" px-6 py-16 md:px-12 xl:px-[80px] 2xl:px-[100px] flex flex-col md:flex-row justify-center my-24 gap-x-16">
      <div className=" w-full md:w-[44%] lg:w-[40%] xl:w-[35%] 2xl:w-[40%] flex flex-col">
        <p className="text-[#0DAC5C] font-inter font-medium text-sm lg:text-base">
          Got Questions?
        </p>
        <h2 className="text-[32px] leading-[40px] font-semibold text-[#101828] font-plus md:text-[47px] md:leading-[55px] xl:text-[58px] 2xl:leading-[78.4px] 2xl:text-[64px]">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 font-inter font-normal text-[#344054] text-sm lg:text-base">
          Have a question and don't see the answer below? Feel free to email us
          at <span className="text-[#0DAC5C]">support@attalqeen.com</span>
        </p>
      </div>
      <div className="flex flex-col w-full md:w-[50%]">
        <div className="w-full mx-auto">
          {arr.map(({ text, title}, index) => {
            return (
              <div
                key={index}
                className={`py-6 md:px-6 flex flex-row justify-between border-b border-[#EAECF0] gap-5 cursor-pointer`}
                onClick={() => {
                  if (selected === index) {
                    setselected(null);
                  } else {
                    setselected(index);
                  }
                }}
              >
                <div>
                  <h3
                    className={`text-sm md:text-base xl:text-lg  text-[#101828] font-medium font-inter`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-[#545454] md:text-sm text-xs  font-medium mt-4 ${
                      selected === index ? "block" : "hidden"
                    }`}
                  >
                    {text}
                  </p>
                </div>
                <p className=" p-2">
                  {selected === index ? (
                    <IoIosArrowUp color="#475467" size={16} />
                  ) : (
                    <IoIosArrowDown color="#475467" size={16} />
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;

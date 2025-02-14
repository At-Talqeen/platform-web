import React from "react";
import Link from "next/link";
import Logo from "@/assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center px-6 md:px-12 xl:px-[80px] 2xl:px-[100px] pt-16 pb-7">
      <div className="flex flex-col w-full ">
        <div className=" flex flex-col lg:flex-row  gap-y-10 2xl:gap-x-32 xl:gap-x-28 lg:gap-x-14 md:gap-x-10 justify-between pb-12 w-full md:w-auto">
          <div className=" ">
            <span className="flex gap-4 flex-row items-center">
              <Logo />
            </span>
          </div>

          <div className=" grid grid-cols-1 md:flex flex-row flex-wrap justify-between gap-y-5  lg:w-[70%] w-full md:px-10 lg:px-14 xl:px-20">
            <div>
              <h3 className="font-semibold md:text-base text-sm font-inter mb-4 text-[#101828]">
                Quicklink
              </h3>

              <ul className="space-y-2">
                <li className="text-[#475467] font-normal md:text-base text-sm  font-inter ">
                  <Link href={"#home"} className="cursor-pointer no-underline">
                    Home
                  </Link>
                </li>
                <li className="text-[#475467] font-normal md:text-base text-sm  font-inter ">
                  <Link
                    href={"#features"}
                    className="cursor-pointer no-underline"
                  >
                    Features
                  </Link>
                </li>
                <li className="text-[#475467] font-normal md:text-base text-sm  font-inter ">
                  <Link
                    href={"#benefits"}
                    className="cursor-pointer no-underline"
                  >
                    Benefits
                  </Link>
                </li>
                <li className="text-[#475467] font-normal md:text-base text-sm  font-inter ">
                  <Link
                    href={"#pricing"}
                    className="cursor-pointer no-underline"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="text-[#475467] font-normal md:text-base text-sm  font-inter ">
                  <Link href={"#faqs"} className="cursor-pointer no-underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold md:text-base text-sm  font-inter mb-4 text-[#101828]">
                Contact Us
              </h3>

              <ul className="space-y-2">
                <li className="text-[#475467] font-normal md:text-base text-sm font-inter flex gap-2">
                  <p>Gmail:</p>
                  <Link
                    href="mailto:attalqeeninstitute@gmail.com"
                    className="cursor-pointer no-underline"
                  >
                    attalqeeninstitute@gmail.com
                  </Link>
                </li>
                <li className="text-[#475467] font-normal md:text-base text-sm font-inter flex gap-2">
                  <p>Phone:</p>

                  <Link
                    href="tel:+447507398641"
                    className="cursor-pointer no-underline"
                  >
                    +447507398641
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold md:text-base text-sm  font-inter mb-4 text-[#101828]">
                Follow us
              </h3>

              <ul className="space-y-2">
                <li className="text-[#475467] font-normal md:text-base text-sm  font-inter ">
                  <a
                    target="_blank"
                    href={
                      "https://www.tiktok.com/@attalqeeninstitute?_t=ZM-8tguQ0y8msn&_r=1"
                    }
                    className="cursor-pointer no-underline"
                  >
                    Tiktok
                  </a>
                </li>
                {/* <li className="text-[#475467] font-normal md:text-base text-sm  font-inter ">
                  <Link href={"#"} className="cursor-pointer no-underline">
                    X (formerly Twitter)
                  </Link>
                </li> */}
                <li className="text-[#475467] font-normal md:text-base text-sm  font-inter ">
                  <a
                    target="_blank"
                    href={
                      "https://www.instagram.com/attalqeeninstitute?igsh=MWVna29sMGV3eDFxbg%3D%3D&utm_source=qr"
                    }
                    className="cursor-pointer no-underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-auto justify-between hidden lg:flex items-center py-10">
          <p className="text-[#344054] font-normal font-inter">
            Copyright © {currentYear} At Talqeen. All rights reserved.
          </p>
          <div className="flex gap-3">
            <p className="text-[#344054] font-normal font-inter">
              Privacy Policy
            </p>
            <p className="text-[#344054] font-normal font-inter">
              Terms of Service
            </p>
          </div>
        </div>
        <div className="flex fle-col lg:hidden gap-3 mb-4">
          <p className="text-[#344054] font-normal font-inter text-sm">
            Privacy Policy
          </p>
          <p className="text-[#344054] font-normal font-inter text-sm">
            Terms of Service
          </p>
        </div>
        <p className="text-[344054] font-normal font-inter lg:hidden text-sm">
          Copyright © {currentYear} At Talqeen. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

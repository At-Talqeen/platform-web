"use client";
import React, { useState } from "react";
import SignUpImage from "@/assets/signup.png";
import Image from "next/image";
import Calendar from "@/assets/caledar-dark.svg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';


const Page = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = useState(false);

 


  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(userDetails?.email);
  };
  const [userDetails, setUserDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    country: "",
    dob: "",
    password: "",
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (
      !userDetails?.email ||
      userDetails?.country?.length < 2 ||
      !userDetails?.dob ||
      userDetails?.firstName?.length < 2 ||
      userDetails?.lastName?.length < 2 ||
      !userDetails?.gender ||
      userDetails?.password?.length < 4
    ) {
      toast("All fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (!validateEmail()) {
      toast("Enter a valid email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "/api/save-to-sheet",
        {
          Email: userDetails?.email,
          FirstName : userDetails?.firstName,
          LastName : userDetails?.lastName,
          Gender: userDetails?.gender,
          Country: userDetails?.country,
          Dob: userDetails?.dob,
          Password: userDetails?.password,
          Date: new Date().toISOString().split("T")[0], // Format: YYYY-MM-DD
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast("🦄 You have joined the waitlist!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUserDetails({
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            country: "",
            dob: "",
            password: "",
          });
      } else{
        toast("Failed to join the waitlist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      }
    } catch (err: any) {
      toast(err?.response?.data?.error || "An error occurred.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
     
    }
  };

  React.useEffect(() => {}, [userDetails]);

  return (
    <div className="lg:h-[100vh] flex lg:flex-row flex-col gap-y-9 justify-between">
      <div className="lg:w-[45%] lg:h-full h-[100vh] relative">
        <Image
          alt="signup.png"
          src={SignUpImage}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[22vh] px-6 py-4 md:px-12 lg:px-16 xl:px-[80px] 2xl:px-[100px] flex flex-col gap-4">
          <span className="">
            <h2 className="font-semibold text-[24px] leading-[40.48px] md:text-[32px] md:leading-[45.48px] lg:text-[38px] lg:leading-[50.48px] xl:text-[42px] xl:leading-[55.48px] 2xl:text-[48px] 2xl:leading-[60.48px] text-[#FFFFFF] font-inter">
              Your Journey in Islamic Learning Starts Here
            </h2>
          </span>
          <span className="">
            <p className="text-[#FFFFFF] text-sm md:text-base font-inter">
              Discover the Quran, Hadith, and Islamic history at your own pace.
              Join thousands of learners just like you.
            </p>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[51%]">
        <div>
          <h2 className="text-[#101828] font-inter font-semibold lg:text-xl 2xl:text-3xl xl:text-2xl text-lg">
            Create your account
          </h2>
          <p className="text-[#667085] font-inter xl:text-base text-xs">
            Welcome! Please fill in the details to get started.
          </p>
        </div>
        <form
          className="lg:w-[67%] w-[85%] flex-col flex 2xl:gap-y-6 xl:gap-y-4 lg:gap-y-2 gap-y-3 xl:mt-5 mt-3 mb-14 lg:mb-0"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row justify-between">
            <span className="w-[48%] flex flex-col xl:gap-2 gap-1">
              <label
                htmlFor="#firstname"
                className="font-medium font-inter text-[#344054] xl:text-sm text-xs"
              >
                First name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="First name"
                className="xl:h-[44px] lg:h-[40px] h-[35px] rounded-[6px] border border-[#D0D5DD] px-[14px] py-[8px] xl:text-sm text-xs font-inter outline-none"
                value={userDetails?.firstName}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, firstName: e.target.value });
                }}
              />
            </span>
            <span className="w-[48%] flex flex-col xl:gap-2 gap-1">
              <label
                htmlFor="#lastname"
                className="font-medium font-inter text-[#344054] xl:text-sm text-xs"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Last name"
                className="xl:h-[44px] lg:h-[40px] h-[35px] rounded-[6px] border border-[#D0D5DD] px-[14px] py-[8px] xl:text-sm text-xs font-inter outline-none"
                value={userDetails?.lastName}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, lastName: e.target.value });
                }}
              />
            </span>
          </div>
          <span className=" flex flex-col xl:gap-2 gap-1">
            <label
              htmlFor="#email"
              className="font-medium font-inter text-[#344054] xl:text-sm text-xs"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Last name"
              className="xl:h-[44px] lg:h-[40px] h-[35px] rounded-[6px] border border-[#D0D5DD] px-[14px] py-[8px] xl:text-sm text-xs font-inter outline-none"
              value={userDetails?.email}
              onChange={(e) => {
                setUserDetails({ ...userDetails, email: e.target.value });
              }}
            />
          </span>
          <span className=" flex flex-col xl:gap-2 gap-1">
            <label
              htmlFor="#gender"
              className="font-medium font-inter text-[#344054] xl:text-sm text-xs"
            >
              Gender
            </label>
            <span className="relative xl:h-[44px] lg:h-[40px] h-[35px] rounded-[6px] border border-[#D0D5DD] px-[14px] py-[8px] flex flex-row items-center">
              <select
                name="gneder"
                id="gender"
                className="w-full h-full xl:text-sm text-xs font-inter outline-none bg-transparent appearance-none focus:outline-none "
                value={userDetails?.gender}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, gender: e.target.value });
                }}
              >
                <option value="" className="text-[#98A2B3]">
                  Gender
                </option>

                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </span>
          </span>
          <span className=" flex flex-col xl:gap-2 gap-1">
            <label
              htmlFor="#country"
              className="font-medium font-inter text-[#344054] xl:text-sm text-xs"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              placeholder="Country"
              className="xl:h-[44px] lg:h-[40px] h-[35px] rounded-[6px] border border-[#D0D5DD] px-[14px] py-[8px] xl:text-sm text-xs font-inter outline-none"
              value={userDetails?.country}
              onChange={(e) => {
                setUserDetails({ ...userDetails, country: e.target.value });
              }}
            />
          </span>
          <span className=" flex flex-col xl:gap-2 gap-1">
            <label
              htmlFor="#dob"
              className="font-medium font-inter text-[#344054] xl:text-sm text-xs"
            >
              Date of birth
            </label>
            <div className="relative xl:h-[44px] lg:h-[40px] h-[35px] rounded-[6px] border border-[#D0D5DD] px-[14px] py-[8px] flex flex-row items-center">
              <input
                id="dob"
                type="date"
                placeholder="Date of birth"
                className={`w-full h-full bg-transparent appearance-none outline-none xl:text-sm text-xs`}
                value={userDetails?.dob}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, dob: e.target.value });
                }}
              />
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <Calendar />
              </div>
            </div>
          </span>
          <span className=" flex flex-col xl:gap-2 gap-1 w-[85%]">
            <label
              htmlFor="#password"
              className="font-medium font-inter text-[#344054] xl:text-sm text-xs"
            >
              Password
            </label>
            <div className="relative xl:h-[44px] lg:h-[40px] h-[35px] rounded-[6px] border border-[#D0D5DD] px-[14px] py-[8px] flex flex-row items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className=" xl:text-sm text-xs font-inter outline-none w-full h-full"
                value={userDetails?.password}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, password: e.target.value });
                }}
              />
              <div
                className="absolute right-3 inset-y-0 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEye size="18px" color="#667085" />
                ) : (
                  <FiEyeOff size="18px" color="#667085" />
                )}
              </div>
            </div>
          </span>
          <Button disabled={loading} type="submit" className="flex bg-[#0DAC5C] text-white xl:p-3 p-2 rounded-[8px] hover:bg-green-700  font-semibold w-full text-center text-sm xl:text-base mt-1">
            {loading ? (
              <>
                <Loader2 className="animate-spin" />
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
          {/* <button className="bg-[#0DAC5C] text-white xl:p-3 p-2 rounded-[8px] hover:bg-green-700  font-semibold w-full text-center text-sm xl:text-base mt-1">
            Sign Up
          </button> */}

          {/* <button
            className="border border-[#D0D5DD]  xl:p-3 p-2 rounded-[8px] flex flex-row justify-center items-center gap-2 font-semibold w-full mb-10 lg:mb-0"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <GoogleIcon />
            <p className="text-[#344054] text-sm xl:text-base font-semibold">
              Continue with Google
            </p>
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Page;

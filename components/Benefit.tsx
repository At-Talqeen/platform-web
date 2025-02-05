import React from 'react'
import Progress from "../assets/progress.png"
import Video from "../assets/video.png"
import Calendar from "../assets/calendar.png"
import CustomerService from "../assets/customer-service.png"
import UserGroup from "../assets/user-group.png"
import Online from "../assets/online-learning.png"
import Image from 'next/image'


const Benefit = () => {
    const ourBenefits = [
        {
            title:"Personalized Progress Tracking",
            reason:"Set your goals, track your achievements, and see how far you’ve come—one step at a time. Stay motivated with a clear view of your growth.",
            icon : Progress
        },
        {
            title:"Flexible Scheduling",
            reason:"Life can be busy, so we make it easy to schedule classes that work for you. Whether it’s early mornings, weekends, or after school, you’re in control.",
            icon : Calendar
        },
        {
            title:"Access to Class Recordings",
            reason:"Missed a class or want to review? No problem. Replay past sessions anytime, along with helpful feedback from your teacher.",
            icon : Video
        },
        {
            title:"Support from Knowledgeable Teachers",
            reason:"Our teachers are here to guide you every step of the way, offering personalized feedback and encouragement to keep you on track.",
            icon : CustomerService
        },
        {
            title:"Community Support",
            reason:"A place where you can connect, share, and find the support you need.",
            icon : UserGroup
        },
        {
            title:"Learn Anywhere, Anytime",
            reason:"Use the platform from your phone, tablet, or computer—wherever you are, your learning journey is always within reach.",
            icon : Online
        },
    ]


  return (
    <div className="flex flex-col items-center px-6 py-16 md:px-12 xl:px-[80px] 2xl:px-[100px]">
         <div className="">
        <p className="text-center text-[#0DAC5C] font-medium font-inter">
          Benefit
        </p>
        <h3 className="font-plus text-[#101828] text-[24px] leading-[40.48px] md:text-[32px] md:leading-[45.48px] lg:text-[38px] lg:leading-[50.48px] xl:text-[42px] xl:leading-[55.48px] 2xl:text-[48px] 2xl:leading-[60.48px] mt-4 text-center font-bold">
        Why Choose At-Talqeen?
        </h3>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-16 mt-20'>
        {
            ourBenefits?.map((ben, index) => {
                return (
                    <div key={index} className='flex-col flex gap-2'>
                        <div className='w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]'>
                            <Image alt='benefit-icon' src={ben?.icon}/>
                        </div>
                        <h3 className='font-plus font-semibold text-base xl:text-xl md:text-lg text-[#101828] mt-2'>{ben?.title}</h3>
                        <p className='font-inter font-normal xl:text-base lg:text-sm text-xs text-[#475467] '>{ben?.reason}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Benefit
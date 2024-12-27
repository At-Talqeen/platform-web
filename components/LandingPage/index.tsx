import Image from 'next/image';
import QuranImg from '@/assets/quran.png'
import InstructorCard from './InstructorCard';
import WaitList from '@/app/forms/WaitList';

const LandingPage = () => {


  return (
    <div className="h-[calc(100vh-80px)] bg-white relative">
      <div className="flex justify-between py-16 w-full overflow-hidden  h-[calc(100vh-80px)]">
      <section className='hidden lg:block w-[389px] h-[489px] -rotate-[25deg] -ml-20'>
        <Image src={QuranImg} alt={'quran'} width={389} height={489} className=''/>   
        </section>
        <section className="flex-1 flex flex-col max-w-full items-center mb-12 md:mb-0 px-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold  lg:w-[828px] leading-tight mb-6 w-full text-center ">
            Your Journey to Quran Memorization Made Simple
          </h2>
          <p className=" text-base md:text-lg text-gray-600 mb-8 max-w-[492px] px-4">
          Learn at your own pace with flexible scheduling, easy progress tracking, 
          and teacher support every step of the way.
          </p>
          <WaitList />
        </section>
        <section className='hidden lg:block  -mr-20 rotate-[17deg] w-[281px] h-[444px] pt-48'>
          <InstructorCard />
        </section>
      
      </div>


    </div>
  );
};

export default LandingPage;
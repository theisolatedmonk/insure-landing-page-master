
import Image from 'next/image';
// import bgPatternFooterMobile from '@/public/images/bg-pattern-footer-mobile.svg';
import bgPatternHowWeWorkDesktop from '@/public/images/bg-pattern-how-we-work-desktop.svg';
import bgPatternHowWeWorkMobile from '@/public/images/bg-pattern-how-we-work-mobile.svg';
import bgPatternIntroLeftDesktop from '@/public/images/bg-pattern-intro-left-desktop.svg';
import bgPatternIntroLeftMobile from '@/public/images/bg-pattern-intro-left-mobile.svg';
// import bgPatternIntroRightDesktop from '@/public/images/bg-pattern-intro-right-desktop.svg';
import bgPatternIntroRightMobile from '@/public/images/bg-pattern-intro-right-mobile.svg';
import bgPatternMobileNav from '@/public/images/bg-pattern-mobile-nav.svg';

import iconClose from '@/public/images/icon-close.svg';


import imageIntroDesktop from '@/public/images/image-intro-desktop.jpg';
import imageIntroMobile from '@/public/images/image-intro-mobile.jpg';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Benefit from './components/Benefit';
import Footer from './components/Footer';



export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full   py-4 gap-4 font-Karla ">
      <Navbar />
      <div className="bg-DarkViolet w-full h-full ">
        <HeroSection />
      </div>

      <div className="flex flex-col mt-56 sm:mt-0 lg:mt-0 items-center sm:mb-8 lg:mb-10"> <Benefit /></div>


      {/* <Image src={bgPatternHowWeWorkDesktop} alt={''} /> */}
      <div className="flex flex-col sm:px-20">

        <div className="bg-DarkViolet  w-full   flex  text-white items-center  sm:px-20  relative  lg:py-[70px] sm:py-[48px]  lg:px-[85px] z-10">

          <Image src={bgPatternHowWeWorkDesktop} alt={'PatternFooterDesktop'} width={100} height={100} className='absolute right-0 w-[40%] sm:flex hidden  xl:w-[28%]' />

          <Image src={bgPatternHowWeWorkMobile} alt={'PatternFooterDesktop'} width={100} height={100} className='absolute right-0 w-[55%] sm:hidden  flex ' />
          <div className="flex flex-col sm:flex-row w-full items-center sm:justify-between  text-center sm:text-start py-16  sm:py-0 ">
            <p className=" text-5xl sm:text-4xl font-bold  sm:w-96 sm:p-0 p-8 w-full ">
              Find out more about how we work
            </p>
            <button className=' border-2 border-white  h-10  text-center hover:text-DarkViolet hover:bg-white font-bold p-2 z-20 w-44'> HOW WE WORK</button>
          </div>
        </div>
      </div>

      <Footer />

      <Image src={bgPatternIntroLeftDesktop} alt={''} className='absolute left-0 z-20 top-[360px] xl:top-[300px]  sm:flex hidden ' width={100} height={100} />
      <Image src={imageIntroDesktop} alt={''} className='absolute right-[90px] top-40 sm:flex hidden' width={320} height={320} />

      <Image src={bgPatternIntroRightMobile} alt={''} className='absolute right-0 z-20 top-[890px] sm:hidden  flex' width={125} height={125} />
    </div>
  )
}

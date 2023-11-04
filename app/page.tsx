import Image from 'next/image'
import bgPatternFooterDesktop from '@/public/images/bg-pattern-footer-desktop.svg';

import bgPatternFooterMobile from '@/public/images/bg-pattern-footer-mobile.svg';
import bgPatternHowWeWorkDesktop from '@/public/images/bg-pattern-how-we-work-desktop.svg';
import bgPatternHowWeWorkMobile from '@/public/images/bg-pattern-how-we-work-mobile.svg';
import bgPatternIntroLeftDesktop from '@/public/images/bg-pattern-intro-left-desktop.svg';
import bgPatternIntroLeftMobile from '@/public/images/bg-pattern-intro-left-mobile.svg';
import bgPatternIntroRightDesktop from '@/public/images/bg-pattern-intro-right-desktop.svg';
import bgPatternIntroRightMobile from '@/public/images/bg-pattern-intro-right-mobile.svg';
import bgPatternMobileNav from '@/public/images/bg-pattern-mobile-nav.svg';
import favicon32x32 from '@/public/images/favicon-32x32.svg';

import iconClose from '@/public/images/icon-close.svg';
import iconFacebook from '@/public/images/icon-facebook.svg';
import iconInstagram from '@/public/images/icon-instagram.svg';

import iconPinterest from '@/public/images/icon-pinterest.svg';

import iconTwitter from '@/public/images/icon-twitter.svg';
import imageIntroDesktop from '@/public/images/image-intro-desktop.jpg';
import imageIntroMobile from '@/public/images/image-intro-mobile.jpg';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Benefit from './components/Benefit';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full   px-20 py-4 gap-8 font-Karla">
      <Navbar />
      <div className="bg-DarkViolet w-full h-full">
        <HeroSection />
      </div>


      <Benefit />

      {/* <Image src={bgPatternHowWeWorkDesktop} alt={''} /> */}
      <div className="bg-DarkViolet  w-full   flex  text-white items-center justify-between px-10  ">
        <p className=" text-4xl font-bold  0 w-96 p-6 ">
          Find out more about how we work
        </p>
        <button className=' border-2 border-white  h-10  text-center hover:text-DarkViolet hover:bg-white font-bold p-2'> HOW WE WORK</button>
      </div>

      <Footer />
    </div>
  )
}

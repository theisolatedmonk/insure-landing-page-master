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
import iconAffordablePrices from '@/public/images/icon-affordable-prices.svg';
import iconClose from '@/public/images/icon-close.svg';
import iconFacebook from '@/public/images/icon-facebook.svg';
import iconInstagram from '@/public/images/icon-instagram.svg';
import iconPeopleFirst from '@/public/images/icon-people-first.svg';
import iconPinterest from '@/public/images/icon-pinterest.svg';
import iconSnappyProcess from '@/public/images/icon-snappy-process.svg';
import iconTwitter from '@/public/images/icon-twitter.svg';
import imageIntroDesktop from '@/public/images/image-intro-desktop.jpg';
import imageIntroMobile from '@/public/images/image-intro-mobile.jpg';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';


export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full justify-center ">
      <Navbar />
      <HeroSection />
    </div>
  )
}

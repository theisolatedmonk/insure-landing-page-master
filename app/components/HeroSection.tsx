import React from 'react'
import Image from 'next/image'
import imageIntroDesktop from '@/public/images/image-intro-desktop.jpg';
import imageIntroMobile from '@/public/images/image-intro-mobile.jpg';
import bgPatternHowWeWorkMobile from '@/public/images/bg-pattern-how-we-work-mobile.svg';
import bgPatternIntroLeftDesktop from '@/public/images/bg-pattern-intro-left-desktop.svg';
import bgPatternIntroLeftMobile from '@/public/images/bg-pattern-intro-left-mobile.svg';
import bgPatternIntroRightDesktop from '@/public/images/bg-pattern-intro-right-desktop.svg';
import bgPatternIntroRightMobile from '@/public/images/bg-pattern-intro-right-mobile.svg';
import bgPatternMobileNav from '@/public/images/bg-pattern-mobile-nav.svg';
type Props = {}

export default function HeroSection({ }: Props) {
    return (
        <div className='flex   items-start w-full   font-Karla text-VeryLightGray relative  px-20 py-16 overflow-hidden'>
            <div className="flex flex-col pl-10 w-[60%] gap-5 ">
                <hr className=' w-[30%] bg-white' />
                <p className="text-5xl font-bold pr-16"> Humanizing your insurance</p>
                <p className="text-sm">
                    Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
                </p>
                <button className=' border-2 border-white p-2 w-40 text-center hover:text-DarkViolet hover:bg-white font-bold text-sm'> VIEW PLANS</button>

            </div>
            {/* <Image src={imageIntroDesktop} alt={''} className='absolute right-[90px]' width={300} height={300} /> */}

            <Image src={bgPatternIntroRightDesktop} alt={''} className='absolute right-0 z-20 -top-6' width={255} height={255} />


        </div>
    )
}

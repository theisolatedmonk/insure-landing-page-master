import React from 'react'
import Image from 'next/image'
import imageIntroDesktop from '@/public/images/image-intro-desktop.jpg';
import imageIntroMobile from '@/public/images/image-intro-mobile.jpg';

type Props = {}

export default function HeroSection({ }: Props) {
    return (
        <div className='flex  justify-between items-start w-full   font-Karla text-VeryLightGray relative  p-10'>
            <div className="flex flex-col pr-50 w-[50%] gap-5 ">
                <hr className=' w-[30%] bg-white' />
                <p className="text-5xl font-bold pr-16"> Humanizing your insurance</p>
                <p className="text-sm">
                    Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
                </p>
                <button className=' border-2 border-white p-2 w-40 text-center hover:text-DarkViolet hover:bg-white font-bold'> VIEW PLANS</button>

            </div>
            <Image src={imageIntroDesktop} alt={''} className='absolute right-20' width={300} height={300} />

        </div>
    )
}

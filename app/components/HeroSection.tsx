import React from 'react'
import Image from 'next/image'
import imageIntroDesktop from '@/public/images/image-intro-desktop.jpg';
import imageIntroMobile from '@/public/images/image-intro-mobile.jpg';

type Props = {}

export default function HeroSection({ }: Props) {
    return (
        <div className='flex  justify-between items-center w-full h-96 p-4  font-Karla '>
            <div className="flex flex-col pr-60 bg-green-800 w-[50%] gap-4 ">
                <hr className=' w-[30%] bg-white' />
                <p className="text-3xl font-bold pr-16"> Humanizing your insurance</p>
                <p className="text-sm">
                    Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
                </p>
                <button className=' border-2 border-black p-2 w-40 text-center'> VIEW PLANS</button>

            </div>
            <Image src={imageIntroDesktop} alt={''} className='h-80 w-80 ' width={100} height={100} />
        </div>
    )
}

import React from 'react'
import Image from 'next/image'
import iconPeopleFirst from '@/public/images/icon-people-first.svg';
import iconSnappyProcess from '@/public/images/icon-snappy-process.svg';
import iconAffordablePrices from '@/public/images/icon-affordable-prices.svg';

const benefitData = [
    { src: iconSnappyProcess, alt: 'Snappy Process', heading: 'Snappy Process', paragraph: 'Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.' },
    { src: iconAffordablePrices, alt: 'Affordable Prices', heading: 'Affordable Prices', paragraph: 'Affordable Prices We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible. ' },
    { src: iconPeopleFirst, alt: 'People First', heading: 'People First', paragraph: 'People First Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it. ' },
]


export default function Benefit() {
    return (
        <div className='flex flex-col gap-10 font-Karla sm:mt-28 sm:items-start items-center sm:px-20 p-[70px] sm:p-0'>
            <hr className=' w-[30%] bg-white' />
            <p className="text-3xl font-bold ">We’re different</p>
            <div className="sm:flex w-full sm:gap-2 gap-4 flex-row items-center">
                {benefitData.map((item) => (

                    <div className="flex flex-col  items-center sm:items-start text-center sm:text-start ">
                        <Image src={item.src} alt={item.alt} className='p-4' />
                        <div className="flex flex-col gap-4">
                            <p className="font-bold text-lg">{item.heading}</p>
                            <p className="text-xs">{item.paragraph}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
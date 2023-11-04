import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo.svg';
import iconHamburger from '@/public/images/icon-hamburger.svg';
import Link from 'next/link';


type Props = {}

export default function Navbar({ }: Props) {
    return (
        <div className='flex   w-full  items-center justify-between text-sm '>
            <Image className=' cursor-pointer' src={logo} alt={''} height={100} width={100} />
            <div className="flex gap-4 items-center ">
                <div className="sm:flex gap-4 hidden">
                    <Link href={'/'}>  <p className="hover:text-DarkViolet text-DarkGrayishViolet font-bold">HOW WE WORK</p></Link>
                    <Link href={'/'}><p className="hover:text-DarkViolet text-DarkGrayishViolet font-bold">BLOG</p></Link>
                    <Link href={'/'}> <p className="hover:text-DarkViolet text-DarkGrayishViolet font-bold">ACCOUNT</p></Link>



                </div>
                <button className=' border-2 border-DarkViolet p-2 hidden sm:flex  hover:text-white hover:bg-DarkViolet'> VIEW PLANS</button>
                <button className=''>  <Image className=' sm:hidden flex' src={iconHamburger} alt={''} height={50} width={50} /></button>


            </div>
        </div>
    )
}
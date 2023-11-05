import React from 'react'
import Image from 'next/image'

import logo from '@/public/images/logo.svg';
import iconFacebook from '@/public/images/icon-facebook.svg';
import iconInstagram from '@/public/images/icon-instagram.svg';

import iconPinterest from '@/public/images/icon-pinterest.svg';

import iconTwitter from '@/public/images/icon-twitter.svg';
import Link from 'next/link';
import bgPatternFooterDesktop from '@/public/images/bg-pattern-footer-desktop.svg';
import bgPatternMobileNav from '@/public/images/bg-pattern-mobile-nav.svg';

const SocialMediaIcon = [
    { src: iconFacebook, alt: 'Facebook', href: '#' },
    {
        src: iconTwitter, alt: 'Twitter', href: '#'
    },
    { src: iconPinterest, alt: 'Pinterest', href: '#' },
    { src: iconInstagram, alt: 'Instagram', href: '#' },

]



const FooterDetails = [
    { title: 'OUR COMPANY', links: [{ label: 'HOW WE WORK ', href: '#' }, { label: 'WHY INSURE? ', href: '#' }, { label: 'VIEW PLAN', href: '#' }, { label: 'RREVIEW ', href: '#' }] },

    {
        title: 'HELP ME',
        links: [{ label: 'FAQ ', href: '#' }, { label: 'TERM OF USE ', href: '#' }, { label: 'PRIVACY POLICY', href: '#' }, { label: 'COOKIES', href: '#' }]
    },
    {
        title: 'CONTACT',
        links: [{ label: 'SALE ', href: '#' }, { label: 'SUPPORT ', href: '#' }, { label: 'LIVE CHAT', href: '#' },]
    },
    {
        title: 'OTHERS',
        links: [{ label: 'CAREERS ', href: '#' }, { label: 'PRESS ', href: '#' }, { label: 'LICENSES', href: '#' },]
    },

]
export default function Footer() {
    return (
        <div className='flex flex-col gap-4 text-sm font-bold py-5   mt-5 relative mb-5 ' >

            <Image src={bgPatternFooterDesktop} alt={'PatternFooterDesktop'} width={200} height={200} className='absolute sm:-left-20 h-40  z-0 sm:w-[500px]  w-[700px] top-5     hidden  sm:flex' />

            <div className="flex sm:justify-between 
            justify-center
            items-center sm:flex-row flex-col gap-6 overflow-hidden  p-0 relative w-full h-36 sm:h-16">
                <Image src={bgPatternFooterDesktop} alt={'PatternFooterDesktop'} width={200} height={200} className='absolute sm:hidden h-40  z-0   w-[700px] bottom-10   flex -left-7' />

                <div className="flex justify-between items-center z-40 sm:p-20">
                    <Link href={'/'}><Image src={logo} alt={'logo'} width={100} height={100} className='' />
                    </Link>
                </div>
                <div className="flex gap-2 items-center z-30 sm:p-20">
                    {SocialMediaIcon.map((item) => (
                        <Link href={item.href} > <Image src={item.src} alt={item.alt} width={18} height={18} className='' /></Link>
                    ))}
                </div>

            </div>
            <hr className='w-full   ' />

            <div className="flex justify-between z-20 items-center sm:flex-row flex-col gap-6 sm:px-20 mt-4">
                {FooterDetails.map((item, index) => (
                    <div key={index} className="flex  gap-4 flex-col sm:items-start items-center">

                        <p className="text-DarkGrayishViolet ">{item.title}</p>
                        <div className="flex flex-col gap-2 sm:items-start items-center">
                            {item.links.map((d, i) => <div className="flex flex-col gap-2" key={i}>
                                <Link href={d.href}>{d.label}</Link>
                            </div>)}
                        </div>


                    </div>
                ))}
            </div>

        </div >
    )
}
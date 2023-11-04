import React from 'react'
import Image from 'next/image'

import logo from '@/public/images/logo.svg';
import iconFacebook from '@/public/images/icon-facebook.svg';
import iconInstagram from '@/public/images/icon-instagram.svg';

import iconPinterest from '@/public/images/icon-pinterest.svg';

import iconTwitter from '@/public/images/icon-twitter.svg';
import Link from 'next/link';
import bgPatternFooterDesktop from '@/public/images/bg-pattern-footer-desktop.svg';

const SocialMediaIcon = [
    { src: iconFacebook, alt: 'Facebook', href: '#' },
    {
        src: iconTwitter, alt: 'Twitter', href: '#'
    },

    { src: iconInstagram, alt: 'Instagram', href: '#' },

    { src: iconPinterest, alt: 'Pinterest', href: '#' }]



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
        <div className='flex flex-col gap-4 text-sm font-bold py-5 px-20 ' >
            <Image src={bgPatternFooterDesktop} alt={'PatternFooterDesktop'} width={100} height={100} className='absolute left-0 w-[35%] z-0 lg:w-[34%]' />
            <div className="flex justify-between items-center sm:flex-row flex-col gap-6  p-8">
                <div className="flex justify-between items-center z-30 ">
                    <Link href={'/'}><Image src={logo} alt={'logo'} width={100} height={100} className='' />
                    </Link>
                </div>
                <div className="flex gap-2 items-center">
                    {SocialMediaIcon.map((item) => (
                        <Link href={item.href} > <Image src={item.src} alt={item.alt} width={18} height={18} className='' /></Link>
                    ))}
                </div>
            </div>
            <hr className='w-full  ' />
            <div className="flex justify-between z-20 items-center sm:flex-row flex-col gap-6 ">
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
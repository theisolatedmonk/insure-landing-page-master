import React from 'react'
import Image from 'next/image'

import logo from '@/public/images/logo.svg';
import iconFacebook from '@/public/images/icon-facebook.svg';
import iconInstagram from '@/public/images/icon-instagram.svg';

import iconPinterest from '@/public/images/icon-pinterest.svg';

import iconTwitter from '@/public/images/icon-twitter.svg';
import Link from 'next/link';
import { link } from 'fs';

const SocialMediaIcon = [
    { src: iconFacebook, alt: 'Facebook' },
    {
        src: iconTwitter, alt: 'Twitter'
    },

    { src: iconInstagram, alt: 'Instagram' },

    { src: iconPinterest, alt: 'Pinterest' }]



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
        <div className='flex flex-col gap-4 text-sm font-bold py-5' >
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <Link href={'/'}><Image src={logo} alt={'logo'} width={100} height={100} />
                    </Link>
                </div>
                <div className="flex gap-2 items-center">
                    {SocialMediaIcon.map((item) => (
                        <Image src={item.src} alt={item.alt} width={18} height={18} />
                    ))}
                </div>
            </div>
            <hr className='w-full' />
            <div className="flex justify-between">
                {FooterDetails.map((item, index) => (
                    <div key={index} className="flex  gap-4 flex-col">

                        <p className="text-DarkGrayishViolet ">{item.title}</p>
                        <div className="flex flex-col gap-2">
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
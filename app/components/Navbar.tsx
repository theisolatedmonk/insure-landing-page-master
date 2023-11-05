"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import iconHamburger from "@/public/images/icon-hamburger.svg";
import Link from "next/link";
import iconClose from "@/public/images/icon-close.svg";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useAutoAnimate } from '@formkit/auto-animate/react'

type Props = {};

const navLinks = [
    { label: "HOW WE WORK", href: '#' },
    { label: " BLOG", href: '#' },
    { label: " ACCOUNT", href: '#' },
    { label: "", href: '#' }
]

export default function Navbar({ }: Props) {
    const [animationParent] = useAutoAnimate()
    const [open, setOpen] = useState(false);


    function toggleMenu() {
        setOpen(!open);
    }
    return (
        < >
            <div
                ref={animationParent}
                className="flex w-full sticky top-0  items-center justify-between text-sm sm:px-20 px-10 h-[60px]   bg-white   z-40  ">
                <Link href={'/'} className="">
                    <Image
                        className=" cursor-pointer "
                        src={logo}
                        alt={""}
                        height={100}
                        width={100}
                    />
                </Link>




                {/* deskotop menues */}
                <section className=" hidden sm:flex gap-4 items-center ">

                    {navLinks.map((d, i) =>
                        <Link href={d.href} className="hover:text-DarkViolet text-DarkGrayishViolet font-bold">
                            {d.label}
                        </Link>
                    )}


                    <button className=" border-2 border-DarkViolet p-2 hidden sm:flex  hover:text-white hover:bg-DarkViolet">

                        VIEW PLANS
                    </button>


                </section>


                <button
                    ref={animationParent}
                    onClick={toggleMenu}
                    className="sm:hidden  text-xl z-50">
                    {open ? <AiOutlineClose /> : <AiOutlineMenu />
                    }
                </button>
            </div>
            {/* mobile menue */}
            {open &&
                <div
                    className={` sm:hidden fixed left-0 top-[60px] h-[calc(100vh-60px)] w-screen  bg-DarkViolet   flex flex-col items-center gap-4 text-white pt-5 text-xl  px-5 overscroll-none z-50 `}
                >
                    {navLinks.map((d, i) =>
                        <Link href={d.href} className="  font-bold  hover:text-gray-300 ">
                            {d.label}
                        </Link>
                    )}
                    <button className=" border-2 border-white p-2  font-bold hover:text-gray-300 w-full max-w-[200px]">
                        VIEW PLANS
                    </button>

                </div>
            }</>
    );
}

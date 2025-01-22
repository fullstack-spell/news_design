'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { CiUser } from "react-icons/ci"
import { FaBarsStaggered } from "react-icons/fa6"

const Links = () => {
    return <>
        <Link href={'/'} className='hover:text-white text-theme-black font-semibold duration-500 ease-in-out p-4 hover:bg-theme-red'>
            Home
        </Link>
        <Link href={'/category/xcSDF'} className='hover:text-white text-theme-black font-semibold duration-500 ease-in-out p-4 hover:bg-theme-red'>
            Category
        </Link>
    </>
}

const Navbar = () => {
    return (
        <>
            <div className="hidden z-20 container max-w-[1200px]  justify-center lg:px-5 lg:flex items-center border-b flex-row overflow-hidden">
                <Links />
            </div>
            <div className="lg:hidden block">
                <NavbarHeader />
            </div>
        </>
    )
}

export default Navbar

export const NavbarHeader = () => {
    const [openNavbar, setOpenNavbar] = useState(false)

    return <>
        <div className='flex relative items-center gap-5 justify-between container max-w-[1200px] lg:px-5 p-2 pb-6'>
            <div onClick={() => setOpenNavbar(true)} className='flex items-center gap-3  cursor-pointer'>
                <FaBarsStaggered size={30} className="text-theme-grey" />
                <p className="lg:block hidden">मङ्गलबार, ०८ माघ २०८१</p>
            </div>

            <div className='bg-theme-red rounded-md p-3 overflow-hidden shadow-md shadow-theme-red'>
                <Image src={'https://www.ratopati.com/build/img/logo.png'} alt="logo" width={200} height={200} className="lg:w-[200px] w-[120px]" />
            </div>

            <div className="bg-white/35 grid place-content-center border-2 text-theme-red border-theme-red rounded-full lg:size-[50px] size-[40px]">
                <CiUser className="lg:text-3xl text-2xl" />
            </div>
        </div>

        {openNavbar &&
            <div onClick={() => setOpenNavbar(false)} className="fixed bg-white border-l bg-black/40 top-0 z-10 shadow h-full w-full">
                <div className="min-w-[300px] w-fit h-full shadow-lg px-2">
                    <Links />
                </div>
            </div>
        }
    </>
}
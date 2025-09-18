"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import {
    House,
    Building2,
    HandHeart,
    Users,
    BookOpenText,
    Mail,
    Menu
} from "lucide-react"
import NavLink from './NavLink'
import { Button } from '@/components/ui/button'
import MobileNavigation from './MobileNavigation'
import SlideIn from '@/components/motion/SlideIn'

export const navigation = [
    {
        text: "Home",
        href: "/",
        icon: <House />
    },
    {
        text: "About",
        href: "/about",
        icon: <Building2 />
    },
    {
        text: "Services",
        href: "/services",
        icon: <HandHeart />
    },
    {
        text: "Therapists",
        href: "/therapists",
        icon: <Users />
    },
    {
        text: "Resources",
        href: "/resources",
        icon: <BookOpenText />
    },
    {
        text: "Contact",
        href: "/contact",
        icon: <Mail />
    },
]

export default function Navbar() {
    const [isShowMobileNav, setIsShowMobileNav] = useState<boolean>(false)
    function toggleMobileNav() {
        setIsShowMobileNav(!isShowMobileNav)
    }
    return (
        <>
            <SlideIn direction='toBottom' className='h-24 w-full bg-background px-7 lg:p-0 flex justify-between items-center text-primary sticky top-0 z-1000'>
                <ul className='w-1/3 h-full hidden lg:flex justify-between items-center text-lg'>
                    {
                        navigation.slice(0, 3).map((nav, i) => (
                            <li key={i}>
                                <NavLink icon={nav.icon} href={nav.href} text={nav.text} />
                            </li>
                        ))
                    }
                </ul>
                <div className='w-1/4 h-full flex lg:justify-center items-center'>
                    <Logo />
                </div>
                <ul className='w-1/3 h-full hidden lg:flex justify-between items-center text-lg'>
                    {
                        navigation.slice(3).map((nav, i) => (
                            <li key={i}>
                                <NavLink icon={nav.icon} href={nav.href} text={nav.text} />
                            </li>
                        ))
                    }
                </ul>
                <div className='w-1/4 flex lg:hidden justify-end'>
                    <Button variant={"ghost"} className='!bg-transparent' onClick={toggleMobileNav}>
                        <Menu />
                    </Button>
                </div>
            </SlideIn>
            <div className={`block lg:hidden ${isShowMobileNav ? 'top-24' : '-top-full'} fixed duration-500 w-full left-0 z-100`}>
                <MobileNavigation />
            </div>
        </>
    )
}

import React from 'react'
import { navigation } from './Navbar'
import Link from 'next/link'

export default function MobileNavigation() {
    return (
        <div className='w-full h-fit bg-white flex flex-col gap-7 py-10 pl-5 shadow-lg'>
            {
                navigation.map((nav, i) => (
                    <Link key={i} href={nav.href} className='flex gap-3'>
                        {nav.icon}
                        {nav.text}
                    </Link>
                ))
            }
        </div>
    )
}

import Link from 'next/link'
import React from 'react'

type Props = {
    href: string
    text: string
    icon?: React.ReactNode
}

export default function NavLink({ href, text, icon }: Props) {
    return (
        <Link
            href={href}
            className='group relative'
        >
            <span className='absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:left-[90%] duration-500'>
                {icon}
            </span>
            <span className='inline-block group-hover:-translate-x-[20%] duration-500'>
                {text}
            </span>
        </Link>

    )
}

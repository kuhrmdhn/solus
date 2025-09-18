import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
}

export default function SectionContainer({ children, className,...props }: Props) {
    return (
        <section className={`h-fit xl:h-[calc(100dvh-6rem)] w-full ${className}`} {...props}>
            {children}
        </section>
    )
}

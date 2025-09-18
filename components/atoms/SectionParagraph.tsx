import React from 'react'
import SlideIn, { MotionDivProps } from '../motion/SlideIn'

type Props = MotionDivProps & {
    children: React.ReactNode
}

export default function SectionParagraph({ children, className, ...props }: Props) {
    return (
        <SlideIn transition={{ delay: 0.3, duration: 0.7 }} className={`text-sm lg:text-base text-primary ${className}`} {...props}>{children}</SlideIn>
    )
}

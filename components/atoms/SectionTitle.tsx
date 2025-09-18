import React from 'react'
import Flip from '../motion/Flip'
import { MotionDivProps } from '../motion/SlideIn'

type Props = MotionDivProps & {
    children: React.ReactNode
}

export default function SectionTitle({ children, className, ...props }: Props) {
    return (
        <Flip className={`font-light text-primary ${className}`} {...props}>{children}</Flip>
    )
}

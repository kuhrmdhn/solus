"use client"
import React from 'react'
import { MotionDivProps } from './SlideIn'
import { motion } from "motion/react"

type Props = MotionDivProps & {
    children: React.ReactNode
}

export default function FadeIn({ children, ...props }: Props) {
    const fadeInVariants = {
        initial: { opacity: 0 },
        show: { opacity: 1 }
    }
    return (
        <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

"use client"
import React from 'react'
import { motion } from "motion/react"
import { MotionDivProps } from './SlideIn'

type Props = MotionDivProps & {
    children: React.ReactNode
}

export default function Flip({ children, ...props }: Props) {
    const flipVariants = {
        initial: {
            rotateX: "90deg"
        },
        show: {
            rotateX: "0"
        }
    }
    return (
        <motion.div
            variants={flipVariants}
            initial="initial"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

"use client"
import React, { ComponentProps } from "react"
import { motion } from "motion/react"

export type MotionDivProps = ComponentProps<typeof motion.div>

type Props = MotionDivProps & {
    children: React.ReactNode
    direction?: "toRight" | "toLeft" | "toTop" | "toBottom"
}

export default function SlideIn({ children, direction = "toTop", ...props }: Props) {
    const baseVariants = {
        initial: { opacity: 0 },
        show: { opacity: 1 },
    }

    const directions = {
        toRight: {
            initial: { x: "-100%" },
            show: { x: 0 },
        },
        toLeft: {
            initial: { x: "100%" },
            show: { x: 0 },
        },
        toTop: {
            initial: { y: "50%" },
            show: { y: 0 },
        },
        toBottom: {
            initial: { y: "-100%" },
            show: { y: 0 },
        },
    }

    const variants = {
        initial: { ...baseVariants.initial, ...directions[direction].initial },
        show: { ...baseVariants.show, ...directions[direction].show },
    }

    return (
        <motion.div
            transition={{ duration: 1, delay: 0.4 }}
            variants={variants}
            initial="initial"
            whileInView="show"
            viewport={{ once: true }}
            {...props}
        >
            {children}
        </motion.div>
    )
}

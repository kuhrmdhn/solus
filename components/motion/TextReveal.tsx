"use client"
import React from "react"
import { motion } from "framer-motion"

type Props = {
    text: string
    duration?: number
    delayPerChar?: number
}

export default function TextReveal({
    text,
    duration = 0.4,
    delayPerChar = 0.05,
}: Props) {
    const characters = text.split("")

    const textRevealVariants = {
        initial: {
            y: "100%",
            opacity: 0,
        },
        show: {
            y: "0%",
            opacity: 1,
        },
    }

    return (
        <div>
            {characters.map((char, i) => (
                <span key={i} className="overflow-hidden inline-block">
                    <motion.span
                        variants={textRevealVariants}
                        initial="initial"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{
                            duration,
                            ease: "easeOut",
                            delay:(i + 1) * delayPerChar
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                </span>
            ))}
        </div>
    )
}

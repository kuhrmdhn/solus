import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useCarouselApiStore } from '@/store/useCarouselApiStore'
import React from 'react'
import { useShallow } from 'zustand/shallow'
import Autoplay from "embla-carousel-autoplay"
import SlideIn from '@/components/motion/SlideIn'

const commentLists = [
    {
        "text": "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!",
        "name": "Anna R.",
        "age": 32
    },
    {
        "text": "I was struggling with stress and anxiety, but the mindfulness programs on Solus have helped me regain balance. I finally feel like I'm prioritizing my mental well-being.",
        "name": "Mark S.",
        "age": 41
    },
    {
        "text": "The daily practices are simple yet powerful. After a few weeks, I noticed I was calmer and more patient in my everyday life.",
        "name": "Sophia L.",
        "age": 28
    },
    {
        "text": "At first I was skeptical, but the guided sessions made it easy to open up and reflect. It feels like I finally have the tools to cope with challenges in a healthier way.",
        "name": "Daniel K.",
        "age": 36
    },
    {
        "text": "I appreciate how accessible the resources are. Even on busy days, I can squeeze in a quick session that resets my mood.",
        "name": "Emily W.",
        "age": 25
    },
    {
        "text": "The community support aspect was unexpected but so valuable. Knowing I’m not alone in my journey has made a huge difference.",
        "name": "James P.",
        "age": 39
    }
]

export default function Comments() {
    const { setApi } = useCarouselApiStore(useShallow((state) => ({
        setApi: state.setApi
    })))
    const cardStyle = {
        even: "bg-primary text-white",
        odd: "bg-tertiary !text-primary"
    }
    return (
        <Carousel plugins={[Autoplay({ delay: 10000 })]} opts={{ loop: true, align: "start" }} className="w-full h-full right-0" setApi={setApi}>
            <CarouselContent className="h-full">
                {commentLists.map((comment, i) => (
                    <CarouselItem key={i} className='basis-1/3 sm:basis-3/4 lg:basis-3/5'>
                        <SlideIn transition={{ duration: 0.3, delay: 0.1 }} viewport={{ once: false }}>
                            <Card className={`h-[200px] sm:h-[230px] lg:h-[250px] !border-none ${(i + 1) % 2 === 0 ? cardStyle.even : cardStyle.odd}`}>
                                <CardContent className="h-full flex flex-col justify-between py-3">
                                    <p className='text-sm sm:text-base line-clamp-4 sm:line-clamp-5 lg:line-clamp-none text-justify'>{comment.text}</p>
                                    <h2>{comment.name},{comment.age}</h2>
                                </CardContent>
                            </Card>
                        </SlideIn>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

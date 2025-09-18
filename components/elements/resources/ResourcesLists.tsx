import SlideIn from '@/components/motion/SlideIn'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'

export default function ResourcesLists() {
    const resources = [
        {
            title: "Articles & Guides",
            description: "Practical tips on stress management, mindfulness, and emotional resilience.",
            ctaColor: "#EFC01D"
        },
        {
            title: "Meditation & Relaxation",
            description: "Audio sessions for guided meditation and deep breathing exercises.",
            ctaColor: "#4CCBBB"
        },
        {
            title: "Webinars & Workshops",
            description: "Live and recorded sessions with mental health professionals.",
            ctaColor: "#F39CAC"
        },
    ]

    return (
        <ul className='grid grid-cols-1 sm:grid-cols-3 w-full gap-5 justify-items-center items-stretch'>
            {
                resources.map((resource, i) => (
                    <li className='h-full' key={i}>
                        <SlideIn className='h-full' transition={{duration: 0.5,delay: (i + 1) / 10 }}>
                            <Card className='h-full text-primary rounded-3xl w-full lg:w-5/6 flex items-center mx-auto xl:m-0'>
                                <div className='h-full xl:w-4/5 flex flex-col justify-between items-center text-center gap-10'>
                                    <section className='flex flex-col gap-3'>
                                        <CardHeader className='text-2xl lg:text-3xl font-semibold'>{resource.title}</CardHeader>
                                        <CardContent className='text-sm lg:text-base'>{resource.description}</CardContent>
                                    </section>
                                    <CardFooter>
                                        <Button style={{ backgroundColor: resource.ctaColor }}>Explore</Button>
                                    </CardFooter>
                                </div>
                            </Card>
                        </SlideIn>
                    </li>
                ))
            }
        </ul>
    )
}

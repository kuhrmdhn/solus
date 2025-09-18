import SectionContainer from '@/components/atoms/SectionContainer'
import SectionHeading from '@/components/atoms/SectionHeading'
import SectionParagraph from '@/components/atoms/SectionParagraph'
import FadeIn from '@/components/motion/FadeIn'
import SlideIn from '@/components/motion/SlideIn'
import TextReveal from '@/components/motion/TextReveal'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
    return (
        <FadeIn>
            <SectionContainer className='!h-[calc(100dvh-6rem)] max-h-[500px] lg:max-h-[600px] xl:!h-[calc(100dvh-6rem)] text-primary flex justify-center items-center bg-tertiary rounded-4xl overflow-hidden relative'>
                <SlideIn direction='toRight' className='h-[45%] bottom-0 lg:h-full w-fit absolute left-0'>
                    <Image width={1080} height={1080} className='h-full w-fit' src="/images/illustration/Illustration_2.png" alt="Hero image illustration 1" />
                </SlideIn>
                <SlideIn direction="toLeft" className='h-[45%] bottom-0 lg:h-full w-fit absolute right-0'>
                    <Image width={1080} height={1080} className='h-full w-fit' src="/images/illustration/Illustration_1.png" alt="Hero image illustration 1" />
                </SlideIn>
                <div className='w-5/6 lg:w-2/5 flex flex-col gap-7 lg:gap-10 items-center relative z-10'>
                    <section className='flex flex-col gap-3 text-center'>
                        <SectionHeading>
                            <TextReveal text="Support for Your" />
                            <TextReveal text="Mental Well-being" />
                        </SectionHeading>
                        <SectionParagraph>Connect with licensed therapists, counselors, <br className='hidden lg:block' />and wellness coaches to support your journey.</SectionParagraph>
                    </section>
                    <SlideIn transition={{ delay: 0.6, duration: 0.7 }}>
                        <Button>Get Started</Button>
                    </SlideIn>
                </div>
            </SectionContainer>
        </FadeIn>
    )
}

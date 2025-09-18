import SectionContainer from '@/components/atoms/SectionContainer'
import SectionHeading from '@/components/atoms/SectionHeading'
import SectionParagraph from '@/components/atoms/SectionParagraph'
import SectionTitle from '@/components/atoms/SectionTitle'
import React from 'react'
import MindfulnessAndMeditation from './MindfulnessAndMeditation'
import OneOnOneTherapist from './OneOnOneTherapist'
import WellnessCoaching from './WellnessCoaching'
import TextReveal from '@/components/motion/TextReveal'
import SlideIn from '@/components/motion/SlideIn'

export default function ServicesSection() {
    return (
        <SectionContainer className='!h-fit flex flex-col items-center gap-10 overflow-hidden'>
            <div className='text-center'>
                <SectionTitle>SERVICES</SectionTitle>
                <SectionHeading>
                    <TextReveal text="Your Path to" />
                </SectionHeading>
                <SectionHeading>
                    <TextReveal text="Well-being" />
                </SectionHeading>
                <SectionParagraph>Discover expert guidance for a healthier <br />mind and balanced life.</SectionParagraph>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-5 xl:gap-0 w-full'>
                <MindfulnessAndMeditation />
                <OneOnOneTherapist />
            </div>
            <SlideIn className='sm:max-h-[450px] xl:h-[50dvh] w-full ' direction='toTop'>
                <WellnessCoaching />
            </SlideIn>
        </SectionContainer>
    )
}

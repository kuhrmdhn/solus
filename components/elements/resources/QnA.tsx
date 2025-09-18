import SectionHeading from '@/components/atoms/SectionHeading'
import SectionParagraph from '@/components/atoms/SectionParagraph'
import SectionTitle from '@/components/atoms/SectionTitle'
import FadeIn from '@/components/motion/FadeIn'
import SlideIn from '@/components/motion/SlideIn'
import TextReveal from '@/components/motion/TextReveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'
import React from 'react'

export default function QnA() {
    const QnALists = [
        {
            id: 1,
            question: "How do I book a therapy session?",
            answer: "You can book a session by choosing your preferred therapist and time directly through our platform. Once confirmed, your appointment will be scheduled instantly."
        },
        {
            id: 2,
            question: "Are online sessions available?",
            answer: "Yes, we provide both in-person and online sessions. You can access support from home or any private space."
        },
        {
            id: 3,
            question: "What’s the difference between therapy and coaching?",
            answer: "Therapy helps with mental health concerns, emotional challenges, and healing past experiences. Coaching focuses on future goals, skill-building, and personal growth."
        },
        {
            id: 4,
            question: "Do I need a subscription to access services?",
            answer: "No subscription is required to get started. You may book single sessions or choose flexible plans for ongoing support."
        },
        {
            id: 5,
            question: "Can I switch therapists if I don’t feel the right connection?",
            answer: "Yes, you can switch therapists anytime. We encourage you to find the professional you feel most comfortable with."
        },
        {
            id: 6,
            question: "Is my information and session history kept confidential?",
            answer: "Yes, all information is kept strictly confidential. We follow professional ethics and data protection standards."
        }
    ]

    return (
        <div className='w-full h-full flex flex-col sm:flex-row items-stretch justify-between gap-5'>
            <section className='lg:w-1/2 flex-1 flex flex-col justify-between'>
                <div className='flex flex-col gap-5 text-start'>
                    <SectionTitle>NEED HELP?</SectionTitle>
                    <SectionHeading>
                        <TextReveal text="Frequently" />
                        <TextReveal text="Asked Questions" />
                    </SectionHeading>
                    <SectionParagraph>Find answers to common questions about <br />our services, therapy, and mental well- <br />being.</SectionParagraph>
                </div>
                <FadeIn className='h-52 lg:h-72 hidden sm:flex justify-center items-center bg-tertiary rounded-3xl'>
                    <Image className='w-3/5 lg:w-1/2 -translate-y-1/5' src="/images/illustration/Illustration_4.png" alt='QnA Illustration' width={1080} height={1080} />
                </FadeIn>
            </section>
            <Accordion className='h-full sm:w-1/2 lg:w-2/5 flex flex-1 flex-col gap-5 lg:pt-[20%]' type='single' collapsible>
                {
                    QnALists.map((qna, i) => (
                        <SlideIn className='w-full' key={i} transition={{ duration: 0.5, delay: (i + 1) / 10 }}>
                            <AccordionItem className='!w-full text-start bg-white px-4 rounded-2xl' value={`QnA-${qna.id}`}>
                                <AccordionTrigger className='text-base xl:text-lg text-primary'>{qna.question}</AccordionTrigger>
                                <AccordionContent className='text-sm xl:text-base text-primary'>{qna.answer}</AccordionContent>
                            </AccordionItem>
                        </SlideIn>
                    ))
                }
            </Accordion>
        </div>
    )
}

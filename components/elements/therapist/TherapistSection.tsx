import SectionContainer from '@/components/atoms/SectionContainer'
import SectionHeading from '@/components/atoms/SectionHeading'
import SectionParagraph from '@/components/atoms/SectionParagraph'
import SectionTitle from '@/components/atoms/SectionTitle'
import SlideIn from '@/components/motion/SlideIn'
import TextReveal from '@/components/motion/TextReveal'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function TherapistSection() {
  return (
    <SectionContainer className='flex justify-around items-center overflow-hidden'>
      <div className='w-full sm:w-2/5 aspect-square flex flex-col gap-7'>
        <SectionTitle>HOW IT WORKS</SectionTitle>
        <SectionHeading>
          <TextReveal text="We Help You" />
          <TextReveal text="Prioritize Your" />
          <TextReveal text="Mental Health" />
        </SectionHeading>
        <SectionParagraph>Browse therapists, book a session, and start your healing journey with trusted professionals.</SectionParagraph>
        <SlideIn transition={{ delay: 0.6, duration: 0.7 }}>
          <Button className='w-fit'>Find A Therapist</Button>
        </SlideIn>
      </div>
      <SlideIn direction='toTop' transition={{ delay: 0.9, duration: 0.7 }} className='w-2/5 aspect-square rounded-3xl bg-primary hidden sm:flex items-end justify-center'>
        <Image width={1080} height={1080} className='size-4/5 ' src="/images/illustration/Illustration_3.png" alt='Therapist section illustration' />
      </SlideIn>
    </SectionContainer>
  )
}

import SectionHeading from '@/components/atoms/SectionHeading'
import SectionParagraph from '@/components/atoms/SectionParagraph'
import SectionTitle from '@/components/atoms/SectionTitle'
import FadeIn from '@/components/motion/FadeIn'
import SlideIn from '@/components/motion/SlideIn'
import TextReveal from '@/components/motion/TextReveal'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Community() {
    return (
        <FadeIn className='w-full'>
            <Card className='bg-white rounded-3xl w-full sm:!flex-row justify-between !p-0'>
                <div className='flex flex-col sm:justify-center items-center sm:items-start text-start gap-5 lg:w-2/5 py-10 sm:pl-10 xl:pl-15'>
                    <SectionTitle>Community</SectionTitle>
                    <SectionHeading>
                        <TextReveal text="You’re Not Alone" />
                        <TextReveal text="on This Journey" />
                    </SectionHeading>
                    <SectionParagraph>
                        Connect with others, share experiences, <br /> and find encouragement in a safe, <br /> supportive space.
                    </SectionParagraph>
                    <SlideIn direction='toTop'>
                        <Button>Join The Community</Button>
                    </SlideIn>
                </div>
                <FadeIn transition={{ delay: 0.7, duration: 1 }} className='sm:w-1/2 lg:w-3/5 flex items-end justify-end'>
                    <Image src="/images/illustration/Illustration_11.png" alt="Community Illustration" height={1080} width={1080} className='h-11/12 w-fit' />
                </FadeIn>
            </Card>
        </FadeIn>
    )
}

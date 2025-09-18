import SectionContainer from '@/components/atoms/SectionContainer'
import SectionHeading from '@/components/atoms/SectionHeading'
import SectionParagraph from '@/components/atoms/SectionParagraph'
import SectionTitle from '@/components/atoms/SectionTitle'
import TextReveal from '@/components/motion/TextReveal'
import { Card } from '@/components/ui/card'
import Contacts from './Contacts'
import ContactForm from './ContactForm'

export default function ContactSection() {
    return (
        <SectionContainer className='!h-fit flex flex-col gap-15'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <SectionTitle>GET IN TOUCH</SectionTitle>
                <SectionHeading>
                    <TextReveal text='We’re Here to' />
                    <TextReveal text='Support You' />
                </SectionHeading>
                <SectionParagraph>
                    Whether you have questions, need help getting <br />started, or want to learn more — reach out anytime.
                </SectionParagraph>
            </div>
            <Card className='h-fit xl:h-[60dvh] w-full px-3 sm:!flex-row justify-center items-stretch gap-7 bg-white rounded-3xl !border-none'>
                <Contacts/>
                <ContactForm/>
            </Card>
        </SectionContainer>
    )
}

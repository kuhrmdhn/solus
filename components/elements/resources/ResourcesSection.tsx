import SectionContainer from '@/components/atoms/SectionContainer'
import SectionHeading from '@/components/atoms/SectionHeading'
import SectionParagraph from '@/components/atoms/SectionParagraph'
import SectionTitle from '@/components/atoms/SectionTitle'
import TextReveal from '@/components/motion/TextReveal'
import Community from './Community'
import ResourcesLists from './ResourcesLists'
import QnA from './QnA'

export default function ResourcesSection() {
    return (
        <SectionContainer className='!h-fit w-full flex flex-col items-center text-center gap-15'>
            <div>
                <SectionTitle>EXPLORE & LEARN</SectionTitle>
                <SectionHeading>
                    <TextReveal text="Resources for" />
                    <TextReveal text="Your Well-being" />
                </SectionHeading>
                <SectionParagraph>
                    Explore expert insights, self-care guides, <br />and tools to support your mental health.
                </SectionParagraph>
            </div>
            <ResourcesLists />
            <Community />
            <QnA />
        </SectionContainer>
    )
}

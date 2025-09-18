"use client"
import SectionContainer from "@/components/atoms/SectionContainer"
import SectionHeading from "@/components/atoms/SectionHeading"
import SectionParagraph from "@/components/atoms/SectionParagraph"
import SectionTitle from "@/components/atoms/SectionTitle"
import TextReveal from "@/components/motion/TextReveal"
import { Button } from "@/components/ui/button"
import { useCarouselApiStore } from "@/store/useCarouselApiStore"
import { useShallow } from "zustand/shallow"
import Comments from "./Comments"
import PartnerMarquee from "./PartnerMarquee"
import { ArrowLeft, ArrowRight } from "lucide-react"
import FadeIn from "@/components/motion/FadeIn"

export default function CarouselDemo() {
    const { api } = useCarouselApiStore(useShallow((state) => ({
        api: state.api,
    })))

    function next() {
        api?.scrollNext()
    }

    function prev() {
        api?.scrollPrev()
    }

    return (
        <SectionContainer className="!h-fit w-full flex flex-col gap-10 overflow-x-hidden">
            <section className="flex flex-col sm:flex-row sm:justify-between items-center gap-5 xl:gap-0">
                <FadeIn className="flex flex-col gap-5">
                    <SectionTitle>Testimonials</SectionTitle>
                    <SectionHeading>
                        <TextReveal text="What Our Clients" />
                        <TextReveal text="Are Saying" />
                    </SectionHeading>
                    <SectionParagraph>
                        Positive experiences from users who have benefited from therapy or wellness programs.
                    </SectionParagraph>
                    <section className="hidden sm:flex gap-3">
                        <Button variant={"outline"} className="!border-none !w-fit !bg-white hover:!bg-primary hover:!text-white duration-300" onClick={prev}><ArrowLeft /></Button>
                        <Button variant={"outline"} className="!border-none !w-fit !bg-white hover:!bg-primary hover:!text-white duration-300" onClick={next}><ArrowRight /></Button>
                    </section>
                </FadeIn>
                <div className="sm:hidden h-fit w-full">
                    <PartnerMarquee />
                </div>
                <div className="h-fit sm:w-[55%] lg:w-1/2">
                    <Comments />
                </div>
            </section>
            <div className="hidden sm:block h-fit">
                <PartnerMarquee />
            </div>
        </SectionContainer>
    )
}

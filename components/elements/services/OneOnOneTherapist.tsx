import SlideIn from '@/components/motion/SlideIn'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function OneOnOneTherapist() {
  return (
    <SlideIn direction='toLeft' className='min-h-[300px] xl:w-[48%] xl:h-[60dvh] text-primary rounded-3xl bg-white pl-10 flex justify-center items-center'>
      <section className='xl:w-1/2 h-full flex flex-col justify-center gap-5'>
        <h1 className='text-4xl font-bold'>One-on-One Therapy</h1>
        <p>Virtual and in-person therapy sessions with licensed professionals.</p>
        <Button className='!border-primary !bg-transparent !w-fit' variant={"outline"}>Learn More</Button>
      </section>
    </SlideIn>
  )
}

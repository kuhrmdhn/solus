import SlideIn from '@/components/motion/SlideIn'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function MindfulnessAndMeditation() {
  return (
    <SlideIn direction='toRight' className='bg-tertiary min-h-[300px] xl:w-[48%] xl:h-[60dvh] py-7 xl:p-0 text-primary relative rounded-3xl'>
      <section className='w-4/5 xl:w-3/5 h-full flex flex-col gap-5 justify-center pl-10'>
        <h1 className='text-4xl font-bold'>Mindfulness & Meditation</h1>
        <p>Guided meditation sessions and stress management techniques.</p>
        <Button className='!border-primary !bg-transparent !w-fit' variant={"outline"}>Learn More</Button>
      </section>
      <Image
        className='absolute right-5 xl:right-15 top-1/2 -translate-y-1/2 w-2/5 xl:w-fit'
        src="/images/illustration/Illustration_10.png"
        alt='Mindfulness & Meditation Image'
        width={1080}
        height={1080}
      />
    </SlideIn>
  )
}

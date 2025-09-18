import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function WellnessCoaching() {
    return (
        <div className='h-full w-full py-7 xl:p-0 text-primary flex flex-col-reverse sm:flex-row justify-between gap-7 xl:gap-0 rounded-3xl bg-white'>
            <section className='w-full sm:w-3/5 h-full px-6 xl:pl-12 flex flex-col justify-center gap-7'>
                <h1 className='text-4xl font-bold'>Wellness Coaching</h1>
                <div className='flex flex-col gap-4'>
                    <p>Personalized guidance to help you build healthier habits, <br className='hidden xl:block' /> manage stress, and achieve balance in all areas of your life.</p>
                    <p>Our wellness coaches support you in creating sustainable <br className='hidden xl:block' /> routines for mental, emotional, and physical well-being.</p>
                </div>
                <Button className='w-fit'>Learn More</Button>
            </section>
            <Image className='h-full w-full sm:w-1/2 lg:w-fit aspect-auto' src="/images/illustration/Illustration_6.png" alt='Wellness Coaching Image' width={1080} height={1080} />
        </div>
    )
}

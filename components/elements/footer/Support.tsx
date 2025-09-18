import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export default function Support() {
    return (
        <Card className='w-full xl:w-[48%] bg-primary h-[350px]'>
            <CardContent className='w-full h-full flex flex-col justify-between !p-0 !px-10 relative'>
                <h1 className='inline-block w-1/2 text-4xl text-white'>
                    Find <br />Support, <br />Guidance, <br />and Balance.
                </h1>
                <Button className='!bg-white !text-primary !w-full'>Find Support now</Button>
                <Image src="/images/illustration/Illustration_7.png" alt="Support Illustration" height={1080} width={1080} className='absolute right-0 w-fit h-2/3' />
            </CardContent>
        </Card>
    )
}

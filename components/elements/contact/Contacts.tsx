import SectionHeading from '@/components/atoms/SectionHeading'
import Image from 'next/image'
import React from 'react'

export default function Contacts() {
    const contactInformations = [
        {
            key: "Email",
            value: "support@solus.com"
        },
        {
            key: "Phone",
            value: "+1 (123) 456-7890"
        },
        {
            key: "Address",
            value: "123 Wellness Way, Calm City, CA 90210"
        }
    ]
    const contactLogos = ["linkedin", "facebook", "instagram", "whatsapp"]

    return (
        <div className='h-full w-full sm:w-2/5 flex flex-col justify-between gap-5 text-primary'>
            <SectionHeading className='!text-2xl'>Contact Details</SectionHeading>
            <div className='h-full flex flex-col gap-7'>
                <ul className='flex flex-col gap-3'>
                    {
                        contactInformations.map((contact, i) => (
                            <li key={i}>
                                <p>
                                    <span className='font-semibold'>{contact.key}: </span>
                                    {contact.value}
                                </p>
                            </li>
                        ))
                    }
                </ul>
                <ul className='flex gap-3'>
                    {
                        contactLogos.map((logo, i) => (
                            <li key={i}>
                                <Image width={24} height={24} alt={`${logo}-logo`} src={`/images/icon/${logo}.svg`} />
                            </li>
                        ))
                    }
                </ul>
                <p className='mt-auto'>We typically respond within 12 hours.</p>
            </div>
        </div>)
}

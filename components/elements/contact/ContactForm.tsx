"use client"
import SectionHeading from '@/components/atoms/SectionHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'

export default function ContactForm() {
    const [formState, setFormState] = useState({ email: "", message: "" })
    const inputData = [
        {
            name: "email",
            type: "email",
            value: formState.email,
            label: "Email",
            placeholder: "Email"
        },
        {
            name: "message",
            type: "text",
            value: formState.message,
            label: "Message",
            placeholder: "Message"
        }
    ]

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.target
        setFormState((state) => ({ ...state, [name]: value }))
    }
    return (
        <div className='h-full w-full sm:w-1/2 lg:w-2/5 flex flex-col justify-between'>
            <SectionHeading className='!text-2xl'>Send Us a Message</SectionHeading>
            <form className='bg-tertiary rounded-4xl h-4/5 w-full p-5 flex flex-col justify-center items-center gap-7'>
                {
                    inputData.map((input, i) => (
                        <div key={i} className='w-full flex flex-col gap-2'>
                            <Label htmlFor={input.label}>{input.label}</Label>
                            <Input id={input.label} className='!p-0 !bg-transparent rounded-none !border-transparent !border-b-2 !border-b-primary' onChange={(e) => handleInputChange(e)} placeholder={input.placeholder} value={input.value} name={input.name} type={input.type} />
                        </div>
                    ))
                }
                <Button className='w-full'>Send Message</Button>
            </form>
        </div>)
}

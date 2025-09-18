"use client"
import { Card, CardContent } from '@/components/ui/card'
import Logo from '../navbar/Logo'
import { navigation } from '../navbar/Navbar'

export default function ContactAndInformation() {
    const navigations = navigation.slice(1)
    const socialMedia = ["Instagram", "Facebook", "YouTube", "LinkedIn"]
    const services = ["Terms of use", "Privacy Policy"]
    return (
        <Card className='w-full xl:w-[48%] h-[350px] bg-white text-primary'>
            <CardContent className='!p-10 flex flex-col gap-7'>
                <Logo />
                <div className='grid grid-cols-3 '>
                    <ul>
                        {
                            navigations.map((nav, i) => (
                                <li key={i}>
                                    <p>{nav.text}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            socialMedia.map((media, i) => (
                                <li key={i}>
                                    <p>{media}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            services.map((service, i) => (
                                <li key={i}>
                                    <p>{service}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <h6 className='inline-flex gap-1'>
                        Design by
                        <a className='font-semibold' href="https://www.figma.com/@omdaaverchenko">@omdaaverchenko</a>
                        on
                        <a className='font-semibold' href="https://www.figma.com/community/file/1490253901740476987">Figma</a>
                    </h6>
            </CardContent>
        </Card>
    )
}

import ContactAndInformation from './ContactAndInformation'
import Support from './Support'

export default function Footer() {
    return (
        <footer className='h-fit w-full px-3 flex flex-col lg:flex-row gap-7 justify-between items-center'>
            <ContactAndInformation />
            <Support />
        </footer>
    )
}

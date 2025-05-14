import Image from 'next/image'
import SearchInput from '@/components/search-input'

export default function Navbar() {
    return (
        <nav className='bg-background px-4 h-14 flex items-center border-b gap-2'>
            <a href='/' className='flex items-center justify-center'>
                <Image
                    src='/hotkeys.svg'
                    alt='Logo'
                    width={100}
                    height={100}
                    className='size-5 mr-[1px]'
                    priority
                />
                <h1 className='font-bold'>OTKEYS</h1>
            </a>
            <div className='flex-1'></div>
            <SearchInput />
        </nav>
    )
}
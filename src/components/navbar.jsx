import Image from 'next/image'
import SearchInput from '@/components/search-input'
import { FaGithub } from "react-icons/fa"
import Link from 'next/link'

export default function Navbar({ softwares }) {
    return (
        <nav className='bg-background px-4 h-14 flex items-center gap-2 max-w-5xl mx-auto'>
            <a href='/' className='flex items-center justify-center gap-1'>
                <Image
                    src='/hotkeys.svg'
                    alt='Logo'
                    width={100}
                    height={100}
                    className='size-7'
                    priority
                />
                <h1 className='font-extrabold tracking-tight text-accent text-lg'>HOTKEYS</h1>
            </a>
            <div className='flex-1' />
            <SearchInput softwares={softwares} />
            <Link href="https://github.com/malay77patra/hotkeys">
                <FaGithub className="size-6" />
            </Link>
        </nav>
    )
}

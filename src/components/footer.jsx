import React from 'react'
import Image from 'next/image'
import { buttonVariants } from './ui/button'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-foreground/5 text-foreground/80 mt-24">
            <div className="max-w-7xl mx-auto px-8 py-24">
                <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto md:text-left">
                        <a
                            aria-current="page"
                            className="flex gap-2 justify-start items-center"
                            href="/#"
                        >
                            <Image
                                alt="Hotkeys logo"
                                width={100}
                                height={100}
                                className="size-6"
                                src="/hotkeys.svg"
                            />
                            <strong className="font-extrabold tracking-tight text-accent md:text-lg">HOTKEYS</strong>
                        </a>
                        <p className="mt-3 text-sm">
                            Master keyboard shortcuts with ease. Discover, learn, and use hotkeys faster than ever. Boost your productivity. No more guessing. No more clicking. Just pure flow.
                        </p>
                        <p className="mt-3 text-sm text-foreground/50 mb-4">
                            Copyright © 2025 - All rights reserved
                        </p>
                        <Link className={buttonVariants()} href="https://nextjs.org/">
                            <span>Built with</span>
                            <Image
                                alt="Next.js logo"
                                width={100}
                                height={100}
                                className="size-5"
                                src="/next.svg"
                            />
                        </Link>
                    </div>

                    <div className="flex-grow flex justify-center -mb-10 md:mt-0 mt-10 text-center md:pl-24">

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <div className="footer-title font-semibold text-foreground tracking-widest text-sm md:text-left mb-3">LINKS</div>
                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <a href="https://buymeacoffee.com/malaypatra" target="_blank" rel="noopener noreferrer" className="link link-hover">Support</a>
                                <a href="mailto:malay77patra@gmail.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Contact</a>
                                <a href="https://github.com/malay77patra/hotkeys" target="_blank" rel="noopener noreferrer" className="link link-hover">Github</a>
                                <a href="https://x.com/malay77patra" target="_blank" rel="noopener noreferrer" className="link link-hover">Twitter</a>
                                <a href="https://www.linkedin.com/in/malaypatra/" target="_blank" rel="noopener noreferrer" className="link link-hover">Linkedin</a>
                            </div>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <div className="footer-title font-semibold text-foreground tracking-widest text-sm md:text-left mb-3">LEGAL</div>
                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <a href="/privacy-policy" className="link link-hover">Privacy policy</a>
                            </div>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <div className="footer-title font-semibold text-foreground tracking-widest text-sm md:text-left mb-3">MORE</div>
                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <a href="https://malaypatrav2.vercel.app" target="_blank" rel="noopener noreferrer" className="link link-hover">Portfolio</a>
                                <a href="https://flamecoders.vercel.app" target="_blank" rel="noopener noreferrer" className="link link-hover">Flamecoders</a>
                                <a href="https://physoxy.vercel.app" target="_blank" rel="noopener noreferrer" className="link link-hover">Physoxy</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-12 md:mt-16 text-sm">
                    <div className="flex flex-row justify-start items-center gap-2">
                        <Image
                            alt="Malay Patra"
                            width={100}
                            height={100}
                            className="size-8 rounded-full"
                            src="/malay.jpeg"
                        />
                        <div className="text-left leading-relaxed">
                            Hey Curious 👋 I'm{" "}
                            <a href="https://malaypatrav2.vercel.app" target="_blank" rel="noreferrer" className="link text-foreground font-medium">Malay</a>,
                            the creator of HOTKEYS. You can follow me on{" "}
                            <a href="https://www.linkedin.com/in/malaypatra/" target="_blank" rel="noreferrer" className="link text-foreground font-medium">Linkedin.</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
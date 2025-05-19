import React from 'react'
import Image from 'next/image'
import { Marquee } from '@/components/magicui/marquee'
import { getAllSoftwares } from '@/lib/render'
import LikeCount from '@/components/like-count'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SiBuymeacoffee } from "react-icons/si"
import { Button } from '@/components/ui/button'

export default function Page() {
  const softwares = getAllSoftwares()

  return (
    <>
      <div className="px-8 py-12 lg:py-32 flex items-center justify-center flex-col gap-6 lg:gap-8">
        <div className="flex items-center justify-center flex-col gap-2">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
            Learn the{' '}
            <span className="relative highlight-box text-accent-foreground">Hotkeys</span>
          </h1>
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight flex items-center gap-2">
            kill your
            <Image
              height={100}
              width={100}
              alt="Mouse icon"
              src="/mouse.svg"
              className="size-10 lg:size-14"
            />
          </h1>
        </div>
        <p className="text-md lg:text-lg text-center">Elevate your productivity — ditch the mouse, master the keys.</p>
        <div className="relative flex items-center justify-center max-w-128 w-full">
          <Marquee pauseOnHover className="[--duration:5s]">
            {softwares.map((software, idx) => {
              if (software.logo) {
                return (
                  <Image
                    key={idx}
                    src={software.logo}
                    alt={software.name}
                    width={100}
                    height={100}
                    className=" size-8 lg:size-10"
                  />
                )
              } else {
                return null
              }
            })}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="text-foreground/50">Tap to kill &#x2192;</span>
          <LikeCount />
        </div>
      </div>
      <div>
        <div className="py-24 px-8 max-w-7xl mx-auto flex gap-12 flex-col lg:flex-row">
          <div className="flex flex-col text-left basis-1/2">
            <p className="inline-block font-semibold text-accent mb-4">FAQ</p>
            <p className="text-3xl md:text-4xl font-extrabold text-foreground/80">Frequently Asked Questions</p>
          </div>
          <Accordion type="single" collapsible className="basis-1/2 [&_a]:text-blue-800 [&_a:hover]:text-blue-600">

            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg lg:text-xl">Why HOTKEYS?</AccordionTrigger>
              <AccordionContent>
                The vision behind HOTKEYS is to bring all software shortcuts into one place — so you never have to search multiple sites or dig through help menus again.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg lg:text-xl">Is HOTKEYS free to use?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Yes, HOTKEYS is completely free and open source — no subscriptions, no ads, no sign-ups. If you love it and want to support development, you can buy me a coffee here -</p>
                <Button className="bg-yellow-400 hover:bg-yellow-500" asChild>
                  <a href="https://www.buymeacoffee.com/malaypatra" target="_blank" rel="noopener noreferrer" className="text-black!">
                    Buy me a coffee{" "}
                    <SiBuymeacoffee />
                  </a>
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg lg:text-xl">Can I contribute to HOTKEYS?</AccordionTrigger>
              <AccordionContent>
                Absolutely! You can add new shortcuts, improve existing ones, or suggest features. Just follow the simple steps in the <a href="https://github.com/malay77patra/hotkeys">README</a> and submit a pull request on GitHub.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </>
  )
}

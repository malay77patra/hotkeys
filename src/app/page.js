import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Marquee } from '@/components/magicui/marquee'
import { getAllSoftwares } from '@/lib/render'

export default function Page() {
  const softwares = getAllSoftwares()

  return (
    <div className="px-8 py-12 lg:py-32 flex items-center justify-center flex-col gap-4 lg:gap-6">
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
          Learn the{' '}
          <span className="relative highlight-box text-accent-foreground">Hotkeys</span>
        </h1>
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight flex items-center gap-2">
          Throw your
          <Image
            height={100}
            width={100}
            alt="Mouse icon"
            src="/mouse.svg"
            className="size-10 lg:size-14 -rotate-45"
          />
        </h1>
      </div>
      <p className="text-md lg:text-lg text-center">Elevate your productivity — ditch the mouse, <br /> master the keys.</p>
      <div className="relative flex items-center justify-center max-w-128 w-full">
        <Marquee className="[--duration:5s]">
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
      <Button className="h-12 px-12">Explore Now</Button>
    </div>
  )
}
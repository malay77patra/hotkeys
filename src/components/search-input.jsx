"use client"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function SearchInput({ softwares }) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <div className="border w-56 h-8 flex items-center justify-between p-2 pr-1 rounded-sm cursor-pointer hover:bg-muted/50 transition-colors active:ring active:bg-muted/50" onClick={() => setOpen(true)}>
                <span className="text-sm font-medium text-muted-foreground">Search hotkeys...</span>
                <kbd className="border px-1 rounded-sm">
                    <span className="text-xs text-muted-foreground">⌘k</span>
                </kbd>
            </div>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search for software..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Matches">
                        {softwares.map((s) => (
                            <CommandItem key={s.slug}>
                                <Link href={`/${s.slug}`} className="w-full flex items-center gap-2 font-medium" onClick={() => setOpen(false)}>
                                    {s.logo && (
                                        <Image
                                            height={100}
                                            width={100}
                                            alt="Logo"
                                            src={s.logo}
                                            className="size-4"
                                        />
                                    )}
                                    {s.name}
                                </Link>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}

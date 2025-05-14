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


export default function SearchInput() {
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
                <span className="text-sm  font-medium text-muted-foreground">Search hotkeys...</span>
                <kbd className="border px-1 rounded-sm">
                    <span className="text-xs text-muted-foreground">⌘k</span>
                </kbd>
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search for software..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Matches">
                        <CommandItem>
                            <span>VS Code</span>
                        </CommandItem>
                        <CommandItem>
                            <span>Google chrome</span>
                        </CommandItem>
                        <CommandItem>
                            <span>Youtube Web</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
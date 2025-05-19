'use client'

import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useEffect } from 'react'

function getOSCode(window) {
    let OSCode = 'unknown';
    if (window.navigator.appVersion.indexOf('Win') !== -1) { OSCode = 'win'; }
    if (window.navigator.appVersion.indexOf('Mac') !== -1) { OSCode = 'mac'; }
    if (window.navigator.appVersion.indexOf('X11') !== -1) { OSCode = 'unix'; }
    if (window.navigator.appVersion.indexOf('Linux') !== -1) { OSCode = 'linux'; }

    return OSCode;
}

export default function OSSelector({ os }) {
    const router = useRouter()

    const handleOSChange = (selectedOS) => {
        const currentPath = window.location.pathname
        router.replace(`${currentPath}?os=${selectedOS}`)
    }

    const getOSDisplayName = (osCode) => {
        switch (osCode) {
            case 'win': return 'Windows'
            case 'mac': return 'macOS'
            case 'linux': return 'Linux'
            default: return 'Select OS'
        }
    }

    useEffect(() => {
        const currentOS = getOSCode(window)
        if (!os) {
            handleOSChange(currentOS)
        }
    }, [])

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
                Select Operating System:
            </label>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        {getOSDisplayName(os)}
                        <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => handleOSChange('win')}>
                        Windows
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOSChange('mac')}>
                        macOS
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOSChange('linux')}>
                        Linux
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
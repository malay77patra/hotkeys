'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Pointer } from "@/components/magicui/pointer"
import BleedButton from './bleed-button'

export default function LikeCount() {
    const [likes, setLikes] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchLikes = async () => {
            const res = await fetch('/api/likes')
            const data = await res.json()
            setLikes(data.likes)
            setLoading(false)
        }

        fetchLikes()
    }, [])

    const handleLike = async () => {
        const res = await fetch('/api/likes', { method: 'POST' })
        const data = await res.json()
        setLikes(data.likes)
    }

    if (loading) return null

    return (
        <div className="flex items-center gap-2">
            <BleedButton
                onClick={handleLike}
            >
                <Image
                    src="/mouse.svg"
                    alt="Mouse icon"
                    width={24}
                    height={24}
                    className="size-10 lg:size-12 border p-2 rounded-sm active:bg-red-500/10 hover:bg-red-500/10"
                />
                <Pointer>
                    <span className="hidden [@media(hover:hover)]:block text-3xl">🔪</span>
                </Pointer>
            </BleedButton>
            <span className="text-lg font-medium">
                <span className="text-red-500">{likes}</span> mice killed.
            </span>
        </div>
    )
}

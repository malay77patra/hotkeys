'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const BleedButton = ({ children, onClick = () => { }, className, disabled = false }) => {
    const [balls, setBalls] = useState([])

    const handleClick = () => {
        const newBalls = Array.from({ length: 10 }, (_, i) => ({
            id: Date.now() + i,
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
        }))
        setBalls(newBalls)

        setTimeout(() => setBalls([]), 1000)
    }

    return (
        <div className="relative">
            <button
                onClick={() => {
                    handleClick()
                    onClick()
                }}
                className={cn("relative z-10 flex items-center justify-center", className)}
                disabled={disabled}
            >
                {children}
            </button>

            <AnimatePresence>
                {balls.map((ball) => (
                    <motion.div
                        key={ball.id}
                        initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        animate={{ x: ball.x, y: ball.y, opacity: 0, scale: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute w-4 h-4 bg-red-500 rounded-full top-1/2 left-1/2 z-99"
                        style={{ marginTop: -8, marginLeft: -8 }}
                    />
                ))}
            </AnimatePresence>
        </div>
    )
}

export default BleedButton

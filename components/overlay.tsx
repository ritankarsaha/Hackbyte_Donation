"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

type DeatilsOverlayProps = {
    isOpen: boolean
    onClose: () => void
    content: string
}

export function DetailsOverlay({
    isOpen,
    onClose,
    content,
}: DeatilsOverlayProps) {
    const variants = {
        open: { y: 0, opacity: 1 },
        closed: { y: "100%", opacity: 0 },
    }

    return (
        <motion.div
            className="fixed inset-0 backdrop-blur-xl flex items-center justify-center z-30"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 p-6 md:p-8 rounded-2xl shadow-lg max-w-lg w-full relative border border-gray-300">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                    onClick={onClose}
                    aria-label="Close overlay"
                >
                    <X size={24} />
                </button>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Information
                    </h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {content}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

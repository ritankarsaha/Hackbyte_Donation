"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BackgroundTriangles } from "@/components/background-triangles"
import { BackgroundTransition } from "@/components/background-transition"
import { BackgroundText } from "@/components/background-text"
import { X } from "lucide-react"
import { DetailsOverlay } from "@/components/overlay"

const leftNavItems = [
    {
        id: "l1",
        label: "About",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    About Hackbyte 3.0
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Join IIITDMJ&apos;s Programming Club for Hackbyte 3.0 in
                    April 2025! Following the success of Hackbyte 2.0 with{" "}
                    <span className="font-semibold">2400+ participants</span>{" "}
                    and a
                    <span className="font-semibold">
                        {" "}
                        Rs. 4,00,000 prize pool
                    </span>
                    , this sequel expands with new domains, workshops, and a
                    learning-centric format.
                </p>
            </div>
        ),
    },
    {
        id: "l2",
        label: "Stats",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Event Statistics
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/30 text-center">
                        <div className="text-3xl font-bold text-gray-800">
                            15+
                        </div>
                        <div className="text-sm text-gray-600">Partners</div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30 text-center">
                        <div className="text-3xl font-bold text-gray-800">
                            1500+
                        </div>
                        <div className="text-sm text-gray-600">
                            Registered Participants
                        </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30 text-center">
                        <div className="text-3xl font-bold text-gray-800">
                            500+
                        </div>
                        <div className="text-sm text-gray-600">
                            In-person Participants
                        </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30 text-center">
                        <div className="text-3xl font-bold text-gray-800">
                            100+
                        </div>
                        <div className="text-sm text-gray-600">Volunteers</div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "l3",
        label: "Contact",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Contact Information
                </h2>
                <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                        <svg
                            className="w-5 h-5 mt-1 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span className="text-gray-700">
                            IIITDM Jabalpur, Dumna Road, Jabalpur
                        </span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-5 h-5 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <div className="text-gray-700">
                                <div>Uttara Kamat: +91 9869261132</div>
                                <div>Akshay Behl: +91 9319674300</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-5 h-5 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <span className="text-gray-700">
                                theprogclub@iiitdmj.ac.in
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
]

const rightNavItems = [
    {
        id: "r1",
        label: "Benefits",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Partner Benefits
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/30">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Talent Recruitment
                        </h3>
                        <p className="text-sm text-gray-600">
                            Direct access to skilled tech talent
                        </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Brand Awareness
                        </h3>
                        <p className="text-sm text-gray-600">
                            Enhanced visibility in tech community
                        </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Product Development
                        </h3>
                        <p className="text-sm text-gray-600">
                            Innovative solutions to real problems
                        </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Community Outreach
                        </h3>
                        <p className="text-sm text-gray-600">
                            Connect with future tech leaders
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "r2",
        label: "Support",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Support Hackbyte 3.0
                </h2>
                <div className="p-6 rounded-lg bg-white/30">
                    <p className="text-gray-700 leading-relaxed">
                        Boost Hackbyte 3.0&apos;s success by supporting us
                        financially! As a community-driven event, your monetary
                        contribution will help us unlock its full potential,
                        delivering a richer experience for all participants.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: "r3",
        label: "Vision",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Our Vision
                </h2>
                <div className="p-6 rounded-lg bg-white/30 text-center">
                    <p className="text-xl font-medium text-gray-700 italic">
                        &quote;We think to innovate - Join us in making this
                        edition even greater than before!&quote;
                    </p>
                </div>
            </div>
        ),
    },
]

export default function Home() {
    const [overlayContent, setOverlayContent] = useState<JSX.Element>()
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)

    const handleNavItemClick = (item: { label: string; info: JSX.Element }) => {
        setOverlayContent(item.info)
        setIsOverlayOpen(true)
    }

    return (
        <main className="relative h-screen w-screen overflow-hidden max-h-screen bg-gray-900 flex items-center justify-center">
            <BackgroundTransition />
            <BackgroundTriangles />
            <BackgroundText />
            <div className="flex flex-col justify-between absolute h-full w-12 backdrop-blur-3xl left-0 top-0 bottom-0 border-r border-white/20 py-12 overflow-hidden">
                {leftNavItems.map((item) => (
                    <p
                        key={item.id}
                        className="-rotate-90 text-white font-bold text-lg cursor-pointer"
                        onClick={() => handleNavItemClick(item)}
                    >
                        {item.label}
                    </p>
                ))}
            </div>
            <div className="flex flex-col justify-between absolute h-full w-12 backdrop-blur-3xl right-0 top-0 bottom-0 border-l border-white/20 py-12 overflow-hidden">
                {rightNavItems.map((item) => (
                    <p
                        key={item.id}
                        className="rotate-90 text-white font-bold text-lg cursor-pointer"
                        onClick={() => handleNavItemClick(item)}
                    >
                        {item.label}
                    </p>
                ))}
            </div>

            <DetailsOverlay
                isOpen={isOverlayOpen}
                onClose={() => setIsOverlayOpen(false)}
                content={overlayContent}
            />
        </main>
    )
}

type OverlayProps = {
    isOpen: boolean
    onClose: () => void
    content: string
}

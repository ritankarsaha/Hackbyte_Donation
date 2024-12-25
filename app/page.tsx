"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundTriangles } from "@/components/background-triangles";
import { BackgroundTransition } from "@/components/background-transition";
import { BackgroundText } from "@/components/background-text";
import { X } from "lucide-react";

const leftNavItems = [
    {
        id: "l1",
        label: "About",
        info: "Join IIITDMJ's Programming Club for Hackbyte 3.0 in April 2025! Following the success of Hackbyte 2.0 with 2400+ participants and a Rs. 4,00,000 prize pool, this sequel expands with new domains, workshops, and a learning-centric format."
    },
    {
        id: "l2",
        label: "Stats",
        info: "• 15+ Partners\n• 1500+ Registered Participants\n• 500+ In-person Participants\n• 100+ Volunteers"
    },
    {
        id: "l3",
        label: "Contact",
        info: "Location: IIITDM Jabalpur, Dumna Road, Jabalpur\nContact: Uttara Kamat (+91 9869261132), Akshay Behl (+91 9319674300)\nEmail: theprogclub@iiitdmj.ac.in"
    }
];

const rightNavItems = [
    {
        id: "r1",
        label: "Benefits",
        info: "• Talent Recruitment\n• Brand Awareness\n• Product Development\n• Community Outreach"
    },
    {
        id: "r2",
        label: "Support",
        info: "Boost Hackbyte 3.0's success by supporting us financially! As a community-driven event, your monetary contribution will help us unlock its full potential, delivering a richer experience for all participants."
    },
    {
        id: "r3",
        label: "Vision",
        info: "We think to innovate - Join us in making this edition even greater than before!"
    }
];

export default function Home() {
    const [overlayContent, setOverlayContent] = useState("");
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleNavItemClick = (item: { label: string; info: string }) => {
        setOverlayContent(item.info);
        setIsOverlayOpen(true);
    };

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

            <Overlay
                isOpen={isOverlayOpen}
                onClose={() => setIsOverlayOpen(false)}
                content={overlayContent}
            />
        </main>
    );
}

type OverlayProps = {
    isOpen: boolean;
    onClose: () => void;
    content: string;
};

export function Overlay({ isOpen, onClose, content }: OverlayProps) {
    const variants = {
        open: { y: 0, opacity: 1 },
        closed: { y: "100%", opacity: 0 }
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
        >
            <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                    aria-label="Close overlay"
                >
                    <X />
                </button>
                <p>{content}</p>
            </div>
        </motion.div>
    );
}

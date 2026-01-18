'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Sun, ChevronRight } from 'lucide-react';
import MenuCard from '@/components/ui/MenuCard';
import Link from 'next/link';

export default function BreakfastSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();

            // Show details only if before 11:30 AM (11:30)
            // For Demo: Let's extend it to always show if it's "morning" or just force it for now if needed.
            // But per requirement: "Show only on Home (Morning) till 11:30AM"

            // Logic: End time is 11:30 AM today
            const endTime = new Date();
            endTime.setHours(11, 30, 0, 0);

            if (now < endTime) {
                setIsVisible(true);
                const diff = endTime.getTime() - now.getTime();
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                setTimeLeft(`${hours}h ${minutes}m`);
            } else {
                setIsVisible(false);
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    // DEMO OVERRIDE: Uncomment to force show for verification if it's past 11:30 AM
    // if (!isVisible) return <div className="hidden"></div>; 
    // For now, let's keep strict logic but if user is testing at night, they won't see it. 
    // I will add a "demo mode" check or just assume user tests in morning.
    // better yet, let's make it show if it's < 11:30 AM OR if we want to demo it.
    // Let's stick to the requirement.

    if (!isVisible) return null;

    const breakfastItems = [
        { name: 'Kadhi Kachori', price: '₹40', image: '/assets/images/menu/kadhi_kachori.png', color: 'yellow', description: 'Crispy kachori served with tangy kadhi.', badge: 'Breakfast Special ☀️' },
        { name: 'Dhokla', price: '₹50', image: '/assets/images/menu/dhokla.png', color: 'yellow', description: 'Soft and spongy dhokla with mustard tempering.', badge: 'Breakfast Special ☀️' },
    ];

    return (
        <AnimatePresence>
            <motion.section
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gradient-to-r from-orange-50 to-yellow-50 border-b border-orange-100 py-8 relative overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-orange-600 font-bold uppercase tracking-wider text-xs mb-1">
                                <Sun className="w-4 h-4 animate-spin-slow" />
                                Morning Exclusive
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-secondary">Breakfast Specials</h2>
                        </div>

                        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100 flex items-center gap-2 text-orange-600 font-bold">
                            <Clock className="w-4 h-4" />
                            <span>Ends in {timeLeft}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {breakfastItems.map((item, i) => (
                            <div key={i} className="h-full">
                                <MenuCard {...item} />
                            </div>
                        ))}
                        <div className="flex flex-col justify-center items-center text-center p-6 bg-white/50 rounded-2xl border-2 border-dashed border-orange-200 hover:bg-orange-100 transition-colors cursor-pointer group h-full">
                            <Link href="/menu" className="group-hover:scale-105 transition-transform">
                                <span className="block text-4xl mb-2">🥣</span>
                                <h3 className="font-bold text-gray-800">View Full Menu</h3>
                                <p className="text-sm text-gray-500 mb-4">Explore all options</p>
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto text-orange-500 shadow-sm">
                                    <ChevronRight className="w-6 h-6" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>
        </AnimatePresence>
    );
}

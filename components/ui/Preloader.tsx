'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Minimum display time of 1s
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className={`fixed inset-0 z-[9999] bg-cream flex justify-center items-center transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="w-12 h-12 border-4 border-primary border-b-transparent rounded-full animate-spin"></div>
        </div>
    );
}

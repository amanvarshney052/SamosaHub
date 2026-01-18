'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Menu', href: '/menu' },
        { name: 'Services', href: '/services' },
        { name: 'Features', href: '/features' },
        { name: 'Blog', href: '/blog' },
        { name: 'Play', href: '/play' },
        { name: 'Contact', href: '/contact-us' },
    ];

    const isActive = (path: string) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname.startsWith(path);
    };

    return (
        <nav className={`sticky top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100' : 'bg-white/95 backdrop-blur-md'
            }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-12 w-12">
                        {/* Using a simple text fallback if image fails, or the actual image path */}
                        <Image
                            src="/assets/images/logo.png"
                            alt="Samosa Hub Logo"
                            width={48}
                            height={48}
                            className="object-contain transition-transform duration-300 group-hover:rotate-12"
                        />
                    </div>
                    <span className="font-heading font-bold text-2xl text-secondary hidden sm:block">Samosa Hub</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 font-medium text-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative group transition-all duration-300 ${isActive(link.href)
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold'
                                : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-accent'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                        </Link>
                    ))}

                    <Link
                        href="/menu"
                        className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 hover:ring-2 hover:ring-offset-2 hover:ring-primary hover-shine overflow-hidden relative"
                    >
                        Order Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-secondary p-2 glass rounded-lg active:scale-95 transition-transform"
                >
                    <Menu className="w-8 h-8" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl transform transition-transform duration-500 lg:hidden flex flex-col justify-center items-center gap-8 z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-secondary p-2 glass rounded-full hover:rotate-90 transition-transform duration-300"
                >
                    <X className="w-8 h-8" />
                </button>

                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-3xl font-bold transition-colors ${isActive(link.href) ? 'text-primary' : 'hover:text-primary'
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

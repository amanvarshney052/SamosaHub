import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-black text-gray-300 py-16 font-sans">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

                {/* Information */}
                <div>
                    <h3 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider">Information</h3>
                    <div className="flex justify-between gap-8">
                        <ul className="space-y-3 text-sm flex-1">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Team</Link></li>
                            <li><Link href="/menu" className="hover:text-primary transition-colors">Menu</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
                        </ul>
                        <ul className="space-y-3 text-sm flex-1">
                            <li><Link href="/menu" className="hover:text-primary transition-colors">Gallery</Link></li>
                            <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/play" className="hover:text-primary transition-colors">Samosa Quiz</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Disclaimer</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Franchise</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Brand & Contact */}
                <div className="text-center">
                    <Link href="/" className="inline-block mb-6 group">
                        <div className="relative h-16 w-16 mx-auto mb-2">
                            <Image
                                src="/assets/images/logo.png"
                                alt="Samosa Hub Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>F-4/10, Mandir Marg, Block F,<br /> Krishna Nagar, Delhi - 110051</li>
                        <li className="font-bold text-white">
                            Phone: <a href="tel:+917011921155" className="hover:text-primary">+91 70119 21155</a>, <a href="tel:+917827331394" className="hover:text-primary">+91 78273 31394</a>
                        </li>
                        <li>Email: <a href="mailto:info@samosahub.in" className="hover:text-primary">info@samosahub.in</a></li>
                    </ul>

                    {/* Footer Socials */}
                    <div className="mt-6 flex justify-center gap-6">
                        <span className="text-secondary font-bold">Follow Us:</span>
                        <a href="https://www.instagram.com/samosahubofficial/?igshid=19t1brg2rj6gk" target="_blank" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="https://www.facebook.com/samosahubofficial/" target="_blank" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="https://twitter.com/SamosaHub?s=08" target="_blank" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="https://www.youtube.com/watch?v=nvt3xtVsvXk" target="_blank" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Open Hours */}
                <div className="md:pl-10">
                    <h3 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider">Open Hours</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                            <li key={day} className="flex justify-between border-b border-gray-800 pb-2">
                                <span>{day}:</span>
                                <span className="text-white">01:00 PM - 10:00 PM</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 mt-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
                    <p className="text-gray-500">
                        Copyright @ 2025 <span className="text-secondary font-bold">Samosa Hub</span> (A Unit of Aman Namkeen & Caterers). All Rights Reserved.
                    </p>
                    <p className="text-gray-500">
                        Design and Developed by <a href="#" target="_blank" className="text-secondary font-bold hover:underline">Aman Varshney</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

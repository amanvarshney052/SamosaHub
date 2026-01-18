import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Users, Smile, Clock } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-cream py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">Our Story</h1>
                    <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-primary font-bold">About Us</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative h-[500px] w-full group">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                        <Image
                            src="/assets/images/pasta-samosa.jpeg"
                            alt="About SamosaHub"
                            fill
                            className="rounded-2xl shadow-xl object-cover relative z-10"
                        />
                    </div>
                    <div className="space-y-6">
                        <SectionHeader title="We Are SamosaHub" subtitle="Since 2008" align="left" />
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Started as a humble request from a grandmother to bring traditional flavors to the modern generation, SamosaHub has grown into India&apos;s most loved samosa destination.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We believe that a samosa is not just a snack; it&apos;s an emotion. That&apos;s why we have reinvented the classic recipe with over 50+ unique varieties, ranging from the spicy Schezwan to the sweet Chocolate Samosa. All our products are prepared in a state-of-the-art hygienic kitchen using the finest ingredients.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="border-l-4 border-primary pl-4">
                                <h4 className="font-bold text-xl text-secondary">Mission</h4>
                                <p className="text-sm text-gray-500">To serve happiness in every bite.</p>
                            </div>
                            <div className="border-l-4 border-secondary pl-4">
                                <h4 className="font-bold text-xl text-secondary">Vision</h4>
                                <p className="text-sm text-gray-500">To be the global leader in Indian snacks.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { icon: Clock, value: '15+', label: 'Years Experience' },
                        { icon: Award, value: '50+', label: 'Menu Items' },
                        { icon: Smile, value: '10k', label: 'Happy Eaters' },
                        { icon: Users, value: '25+', label: 'Team Members' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-cream p-8 rounded-2xl text-center hover-3d group">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

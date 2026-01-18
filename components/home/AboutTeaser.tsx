'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

export default function AboutTeaser() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <AnimatedSection direction="right" className="order-2 md:order-1 relative h-[500px] w-full group">
                    <div className="absolute top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl group-hover:top-6 group-hover:-left-6 transition-all duration-500"></div>
                    <Image
                        src="/assets/images/pasta-samosa.jpeg"
                        alt="Our Story"
                        fill
                        className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700 object-cover relative z-10"
                    />
                </AnimatedSection>

                <div className="order-1 md:order-2 space-y-8">
                    <AnimatedSection>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">About Us</span>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight">A Tradition of <br /><span className="text-gradient">Quality</span></h2>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We are the Country&apos;s no.1 Fast food retailer with 15+ years of reputation. Started as a small street cart, Samosa Hub has evolved into a premium destination for samosa lovers.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <Link href="/about" className="text-secondary font-bold hover:text-accent inline-flex items-center gap-2 group text-lg">
                            Read Our Story <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

export default function ProcessSection() {
    return (
        <section className="py-20 bg-secondary text-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <AnimatedSection>
                    <div className="flex justify-between items-end mb-16">
                        <h3 className="text-3xl md:text-4xl font-heading font-bold">How It Works</h3>
                        <Link href="/services" className="text-primary hover:text-white transition-colors text-sm font-bold flex items-center gap-1 group">
                            Our Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {[
                        { id: '1', title: 'Choose', desc: 'Select your favorite fillings from 50+ options.' },
                        { id: '2', title: 'Pay', desc: 'Secure and fast payment via UPI or Cash.' },
                        { id: '3', title: 'Grab a Meal', desc: 'Enjoy your hot crispy samosas fresh from the fryer.' },
                    ].map((step, i) => (
                        <AnimatedSection key={step.id} delay={i * 0.2}>
                            <div className="relative group cursor-pointer">
                                <div className="text-[120px] leading-none font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:text-white/10 group-hover:scale-110">
                                    {step.id}
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold text-primary mb-3">{step.title}</h4>
                                    <p className="text-gray-300 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

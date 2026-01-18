'use client';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

export default function SubscribeSection() {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <div className="text-center lg:text-left text-white space-y-4">
                            <h2 className="text-4xl font-heading font-bold">Subscribe Our Newsletter</h2>
                            <p className="text-white/90 text-lg">Don&apos;t miss any upcoming event & Get your coupon via email.</p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <form className="bg-white p-2 rounded-full shadow-2xl flex flex-col sm:flex-row p-1 max-w-lg mx-auto lg:ml-auto">
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="flex-grow px-6 py-4 rounded-full outline-none text-gray-700 bg-transparent placeholder:text-gray-400"
                                required
                            />
                            <Button type="submit" size="lg" className="rounded-full shrink-0 m-1">
                                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

'use client';

import { Calendar, Users, UtensilsCrossed } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../shared/SectionHeader';
import { Button } from '../ui/Button';

export default function CateringTeaser() {
    return (
        <section className="py-20 bg-cream relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <AnimatedSection className="space-y-6">
                        <SectionHeader
                            title="Premium Catering Services"
                            subtitle="Make Your Events Memorable"
                            className="text-left mb-0"
                        />
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Looking to add a spark to your celebrations? At Samosa Hub, we bring the authentic taste of India to your special occasions. Whether it's a grand wedding, a cozy birthday party, or a corporate event, our diverse menu of 50+ verieties of samosas and snacks will leave your guests craving for more.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="bg-primary/20 p-2 rounded-lg text-secondary">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Any Size</h4>
                                    <p className="text-xs text-gray-500">From 10 to 1000+ Guests</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="bg-accent/20 p-2 rounded-lg text-accent">
                                    <UtensilsCrossed className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Live Counters</h4>
                                    <p className="text-xs text-gray-500">Fresh Samosas On-Site</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a href="/services">
                                <Button
                                    variant="default" // Changed from 'primary' to 'default' based on Button.tsx variants
                                    className="shadow-lg hover:shadow-primary/50"
                                >
                                    Explore Catering Menu
                                </Button>
                            </a>
                        </div>
                    </AnimatedSection>

                    {/* Image/Visual */}
                    <AnimatedSection delay={0.2} className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 group">
                            <img
                                src="/assets/images/wedding-parties.png"
                                alt="Catering Service"
                                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    // Fallback if specific image is missing
                                    (e.target as HTMLImageElement).src = '/assets/images/header-carousel-1.png';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-primary tracking-wide text-sm uppercase">Book Now</span>
                                </div>
                                <h3 className="text-2xl font-bold font-heading">Plan Your Perfect Event</h3>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-xl animate-bounce-slow hidden md:block">
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-secondary">100%</span>
                                <span className="block text-xs font-bold text-gray-500 uppercase">Hygienic</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

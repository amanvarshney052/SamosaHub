'use client';

import Link from 'next/link';
import { ChefHat, Truck, Calendar, Gift, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/ui/ServiceCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import EventPlanner from '@/components/services/EventPlanner';
import ServicesEnquiryForm from '@/components/services/ServicesEnquiryForm';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-dark text-white">
            {/* Hero Header */}
            <div className="relative py-24 overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('/assets/images/header-carousel-2.png')] bg-cover bg-center opacity-30 fixed-bg"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Catering & Services</h1>
                        <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-primary font-bold">Services</span>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <SectionHeader title="Catering For Every Occasion" subtitle="What We Offer" className="text-white" />
                    <p className="max-w-2xl mx-auto text-gray-400 mt-[-2rem]">
                        The Samosa Hub is all set to fill your evening with the Delicious Taste and Crispy talks.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <AnimatedSection delay={0.1}>
                        <ServiceCard
                            title="Commercial Catering"
                            description="Bulk orders for offices, corporate events, and meetings. Trusted by top MNCs."
                            Icon={ChefHat}
                            image="/assets/images/header-carousel-3.png"
                        />
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <ServiceCard
                            title="Wedding & Events"
                            description="Live Counter setup for weddings, engagements, and grand celebrations."
                            Icon={Calendar}
                            image="/assets/images/wedding-parties.png"
                        />
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <ServiceCard
                            title="Birthday Parties"
                            description="Special kids menu and themed packaging for birthday bashes."
                            Icon={Gift}
                            image="/assets/images/birthday-parties.png"
                        />
                    </AnimatedSection>
                    <AnimatedSection delay={0.4}>
                        <ServiceCard
                            title="Home Delivery"
                            description="Fast and blazing hot delivery at your doorstep via Zomato & Swiggy."
                            Icon={Truck}
                            image="/assets/images/food-track.png"
                        />
                    </AnimatedSection>
                </div>

                {/* Event Planner Section (Replaces Static Form) */}

                {/* Event Planner Section (Replaces Static Form) */}
                <div className="mb-24">
                    <AnimatedSection>
                        <EventPlanner />
                    </AnimatedSection>
                </div>

                {/* General Enquiry Form */}
                <ServicesEnquiryForm />
            </div>
        </div>
    );
}

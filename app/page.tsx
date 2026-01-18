import Preloader from '@/components/ui/Preloader';
import Hero from '@/components/home/Hero';
import AboutTeaser from '@/components/home/AboutTeaser';
import StatsSection from '@/components/home/StatsSection';
import MenuTeaser from '@/components/home/MenuTeaser';
import ProcessSection from '@/components/home/ProcessSection';
import LogosSection from '@/components/home/LogosSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BreakfastSection from '@/components/home/BreakfastSection';
import EventPlanner from '@/components/services/EventPlanner';
import SectionHeader from '@/components/shared/SectionHeader';

import CateringTeaser from '@/components/home/CateringTeaser';

export default function Home() {
    return (
        <>
            <Preloader />
            <Hero />
            <BreakfastSection />
            <AboutTeaser />
            <StatsSection />
            <MenuTeaser />
            <CateringTeaser />
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <SectionHeader title="Plan Your Event in Seconds" subtitle="AI Catering Assistant" />
                    <p className="text-gray-500 max-w-2xl mx-auto mt-[-1rem]">Get an instant menu recommendation for your Wedding, Birthday, or Bhandara based on our smart algorithm.</p>
                </div>
                <div className="max-w-6xl mx-auto px-6">
                    <EventPlanner />
                </div>
            </div>
            <ProcessSection />
            <LogosSection />
            <TestimonialsSection />
        </>
    );
}

'use client';
import { Newspaper } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../shared/SectionHeader';

const NEWS = [
    { name: 'Medium', link: 'https://medium.com/great-big-story/season-six-of-great-big-bites-explores-delhi-street-food-scene-1e1336fb330b', logo: '/assets/images/logo-medium.png' },
    { name: 'NDTV Food', link: 'https://food.ndtv.com/food-drinks/this-samosa-hub-serves-amazing-chocolate-and-pizza-samosas-1836149', logo: '/assets/images/logo-ndtv.png' },
    { name: 'Curly Tales', link: 'https://curlytales.com/head-to-samosa-hub-to-try-out-25-types-of-samosas-in-delhi/', logo: '/assets/images/logo-curlytales.png' },
    { name: 'So Delhi', link: 'https://so.city/delhi/video/this-crispy-yet-tender-malai-paneer-samosa-in-krishna-nagar-is-a-game-changer', logo: '/assets/images/logo-sodelhi.png' },
    { name: 'What\'s Hot', link: 'https://www.whatshot.in/delhi-ncr/samosa-hub-krishna-nagar-v-163968', logo: '/assets/images/logo-whatshot.png' },
    { name: 'LBB', link: 'https://lbb.in/delhi/aman-namkeen-bhandar-667310/', logo: '/assets/images/logo-lbb.png' },
];

export default function NewsMediaSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader title="News & Media" subtitle="Featured In" className="mb-12" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {NEWS.map((item, idx) => (
                        <AnimatedSection key={item.name} delay={idx * 0.1}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="bg-white border border-gray-100 rounded-xl p-8 h-48 flex flex-col items-center justify-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                                    {/* Decorative Background */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                                    {/* Icon/Logo Simulation */}
                                    <div className="w-20 h-20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100">
                                        <img
                                            src={item.logo}
                                            alt={`${item.name} Logo`}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>

                                    <h3 className="font-heading font-bold text-xl text-gray-800 group-hover:text-primary transition-colors relative z-10">{item.name}</h3>

                                    <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-sm text-secondary font-medium">
                                        Read Article <Newspaper className="w-4 h-4" />
                                    </div>
                                </div>
                            </a>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

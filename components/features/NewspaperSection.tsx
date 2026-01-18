'use client';
import { Image as ImageIcon } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../shared/SectionHeader';

export default function NewspaperSection() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader title="Newspaper Feature" subtitle="Print Media" className="text-white mb-12" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { src: '/assets/images/Pizza Samosa.jpeg', title: 'Pizza Samosa Viral', desc: 'Featured in Hindustan Times' },
                        { src: '/assets/images/Shahi Paneer Samosa.jpeg', title: 'The Royal Taste', desc: 'Times of India Cover' },
                        { src: '/assets/images/Mix Veg Samosa.jpeg', title: 'Street Food King', desc: 'Dainik Jagran' },
                        { src: '/assets/images/Chilli Cheese Garlic.jpeg', title: 'Spicy Sensation', desc: 'Navbharat Times' },
                        { src: '/assets/images/pasta-samosa.jpeg', title: 'Fusion Masterpiece', desc: 'Delhi Food Guide' },
                        { src: '/assets/images/blueberry.png', title: 'Sweet Revolution', desc: 'Dessert Weekly' },
                    ].map((item, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <div className="aspect-[4/5] bg-gray-800 rounded-xl flex items-center justify-center group relative overflow-hidden border border-gray-700">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>

                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="bg-primary text-secondary text-xs font-bold px-2 py-1 rounded inline-block mb-2">PRESS</div>
                                    <h3 className="font-bold text-xl leading-tight mb-1">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

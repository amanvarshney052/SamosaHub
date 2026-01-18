'use client';
import Image from 'next/image';
import { Star } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import AnimatedSection from '../ui/AnimatedSection';

export default function TestimonialsSection() {
    const reviews = [
        { name: 'Priya Sharma', role: 'Food Blogger', text: "The best samosas I've ever had! The chocolate samosa is a game changer.", image: 'https://randomuser.me/api/portraits/women/44.jpg' },
        { name: 'Rahul Verma', role: 'Corporate Manager', text: "Ordered for my office party. The packaging was great and the samosas remained crispy.", image: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { name: 'Anjali Gupta', role: 'Student', text: "I love the variety! From Paan to Pasta samosa, everything is unique and tasty.", image: 'https://randomuser.me/api/portraits/women/65.jpg' },
    ];

    return (
        <section className="py-24 bg-cream relative overflow-hidden">
            <div className="absolute -right-20 top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <AnimatedSection>
                    <SectionHeader title="What Customers Say" subtitle="Testimonials" />
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <AnimatedSection key={i} delay={i * 0.2}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg relative pt-12 hover:-translate-y-2 transition-transform duration-300 group hover:shadow-xl">
                                <div className="absolute -top-6 left-8 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-serif">"</div>
                                <div className="flex text-primary mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                        <Image src={review.image} alt={review.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-secondary transition-colors">{review.name}</h4>
                                        <p className="text-xs text-gray-500">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

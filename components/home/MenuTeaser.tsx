'use client';
import Link from 'next/link';
import MenuCard from '../ui/MenuCard';
import SectionHeader from '../shared/SectionHeader';
import { Button } from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

const FEATURED_MENU = [
    { name: 'Chocolate Samosa', price: '₹50', image: '/assets/images/samosa.png', color: 'primary' },
    { name: 'Paan Samosa', price: '₹40', image: '/assets/images/green.png', color: 'green' },
    { name: 'Mix Fruit Samosa', price: '₹65', image: '/assets/images/purple.png', color: 'red' },
    { name: 'Pineapple Samosa', price: '₹55', image: '/assets/images/yellow.png', color: 'yellow' },
];

export default function MenuTeaser() {
    return (
        <section className="py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-6 space-y-12">
                <AnimatedSection>
                    <SectionHeader title="Customer Favorites" subtitle="Our Menu" />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURED_MENU.map((item, i) => (
                        <AnimatedSection key={item.name} delay={i * 0.1}>
                            <MenuCard {...item} />
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection delay={0.4} className="text-center">
                    <Link href="/menu">
                        <Button variant="outline" size="lg">View Full Menu</Button>
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
}

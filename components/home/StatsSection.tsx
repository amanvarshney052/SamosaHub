'use client';
import AnimatedSection from '../ui/AnimatedSection';

export default function StatsSection() {
    const stats = [
        { label: 'Years Experience', value: '15+' },
        { label: 'Menu Variations', value: '50+' },
        { label: 'Happy Customers', value: '10k+' },
        { label: 'Awards Won', value: '5' },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-secondary to-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
                {stats.map((stat, i) => (
                    <AnimatedSection key={stat.label} delay={i * 0.1}>
                        <div className="space-y-2 hover-3d group cursor-default">
                            <h3 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-accent/80 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-sm tracking-[0.2em] uppercase font-medium group-hover:text-white transition-colors">
                                {stat.label}
                            </p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}

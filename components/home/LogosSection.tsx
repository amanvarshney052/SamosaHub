'use client';
import Link from 'next/link';
import AnimatedSection from '../ui/AnimatedSection';

export default function LogosSection() {
    const brands = [
        { name: 'Medium', logo: '/assets/images/logo-medium.png' },
        { name: 'NDTV Food', logo: '/assets/images/logo-ndtv.png' },
        { name: 'Curly Tales', logo: '/assets/images/logo-curlytales.png' },
        { name: 'So Delhi', logo: '/assets/images/logo-sodelhi.png' },
        { name: 'What\'s Hot', logo: '/assets/images/logo-whatshot.png' },
        { name: 'LBB', logo: '/assets/images/logo-lbb.png' },
    ];

    return (
        <section className="py-20 bg-white bg-pattern-dots border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
                <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Featured In</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {brands.map((brand, i) => (
                        <AnimatedSection key={brand.name} delay={i * 0.1} direction="none" className="w-auto">
                            <div className="h-12 w-auto flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} Logo`}
                                    className="h-full w-auto object-contain max-w-[120px]"
                                />
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
                <AnimatedSection delay={0.6}>
                    <Link href="/features" className="text-secondary text-sm font-bold hover:text-accent border-b-2 border-transparent hover:border-accent transition-all pb-1">
                        View Media Coverage &rarr;
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
}

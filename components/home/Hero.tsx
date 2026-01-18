'use client';
import Image from 'next/image';
import { ArrowRight, Play, Leaf, Flame } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section id="home" className="relative min-h-[95vh] flex items-center bg-cream overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute right-10 top-20 w-32 h-32 bg-yellow-300 rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                <div className="space-y-8">
                    <AnimatedSection delay={0.1}>
                        <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-secondary font-bold text-sm shadow-sm border border-orange-100">
                            🔥 Best Samosa In Town
                        </span>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-gray-900 leading-[1.1] tracking-tight">
                            Crispy, Spicy & <span className="text-gradient">Delicious</span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                            Experience the authentic taste of India with our premium handcrafted samosas. Perfect crunch in every bite.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4} className="flex flex-wrap gap-4">
                        <Button size="lg" className="shadow-xl shadow-primary/20">
                            Explore Menu <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="glass" size="lg" className="group">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                                <Play className="w-4 h-4 fill-current ml-0.5" />
                            </div>
                            Watch Video
                        </Button>
                    </AnimatedSection>

                    <AnimatedSection delay={0.5} className="flex items-center gap-6 pt-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden relative">
                                    {/* Placeholder user images */}
                                    <div className="absolute inset-0 bg-gray-300"></div>
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-xs font-bold flex items-center justify-center text-secondary">+2k</div>
                        </div>
                        <div className="text-sm font-medium text-gray-600">
                            <span className="text-secondary font-bold text-lg">4.9/5</span> Rating
                        </div>
                    </AnimatedSection>
                </div>

                <motion.div style={{ y: y1 }} className="relative z-20 hidden md:block">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-[100px] opacity-20"></div>

                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 2, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-full aspect-square"
                    >
                        <Image
                            src="/assets/images/header-carousel-1.png"
                            alt="Delicious Samosa Platter"
                            fill
                            className="object-contain drop-shadow-2xl z-10"
                            priority
                        />
                    </motion.div>

                    {/* Parallax Floating Badges */}
                    <motion.div style={{ y: y2 }} className="absolute -bottom-10 -left-10 glass p-5 rounded-2xl shadow-xl border-l-4 border-primary z-20">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-3 rounded-full text-green-600"><Leaf className="w-6 h-6" /></div>
                            <div>
                                <p className="font-bold text-gray-800 text-lg">100% Veg</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Pure & Fresh</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div style={{ y: y2 }} className="absolute top-20 -right-5 glass p-5 rounded-2xl shadow-xl border-r-4 border-accent z-20">
                        <div className="flex items-center gap-3">
                            <div className="bg-orange-100 p-3 rounded-full text-orange-600"><Flame className="w-6 h-6" /></div>
                            <div>
                                <p className="font-bold text-gray-800 text-lg">Hot & Spicy</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Served Fresh</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

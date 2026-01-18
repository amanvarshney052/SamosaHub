'use client';
import { useState } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import MenuCard from '@/components/ui/MenuCard';
import ProcessSection from '@/components/home/ProcessSection';
import SubscribeSection from '@/components/home/SubscribeSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Star, Flame, Leaf, Sparkles, Sun } from 'lucide-react';

const FULL_MENU = [
    // Breakfast Special
    { id: 101, name: 'Kadhi Kachori', price: '₹40', image: '/assets/images/menu/kadhi_kachori.png', color: 'yellow', tags: ['Breakfast', 'Savory', 'Spicy', 'Popular'], description: 'Crispy kachori served with tangy kadhi.', badge: 'Breakfast Special ☀️' },
    { id: 102, name: 'Dhokla', price: '₹50', image: '/assets/images/menu/dhokla.png', color: 'yellow', tags: ['Breakfast', 'Savory', 'Veg', 'Light'], description: 'Soft and spongy dhokla with mustard tempering.', badge: 'Breakfast Special ☀️' },

    // Sweet
    { id: 1, name: 'Chocolate Samosa', price: '₹50', image: '/assets/images/menu/chocolate_samosa.png', color: 'primary', tags: ['Sweet', 'Popular', 'Veg'], description: 'Rich dark chocolate filling in a crispy crust.' },
    { id: 2, name: 'Blueberry Samosa', price: '₹60', image: '/assets/images/blueberry.png', color: 'blue', tags: ['Sweet', 'Exotic', 'New', 'Veg'], description: 'Exotic blueberry filling with a hint of vanilla.' },
    { id: 3, name: 'Strawberry Samosa', price: '₹60', image: '/assets/images/menu/strawberry_samosa.png', color: 'pink', tags: ['Sweet', 'Veg'], description: 'Sweet strawberry jam filling.' },
    { id: 4, name: 'Pineapple Samosa', price: '₹55', image: '/assets/images/yellow.png', color: 'yellow', tags: ['Sweet', 'Veg'], description: 'Tangy and sweet pineapple jam.' },
    { id: 5, name: 'Mango Samosa', price: '₹55', image: '/assets/images/orange.png', color: 'yellow', tags: ['Sweet', 'Veg'], description: 'King of fruits in a samosa.' },
    { id: 6, name: 'Mix Fruit Samosa', price: '₹65', image: '/assets/images/menu/mix_fruit_samosa.png', color: 'red', tags: ['Sweet', 'Veg'], description: 'A mix of seasonal fruits.' },

    // Savory / Classic
    { id: 7, name: 'Aloo Samosa', price: '₹20', image: '/assets/images/menu/aloo_samosa.png', color: 'orange', tags: ['Classic', 'Savory', 'Veg', 'Popular'], description: 'The classic masala aloo filling.' },
    { id: 8, name: 'Chowmin Samosa', price: '₹40', image: '/assets/images/menu/chowmin_samosa.png', color: 'orange', tags: ['Fusion', 'Savory', 'Veg'], description: 'Spicy noodles inside a samosa.' },
    { id: 9, name: 'Mix Veg Samosa', price: '₹35', image: '/assets/images/Mix Veg Samosa.jpeg', color: 'green', tags: ['Savory', 'Veg', 'Jain'], description: 'Healthy mix of vegetables. No onion/garlic options available.' },

    // Cheese / Paneer
    { id: 10, name: 'Malai Paneer Samosa', price: '₹60', image: '/assets/images/menu/paneer_samosa.png', color: 'yellow', tags: ['Paneer', 'Savory', 'Veg'], description: 'Creamy paneer filling.' },
    { id: 11, name: 'Chilli Paneer Samosa', price: '₹55', image: '/assets/images/menu/paneer_samosa.png', color: 'red', tags: ['Paneer', 'Spicy', 'Savory', 'Veg', 'Popular'], description: 'Indo-Chinese style spicy paneer.' },
    { id: 12, name: 'Shahi Paneer Samosa', price: '₹65', image: '/assets/images/Shahi Paneer Samosa.jpeg', color: 'orange', tags: ['Paneer', 'Savory', 'Veg'], description: 'Rich gravy based paneer filling.' },
    { id: 13, name: 'Pyaaz Paneer Samosa', price: '₹50', image: '/assets/images/menu/paneer_samosa.png', color: 'orange', tags: ['Paneer', 'Savory', 'Veg'], description: 'Onion and paneer combination.' },
    { id: 14, name: 'Tandoori Paneer', price: '₹60', image: '/assets/images/menu/paneer_samosa.png', color: 'red', tags: ['Paneer', 'Savory', 'Veg', 'New'], description: 'Smoky tandoori flavored paneer.' },

    // Exotic / Fusion
    { id: 15, name: 'Cheese Chilli Garlic', price: '₹70', image: '/assets/images/Chilli Cheese Garlic.jpeg', color: 'yellow', tags: ['Exotic', 'Spicy', 'Savory', 'Veg'], description: 'Cheesy with a kick of chilli and garlic.' },
    { id: 16, name: 'Pizza Samosa', price: '₹65', image: '/assets/images/menu/pizza_samosa.png', color: 'red', tags: ['Fusion', 'Savory', 'Veg', 'Popular'], description: 'Italian pizza flavors in a samosa.' },
    { id: 17, name: 'Pasta Samosa', price: '₹50', image: '/assets/images/menu/pasta_samosa.png', color: 'red', tags: ['Fusion', 'Savory', 'Veg'], description: 'White sauce pasta filling.' },
    { id: 18, name: 'Red Pasta Samosa', price: '₹50', image: '/assets/images/menu/red_pasta_samosa.png', color: 'red', tags: ['Fusion', 'Savory', 'Veg', 'Spicy'], description: 'Tangy red sauce pasta.' },
    { id: 19, name: 'Manchurian Samosa', price: '₹45', image: '/assets/images/menu/manchurian_samosa.png', color: 'orange', tags: ['Fusion', 'Savory', 'Veg'], description: 'Vegetable manchurian balls inside.' },
    { id: 20, name: 'Tawa Chaap Samosa', price: '₹60', image: '/assets/images/menu/tawa_chaap_samosa.png', color: 'orange', tags: ['Savory', 'Veg', 'Spicy', 'New'], description: 'Spicy soya chaap filling.' },

    // Others
    { id: 21, name: 'Paan Samosa', price: '₹40', image: '/assets/images/green.png', color: 'green', tags: ['Sweet', 'New'], description: 'Refreshing paan flavor with gulkand.' },
    { id: 22, name: 'Orange Samosa', price: '₹45', image: '/assets/images/orange.png', color: 'orange', tags: ['Sweet'], description: 'Zesty orange marmalade filling.' },
    { id: 23, name: 'Chilli Potato Samosa', price: '₹40', image: '/assets/images/menu/chilli_potato_samosa.png', color: 'red', tags: ['Fusion', 'Spicy', 'Savory', 'Veg'], description: 'Spicy potato wedges filling.' },
];

const FILTERS = [
    { label: 'All', icon: null },
    { label: 'Popular', icon: Star },
    { label: 'Breakfast', icon: Sun },
    { label: 'New', icon: Sparkles },
    { label: 'Spicy', icon: Flame },
    { label: 'Sweet', icon: null },
    { label: 'Savory', icon: null },
    { label: 'Jain', icon: Leaf },
];

export default function MenuPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredMenu = activeFilter === 'All'
        ? FULL_MENU
        : FULL_MENU.filter(item => item.tags.includes(activeFilter));

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-black py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <SectionHeader
                        title="Find Your Flavor"
                        subtitle="Smart Menu"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Smart Filters */}
                <div className="flex justify-center gap-3 mb-12 flex-wrap">
                    {FILTERS.map((filter) => {
                        const Icon = filter.icon;
                        return (
                            <button
                                key={filter.label}
                                onClick={() => setActiveFilter(filter.label)}
                                className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${activeFilter === filter.label
                                    ? 'bg-secondary text-white shadow-lg scale-105'
                                    : 'bg-cream text-gray-600 hover:bg-gray-200 hover:scale-105'
                                    }`}
                            >
                                {Icon && <Icon className="w-4 h-4" />}
                                {filter.label}
                            </button>
                        );
                    })}
                </div>

                {/* Animated Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 min-h-[500px]"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredMenu.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MenuCard {...item} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredMenu.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p>No samosas found for this filter. Try another one!</p>
                    </div>
                )}
            </div>

            {/* 3 Easy Steps */}
            <ProcessSection />

            {/* Subscribe */}
            <SubscribeSection />
        </div>
    );
}

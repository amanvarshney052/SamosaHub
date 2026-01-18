'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, FileText, Check, ChevronRight, ChevronLeft, Sparkles, PartyPopper, Utensils, Leaf, Music, Box, Crown, Star, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Types
type EventType = 'Birthday' | 'Small Gathering' | 'Bhandara' | 'Food Parcels' | 'Jain Special' | 'Kirtan';

interface EventDetails {
    guests: string;
    date: string;
    budget: string;
    notes: string;
}

interface DietaryPrefs {
    jain: boolean;
    pureVeg: boolean;
    lowSpice: boolean;
    noOnionGarlic: boolean;
}

interface MenuPackage {
    id: string;
    name: string;
    icon: any;
    priceRange: string;
    description: string;
    color: string;
    menu: {
        starters: string[];
        mains: string[];
        desserts: string[];
        beverages: string[];
    };
    recommended?: boolean;
}

// Data
const EVENT_TYPES: { id: EventType; icon: any; label: string; color: string }[] = [
    { id: 'Birthday', icon: PartyPopper, label: 'Birthday Party', color: 'bg-pink-500' },
    { id: 'Small Gathering', icon: Users, label: 'Small Gathering', color: 'bg-blue-500' },
    { id: 'Bhandara', icon: Utensils, label: 'Bhandara', color: 'bg-orange-500' },
    { id: 'Food Parcels', icon: Box, label: 'Food Parcels', color: 'bg-purple-500' },
    { id: 'Jain Special', icon: Leaf, label: 'Jain Special', color: 'bg-green-500' },
    { id: 'Kirtan', icon: Music, label: 'Kirtan / Religious', color: 'bg-yellow-500' },
];

export default function EventPlanner() {
    const [step, setStep] = useState(1);
    const [eventType, setEventType] = useState<EventType | null>(null);
    const [details, setDetails] = useState<EventDetails>({ guests: '', date: '', budget: '', notes: '' });
    const [dietary, setDietary] = useState<DietaryPrefs>({ jain: false, pureVeg: true, lowSpice: false, noOnionGarlic: false });
    const [isGenerating, setIsGenerating] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const generateRecommendation = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            handleNext();
        }, 2000);
    };

    // AI Recommendation Engine
    const getRecommendations = (): MenuPackage[] => {
        // 1. Parse Inputs
        const userBudget = parseInt(details.budget.replace(/[^0-9]/g, '')) || 0;
        const isJain = eventType === 'Jain Special' || dietary.jain;
        const isNoOnionGarlic = dietary.noOnionGarlic || isJain; // Jain implies no onion/garlic

        // 2. Define Knowledge Base (All Potential Packages)
        const ALL_PACKAGES: (MenuPackage & { typeMatch: EventType[], basePrice: number, maxPrice: number, tags: string[] })[] = [
            {
                id: 'bhandara-seva',
                name: 'Seva Thali (Budget)',
                icon: Utensils,
                priceRange: '₹60 - ₹80 / plate',
                basePrice: 60,
                maxPrice: 80,
                description: 'Economical and wholesome meal designed for mass distribution.',
                color: 'text-orange-600',
                typeMatch: ['Bhandara', 'Food Parcels'],
                tags: ['budget', 'bulk', 'sattvik'],
                menu: {
                    starters: ['Mix Veg Pickle', 'Green Chutney'],
                    mains: ['Aloo Puri (4 pcs)', 'Khatta Meetha Kaddu', 'Boondi Raita'],
                    desserts: ['Suji Halwa'],
                    beverages: ['Masala Chaas', 'Water Pouch']
                }
            },
            {
                id: 'bhandara-deluxe',
                name: 'Grand Bhandara',
                icon: Users,
                priceRange: '₹100 - ₹120 / plate',
                basePrice: 100,
                maxPrice: 120,
                description: 'A rich traditional feast for religious gatherings.',
                color: 'text-orange-500',
                typeMatch: ['Bhandara', 'Kirtan'],
                tags: ['bulk', 'sattvik'],
                menu: {
                    starters: ['Mini Kachori', 'Dhokla'],
                    mains: ['Bedmi Puri', 'Aloo Bhandare Wale', 'Kashiphal Sabzi', 'Methi Chutney'],
                    desserts: ['Moong Dal Halwa', 'Gulab Jamun'],
                    beverages: ['Thandai', 'Water Bottle']
                }
            },
            {
                id: 'kids-fun',
                name: 'Fun & Frolic',
                icon: PartyPopper,
                priceRange: '₹200 - ₹250 / plate',
                basePrice: 200,
                maxPrice: 250,
                description: 'Kid-friendly favorites with mild spices and fun shapes.',
                color: 'text-pink-500',
                typeMatch: ['Birthday'],
                tags: ['kids', 'mild'],
                menu: {
                    starters: ['Mini Samosas', 'French Fries', 'Smileys'],
                    mains: ['Hakka Noodles', 'Manchurian (Dry)', 'Pav Bhaji'],
                    desserts: ['Chocolate Samosa', 'Vanilla Ice Cream'],
                    beverages: ['Mango Frooti', 'Cold Coffee']
                }
            },
            {
                id: 'birthday-grand',
                name: 'Grand Celebration',
                icon: Star,
                priceRange: '₹400 / plate',
                basePrice: 400,
                maxPrice: 500,
                description: 'A complete spread for both kids and adults to enjoy.',
                color: 'text-purple-500',
                typeMatch: ['Birthday'],
                tags: ['kids', 'adults'],
                menu: {
                    starters: ['Cheese Corn Nuggets', 'Paneer 65', 'Hara Bhara Kebab'],
                    mains: ['Paneer Lababdar', 'Dal Makhani', 'Veg Biryani', 'Assorted Breads'],
                    desserts: ['Gulab Jamun', 'Ice Cream Scale'],
                    beverages: ['Mojito', 'Soft Drinks']
                }
            },
            {
                id: 'jain-basic',
                name: 'Shuddha Basic',
                icon: Leaf,
                priceRange: '₹150 - ₹200 / plate',
                basePrice: 150,
                maxPrice: 200,
                description: 'Simple, pure, and satisfying Jain meal essentials.',
                color: 'text-green-600',
                typeMatch: ['Jain Special', 'Small Gathering', 'Kirtan'],
                tags: ['jain', 'simple'],
                menu: {
                    starters: ['Khandvi', 'Banana Chips'],
                    mains: ['Paneer Makhani (Jain)', 'Yellow Dal Tadka', 'Jeera Rice', 'Tawa Roti'],
                    desserts: ['Gulab Jamun'],
                    beverages: ['Masala Chaas']
                }
            },
            {
                id: 'jain-premium',
                name: 'Royal Satvik Feast',
                icon: Crown,
                priceRange: '₹350 - ₹450 / plate',
                basePrice: 350,
                maxPrice: 450,
                description: 'A grand feast prepared strictly without root vegetables, rich in flavor.',
                color: 'text-amber-500',
                typeMatch: ['Jain Special', 'kirtan'],
                tags: ['jain', 'luxury'],
                menu: {
                    starters: ['Paneer Tikka (Jain)', 'Corn Cheese Balls', 'Kadhi Kachori (No Onion/Garlic)'],
                    mains: ['Kaju Curry', 'Malai Kofta (Raw Banana)', 'Dal Fry', 'Kashmiri Pulao', 'Butter Naan'],
                    desserts: ['Rasmalai', 'Moong Dal Halwa'],
                    beverages: ['Kesar Pista Milk', 'Jaljeera']
                }
            },
            {
                id: 'standard',
                name: 'Classic Comfort',
                icon: Coffee,
                priceRange: '₹250 - ₹300 / plate',
                basePrice: 250,
                maxPrice: 300,
                description: 'Our most popular standard menu for any gathering.',
                color: 'text-blue-500',
                typeMatch: ['Small Gathering', 'Bhandara', 'Food Parcels'],
                tags: ['classic'],
                menu: {
                    starters: ['Aloo Samosa', 'Mix Veg Pakora'],
                    mains: ['Paneer Butter Masala', 'Mix Veg', 'Dal Fry', 'Jeera Rice', 'Roti'],
                    desserts: ['Gulab Jamun'],
                    beverages: ['Masala Chai', 'Water']
                }
            },
            {
                id: 'premium',
                name: 'SamosaHub Signature',
                icon: Crown,
                priceRange: '₹500+ / plate',
                basePrice: 500,
                maxPrice: 1000,
                description: 'The ultimate luxury catering experience with live counters.',
                color: 'text-amber-500',
                typeMatch: ['Small Gathering', 'Birthday'],
                tags: ['luxury', 'live-counter'],
                menu: {
                    starters: ['Paneer Tikka', 'Dahi Ke Sholay', 'Cocktail Samosas', 'Spring Rolls'],
                    mains: ['Shahi Paneer', 'Dal Makhani', 'Malai Kofta', 'Hyderabadi Biryani', 'Butter Naan', 'Missi Roti'],
                    desserts: ['Rasmalai', 'Gajar Halwa', 'Chocolate Fountain'],
                    beverages: ['Mocktail Bar', 'Coffee']
                }
            }
        ];

        // 3. Scoring Algorithm
        const scoredPackages = ALL_PACKAGES.map(pkg => {
            let score = 0;
            let isCompatible = true;

            // Strict Filters
            if (isJain && !pkg.tags.includes('jain') && !pkg.tags.includes('sattvik')) isCompatible = false;
            if (isNoOnionGarlic && !pkg.tags.includes('jain') && !pkg.tags.includes('sattvik')) isCompatible = false;

            // Allow Budget Packages for Bhandara even if not strictly tagged, provided they adhere to norms?
            // Actually, keep strict filters strict.

            if (!isCompatible) return { ...pkg, score: -100 };

            // Relevance Scoring
            if (eventType && pkg.typeMatch.includes(eventType)) score += 20;

            // Budget Scoring
            if (userBudget > 0) {
                if (userBudget >= pkg.basePrice && userBudget <= pkg.maxPrice) {
                    score += 15; // Perfect Budget Fit
                } else if (userBudget >= pkg.basePrice && userBudget < pkg.basePrice + 50) {
                    score += 10; // Slightly tight budget
                } else if (userBudget > pkg.maxPrice) {
                    score += 5; // Under budget (affordable) 
                } else {
                    score -= 10; // Over budget (too expensive)
                }
            }

            // Fallback for Generic
            if (pkg.id === 'standard' && score >= 0) score += 5;

            return { ...pkg, score };
        });

        // 4. Rank & Select
        return scoredPackages
            .filter(p => p.score > -50) // Remove incompatible
            .sort((a, b) => b.score - a.score) // Sort by highest score
            .slice(0, 3) // Return top 3
            .map((p, index) => ({ ...p, recommended: index === 0 })); // Mark top as recommended
    };


    const recommendations = getRecommendations();

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[700px]">
            {/* Sidebar / Progress */}
            <div className="bg-secondary text-white p-8 md:w-1/4 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-8">
                        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                        <span className="font-bold tracking-wider uppercase text-sm text-primary">AI Planner</span>
                    </div>
                    <h2 className="text-2xl font-heading font-bold mb-4">Plan Your Event</h2>
                    {eventType && <div className="text-sm bg-white/10 p-2 rounded mb-2">🎈 {eventType}</div>}
                    {details.guests && <div className="text-sm bg-white/10 p-2 rounded mb-2">👥 {details.guests} Guests</div>}
                </div>

                <div className="relative z-10 space-y-6 mt-12">
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= s ? 'bg-primary text-secondary' : 'bg-white/10 text-gray-400'}`}>
                                {step > s ? <Check className="w-4 h-4" /> : s}
                            </div>
                            <span className={`text-sm ${step >= s ? 'text-white' : 'text-gray-500'}`}>
                                {s === 1 ? 'Type' : s === 2 ? 'Details' : s === 3 ? 'Prefs' : 'Plan'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="p-6 md:p-10 md:w-3/4 bg-gray-50 relative overflow-y-auto">
                <AnimatePresence mode='wait'>
                    {/* STEP 1: EVENT TYPE */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="h-full flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Select Event Type</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                {EVENT_TYPES.map((type) => {
                                    const Icon = type.icon;
                                    return (
                                        <button
                                            key={type.id}
                                            onClick={() => setEventType(type.id)}
                                            className={`p-4 rounded-xl border-2 text-center transition-all hover:scale-[1.02] group ${eventType === type.id ? 'border-secondary bg-secondary/5' : 'border-gray-200 bg-white hover:border-secondary/50'}`}
                                        >
                                            <div className={`w-12 h-12 rounded-full mx-auto ${eventType === type.id ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-secondary/10 group-hover:text-secondary'} flex items-center justify-center mb-3 transition-colors`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className={`font-bold block text-sm ${eventType === type.id ? 'text-secondary' : 'text-gray-700'}`}>{type.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="mt-auto flex justify-end">
                                <Button
                                    onClick={handleNext}
                                    disabled={!eventType}
                                    className={!eventType ? 'opacity-50 cursor-not-allowed' : ''}
                                >
                                    Next <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: DETAILS */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="h-full flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Event Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="col-span-1">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Guests</label>
                                    <input
                                        type="number"
                                        placeholder="50"
                                        value={details.guests}
                                        onChange={(e) => setDetails({ ...details, guests: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary outline-none text-gray-900"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Date</label>
                                    <input
                                        type="date"
                                        value={details.date}
                                        onChange={(e) => setDetails({ ...details, date: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary outline-none text-gray-900"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Budget Target (Optional)</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. ₹300 per plate"
                                        value={details.budget}
                                        onChange={(e) => setDetails({ ...details, budget: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary outline-none text-gray-900"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Additional Notes</label>
                                    <textarea
                                        placeholder="Any theme colors regarding decoration?"
                                        value={details.notes}
                                        onChange={(e) => setDetails({ ...details, notes: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary outline-none h-24 resize-none text-gray-900"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-auto flex justify-between">
                                <Button variant="outline" onClick={handleBack}>Back</Button>
                                <Button onClick={handleNext}>Next <ChevronRight className="w-4 h-4 ml-2" /></Button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: PREFERENCES */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="h-full flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Dietary Preferences</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {[
                                    { id: 'jain', label: 'Jain (No Onion/Garlic)', desc: 'Strict Jain preparation.' },
                                    { id: 'pureVeg', label: 'Pure Vegetarian', desc: '100% Veg kitchen.' },
                                    { id: 'lowSpice', label: 'Low Spice / Kids', desc: 'Mild flavors.' },
                                    { id: 'noOnionGarlic', label: 'Sattvik', desc: 'No onion/garlic.' }
                                ].map((opt) => (
                                    <label key={opt.id} className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white cursor-pointer hover:border-secondary/50 transition-colors">
                                        <input
                                            type="checkbox"
                                            checked={(dietary as any)[opt.id]}
                                            onChange={(e) => setDietary({ ...dietary, [opt.id]: e.target.checked })}
                                            className="mt-1 w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary"
                                        />
                                        <div>
                                            <span className="font-bold text-gray-800 block">{opt.label}</span>
                                            <span className="text-sm text-gray-500">{opt.desc}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                            <div className="mt-auto flex justify-between">
                                <Button variant="outline" onClick={handleBack}>Back</Button>
                                <Button onClick={generateRecommendation} disabled={isGenerating}>
                                    {isGenerating ? 'AI Curating...' : 'Get Menu Plan'} <Sparkles className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: RECOMMENDATION - RICH UI */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col"
                        >
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-gray-600">Based on your preferences, we recommend:</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8 overflow-y-auto max-h-[400px] pr-2">
                                {recommendations.map((pkg) => {
                                    const Icon = pkg.icon;
                                    const isSelected = selectedPackage === pkg.id;

                                    return (
                                        <div
                                            key={pkg.id}
                                            onClick={() => setSelectedPackage(pkg.id)}
                                            className={`rounded-2xl border-2 p-6 cursor-pointer transition-all hover:shadow-lg relative ${isSelected ? 'border-secondary bg-orange-50' : 'border-gray-200 bg-white'}`}
                                        >
                                            {pkg.recommended && (
                                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                    Recommended
                                                </div>
                                            )}

                                            <div className="flex justify-between items-start mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm ${pkg.color}`}>
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-gray-800">{pkg.name}</h4>
                                                        <p className="text-sm text-gray-500">{pkg.priceRange}</p>
                                                    </div>
                                                </div>
                                                {isSelected && <div className="bg-secondary text-white p-1 rounded-full"><Check className="w-4 h-4" /></div>}
                                            </div>

                                            <p className="text-gray-600 text-sm mb-4 italic">{pkg.description}</p>

                                            <div className="space-y-3">
                                                <div>
                                                    <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Starters</span>
                                                    <p className="text-sm font-medium text-gray-800">{pkg.menu.starters.join(', ')}</p>
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Mains</span>
                                                    <p className="text-sm font-medium text-gray-800">{pkg.menu.mains.join(', ')}</p>
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Desserts</span>
                                                    <p className="text-sm font-medium text-gray-800">{pkg.menu.desserts.join(', ')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-auto pt-4 border-t border-gray-200">
                                <Button
                                    className="w-full py-4 text-lg"
                                    onClick={() => alert(`Package ${selectedPackage} Selected! We will call you shortly to confirm.`)}
                                    disabled={!selectedPackage}
                                >
                                    Book This Menu
                                </Button>
                                <div className="text-center mt-3">
                                    <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-secondary underline">Start Over</button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

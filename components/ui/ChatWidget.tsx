'use client';
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles, ChevronRight, Gift, Percent } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    type?: 'text' | 'options' | 'product' | 'game';
    options?: { label: string; action: string }[];
    product?: { name: string; image: string; price: string };
    gameResult?: string;
};

const MENU_DATA = {
    sweet: [
        { name: 'Chocolate Samosa', image: '/assets/images/menu/Chocolate Samosa.jpeg', price: '₹50' },
        { name: 'Blueberry Samosa', image: '/assets/images/menu/Blueberry Samosa.jpeg', price: '₹60' },
    ],
    spicy: [
        { name: 'Chilli Paneer Samosa', image: '/assets/images/menu/Chilli Paneer.jpeg', price: '₹55' },
        { name: 'Tawa Chaap Samosa', image: '/assets/images/menu/Tawa Chaap.jpeg', price: '₹60' },
    ],
    classic: [
        { name: 'Aloo Samosa', image: '/assets/images/menu/Aloo Samosa.jpeg', price: '₹20' },
        { name: 'Mix Veg Samosa', image: '/assets/images/menu/Mix Veg Samosa.jpeg', price: '₹35' },
    ],
    fusion: [
        { name: 'Pizza Samosa', image: '/assets/images/menu/Pizza Samosa.jpeg', price: '₹65' },
        { name: 'Pasta Samosa', image: '/assets/images/menu/Pasta Samosa.jpeg', price: '₹50' },
    ]
};

const INITIAL_OPTIONS = [
    { label: 'Suggest me a Samosa 🥟', action: 'suggest_start' },
    { label: 'Spin to Win! 🎁', action: 'game_start' },
    { label: 'Menu Help 📜', action: 'menu_help' },
    { label: 'Track Order 🛵', action: 'track_order' },
    { label: 'FAQs ❓', action: 'faq' },
];

const WHEEL_PRIZES = [
    { label: '10% OFF', code: 'SAMOSA10' },
    { label: 'Free Chutney', code: 'FREECHUTNEY' },
    { label: 'Buy 2 Get 1', code: 'B2G1FREE' },
    { label: 'Free Delivery', code: 'FREEDEL' },
    { label: '5% OFF', code: 'SAMOSA5' },
    { label: 'Try Again', code: null },
];

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Namaste! 🙏 I am Sam, your AI Samosa Assistant. How can I delight your taste buds today?', sender: 'bot', type: 'options', options: INITIAL_OPTIONS }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Hide tooltip after 10 seconds or when opened
    useEffect(() => {
        if (isOpen) setShowTooltip(false);
        const timer = setTimeout(() => setShowTooltip(false), 15000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    const handleOptionClick = (action: string, label: string) => {
        const userMsg: Message = { id: Date.now().toString(), text: label, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            let botResponse: Message | null = null;

            switch (action) {
                // GAMIFICATION FLOW
                case 'game_start':
                    botResponse = {
                        id: Date.now().toString(),
                        text: "Feeling lucky? 🍀 Spin the wheel to win a special offer!",
                        sender: 'bot',
                        type: 'game'
                    };
                    break;
                case 'game_result':
                    // This logic is handled inside the Game Component, but we need a textual response
                    // This case might be triggered programmatically if needed, but the SpinWheel component typically handles the display.
                    break;

                // SUGGESTION FLOW
                case 'suggest_start':
                    botResponse = {
                        id: Date.now().toString(),
                        text: "Ooh, I love playing matchmaker! First tell me, what's your mood?",
                        sender: 'bot',
                        type: 'options',
                        options: [
                            { label: 'Sweet Tooth 🍫', action: 'suggest_sweet' },
                            { label: 'Spicy & Savory 🥨', action: 'suggest_savory' },
                            { label: 'Something Exotic 🌮', action: 'suggest_exotic' },
                        ]
                    };
                    break;
                case 'suggest_sweet':
                    const sweetPick = MENU_DATA.sweet[Math.floor(Math.random() * MENU_DATA.sweet.length)];
                    botResponse = {
                        id: Date.now().toString(),
                        text: "You have great taste! Based on that, I think you'll fall in love with this:",
                        sender: 'bot',
                        type: 'product',
                        product: sweetPick
                    };
                    break;
                case 'suggest_savory':
                    botResponse = {
                        id: Date.now().toString(),
                        text: "Classic choice! One more question: Do you like it HOT? 🔥",
                        sender: 'bot',
                        type: 'options',
                        options: [
                            { label: 'Yes, bring the heat! 🌶️', action: 'suggest_spicy' },
                            { label: 'No, keep it mild 🥔', action: 'suggest_mild' },
                        ]
                    };
                    break;
                case 'suggest_spicy':
                    const spicyPick = MENU_DATA.spicy[Math.floor(Math.random() * MENU_DATA.spicy.length)];
                    botResponse = {
                        id: Date.now().toString(),
                        text: "Brave soul! This one packs a punch:",
                        sender: 'bot',
                        type: 'product',
                        product: spicyPick
                    };
                    break;
                case 'suggest_mild':
                    const mildPick = MENU_DATA.classic[Math.floor(Math.random() * MENU_DATA.classic.length)];
                    botResponse = {
                        id: Date.now().toString(),
                        text: "Comfort food specifically for you:",
                        sender: 'bot',
                        type: 'product',
                        product: mildPick
                    };
                    break;
                case 'suggest_exotic':
                    const fusionPick = MENU_DATA.fusion[Math.floor(Math.random() * MENU_DATA.fusion.length)];
                    botResponse = {
                        id: Date.now().toString(),
                        text: "Feeling adventurous? Try our famous fusion:",
                        sender: 'bot',
                        type: 'product',
                        product: fusionPick
                    };
                    break;

                // MENU HELP
                case 'menu_help':
                    botResponse = {
                        id: Date.now().toString(),
                        text: "Our menu is divided into Sweet, Savory, Paneer, and Fusion categories. You can browse the full menu on our dedicated page.",
                        sender: 'bot',
                        type: 'options',
                        options: [
                            { label: 'Go to Menu Page 📖', action: 'navigate_menu' },
                            { label: 'Back to Start 🏠', action: 'restart' }
                        ]
                    };
                    break;
                case 'navigate_menu':
                    window.location.href = '/menu';
                    return;

                // TRACK ORDER
                case 'track_order':
                    botResponse = {
                        id: Date.now().toString(),
                        text: "To track your order, please provide your Order ID. (This is a demo, but you can call us at +91 78273 31394 for real-time updates!)",
                        sender: 'bot',
                        type: 'options',
                        options: [
                            { label: 'Call Store 📞', action: 'call_store' },
                            { label: 'Back to Start 🏠', action: 'restart' }
                        ]
                    };
                    break;
                case 'call_store':
                    window.location.href = 'tel:+917827331394';
                    return;

                // FAQ
                case 'faq':
                    botResponse = {
                        id: Date.now().toString(),
                        text: "Here are some common questions:",
                        sender: 'bot',
                        type: 'options',
                        options: [
                            { label: 'Do you deliver? 🚚', action: 'faq_delivery' },
                            { label: 'Is it hygenic? 🧼', action: 'faq_hygiene' },
                            { label: 'Back to Start 🏠', action: 'restart' }
                        ]
                    };
                    break;
                case 'faq_delivery':
                    botResponse = { id: Date.now().toString(), text: "Yes! We deliver free of cost for orders above ₹200 within 5km.", sender: 'bot', type: 'options', options: [{ label: 'Back to Start', action: 'restart' }] };
                    break;
                case 'faq_hygiene':
                    botResponse = { id: Date.now().toString(), text: "Absolutely. We use automated machines and gloves for a contactless process to ensure top-notch hygiene.", sender: 'bot', type: 'options', options: [{ label: 'Back to Start', action: 'restart' }] };
                    break;

                // DEFAULT / RESTART
                case 'restart':
                default:
                    botResponse = {
                        id: Date.now().toString(),
                        text: "Is there anything else I can help you with?",
                        sender: 'bot',
                        type: 'options',
                        options: INITIAL_OPTIONS
                    };
                    break;
            }

            if (botResponse) setMessages(prev => [...prev, botResponse!]);
            setIsTyping(false);
        }, 1000);
    };

    // Sub-component for spinning wheel
    const SpinWheel = () => {
        const [spinning, setSpinning] = useState(false);
        const [result, setResult] = useState<{ label: string, code: string | null } | null>(null);

        const spin = () => {
            setSpinning(true);
            setTimeout(() => {
                const prize = WHEEL_PRIZES[Math.floor(Math.random() * WHEEL_PRIZES.length)];
                setResult(prize);
                setSpinning(false);

                // Add result to chat history after animation
                setMessages(prev => [...prev, {
                    id: Date.now().toString(),
                    text: prize.code
                        ? `🎉 Congratulations! You won ${prize.label}! Use code: ${prize.code}`
                        : `Oh no! ${prize.label}. Better luck next time!`,
                    sender: 'bot',
                    type: 'options',
                    options: [{ label: 'Back to Start 🏠', action: 'restart' }]
                }]);
            }, 2000); // 2s spin duration
        };

        if (result) return null; // Logic moved to main chat flow once result is obtained

        return (
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-md text-center">
                <motion.div
                    animate={spinning ? { rotate: 1800 } : { rotate: 0 }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="w-32 h-32 rounded-full border-4 border-secondary mx-auto mb-4 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative overflow-hidden"
                >
                    {/* Simple visual representation of segments */}
                    <div className="absolute inset-0 border-b-2 border-r-2 border-secondary/20 rotate-45"></div>
                    <div className="absolute inset-0 border-b-2 border-l-2 border-secondary/20 -rotate-45"></div>
                    <Gift className="w-10 h-10 text-primary animate-pulse" />
                </motion.div>
                <Button
                    variant="primary"
                    size="sm"
                    onClick={spin}
                    disabled={spinning}
                    className="w-full"
                >
                    {spinning ? 'Spinning...' : 'Spin Now!'}
                </Button>
            </div>
        );
    };

    return (
        <>
            {/* Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="fixed bottom-24 right-6 z-40 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 hidden md:flex items-center gap-2 pointer-events-none"
                    >
                        <span className="text-sm font-bold text-gray-800">Play & Win! 🎁</span>
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent absolute -right-2 top-1/2 -translate-y-1/2"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {/* Pulse Ring */}
                {!isOpen && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75 animate-ping"></span>
                )}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative bg-secondary text-white p-4 rounded-full shadow-2xl shadow-secondary/30 flex items-center justify-center hover:bg-black transition-colors"
                    aria-label="Open Chat"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}

                    {/* Notification Dot */}
                    {!isOpen && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                        </span>
                    )}
                </button>
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[600px] h-[80vh] md:h-[600px]"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-secondary to-dark p-4 flex items-center gap-3 shrink-0">
                            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white flex items-center gap-2">Samosa Hub AI <Sparkles className="w-3 h-3 text-yellow-300" /></h3>
                                <p className="text-secondary-100 text-xs text-green-300 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
                                </p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto bg-cream/30 space-y-4">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={cn("flex flex-col max-w-[85%]", msg.sender === 'user' ? "ml-auto items-end" : "mr-auto items-start")}
                                >
                                    {msg.text && (
                                        <div className={cn(
                                            "p-3 rounded-2xl text-sm shadow-sm",
                                            msg.sender === 'user'
                                                ? "bg-secondary text-white rounded-br-none"
                                                : "bg-white text-gray-700 rounded-bl-none border border-gray-200"
                                        )}>
                                            {msg.text}
                                        </div>
                                    )}

                                    {/* Game Component */}
                                    {msg.type === 'game' && <SpinWheel />}

                                    {/* Product Card */}
                                    {msg.type === 'product' && msg.product && (
                                        <div className="mt-2 bg-white p-3 rounded-xl border border-gray-200 shadow-md w-full">
                                            <div className="relative h-32 w-full rounded-lg overflow-hidden mb-2">
                                                <Image
                                                    src={msg.product.image}
                                                    alt={msg.product.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex justify-between items-center mb-2">
                                                <h4 className="font-bold text-sm">{msg.product.name}</h4>
                                                <span className="text-primary font-bold">{msg.product.price}</span>
                                            </div>
                                            <Button size="sm" className="w-full text-xs h-8" onClick={() => window.location.href = '/menu'}>
                                                View Menu
                                            </Button>
                                            <button
                                                onClick={() => handleOptionClick('restart', 'Suggest another')}
                                                className="w-full mt-1 text-xs text-gray-500 hover:text-secondary py-1"
                                            >
                                                Suggest another
                                            </button>
                                        </div>
                                    )}

                                    {/* Options */}
                                    {msg.type === 'options' && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {msg.options?.map((opt) => (
                                                <button
                                                    key={opt.label}
                                                    onClick={() => handleOptionClick(opt.action, opt.label)}
                                                    className="text-xs bg-white border border-secondary/20 text-secondary hover:bg-secondary hover:text-white px-3 py-1.5 rounded-full transition-all shadow-sm"
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mr-auto bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 flex gap-1"
                                >
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

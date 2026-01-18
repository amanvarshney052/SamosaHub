'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Trophy, CheckCircle, XCircle, Timer, Award, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

type Question = {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number; // Index of correct answer
    fact: string;
};

const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "Where did the Samosa originally come from?",
        options: ["India", "Middle East", "China", "Europe"],
        correctAnswer: 1,
        fact: "Samosas originated in the Middle East (where they were called 'sambosa') before coming to India!"
    },
    {
        id: 2,
        text: "Which of these is NOT a traditional samosa filling?",
        options: ["Spiced Potatoes (Aloo)", "Minced Meat (Keema)", "Ice Cream", "Lentils"],
        correctAnswer: 2,
        fact: "While Chocolate Samosas exist today, Ice Cream inside a hot fryer is a recipe for disaster (literally)!"
    },
    {
        id: 3,
        text: "What is the perfect companion for a hot Samosa?",
        options: ["Ketchup", "Mint Chutney", "Mayonnaise", "Mustard"],
        correctAnswer: 1,
        fact: "Mint (Hari) Chutney and Tamarind (Meethi) Chutney are the soulmates of a Samosa."
    },
    {
        id: 4,
        text: "What shape is a classic Samosa?",
        options: ["Square", "Circle", "Triangle/Pyramid", "Rectangle"],
        correctAnswer: 2,
        fact: "The triangular shape is iconic! It is said to mimic the shape of the Pyramids."
    },
    {
        id: 5,
        text: "In the 13th century, which poet praised the Samosa?",
        options: ["Amir Khusro", "Kabir", "Rumi", "Ghalib"],
        correctAnswer: 0,
        fact: "Amir Khusro, a scholar and royal poet of the Delhi Sultanate, wrote about samosas being enjoyed by nobles."
    }
];

export default function PlayPage() {
    const [gameState, setGameState] = useState<'start' | 'playing' | 'result'>('start');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showFact, setShowFact] = useState(false);

    const currentQuestion = QUESTIONS[currentQuestionIndex];

    const handleStart = () => {
        setGameState('playing');
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedOption(null);
        setShowFact(false);
    };

    const handleAnswer = (index: number) => {
        setSelectedOption(index);
        setShowFact(true);

        if (index === currentQuestion.correctAnswer) {
            setScore(prev => prev + 10);
            if (currentQuestionIndex === QUESTIONS.length - 1) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setShowFact(false);
        } else {
            setGameState('result');
        }
    };

    const percentage = (score / (QUESTIONS.length * 10)) * 100;
    let title = "Samosa Novice";
    if (percentage >= 100) title = "Samosa Emperor 👑";
    else if (percentage >= 80) title = "Samosa Connoisseur 🏅";
    else if (percentage >= 50) title = "Samosa Lover ❤️";

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-black py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <SectionHeader
                        title="Samosa Quiz Challenge"
                        subtitle="Play & Win Points"
                        className="text-white"
                    />
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-16">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 min-h-[400px] relative">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="relative z-10 p-8 md:p-12 text-center h-full flex flex-col justify-center">

                        <AnimatePresence mode='wait'>
                            {gameState === 'start' && (
                                <motion.div
                                    key="start"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="space-y-6"
                                >
                                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Trophy className="w-10 h-10 text-secondary" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">Do you speak Samosa?</h2>
                                    <p className="text-gray-600">Test your knowledge with 5 fun questions and win the title of Samosa Master!</p>
                                    <div className="pt-4">
                                        <Button size="lg" onClick={handleStart} className="rounded-full px-12">
                                            Start Quiz <Play className="w-4 h-4 ml-2 fill-current" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {gameState === 'playing' && (
                                <motion.div
                                    key="quiz"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="w-full text-left"
                                >
                                    <div className="flex justify-between items-center mb-8 text-sm font-bold text-gray-400">
                                        <span>Question {currentQuestionIndex + 1}/{QUESTIONS.length}</span>
                                        <span className="text-secondary">Score: {score}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-8">{currentQuestion.text}</h3>

                                    <div className="space-y-3 mb-8">
                                        {currentQuestion.options.map((option, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => !showFact && handleAnswer(idx)}
                                                disabled={showFact}
                                                className={`w-full p-4 rounded-xl border-2 text-left transition-all flex justify-between items-center ${showFact
                                                        ? idx === currentQuestion.correctAnswer
                                                            ? 'border-green-500 bg-green-50 text-green-700'
                                                            : idx === selectedOption
                                                                ? 'border-red-500 bg-red-50 text-red-700'
                                                                : 'border-gray-100 opacity-50'
                                                        : 'border-gray-100 hover:border-secondary hover:bg-secondary/5'
                                                    }`}
                                            >
                                                <span className="font-medium">{option}</span>
                                                {showFact && idx === currentQuestion.correctAnswer && <CheckCircle className="w-5 h-5 text-green-500" />}
                                                {showFact && idx === selectedOption && idx !== currentQuestion.correctAnswer && <XCircle className="w-5 h-5 text-red-500" />}
                                            </button>
                                        ))}
                                    </div>

                                    {showFact && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-blue-50 p-4 rounded-xl mb-6 text-sm text-blue-800"
                                        >
                                            <strong>Did you know?</strong> {currentQuestion.fact}
                                        </motion.div>
                                    )}

                                    {showFact && (
                                        <div className="text-right">
                                            <Button onClick={handleNext}>
                                                {currentQuestionIndex < QUESTIONS.length - 1 ? 'Next Question' : 'See Results'}
                                            </Button>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {gameState === 'result' && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="space-y-6"
                                >
                                    <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                        <Award className="w-12 h-12 text-yellow-600" />
                                    </div>

                                    <div>
                                        <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">Quiz Completed</p>
                                        <h2 className="text-4xl font-bold text-gray-900 mb-2">{score} / {QUESTIONS.length * 10} Points</h2>
                                        <div className="inline-block bg-secondary text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                                            {title}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 max-w-md mx-auto">
                                        {percentage === 100
                                            ? "Incredible! You know your samosas better than anyone else. Show this screen at the counter for a free chai!"
                                            : "Great effort! A true samosa lover never gives up. Eat more samosas to increase your knowledge!"}
                                    </p>

                                    <div className="pt-4 flex justify-center gap-4">
                                        <Button variant="outline" onClick={handleStart}>Play Again</Button>
                                        <Button onClick={() => window.location.href = '/menu'}>Celebrate with Samosas</Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

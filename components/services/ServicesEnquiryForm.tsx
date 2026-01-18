'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ServicesEnquiryForm() {
    return (
        <section className="py-20 bg-dark relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Side: Text & Contact Info */}
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            Let's Plan Your <br />
                            <span className="text-gradient">Next Big Event</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Have a custom requirement? Fill out the form, and our catering expert will call you back within 24 hours to discuss a tailored menu for your special occasion.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300 group cursor-pointer hover:text-primary transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Us</p>
                                    <p className="font-bold text-lg">+91 70119 21155</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300 group cursor-pointer hover:text-primary transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Us</p>
                                    <p className="font-bold text-lg">info@samosahub.in</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300 group cursor-pointer hover:text-primary transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Visit Us</p>
                                    <p className="font-bold text-lg">Krishna Nagar, Delhi</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right Side: The Form */}
                    <AnimatedSection delay={0.2}>
                        <div className="glass-dark p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                            {/* Form Decoration */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>

                            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-400">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="event" className="text-sm font-medium text-gray-400">Event Type</label>
                                    <select
                                        id="event"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [&>option]:bg-dark"
                                    >
                                        <option value="" disabled selected>Select an Event</option>
                                        <option value="wedding">Wedding / Engagement</option>
                                        <option value="birthday">Birthday Party</option>
                                        <option value="corporate">Corporate Event</option>
                                        <option value="bulk">Bulk Order</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-400">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us about your guest count, date, or specific food requirements..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600 resize-none"
                                    ></textarea>
                                </div>

                                <Button
                                    className="w-full"
                                    size="lg"
                                >
                                    Send Enquiry <Send className="w-4 h-4 ml-2" />
                                </Button>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

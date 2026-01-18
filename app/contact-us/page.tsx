'use client';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SubscribeSection from '@/components/home/SubscribeSection';
import { Button } from '@/components/ui/Button';
import ServicesEnquiryForm from '@/components/services/ServicesEnquiryForm';

export default function ContactUsPage() {
    const address = "F-4/10, Mandir Marg, Block F, Krishna Nagar, Delhi - 110051";
    const mapSrc = "https://maps.google.com/maps?q=F-4%2F10%2C+Mandir+Marg%2C+Block+F%2C+Krishna+Nagar%2C+Delhi+-+110051&t=&z=15&ie=UTF8&iwloc=&output=embed";
    const directionLink = "https://www.google.com/maps/dir//F-4/10,+Mandir+Marg,+Block+F,+Krishna+Nagar,+Delhi+-+110051";

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-black py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <SectionHeader
                        title="Get In Touch"
                        subtitle="Contact Us"
                        className="text-white"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <AnimatedSection>
                            <h3 className="text-3xl font-heading font-bold text-secondary mb-6">Visit Our Store</h3>
                            <p className="text-gray-600 mb-8">
                                Craving for the best samosas in town? Come visit `Samosa Hub` and treat your taste buds!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Address</h4>
                                        <p className="text-gray-600 max-w-xs">{address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Phone</h4>
                                        <div className="text-gray-600 flex flex-col">
                                            <a href="tel:+917011921155" className="hover:text-secondary">+91 70119 21155</a>
                                            <a href="tel:+917827331394" className="hover:text-secondary">+91 78273 31394</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email</h4>
                                        <a href="mailto:info@samosahub.in" className="text-gray-600 hover:text-secondary">info@samosahub.in</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Open Hours</h4>
                                        <p className="text-gray-600">Mon - Sun: 01:00 PM - 10:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button
                                    asChild
                                    variant="primary"
                                    size="lg"
                                    className="rounded-full shadow-lg hover:shadow-primary/50"
                                >
                                    <a href={directionLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <Navigation className="w-5 h-5" />
                                        Get Directions (Click to Navigate)
                                    </a>
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Map */}
                    <AnimatedSection delay={0.2} className="h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
                        <iframe
                            src={mapSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </AnimatedSection>
                </div>
            </div>

            {/* Enquiry Form */}
            <ServicesEnquiryForm />

            <SubscribeSection />
        </div>
    );
}

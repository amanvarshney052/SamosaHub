'use client';
import { Play } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../shared/SectionHeader';

const VIDEOS = [
    { id: 'VSEyEzoKGA4', title: 'Great Big Story', thumbnail: 'https://img.youtube.com/vi/VSEyEzoKGA4/maxresdefault.jpg' },
    { id: 'Cl3_nsVT2b0', title: 'Curly Tales', thumbnail: 'https://img.youtube.com/vi/Cl3_nsVT2b0/hqdefault.jpg' },
    { id: 'EAaOj93reKk', title: 'Veggie Paaji', thumbnail: 'https://img.youtube.com/vi/EAaOj93reKk/maxresdefault.jpg' },
    { id: 'nvt3xtVsvXk', title: 'HMM! (Nikhil)', thumbnail: 'https://img.youtube.com/vi/nvt3xtVsvXk/maxresdefault.jpg' },
    { id: '0Qt_IKLS8R0', title: 'Dil Se Foodie', thumbnail: 'https://img.youtube.com/vi/0Qt_IKLS8R0/maxresdefault.jpg' },
    { id: 'DtfhwCuWmg0', title: 'Delhi Food Walks', thumbnail: 'https://img.youtube.com/vi/DtfhwCuWmg0/maxresdefault.jpg' },
    { id: 'af42By_DW1E', title: 'Delhi Food Shaukeen', thumbnail: 'https://img.youtube.com/vi/af42By_DW1E/maxresdefault.jpg' },
    { id: 'Rra09Q-xFXA', title: 'Epic ladka', thumbnail: 'https://img.youtube.com/vi/Rra09Q-xFXA/maxresdefault.jpg' },
    { id: 'D2Shnq_Vz20', title: 'VBO Life', thumbnail: 'https://img.youtube.com/vi/D2Shnq_Vz20/maxresdefault.jpg' },
    { id: 'UW162i_itXE', title: 'Sarah Hussain (ZingyZest)', thumbnail: 'https://img.youtube.com/vi/UW162i_itXE/maxresdefault.jpg' },
    { id: 'X-BkY1CeAFw', title: 'Only Nikhil Vlog', thumbnail: 'https://img.youtube.com/vi/X-BkY1CeAFw/maxresdefault.jpg' },
    { id: 'sGlNeZctVEI', title: 'Foody Travel Moody', thumbnail: 'https://img.youtube.com/vi/sGlNeZctVEI/maxresdefault.jpg' },
    { id: 'm2yUlT4BC5s', title: 'Indian Desi Tadakaa', thumbnail: 'https://img.youtube.com/vi/m2yUlT4BC5s/hqdefault.jpg' },
    { id: 'e_I1hVF4VXc', title: 'Its Two Much', thumbnail: 'https://img.youtube.com/vi/e_I1hVF4VXc/maxresdefault.jpg' },
];

export default function FeaturedVideoSection() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader title="Our Featured Video" subtitle="Watch Us" className="text-white mb-12" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {VIDEOS.map((video, idx) => (
                        <AnimatedSection key={video.id} delay={idx * 0.05} className="group cursor-pointer">
                            <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-xl">
                                {/* Thumbnail */}
                                <div className="aspect-video relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 fill-current text-white ml-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="font-heading font-bold text-xl group-hover:text-primary transition-colors">{video.title}</h3>
                                </div>
                            </a>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

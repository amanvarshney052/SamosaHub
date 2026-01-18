import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    description: string;
    Icon: LucideIcon;
    image?: string;
}

export default function ServiceCard({ title, description, Icon, image }: ServiceCardProps) {
    return (
        <div className="glass-dark p-8 rounded-2xl overflow-hidden relative group hover-3d duration-300 h-full border border-white/5">
            {/* Background Image with Overlay */}
            {image && (
                <>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    />
                    <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition-colors z-0"></div>
                </>
            )}

            <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl mb-3 text-white group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

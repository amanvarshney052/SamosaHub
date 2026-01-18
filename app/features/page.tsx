import Link from 'next/link';
import FeaturedVideoSection from '@/components/features/FeaturedVideoSection';
import NewsMediaSection from '@/components/features/NewsMediaSection';
import NewspaperSection from '@/components/features/NewspaperSection';
import SubscribeSection from '@/components/home/SubscribeSection';

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="header-bg header-bg-page relative bg-black py-32 overflow-hidden">
                <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
                {/* Shapes can be added via CSS/Image if available, sticking to clean design for now */}
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Features</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="flex justify-center gap-2 text-white/80">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li>/</li>
                            <li className="text-primary font-bold">Features</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <FeaturedVideoSection />
            <NewsMediaSection />
            <NewspaperSection />
            <SubscribeSection />
        </div>
    );
}

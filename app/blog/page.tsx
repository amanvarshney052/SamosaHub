import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import BlogCard from '@/components/ui/BlogCard';

const BLOG_POSTS = [
    {
        title: 'The History of Samosa: From Middle East to India',
        // Using pasta image as placeholder for blog images as well since we have limited assets
        image: '/assets/images/pasta-samosa.jpeg',
        excerpt: 'Did you know that Samosa didn\'t originate in India? Trace back the journey of this beloved snack.',
        date: 'Jan 15, 2024',
        author: 'Admin',
        category: 'History'
    },
    {
        title: '5 Reasons Why Chocolate Samosa is the Next Big Thing',
        image: '/assets/images/samosa.png',
        excerpt: 'Breaking the stereo-types of spicy samosas, here is why our Chocolate variant is a bestseller.',
        date: 'Jan 10, 2024',
        author: 'Chef Raj',
        category: 'Trends'
    },
    {
        title: 'How We Ensure 100% Hygiene in Our Kitchens',
        image: '/assets/images/header-samosa.png',
        excerpt: 'A behind-the-scenes look at our safety protocols, automated fryers, and quality checks.',
        date: 'Dec 28, 2023',
        author: 'Safety Team',
        category: 'Hygiene'
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-cream py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">Our Blog</h1>
                    <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-primary font-bold">Blog</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <SectionHeader title="Latest News & Updates" subtitle="Read Our Blog" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, i) => (
                        <BlogCard key={i} {...post} />
                    ))}
                </div>
            </div>
        </div>
    );
}

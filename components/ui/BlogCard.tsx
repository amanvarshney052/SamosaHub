import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogCardProps {
    title: string;
    image: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
}

export default function BlogCard({ title, image, excerpt, date, author, category }: BlogCardProps) {
    return (
        <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full">
                    {category}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {author}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                    {excerpt}
                </p>
                <Link href="/blog" className="text-secondary font-bold text-sm flex items-center gap-2 hover:text-accent mt-auto group/link">
                    Read More <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </article>
    );
}

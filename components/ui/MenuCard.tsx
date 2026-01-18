import Image from 'next/image';
import { Plus } from 'lucide-react';
import Link from 'next/link';

interface MenuCardProps {
    name: string;
    image: string;
    price: string;
    description?: string;
    color: string;
    tags?: string[];
    badge?: string;
}

export default function MenuCard({ name, image, price, description, color, badge }: MenuCardProps) {
    // Map color names to Tailwind classes for background
    const colorMap: Record<string, string> = {
        'primary': 'bg-primary/10 group-hover:bg-primary/20',
        'blue': 'bg-blue-100 group-hover:bg-blue-200',
        'pink': 'bg-pink-100 group-hover:bg-pink-200',
        'yellow': 'bg-yellow-100 group-hover:bg-yellow-200',
        'green': 'bg-green-100 group-hover:bg-green-200',
        'orange': 'bg-orange-100 group-hover:bg-orange-200',
        'red': 'bg-red-100 group-hover:bg-red-200',
    };

    const bgClass = colorMap[color] || 'bg-gray-100';

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 group hover-3d hover-glow relative overflow-hidden h-full flex flex-col">
            {badge && (
                <div className="absolute top-4 right-4 z-20 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-md">
                    {badge}
                </div>
            )}
            <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full transition-colors ${bgClass}`}></div>
            <div className="relative h-40 w-full mb-6">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
            {description && <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">{description}</p>}
            <div className="flex justify-between items-center mt-auto">
                <span className="text-primary font-bold text-lg">{price}</span>
                <Link href="/menu" className="bg-secondary p-2 rounded-full text-white hover:bg-accent transition-colors">
                    <Plus className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
}

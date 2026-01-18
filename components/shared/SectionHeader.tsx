import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    subtitle: string;
    title: string;
    align?: 'left' | 'center';
    className?: string;
}

export default function SectionHeader({ subtitle, title, align = 'center', className }: SectionHeaderProps) {
    return (
        <div className={cn(`mb-12 space-y-4 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : ''}`, className)}>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">{subtitle}</span>
            <h2 className="text-4xl font-heading font-bold text-secondary">{title}</h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
        </div>
    );
}

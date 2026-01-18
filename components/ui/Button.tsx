import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Since we are mocking dependencies, we'll implement a simple Slot behavior or just standard button if Slot is missing.
// For now, let's assume standard button behavior with CVA.

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-200",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-primary/50 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover-shine relative overflow-hidden",
                secondary: "bg-secondary text-white shadow-lg hover:shadow-secondary/50",
                outline: "border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white",
                ghost: "hover:bg-accent/10 hover:text-accent",
                link: "text-primary underline-offset-4 hover:underline",
                glass: "glass text-secondary hover:bg-white hover:text-accent",
            },
            size: {
                default: "h-11 px-8 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-14 rounded-full px-10 text-base",
                icon: "h-10 w-10",
            },
            animation: {
                none: "",
                pulse: "animate-pulse-slow",
                float: "animate-float",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            animation: "none",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, animation, asChild = false, ...props }, ref) => {
        const Comp = "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, animation, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };

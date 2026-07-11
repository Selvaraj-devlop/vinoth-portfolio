import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  as?: React.ElementType;
  target?: string;
  rel?: string;
  to?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', as: Component = 'button', href, children, ...props }, ref) => {
    // New Glowing Glass base styles
    const baseStyles = "relative group inline-flex items-center justify-center rounded-full font-bold tracking-wide overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none z-10 hover:scale-105";
    
    const variants = {
      primary: "bg-white/10 border border-primary/50 text-white shadow-[0_0_15px_rgba(var(--color-primary),0.2)] hover:shadow-[0_0_25px_rgba(var(--color-primary),0.5)] hover:border-primary",
      secondary: "bg-white/5 border border-white/20 text-white hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(var(--color-secondary),0.4)]",
      outline: "bg-white/5 border border-white/10 text-white hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--color-primary),0.4)]",
      ghost: "bg-transparent text-text-muted hover:text-white hover:bg-white/5 border border-transparent hover:scale-100",
    };

    const sizes = {
      sm: "h-8 px-6 text-sm",
      md: "h-10 px-8 text-sm md:text-base",
      lg: "h-12 px-10 text-base md:text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const innerContent = (
      <>
        {/* Hover gradient background slide */}
        {variant !== 'ghost' && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
        )}
        <span className={cn(
          "relative z-10 flex items-center justify-center gap-2 transition-all duration-300",
          variant !== 'ghost' ? 'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary' : ''
        )}>
          {children}
        </span>
      </>
    );

    if (href || props.to) {
      if (Component !== 'button') {
        return (
          <Component ref={ref} className={classes} href={href} {...props}>
            {innerContent}
          </Component>
        );
      }
      return (
        <a href={href} className={classes} {...(props as any)}>
          {innerContent}
        </a>
      );
    }

    return (
      <Component ref={ref} className={classes} {...props}>
        {innerContent}
      </Component>
    );
  }
);

Button.displayName = 'Button';

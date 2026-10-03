import * as React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 select-none';

    const variants = {
      default: 'bg-[#0F172A] text-white hover:bg-slate-800 shadow-sm',
      secondary: 'bg-[#8B2E1A] text-white hover:bg-[#a33520] shadow-sm',
      outline: 'border border-[#E8E4DF] bg-white text-[#0F172A] hover:bg-[#F8F7F5]',
      ghost: 'text-slate-600 hover:text-[#0F172A] hover:bg-[#F8F7F5]',
    };

    const sizes = {
      default: 'h-10 px-4 py-2 text-sm rounded-xl',
      sm: 'h-9 px-3 text-xs rounded-lg',
      lg: 'h-11 px-8 text-base rounded-xl',
      icon: 'h-9 w-9 rounded-full',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

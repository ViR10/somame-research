import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-10 w-full rounded-xl border border-[#E8E4DF] bg-white px-3.5 py-2 text-sm text-[#1E1B5E] placeholder:text-slate-400 focus-visible:outline-none focus-visible:border-[#1E1B5E] focus-visible:ring-1 focus-visible:ring-[#1E1B5E] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

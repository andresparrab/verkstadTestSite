import React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const CardWrapper = ({ children, className = "" }: CardWrapperProps) => (
  <div className={`relative ${className}`}>
    {/* Decorative borders for individual card */}
    <div className="absolute inset-y-0 left-0 h-full w-px bg-border">
      <div className="absolute top-1/4 h-20 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
    </div>
    <div className="absolute inset-y-0 right-0 h-full w-px bg-border">
      <div className="absolute bottom-1/4 h-20 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
    </div>
    <div className="absolute inset-x-0 top-0 h-px w-full bg-border">
      <div className="absolute left-1/3 h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
    <div className="absolute inset-x-0 bottom-0 h-px w-full bg-border">
      <div className="absolute right-1/3 h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>

    <div className="relative z-10 p-4">{children}</div>
  </div>
);

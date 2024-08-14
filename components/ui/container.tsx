import { cn } from '@/libs/utils';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  isFullHeight?: string;
};

export default function Container({ children, className, isFullHeight }: ContainerProps) {
  return (
    <div className={cn('mx-auto max-w-7xl px-5 md:px-3', className, { 'h-full': isFullHeight })}>
      {children}
    </div>
  );
}

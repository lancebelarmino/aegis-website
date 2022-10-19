import React, { ReactNode } from 'react';
import CardLine from '@assets/icons/CardLine.svg';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Card({ children, className, ...others }: CardProps) {
  return (
    <div className={clsx('clip-card relative bg-black-400', className)} {...others}>
      <div className="top clip-card absolute inset-px bg-black-900 p-10">
        {children}
        <CardLine className="absolute top-5 right-5" />
      </div>
    </div>
  );
}

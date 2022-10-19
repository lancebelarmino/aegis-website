import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  component?: React.ElementType;
}

export default function Section(props: SectionProps) {
  const { children, className, component: Component = 'section' } = props;

  return <Component className={clsx('px-6', className)}>{children}</Component>;
}

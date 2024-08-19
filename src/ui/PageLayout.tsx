import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type PageProps = {
  children: ReactNode;
  className?: string;
};

const PageLayout = ({ className, children }: PageProps) => {
  return (
    <div className={twMerge('flex-1 flex flex-col', className)}>{children}</div>
  );
};

const Header = ({ className, children }: PageProps) => {
  return (
    <header
      className={twMerge(
        'flex px-3 justify-between items-center bg-gray-100 border border-b-gray-200 h-12',
        className,
      )}>
      {children}
    </header>
  );
};

PageLayout.Header = Header;

export default PageLayout;

import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center py-16 px-8 lg:px-16 ${className}`}
    >
      <div className="w-full max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
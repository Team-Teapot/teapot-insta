import React from 'react';

export function Grid({ children }) {
  return <div className="flex flex-wrap mb-4">{children}</div>;
}

export function GridItem({ children, className }) {
  return <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 ${className}`}>{children}</div>;
}

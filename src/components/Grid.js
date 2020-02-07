import React from 'react';

export function Grid({ children, className }) {
  return <div className={`flex flex-wrap mb-4 ${className}`}>{children}</div>;
}

export function GridItem({ children, className }) {
  return <div className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 ${className}`}>{children}</div>;
}

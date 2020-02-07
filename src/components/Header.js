import React from 'react';

export function Header() {
  return (
    <h1 className="w-full bg-gray-800 text-white p-4 fixed top-0 z-10 flex">
      <img src="/logo.svg" alt="Logo of a teapot" className="h-10 w-10" />
      <span className="pl-4 font-bold">Over-Engineered Teapot</span>
    </h1>
  );
}

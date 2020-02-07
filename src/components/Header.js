import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <h1 className="w-full bg-gray-800 text-white pt-4 pb-4 pl-8 pr-8 fixed top-0 z-10 flex justify-between">
      <div className="flex">
        <img src="/logo.svg" alt="Logo of a teapot" className="h-10 w-10" />
        <span style={{ fontFamily: "'Open Sans', 'Helvetica Neue', Arial, sans-serif" }} className="pl-4 font-bold">WE ❤️ TEA</span>
      </div>
      <div>
        <Link
          aria-label="Tea Appreciation Site"
          title="Tea Appreciation Site"
          to="/ali"
          className="text-white hover:text-gray-400 no-underline"
        >
          <i className="fas fa-cookie-bite"/>
        </Link>
        <Link
          aria-label="Image Gallery"
          title="Image Gallery"
          to="/"
          className="text-white hover:text-gray-400 no-underline pl-4"
        >
          <i className="far fa-images" />
        </Link>
      </div>
    </h1>
  );
}

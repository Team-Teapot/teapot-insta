import React, { useEffect, useState } from 'react';
import { inspiration } from '../miscellany/inspiration';

function getRandomInt(max) {
  return Math.floor(Math.random() * (Math.floor(max)));
}

export function ImagePreview({ src, alt, filter }) {
  const [className, setClassName] = useState('inkwell');

  const [inspired, setInspired] = useState(false);

  const [quote, setQuote] = useState('Busy Actualizing, come back later');

  useEffect(() => {
    setQuote(inspiration.quotes[getRandomInt(inspiration.quotes.length)]);
  }, []);

  const onClick = () => setInspired(!inspired);

  return (
    <div className="relative rounded shadow-lg overflow-hidden bg-white">
      <button
        onMouseEnter={() => setClassName(filter)}
        onMouseLeave={() => setClassName('inkwell')}
        onClick={onClick}
        className="h-full w-full"
      >
        <img
          className={`${className} ${inspired ? 'opacity-25' : ''} transition duration-500 ease-in-out h-full w-full`}
          src={src}
          alt={alt}
        />
      </button>
      {inspired && (
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center ">
          <button
            onClick={onClick}
            className="text-center p-8 h-full w-full text-gray-900"
            type="button"
          >
            {`"${quote}"`}
          </button>
        </div>
      )}
    </div>
  );
}

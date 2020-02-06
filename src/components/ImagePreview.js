import React, { useState } from 'react';

export function ImagePreview({ src, alt, filter }) {
  const [className, setClassName] = useState('inkwell');

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onMouseEnter={() => setClassName(filter)}
      onMouseLeave={() => setClassName('inkwell')}
    />
  );
}

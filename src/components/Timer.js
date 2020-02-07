import React, { useState } from 'react';

import './timer.css';

const classNames = [
  "weak-tea",
  "intermediate-tea",
  "acceptable-tea",
  "proper-tea",
];

export function Timer() {

  const [className, setClassName] = useState(0);

  return (
    <div className={classNames[className]} onAnimationEnd={() => setClassName(Math.min(className + 1, classNames.length - 1))}>
      Time goes here
    </div>
  );
}

import React, { useState } from 'react';

import './timer.css';

const classNames = [
  'weak-tea',
  'intermediate-tea',
  'acceptable-tea',
  'proper-tea'
];

const classNameToAriaLabel = {
  [classNames[0]]: 'Your tea is now weak',
  [classNames[1]]: 'Your tea is now getting there',
  [classNames[2]]: 'You could take your tea bag out now and not be ostracised',
  [classNames[3]]: 'Tea. Completed it mate.'
};

export function Timer() {
  const [stage, setStage] = useState(0);

  return (
    <div className="w-full flex justify-center items-center">
      <div aria-label={classNameToAriaLabel[classNames[stage]]}
           title={classNameToAriaLabel[classNames[stage]]} className={classNames[stage]}
           onAnimationEnd={() => setStage(Math.min(stage + 1, classNames.length - 1))}>
        <i className="fas fa-coffee tea-mug" />
      </div>
    </div>
  );
}

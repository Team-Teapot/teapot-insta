import React from 'react';
import "./Subtitle.css";

function Subtitle(props) {
  return (
    <div className="Subtitle">
      <div className="Subsubtitle">{props.subtitle}</div>
    </div>
  );
}

export default Subtitle;
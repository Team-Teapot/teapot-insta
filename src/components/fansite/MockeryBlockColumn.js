import React from 'react';
import "./MockeryBlockColumn.css"

function MockeryBlockColumn(props) {
  let formattedText = props.text.split('<br>').map((item, i) => {
    return <p key={i}>{item}</p>;
  });
  return (
    <div className="MockeryBlockColumn">
      {props.headerImage && <img className="MockeryBlockImage" src={props.headerImage} />}
      <div className="MockeryBlockHeading">
      {props.heading}
      </div>
      <div className="MockeryBlockText">
        {formattedText}
        </div>
    </div>
  );
}

export default MockeryBlockColumn;
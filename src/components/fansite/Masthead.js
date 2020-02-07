import React from 'react';
import TitleBlock from "./TitleBlock";
import Subtitle from "./Subtitle";


const quotes = ["I was always brought up to have a cup of tea at halfway up a rock face. -Bear Grylls",
"There is something in the nature of tea that leads us into a world of quiet contemplation of life. -Lin Yutang",
"Tea … is a religion of the art of life. -Kakuzo Okakura",
"Tea is the magic key to the vault where my brain is kept. -Frances Hardinge",
"But indeed I would rather have nothing but tea. -Jane Austen",
"We had a kettle; we let it leak: Our not repairing made it worse. We haven’t had any tea for a week… The bottom is out of the Universe. -Rudyard Kipling"]

function Masthead() {
  return (
    <div className="Masthead">
      <TitleBlock titleBlock="WE ❤️ TEA" />
      <hr/>
      <Subtitle subtitle={quotes[Math.floor(quotes.length * Math.random())]} />
    </div>
  );
}

export default Masthead;
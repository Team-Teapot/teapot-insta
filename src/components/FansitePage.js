import React from 'react' 
import Navbar from "./fansite/Navbar"
import Masthead from "./fansite/Masthead"
import MockeryBlock from "./fansite/MockeryBlock"
import MockeryBlockColumn from "./fansite/MockeryBlockColumn"
import ContactPain from "./fansite/ContactPain"
import Footer from "./fansite/Footer"
import Subtitle from "./fansite/Subtitle"
import "../App.css"

function FansitePage() {
  return (
    <div className="FansitePage" style={{ background: 'white' }}>
      <Navbar />
      <header className="App-header">
        <Masthead />
      </header>
      <div style={{ padding: '50px', fontWeight: 'bolder', fontSize:'30px', paddingLeft:'38%'}} >
        <Subtitle subtitle="Tea Jokes" />
      </div>
      <hr />
      <MockeryBlock>
        <MockeryBlockColumn text="What do you a call a dinosaur that drinks tea? <br> A Tea-rex." />
        <MockeryBlockColumn text="The hardest tea to swallow? <br> Reality" />
        <MockeryBlockColumn text="Patient says: Doctor I have pain in my eye whenever I drink tea. <br> Doctor says: Take the spoon out of your mug" />
        <MockeryBlockColumn text="Why do Communists drink Herbal tea? <br> Because proper tea is theft." />
      </MockeryBlock>
      <hr />
      <div style={{ padding: '50px', fontWeight: 'bolder', fontSize: '30px', paddingLeft:'38%'}} >
        <Subtitle subtitle="Tea Facts" />
      </div>
      <MockeryBlock>
        <MockeryBlockColumn text="Tea breaks have been with us for around 200 years. Workers used to commence their days around 6am, so employers allowed a break in the morning for tea and food." />
        <MockeryBlockColumn text="Tea should be left for two minutes to brew – but apparently 80% of us just can’t wait that long!" />
        <MockeryBlockColumn text="Don’t panic but there’s evidence that, as a nation, we might actually be falling out of love with tea. From 2010 to 2015 the consumption of tea in the UK fell by a fifth." />
        <MockeryBlockColumn text="The most expensive tea bag in the world was created by Boodles jewellers to celebrate PG Tips 75th birthday. The diamond-encrusted bag was worth £7000 and was auctioned off for charity." />
      </MockeryBlock>
      <ContactPain />
    </div>
  );
}

export default FansitePage;
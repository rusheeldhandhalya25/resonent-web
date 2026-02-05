import React from 'react'
import FirstParagraph from './Career/FirstParagraph.jsx';
import JoinUs from './Career/Joinus.jsx';
import OurCulture from './Career/OurCulture.jsx';
import OpenPositions from './Career/OpenPosition.jsx';



function Career() {
  return (
    <div className='bg-backgroundClr'>
      <FirstParagraph />
      <JoinUs />
      <OurCulture />
      <OpenPositions />
    </div>
  )
}

export default Career
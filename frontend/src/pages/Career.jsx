import React from 'react'
import FirstParagraph from './Career/FirstParagraph.jsx';
import JoinUs from './Career/Joinus.jsx';
import OurCulture from './Career/OurCulture.jsx';
import OpenPositions from './Career/OpenPosition.jsx';
import JoinIntership from './Career/JionInternship.jsx';
import ApplyNowForm from './Career/ApplyNowForm.jsx';



function Career() {
  return (
    <div className='bg-backgroundClr'>
      <FirstParagraph />
      <JoinUs />
      <OurCulture />
      <OpenPositions />
      <JoinIntership />
      <ApplyNowForm />
    </div>
  )
}

export default Career
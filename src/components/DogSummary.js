import React from 'react'
import DogInfo from  './DogInfo'

function DogSummary({ activeDog, onStatusClick }) {
  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      {activeDog ? <DogInfo activeDog={activeDog} onStatusClick={onStatusClick}/> : null }
  </div>
  )
}

export default DogSummary

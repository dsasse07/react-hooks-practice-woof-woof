import React from 'react'

function DogInfo({activeDog, onStatusClick}) {

  const {id, name, image, isGoodDog} = activeDog
  
  function handleStatusClick(){
    onStatusClick(id, !isGoodDog)
  }
  return (
    <div id="dog-info">
      <img src={image ? image : null} alt={name}/> 
      <h2>{name}</h2>
      <button onClick={handleStatusClick}>{ isGoodDog ? "Good Dog" : "Bad Dog"} </button>
    </div> 
  )
}

export default DogInfo

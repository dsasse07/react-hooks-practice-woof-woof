import React from 'react'
import Dog from './Dog'

function DogBar({ dogs, onClickDog }) {

  const dogComponents = dogs.map( dog => {
    return <Dog dog={dog} key={dog.id} onClickDog={onClickDog}/>
  })

  return (
    <div id="dog-bar">
        {dogComponents}
    </div>
  )
}

export default DogBar

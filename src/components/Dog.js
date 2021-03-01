import React from 'react'

function Dog({ dog, onClickDog }) {

  function handleClickDog(){
    onClickDog(dog)
  }
  return (
    <div>
      <span onClick={handleClickDog}> {dog.name} </span>
    </div>
  )
}

export default Dog

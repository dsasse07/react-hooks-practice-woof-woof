import React, {useState, useEffect} from "react";
import DogSummary from './DogSummary'
import Filter from './Filter'
import DogBar from './DogBar'

function App() {

  const [dogs, setDogs] = useState([])
  const [activeDog, setActiveDog] = useState(null)
  const [filterGood, setFilterGood] = useState(false)
  const API = "http://localhost:3001/pups"

  useEffect( () => {
    fetch(API)
      .then( response => response.json() )
      .then( setDogs ) 
  }, [])

  function handleClickFilter(){
    setFilterGood(filterGood => !filterGood)
  }

  const filteredDogs = dogs.filter( dog => {
    if (!filterGood) return true
    return dog.isGoodDog === filterGood
  })

  function handleSetActiveDog(dog){
    setActiveDog(dog)
  }

  function handleStatusToggle(id, status){
    const patchConfig = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({isGoodDog: status})
    }

    fetch(`${API}/${id}`, patchConfig)
    .then( response => response.json() )
    .then( updatedDog => {
      const updatedDogs = dogs.map( dog => {
        if (dog.id !== updatedDog.id) return dog
        return updatedDog
      })
      setDogs(updatedDogs)
      setActiveDog(updatedDog)
    })
  }
  return (
    <div className="App">
      <Filter filterGood={filterGood} onClickFilter={handleClickFilter}/>
      <DogBar dogs={filteredDogs} onClickDog={handleSetActiveDog} />
      <DogSummary activeDog={activeDog} onStatusClick={handleStatusToggle}/>
    </div>
  );
}

export default App;

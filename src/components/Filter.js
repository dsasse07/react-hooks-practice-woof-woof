import React from 'react'

function Filter({filterGood, onClickFilter}) {

  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={onClickFilter}>Filter good dogs: {filterGood ? "ON" : "OFF" }</button>
    </div>
  )
}

export default Filter

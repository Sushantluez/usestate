import React from 'react'

const DisplaySection = ({ age, rating, person, greet }) => {

  const per = {
    id: 1,
    name: 'rita'
  };

  const { id, name } = per;

  return (
    <div>
      <button onClick={greet}>Say Greet</button>
      <h1>{age}</h1>
      <p>{rating}</p>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <h1>This is inner Component</h1>
    </div>
  )
}

export default DisplaySection
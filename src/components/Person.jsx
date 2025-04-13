import React from 'react'

const Person = ({name,age}) => {
  return (
    <div>
        <h2>Name of Person is : {name}</h2>
        <p>Age of Person is : {age}</p>
    </div>
  )
}

export default Person
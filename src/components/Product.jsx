import React from 'react'

const Product = ({name,price}) => {
  return (
    <div>
        <h2>Name of Product is : {name}</h2>        
        <p>Price of Product is : ${price}</p>        
    </div>
  )
}

export default Product
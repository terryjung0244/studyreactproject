import React from 'react'
import ItemDescription from './ItemDescription'

const Product = (props) => {
  return (
    <div>
      <ItemDescription
        name={props.name}
        description={props.description}
        price={props.price}
      />
      
    </div>
  )
}

export default Product

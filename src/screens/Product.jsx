import React from 'react'
import ItemDescription from './ItemDescription'

const Product = ({name, description, price}) => {
  return (
    <div>
      <ItemDescription
        name={name}
        description={description}
        price={price}
      />
      
    </div>
  )
}

export default Product

import React from 'react'
import Product from './screens/Product'

const App = () => {
  return (
    <div>
      <Product
        name='Tesla'
        description='Electric Car'
        price={89999.99}
      />
    </div>
  )
}

export default App

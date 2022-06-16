import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const C4 = () => {

  const jphReducerSelector = useSelector(state => state.jphReducer)

  return (
    <div>
      Hello from C4 through P2
      {jphReducerSelector.greeting}
    </div>
  )
}

export default C4

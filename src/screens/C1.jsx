import React from 'react'
import { useDispatch } from 'react-redux'
import { JPH_ACTION_CONST } from '../service/const/actionConst'

const {ONCLICK_NAME_CHANGER} = JPH_ACTION_CONST;

const C1 = () => {

  const dispatch = useDispatch();

  const onClickNameChanger = () => {
    dispatch(ONCLICK_NAME_CHANGER())
  }

  return (
    <div onClick={onClickNameChanger}>
      Hello from C1 through P1
    </div>
  )
}

export default C1

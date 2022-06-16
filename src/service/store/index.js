import { combineReducers } from '@reduxjs/toolkit';
import jphReducer from '../../screens/reducer/jph/jphReducer';

/* Set Reducer Name */
export const rootReducer = combineReducers({
  jphReducer: jphReducer,
  // ...
});


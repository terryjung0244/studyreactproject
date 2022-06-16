import produce from 'immer';
import { JPH_ACTION_CONST } from '../service/const/actionConst'

const {ONCLICK_NAME_CHANGER} = JPH_ACTION_CONST;

const initState = {
  jphApiResult: {
    processing: false, 
    processed: false,
    message: 'hi',
    result: null
  },
  greeting: ''
}


export default function jphReducer(state= initState, action) {
  return produce(state, draft => {
    
    switch (action.type) {
      case ONCLICK_NAME_CHANGER:
        draft.greeting = 'HEY YO'
        break;
      default:      
      return state;
    }
  })
};
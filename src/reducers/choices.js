import { MAKE_CHOICE } from '../actions/choice'


export default function(state = [], action = {}) {
  switch(action.type) {
    case MAKE_CHOICE :
      return state.concat(action.payload.choice);
    default :
      return state
  }
}

import { CHOOSE_BASE } from '../actions/choice'


export default function(state = null, action = {}) {
  switch(action.type) {
    case CHOOSE_BASE :
      return action.payload.value
    default :
      return state
  }
}

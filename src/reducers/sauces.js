import { CHOOSE_SAUCE } from '../actions/choice'


export default function(state = null, action = {}) {
  switch(action.type) {
    case CHOOSE_SAUCE :
      return action.payload.value
    default :
      return state
  }
}

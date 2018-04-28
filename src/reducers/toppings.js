import { CHOOSE_TOPPINGS } from '../actions/choice'
import { REMOVE_TOPPING } from '../actions/choice'

export default function(state = [], action = {}) {
  switch(action.type) {
    case CHOOSE_TOPPINGS :
        if (state.length < 3) {
            return state.concat(action.payload)
        } else {
            return state
        }
    case REMOVE_TOPPING :
        return state.filter(topping => topping !== action.payload)
    default :
      return state
  }
}



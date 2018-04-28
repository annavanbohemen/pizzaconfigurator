export const CHOOSE_BASE = 'CHOOSE_BASE'
export const CHOOSE_SAUCE = 'CHOOSE_SAUCE'
export const CHOOSE_TOPPINGS = 'CHOOSE_TOPPINGS'
export const REMOVE_TOPPING = 'REMOVE_TOPPING'

export const chooseBase = ( base ) => {
  return {
    type: CHOOSE_BASE,
    payload: base
  }
}

export const chooseSauce = ( sauce ) => {
  return {
    type: CHOOSE_SAUCE,
    payload: sauce
  }
}

export const chooseToppings = ( toppings ) => {
  return {
    type: CHOOSE_TOPPINGS,
    payload: toppings
  }
}

export const removeTopping = ( topping ) => {
  return {
    type: REMOVE_TOPPING,
    payload: topping
  }
}
export const CHOOSE_BASE = 'CHOOSE_BASE'

export const makeChoice = ( choice ) => {
  return {
    type: CHOOSE_BASE,
    payload: choice
  }
}
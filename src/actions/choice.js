export const MAKE_CHOICE = 'MAKE_CHOICE'

export const makeChoice = ( choice ) => {
  return {
    type: MAKE_CHOICE,
    payload: choice
  }
}
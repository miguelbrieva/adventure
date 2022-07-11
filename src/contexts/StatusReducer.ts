import { StatusState } from "../interfaces/interfaces"

type StatusAction = 
  | {type: 'sleep'}
  | {type: 'work'}

export const statusReducer = (state: StatusState, action: StatusAction): StatusState => {
  console.log({action})
  switch (action.type) {
    case 'sleep':
      return {
        ...state,
        sleepness: state.sleepness + 10,
      }    
    case 'work':
      return {
        ...state,
        sleepness: state.sleepness - 10,
      }    
    default:
      return state
  }
}
import { StatusState } from "../interfaces/interfaces"

type StatusAction = 
  | {type: 'sleep', payload: (arg: any)=>{}}
  | {type: 'work', payload: (arg: any)=>{}}

export const statusReducer = (state: StatusState, action: StatusAction): StatusState => {
  const callback = action?.payload
  return {
    ...state,
    ...callback(state),
  }
}
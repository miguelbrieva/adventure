import {useReducer} from "react"
import {StatusState} from '../interfaces/interfaces' 
import {StatusContext} from "./StatusContext"
import {statusReducer} from './StatusReducer'

export const INITIAL_STATE: StatusState = {
  questStatus: "Idle",
  credits: 10000,
  sleepness: 100,
  location: "Valparadise",
  time: "sun, 12 june",
}

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export const StatusProvider = ({children}: Props) => {
  const [status, dispatch] = useReducer(statusReducer, INITIAL_STATE)

  return (
    <StatusContext.Provider value={{status, dispatch}}>
      {children}
    </StatusContext.Provider>
  )
} 
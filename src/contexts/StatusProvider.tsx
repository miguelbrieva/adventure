import {useReducer} from "react"
import {StatusState} from '../interfaces/interfaces' 
import {StatusContext} from "./StatusContext"
import {statusReducer} from './StatusReducer'
import dayjs from 'dayjs'

const INITIAL_TIME = dayjs("sun, 12 june, 2042") 

export const INITIAL_STATE: StatusState = {
  questStatus: "Idle",
  credits: 10000,
  stamina: 100,
  location: "Valparadise",
  time: INITIAL_TIME,
  namesToShow: {
    questStatus: "Game Status",
    credits: "Credits",
    stamina: "Stamina",
    location: "Location",
    date: "Date",
    hour: "Hour",
  }
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
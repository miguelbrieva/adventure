import {useReducer} from "react"
import {StatusState} from '../interfaces/interfaces' 
import {StatusContext} from "./StatusContext"
import {statusReducer} from './StatusReducer'
import dayjs from 'dayjs'

const time = dayjs("sun, 12 june, 2042") 

const date = dayjs(time).format('ddd, D MMMM, YYYY')
const hour = dayjs(date).format('hh:mm A')

export const INITIAL_STATE: StatusState = {
  questStatus: "Idle",
  credits: 10000,
  sleepness: 100,
  location: "Valparadise",
  date,
  hour,
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
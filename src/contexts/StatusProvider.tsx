import {useReducer} from "react"
import {StatusState} from '../interfaces/interfaces' 
import {StatusContext} from "./StatusContext"
import {statusReducer} from './StatusReducer'
import dayjs from 'dayjs'

const INITIAL_TIME = dayjs("sun, 12 june, 2042") 

const date = dayjs(INITIAL_TIME)
const hour = dayjs(date).format('hh:mm A')


console.log(dayjs(date).add(1, 'hour').format('ddd, D MMMM, YYYY, h:mm A'))

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
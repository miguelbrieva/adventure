import {createContext} from "react"
import {StatusState} from '../interfaces/interfaces'

export type StatusContextProps = {
  status: StatusState,
  dispatch: any 
}

export const StatusContext = createContext<StatusContextProps>({} as StatusContextProps)
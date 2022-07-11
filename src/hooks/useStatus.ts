import { useContext } from "react"
import { StatusContext } from "../contexts/StatusContext"

export const useStatus = () => {
  const {status, dispatch} = useContext(StatusContext)

  return {
    status,
    dispatch,
  }
}
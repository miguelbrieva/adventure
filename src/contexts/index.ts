import {createContext} from 'react'


interface StatusInterface {
  [key: string]: string | number ;
}

function convertToDecimal(num: number) {
  return (num / 100).toFixed(2);
}

const status: StatusInterface = {
  questStatus: "Idle",
  credits: convertToDecimal(10000),
  sleepness: 100,
  location: "Valparadise",
  time: "sun, 12 june"
}

export const StatusContext = createContext(status)
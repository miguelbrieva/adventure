import React, { useContext } from 'react';
import { StatusContext } from '../../contexts';
import Button from '../Button'

export interface OptionsInterface {
  [key: string]: string;
}

const options: OptionsInterface = {
  sleep: "Sleep",
  work: "Work",
  //connect: "Connect",
  //explore: "Explore"
}

function Options() {
  const status = useContext(StatusContext)

  const handleOption = (event: any) => {
    const chosenOption = event.target.textContent

    switch (chosenOption) {
      case options.sleep:
        if (status.sleepness === 100)
          break
        if (typeof status.sleepness === 'number') {
          status.sleepness += 10
        }
          break
      case options.work:
        if (status.sleepness === 0) {
          console.log("TODO: Can't Work")
          break
        }
        if (typeof status.sleepness === 'number') {
          status.sleepness -= 10
        }
          break
      default:
        console.log(`Not a valid option`)
    }
  }
  return (
    <div className="options">
      {/* <Button>Back</Button> */}
      {Object.keys(options).map((arg) => {
        return <div key={arg}><Button handleOption={handleOption}>{options[arg]}</Button></div>
      })
      }
    </div>
  );
}

export default Options;
import React from 'react';
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
  function handleOption(event: any) {
    const chosenOption = event.target.textContent

    switch(chosenOption) {
      case options.sleep:
        console.log(chosenOption)
        break
      case options.work:
        console.log(chosenOption)
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
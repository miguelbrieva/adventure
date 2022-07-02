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
    console.log(event)
  }
  return (
    <div className="options">
     {/* <Button>Volver</Button> */}
     {Object.keys(options).map((arg) => {
      return <div><Button key={arg} handleOption={handleOption}>{options[arg]}</Button></div>
     })
     }
    </div>
  );
}

export default Options;
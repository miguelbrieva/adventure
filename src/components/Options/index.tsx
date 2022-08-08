import { useStatus } from '../../hooks/useStatus';
import Button from '../Button'
import dayjs from 'dayjs'

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
  const {status, dispatch} = useStatus()

  const sleep = (state: any) => {
    return {
      stamina: state.stamina + 10,
      time: dayjs(state.time).add(1,'hour'),
    }
  }
  const work = (state: any) => {
    return {
      stamina: state.stamina - 10,
      time: dayjs(state.time).add(1,'hour'),
    }
  }

  const handleOption = (event: any) => {
    const chosenOption = event.target.textContent

    switch (chosenOption) {
      case options.sleep:
        if (status.stamina === 100) {
          console.log("TODO: Can't Sleep")
          break
        }
        if (typeof status.stamina === 'number') {
          dispatch({type: "sleep", payload: sleep})
        }
        break
      case options.work:
        if (status.stamina === 0) {
          console.log("TODO: Can't Work")
          break
        }
        if (typeof status.stamina === 'number') {
          dispatch({type: "work", payload: work})
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
import { useStatus } from '../../hooks/useStatus';
import Button from '../Button'
import dayjs from 'dayjs'
import './style.css'

export interface OptionsInterface {
  [key: string]: string;
}

const baseOptions: OptionsInterface = {
  sleep: "Sleep",
  work: "Work",
  explore: "Explore",
  //connect: "Connect"
}

const exploreOptions: OptionsInterface = {
  bar: "Bar",
  forest: "Forest",
  cyber: "Cybercafé"
}

function Options() {
  const { status, dispatch } = useStatus()

  const sleep = (state: any) => {
    return {
      stamina: state.stamina + 10,
      time: dayjs(state.time).add(1, 'hour'),
    }
  }
  const work = (state: any) => {
    return {
      stamina: state.stamina - 10,
      time: dayjs(state.time).add(1, 'hour'),
    }
  }
  const explore = (state: any) => {
    return {
      stamina: state.stamina - 10,
      time: dayjs(state.time).add(1, 'hour'),

    }
  }

  const handleOption = (event: any) => {
    const chosenOption = event.target.textContent

    switch (chosenOption) {
      case baseOptions.sleep:
        if (status.stamina === 100) {
          console.log("TODO: Can't Sleep")
          break
        }
        dispatch({ type: "sleep", payload: sleep })
        break
      case baseOptions.work:
        if (status.stamina === 0) {
          console.log("TODO: Can't Work")
          break
        }
        dispatch({ type: "work", payload: work })
        break
      case baseOptions.explore:
        if (status.stamina === 0) {
          console.log("TODO: Can't Explore")
          break
        }
        dispatch({ type: "explore", payload: explore })
        break
      default:
        console.log(`Not a valid option`)
    }
  }

  return (
    <div className="options">
      {/* <Button>Back</Button> */}
      {Object.keys(baseOptions).map((arg) => {
        return <div key={arg}><Button handleOption={handleOption}>{baseOptions[arg]}</Button></div>
      })
      }
    </div>
  );
}

export default Options;
import dayjs from "dayjs";
import { useStatus } from "../../hooks/useStatus";
import { convertToDecimal } from "../../utils";
import './style.css'

function Status() {
    const {status} = useStatus()

    const showStatusValues = (arg: any) => {
        switch (arg) {
            case "credits":
                return '$ ' + convertToDecimal(status[arg])
            case "stamina":
                return status[arg] + ' %'
            case "date":
                return dayjs(status.time).format('ddd, D MMMM, YYYY')
            case "hour":
                return dayjs(status.time).format('hh:mm A')
            default:
                return status[arg]
        }
    }

    return (
        <div className="status">
            {Object.keys(status.namesToShow).map((arg) => (
                <div key={arg}>
                    {<small>{status.namesToShow[arg]}: </small>}
                    {
                        <strong>
                            {showStatusValues(arg)}
                        </strong>
                    }
                </div>
            ))}
        </div>
    )
}

export default Status;
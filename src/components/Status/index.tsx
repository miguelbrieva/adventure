import { useStatus } from "../../hooks/useStatus";
import { convertToDecimal } from "../../utils";

function Status() {
    const {status} = useStatus()

    return (
        <div className="status">
            {Object.keys(status).map((arg) => (
                    <div key={arg}>
                        <small>{arg}: </small>
                        <strong>
                            {status[arg] === status.credits ? '$ ' : ''}
                            {status[arg] === status.credits ? convertToDecimal(status[arg]) : status[arg]}
                            {status[arg] === status.sleepness ? ' %' : ''}
                        </strong>
                    </div>
                ))}
        </div>
    )
}

export default Status;
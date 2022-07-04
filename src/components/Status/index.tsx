import React, { useContext } from "react";
import { StatusContext } from "../../contexts";

function Status() {
    const status = useContext(StatusContext)
    return (
        <div className="status">
            {Object.keys(status).map((arg) => {
                return <div key={arg}>
                    <div>
                        <small>{arg}</small>
                    </div>
                    <div>
                        <strong>
                            {status[arg] === status.credits ? '$ ' : ''}
                            {status[arg]}
                            {status[arg] === status.sleepness ? ' %' : ''}
                        </strong>
                    </div>
                </div>
            })
            }
        </div>
    );
}

export default Status;
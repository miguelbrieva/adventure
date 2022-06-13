import React from "react";

const status = {
    questStatus: "Idle",
    credits: "$100.00",
    sleepness: "100%",
    location: "Valparadise",
    time: "sun, 12 june"
}

function Status() {
    return (
        <div className="status">
            {Object.keys(status).map((arg) => {
                return <div>{arg} {status[arg]}</div>
            })
            }
        </div>
    );
}

export default Status;
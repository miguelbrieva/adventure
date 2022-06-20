import React from "react";

interface StatusInterface {
    [key: string]: string;
}

const status: StatusInterface = {
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
                return <div key={arg}>
                    <small>{arg}</small>
                    <p><strong>{status[arg]}</strong></p>
                </div>
            })
            }
        </div>
    );
}

export default Status;
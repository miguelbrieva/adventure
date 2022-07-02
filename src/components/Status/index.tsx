import React from "react";

interface StatusInterface {
    [key: string]: string | number ;
}

const status: StatusInterface = {
    questStatus: "Idle",
    credits: convertToDecimal(10000),
    sleepness: 100,
    location: "Valparadise",
    time: "sun, 12 june"
}

function convertToDecimal(num: number) {
    return (num / 100).toFixed(2);
}

function Status() {
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
import React from "react";

export default function Jokes(props) {
    return (
        <>
            <div className="Dad_Jokes">
                {props.setup && <h3>Setup: {props.setup}</h3>}
                <p>{props.punchline}</p>
                <hr />
            </div>
        </>
    )
}
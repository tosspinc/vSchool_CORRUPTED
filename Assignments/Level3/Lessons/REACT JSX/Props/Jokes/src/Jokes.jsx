import React from "react";

export default function Jokes(props) {
    return (
        <>
            <div className="Dad_Jokes">
                {props.setup && <h3>Setup: {props.setup}</h3>} {/*if props.setup is a truthy value then render what is on the right side of the and operator (&&) add the h3 line of code. If it is falsy (there is no setup code then it won't render anything.*/}
                <p>Punchline: {props.punchline}</p>
                <hr />
            </div>
        </>
    )
}
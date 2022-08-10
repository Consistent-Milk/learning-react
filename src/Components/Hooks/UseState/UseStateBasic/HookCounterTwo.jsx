import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";

function HookCounterTwo() {
    const initialState = 0;
    const [state, setState] = useState(initialState);

    return (
        <>
            <h2>Count: {state}</h2>
            <Button onClick={() => setState(initialState)}>Reset</Button>
            <Button onClick={() => setState((prevState) => prevState + 1)}>
                Increment
            </Button>
            <Button onClick={() => setState((prevState) => prevState - 1)}>
                Decrement
            </Button>
        </>
    );
}

export default HookCounterTwo;

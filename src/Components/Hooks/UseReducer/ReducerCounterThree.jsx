import React from "react";
import { useReducer } from "react";
import { Button } from "react-bootstrap";

//Step 2: Define initialState and reducer function for the useReducer hook.
const initialStateCounterOne = 0;
const reducerOne = (currentState, action) => {
    switch (action) {
        case "increment":
            return currentState + 1;
        case "decrement":
            return currentState - 1;
        case "reset":
            return initialStateCounterOne;
        default:
            return currentState;
    }
};

const initialStateCounterTwo = 10;
const reducerTwo = (currentState, action) => {
    switch (action) {
        case "increment":
            return currentState + 2;
        case "decrement":
            return currentState - 2;
        case "reset":
            return initialStateCounterTwo;
        default:
            return currentState;
    }
};

function ReducerCounterThree() {
    // Step 1: Call the useReducer function
    const [counterOne, dispatchCounterOne] = useReducer(
        reducerOne,
        initialStateCounterOne
    );
    const [counterTwo, dispatchCounterTwo] = useReducer(
        reducerTwo,
        initialStateCounterTwo
    );
    //Step 3: Array destructure useReducer hook into the newState and dispatch.

    return (
        <div>
            <h3>Counter 1: {counterOne}</h3>
            <Button onClick={() => dispatchCounterOne("increment")}>
                Increment
            </Button>
            <Button onClick={() => dispatchCounterOne("decrement")}>
                Decrement
            </Button>
            <Button onClick={() => dispatchCounterOne("reset")}>Reset</Button>

            <h3>Counter 2: {counterTwo}</h3>
            <Button onClick={() => dispatchCounterTwo("increment")}>
                Increment
            </Button>
            <Button onClick={() => dispatchCounterTwo("decrement")}>
                Decrement
            </Button>
            <Button onClick={() => dispatchCounterTwo("reset")}>Reset</Button>
        </div>
    );
}

export default ReducerCounterThree;

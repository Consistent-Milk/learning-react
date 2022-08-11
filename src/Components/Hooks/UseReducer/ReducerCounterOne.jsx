import React from "react";
import { useReducer } from "react";
import { Button } from "react-bootstrap";

//Step 2: Define initialState and reducer function for the useReducer hook.
const initialState = 0;
const reducer = (currentState, action) => {
    switch (action) {
        case "increment":
            return currentState + 1;
        case "decrement":
            return currentState - 1;
        case "reset":
            return initialState;
        default:
            return currentState;
    }
};

function ReducerCounterOne() {
    // Step 1: Call the useReducer function
    const [newState, dispatch] = useReducer(reducer, initialState);
    //Step 3: Array destructure useReducer hook into the newState and dispatch. 

    return (
        <div>
            <h3>Count: {newState}</h3>
            <Button onClick={() => dispatch("increment")}>Increment</Button>
            <Button onClick={() => dispatch("decrement")}>Decrement</Button>
            <Button onClick={() => dispatch("reset")}>Reset</Button>
        </div>
    );
}

export default ReducerCounterOne;

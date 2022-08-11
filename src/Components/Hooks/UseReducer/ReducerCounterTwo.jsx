import React from "react";
import { useReducer } from "react";
import { Button } from "react-bootstrap";

//Step 2: Define initialState and reducer function for the useReducer hook.
const initialState = {
    firstCounter: 0,
    secondCounter: 10,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                firstCounter: state.firstCounter + action.value,
            };
        case "decrement":
            return {
                ...state,
                firstCounter: state.firstCounter - action.value,
            };
        case "increment2":
            return {
                ...state,
                secondCounter: state.secondCounter + action.value,
            };
        case "decrement2":
            return {
                ...state,
                secondCounter: state.secondCounter - action.value,
            };
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function ReducerCounterTwo() {
    // Step 1: Call the useReducer function
    const [newState, dispatch] = useReducer(reducer, initialState);
    //Step 3: Array destructure useReducer hook into the newState and dispatch.

    return (
        <div>
            <h3>Counter 1: {newState.firstCounter}</h3>
            <h3>Counter 2: {newState.secondCounter}</h3>
            <Button onClick={() => dispatch({ type: "increment", value: 1 })}>
                Increment
            </Button>
            <Button onClick={() => dispatch({ type: "decrement", value: 1 })}>
                Decrement
            </Button>
            <Button onClick={() => dispatch({ type: "increment2", value: 2 })}>
                Increment 2
            </Button>
            <Button onClick={() => dispatch({ type: "decrement2", value: 2 })}>
                Decrement 2
            </Button>
            <Button onClick={() => dispatch({ type: "reset" })}>
                Reset Both Counters
            </Button>
        </div>
    );
}

export default ReducerCounterTwo;

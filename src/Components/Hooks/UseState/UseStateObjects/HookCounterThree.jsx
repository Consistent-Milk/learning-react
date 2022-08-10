import React, { useState } from "react";

function HookCounterThree() {
    const [state, setState] = useState({ firstName: "", lastName: "" });

    return (
        <>
            <form>
                <label>
                    First Name
                    <input
                        type="text"
                        value={state.firstName}
                        placeholder="Enter first name"
                        onChange={(event) =>
                            setState({
                                ...state,
                                firstName: event.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    Last Name
                    <input
                        type="text"
                        value={state.lastName}
                        placeholder="Enter last name"
                        onChange={(event) =>
                            setState({ ...state, lastName: event.target.value })
                        }
                    />
                </label>
                <h2>Your first name is {state.firstName}</h2>
                <h2>Your last name is {state.lastName}</h2>
                <h2>
                    Your name is {state.firstName} {state.lastName}
                </h2>
            </form>
        </>
    );
}

export default HookCounterThree;

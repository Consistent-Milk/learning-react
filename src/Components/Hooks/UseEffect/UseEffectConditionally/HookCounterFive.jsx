import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function HookCounterFive() {
    const initialCount = 0;
    const initialName = "";
    const [count, setCount] = useState(initialCount);
    const [name, setName] = useState(initialName);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count} times
            </Button>
        </div>
    );
}

export default HookCounterFive;

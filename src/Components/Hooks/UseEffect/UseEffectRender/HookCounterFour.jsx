import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function HookCounterFour() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count} times
            </Button>
        </div>
    );
}

export default HookCounterFour;

import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function HookCounter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Button onClick={() => setCount(count + 1)}>Count - {count}</Button>
        </>
    );
}

export default HookCounter;

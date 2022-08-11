import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (event) => {
        console.log("Mouse Event");
        setX(event.clientX);
        setY(event.clientY);
    };

    useEffect(() => {
        console.log("useEffect Called");
        window.addEventListener("mousemove", logMousePosition);
    }, []);

    return (
        <div>
            <h2>
                X-Coordinate: {x} and Y-Coordinate: {y}
            </h2>
        </div>
    );
}

export default HookMouse;

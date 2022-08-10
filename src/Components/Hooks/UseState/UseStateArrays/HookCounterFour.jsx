import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function HookCounterFour() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1,
            },
        ]);
    };

    return (
        <div>
            <Button onClick={addItem}>Add a number</Button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default HookCounterFour;

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then((response) => {
                console.log(response);
                setPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [idFromButtonClick]);
    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={(event) => setId(event.target.value)}
            />
            <Button onClick={handleClick}>Fetch Post</Button>
            <h2>{post.title}</h2>
            {/* <ul>
                {post.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default DataFetching;

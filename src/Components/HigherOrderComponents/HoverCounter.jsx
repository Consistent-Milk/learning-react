import React, { Component } from "react";
import withCounter from "./HigherOrderComponent";

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>;
    }
}

export default withCounter(HoverCounter, 2);

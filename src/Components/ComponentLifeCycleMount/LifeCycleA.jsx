import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Milk",
        };
        console.log("LifeCycleA Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("LifeCycleA getSnapShotBeforeUpdate");
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: "State Changed",
        });
    };

    render() {
        console.log("LifeCycleA render");
        return (
            <div>
                <h1>LifeCycleA</h1>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        );
    }
}

export default LifeCycleA;

import React, { Component } from "react";

class LifeCycleB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Milk",
        };
        console.log("LifeCycleB Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleB componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifeCycleB shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("LifeCycleB getSnapShotBeforeUpdate");
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate");
    }

    render() {
        console.log("LifeCycleA render");
        return (
            <div>
                <h1>LifeCycleB</h1>
            </div>
        );
    }
}

export default LifeCycleB;

// Four approaches to conditional rendering

import React, { Component } from "react";

class UseGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
        };
    }
    render() {
        // Method 1 - If/else
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <h2>Welcome Saad</h2>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Welcome Guest</h2>
                </div>
            );
        }

        // Method 2 - Element Variables
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Saad</div>;
        // } else {
        //     message = <div>Welcome Guest</div>;
        // }

        // return (
        //     <div>
        //         <h2>{message}</h2>
        //     </div>
        // );

        //Method 3 - Ternary Conditional Operator
        // return this.state.isLoggedIn ? (
        //     <div>
        //         <h2>Welcome Saad</h2>
        //     </div>
        // ) : (
        //     <div>
        //         <h2>Welcome Guest</h2>
        //     </div>
        // );

        //Method 4 - Short Circuit Operator
        // return (
        //     this.state.isLoggedIn && (
        //         <div>
        //             <h2>Welcome Saad</h2>
        //         </div>
        //     )
        // );
    }
}

export default UseGreeting;

import "./App.scss";
import ComponentC from "./Components/Hooks/UseContext/ComponentC";
import React from "react";
import ReducerCounterThree from "./Components/Hooks/UseReducer/ReducerCounterThree";

export const UserContext = React.createContext();
export const AccountContext = React.createContext();

function App() {
    return (
        <div className="App">
            <UserContext.Provider value={"Saad"}>
                <AccountContext.Provider value={"Consistent Milk"}>
                    <ComponentC />
                </AccountContext.Provider>
            </UserContext.Provider>
            <ReducerCounterThree />
        </div>
    );
}

export default App;

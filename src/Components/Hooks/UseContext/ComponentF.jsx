import React from "react";
import { UserContext, AccountContext } from "../../../App";

// This is an example of using context without the useContext hooks, and we can see how verbose the
// code can become in this case. Refer to ComponentE to see the same context consumption using
// useContext hook. 

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {(user) => {
                    return (
                      <AccountContext.Consumer>
                        {
                          (account) => {
                            return <div>
                              <h3>User name is {user}, and Github account name is {account}</h3>
                            </div>
                          }
                        }
                      </AccountContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div>
    );
}

export default ComponentF;

import React, { useContext } from "react";
import { UserContext, AccountContext } from "../../../App";

function ComponentE() {
    const user = useContext(UserContext);
    const account = useContext(AccountContext);

    return (
        <div>
            <h3>
                User: {user} and Account: {account}
            </h3>
        </div>
    );
}

export default ComponentE;

import { createContext, useState, useContext } from "react";

const actionContext = createContext();

export const ActionContextProvider = (props) => {
    const [action, setAction] = useState("Sign In");
    return (
        <actionContext.Provider value={{action,setAction}}>
            {props.children}
        </actionContext.Provider>
    )
}

export const useAction = () => useContext(actionContext);  
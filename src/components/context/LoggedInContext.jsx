
// REACT
import { useState, createContext } from 'react';

// CREATES CONTEXT TO PROVIDE LOGGED IN STATUS
const isLoggedInContext = createContext({});

// WRAPPER TO PROVIDE LOG-IN STATUS CONTEXT 
function LoggedInContext({ children }) {

    // SETS/GETS LOG IN STATUS
    const [status, setStatus] = useState(false);
    
    // WRAPS AROUND CHILDREN TO PROVIDE LOGGED IN STATUS
    return (
        <isLoggedInContext.Provider value={{ status, setStatus }}>
            <>{children}</>
        </isLoggedInContext.Provider >
    );
}

export { LoggedInContext, isLoggedInContext };
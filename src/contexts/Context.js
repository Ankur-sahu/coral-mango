import { createContext, useState } from "react";

export const tableContext = createContext(null);

const Context = ({children}) => {
    const [tableView, setTableView] = useState(true)
    return (
        <tableContext.Provider value={{tableView, setTableView }}>
            {children}
        </tableContext.Provider>
    )
}

export default Context;
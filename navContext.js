import { createContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({children}) => {
    const [sidebarStatus, setSidebarStatus] = useState(false)
    return <SidebarContext.Provider value={{sidebarStatus, setSidebarStatus}}>{children}</SidebarContext.Provider>
}

export default SidebarContext


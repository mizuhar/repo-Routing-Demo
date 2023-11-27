import { createContext } from "react";

export const TodoContext = createContext()

export const AuthProvider = ({
    children,
    value
}) => {
    return (
        <TodoContext.Provider value={value}>

         {children}
         
        </TodoContext.Provider>
    )
}
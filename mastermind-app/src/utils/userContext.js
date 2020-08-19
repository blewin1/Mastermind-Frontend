import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [nonLoginMode, setNonLoginMode] = useState("4x6");

    return (
        <UserContext.Provider
            value={{ user, setUser, nonLoginMode, setNonLoginMode }}
        >
            {children}
        </UserContext.Provider>
    );
};

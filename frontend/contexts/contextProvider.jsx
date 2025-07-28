import { createContext, useContext, useState } from "react";


const stateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});

export const contextprovider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN") || null);

    const setToken = (token) => {
        _setToken(token);

        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        }else{
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }


    return (
        <stateContext.Provider value={{ user,token, setUser, setToken }}>
            {children}
        </stateContext.Provider>
    );
}

export const userStateContext = useContext(stateContext);
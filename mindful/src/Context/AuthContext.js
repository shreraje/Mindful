/* eslint-disable */
import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../Services/AuthService';
export const AuthContext = createContext();

//Provide global access to state for the user and whether they are authenticated or not
export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    },[]);

    //isLoaded conditional rendering not working, loading page lasts forever. 
    return (
        <div>
            {/* {!isLoaded ? <h1>Loading</h1> :  */}
            <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
                { children }
            </AuthContext.Provider>
        </div>
    );
};
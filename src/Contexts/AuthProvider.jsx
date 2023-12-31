import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const authInfo = {'name':'Md Rahi'}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
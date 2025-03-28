// import React, {useContext} from 'react'

// const AuthContext = React.createContext()

// export function AuthProvider({children, value}) {
//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export function useAuthValue(){
//   return useContext(AuthContext)
// }

// import React, { useContext, useState } from "react";

// const AuthContext = React.createContext();

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [timeActive, setTimeActive] = useState(false);

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//         setCurrentUser,
//         isAuthenticated,
//         setIsAuthenticated,
//         timeActive,
//         setTimeActive,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuthValue() {
//   return useContext(AuthContext);
// }

import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthenticated(!!user); 
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isAuthenticated,
        setIsAuthenticated,
        timeActive,
        setTimeActive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthValue() {
  return useContext(AuthContext);
}


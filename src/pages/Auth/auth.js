import React, { useEffect, useState } from "react";
import db from '../Firebase/index'
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    db.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

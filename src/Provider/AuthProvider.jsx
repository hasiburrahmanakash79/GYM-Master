import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const AuthInfo = {
    user,
  };
  return <AuthContext.Provider value={AuthInfo}>{children} </AuthContext.Provider>;
};

export default AuthProvider;

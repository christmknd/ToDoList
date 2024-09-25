import React, { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const { children } = props;

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

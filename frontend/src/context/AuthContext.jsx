import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const [isAuthenticated, setIsAuthenticated] =
    useState(false);
  const [loading, setLoading] = useState(true);

  // Load saved login
  useEffect(() => {

    const savedUser =
      localStorage.getItem("user");

    const savedToken =
      localStorage.getItem("token");

    if (savedUser && savedToken) {

      setUser(JSON.parse(savedUser));

      setToken(savedToken);

      setIsAuthenticated(true);

    }

    setLoading(false);
  }, []);

  // Login

  const login = (userData, jwtToken) => {

    setUser(userData);

    setToken(jwtToken);

    setIsAuthenticated(true);

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    localStorage.setItem(
      "token",
      jwtToken
    );

  };

  // Logout

  const logout = () => {

    setUser(null);

    setToken(null);

    setIsAuthenticated(false);

    localStorage.removeItem("user");

    localStorage.removeItem("token");

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export default AuthContext;
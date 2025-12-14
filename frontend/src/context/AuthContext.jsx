import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Decode JWT payload (base64)
   * Your backend embeds email + role in token
   */
  const parseJwt = (token) => {
    try {
      const base64Payload = token.split(".")[1];
      const payload = JSON.parse(atob(base64Payload));
      return payload;
    } catch {
      return null;
    }
  };

  /**
   * Load auth state from localStorage on refresh
   */
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      const payload = parseJwt(storedToken);

      if (payload) {
        setToken(storedToken);
        setUser({
          email: payload.sub,
          role: payload.role,
        });
      } else {
        localStorage.removeItem("token");
      }
    }

    setLoading(false);
  }, []);

  /**
   * Login handler (called from Login.jsx)
   */
  const login = (jwt) => {
    const payload = parseJwt(jwt);

    localStorage.setItem("token", jwt);
    setToken(jwt);
    setUser({
      email: payload.sub,
      role: payload.role,
    });
  };

  /**
   * Logout handler
   */
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

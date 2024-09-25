import axios from "axios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  checkAuth: () => Promise<void>;
}>({ isAuthenticated: false, checkAuth: async () => {} });

type AuthProviderProps = PropsWithChildren;

function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/check-auth", {
        withCredentials: true,
      });
      setIsAuthenticated(res.status === 200);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export default AuthProvider;

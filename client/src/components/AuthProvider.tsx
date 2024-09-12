import { PropsWithChildren, createContext, useContext, useState } from "react";
import User from "../types/User";

const AuthContext = createContext<User | null>(null);

type AuthProviderProps = PropsWithChildren & { isSignedIn?: boolean };

function AuthProvider({ children, isSignedIn }: AuthProviderProps) {
  const [user] = useState<User | null>(
    isSignedIn ? { name: "anton", password: "123" } : null
  );

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export default AuthProvider;

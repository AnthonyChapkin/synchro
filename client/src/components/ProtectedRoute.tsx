import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

type ProtectRouteProps = PropsWithChildren & { shouldBeAuthenticated: boolean };

function ProtectedRoute({
  children,
  shouldBeAuthenticated,
}: ProtectRouteProps) {
  const isAuthenticated = useAuth();
  const navigate = useNavigate();
  const redirect = shouldBeAuthenticated ? "/sign-in" : "/";

  useEffect(() => {
    if (
      (!isAuthenticated && shouldBeAuthenticated) ||
      (isAuthenticated && !shouldBeAuthenticated)
    ) {
      navigate(redirect, { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return children;
}

export default ProtectedRoute;

import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

type ProtectRouteProps = PropsWithChildren & { shouldBeAuthenticated: boolean };

function ProtectedRoute({
  children,
  shouldBeAuthenticated,
}: ProtectRouteProps) {
  const user = useAuth();
  const navigate = useNavigate();
  const redirect = shouldBeAuthenticated ? "/sign-in" : "/";

  useEffect(() => {
    if (
      (user === null && shouldBeAuthenticated) ||
      (user !== null && !shouldBeAuthenticated)
    ) {
      navigate(redirect, { replace: true });
    }
  }, [user, navigate]);

  return children;
}

export default ProtectedRoute;

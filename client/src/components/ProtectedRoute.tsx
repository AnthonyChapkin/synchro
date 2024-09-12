import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function ProtectedRoute({ children }: PropsWithChildren) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/sign-in", { replace: true });
    }
  }, [user, navigate]);

  return children;
}

export default ProtectedRoute;

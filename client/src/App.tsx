import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import NotFoundPage from "./components/NotFoundPage";
import AuthProvider from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute shouldBeAuthenticated={true}>
          <HomePage />
        </ProtectedRoute>
      ),
      errorElement: <NotFoundPage />,
    },
    {
      path: "/sign-in",
      element: (
        <ProtectedRoute shouldBeAuthenticated={false}>
          <SignInPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <ProtectedRoute shouldBeAuthenticated={false}>
          <SignUpPage />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;

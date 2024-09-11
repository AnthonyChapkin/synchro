import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignInPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

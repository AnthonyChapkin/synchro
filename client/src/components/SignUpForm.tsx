import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./AuthProvider";
import axios from "axios";

function SignUpForm() {
  const [signUpButtonHovered, setSignUpButtonHovered] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { checkAuth } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/sign-up",
        {
          name: username,
          password: password,
        },
        { withCredentials: true }
      );
      if (res.status === 201) {
        checkAuth();
      }
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Failed to connect to the server.");
      }
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <label className="sign-up-form-label">Sign Up</label>
      <label htmlFor="sign-up-username-field-id" className="username-label">
        Username
      </label>
      <input
        type="text"
        className="sign-up-text-field"
        id="sign-up-username-field-id"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label htmlFor="sign-up-password-field-id" className="">
        Password
      </label>
      <input
        type="password"
        className="sign-up-text-field"
        id="sign-up-password-field-id"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      {error && <div>{error}</div>}
      <input
        type="submit"
        className={
          signUpButtonHovered ? "sign-up-button hovered" : "sign-up-button"
        }
        value="Sign Up"
        onMouseOver={() => setSignUpButtonHovered(true)}
        onMouseOut={() => setSignUpButtonHovered(false)}
      />
      <label className="or-label">OR</label>
      <Link to="/sign-in">Go to Sign In Page</Link>
    </form>
  );
}

export default SignUpForm;

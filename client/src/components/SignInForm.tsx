import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider";

function SignInForm() {
  const [signInButtonHovered, setSignInButtonHovered] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { checkAuth } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/sign-in",
        {
          name: username,
          password: password,
        },
        { withCredentials: true }
      );
      if (res.status === 200) {
        checkAuth();
      }
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <label className="sign-in-form-label">Sign In</label>
      <label htmlFor="sign-in-username-field-id" className="username-label">
        Username
      </label>
      <input
        type="text"
        className="sign-in-text-field"
        id="sign-in-username-field-id"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label htmlFor="sign-in-password-field-id" className="">
        Password
      </label>
      <input
        type="password"
        className="sign-in-text-field"
        id="sign-in-password-field-id"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input
        type="submit"
        className={
          signInButtonHovered ? "sign-in-button hovered" : "sign-in-button"
        }
        value="Sign In"
        onMouseOver={() => {
          setSignInButtonHovered(true);
        }}
        onMouseOut={() => {
          setSignInButtonHovered(false);
        }}
      />
      <label className="or-label">OR</label>
      <Link to="/sign-up">Go to Sign Up Page</Link>
    </form>
  );
}

export default SignInForm;

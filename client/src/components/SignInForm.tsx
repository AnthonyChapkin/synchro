import { Link } from "react-router-dom";
import { useState } from "react";

function SignInForm() {
  const [signInButtonHovered, setSignInButtonHovered] = useState(false);
  const [goToSignUpbuttonHovered, setGoToSignUpbuttonHovered] = useState(false);

  return (
    <form className="sign-in-form">
      <label className="sign-in-form-label">Sign In</label>
      <label htmlFor="sign-in-username-field-id" className="username-label">
        Username
      </label>
      <input
        type="text"
        className="sign-in-text-field"
        id="sign-in-username-field-id"
      ></input>
      <label htmlFor="sign-in-password-field-id" className="">
        Password
      </label>
      <input
        type="password"
        className="sign-in-text-field"
        id="sign-in-password-field-id"
      ></input>
      <input
        type="button"
        className={
          signInButtonHovered ? "sign-in-button hovered" : "sign-in-button"
        }
        value="Sign In"
        onClick={() => console.log("Signed In")}
        onMouseOver={() => {
          setSignInButtonHovered(true);
        }}
        onMouseOut={() => {
          setSignInButtonHovered(false);
        }}
      />
      <label className="or-label">OR</label>
      <input
        type="button"
        className={
          goToSignUpbuttonHovered
            ? "go-to-sign-up-button hovered"
            : "go-to-sign-up-button"
        }
        value="Go to Sign Up Page"
        onClick={() => console.log("Went to Sign Up")}
        onMouseOver={() => {
          setGoToSignUpbuttonHovered(true);
        }}
        onMouseOut={() => {
          setGoToSignUpbuttonHovered(false);
        }}
      ></input>
      <Link to="/sign-up">Go to Sign Up Page</Link>
    </form>
  );
}

export default SignInForm;

import { Link } from "react-router-dom";
import { useState } from "react";

function SignUpForm() {
  const [signUpButtonHovered, setSignUpButtonHovered] = useState(false);
  const [goToSignInbuttonHovered, setGoToSignInbuttonHovered] = useState(false);

  return (
    <form className="sign-up-form">
      <label className="sign-up-form-label">Sign Up</label>
      <label htmlFor="sign-up-username-field-id" className="username-label">
        Username
      </label>
      <input
        type="text"
        className="sign-up-text-field"
        id="sign-up-username-field-id"
      ></input>
      <label htmlFor="sign-up-password-field-id" className="">
        Password
      </label>
      <input
        type="password"
        className="sign-up-text-field"
        id="sign-up-password-field-id"
      ></input>
      <input
        type="button"
        className={
          signUpButtonHovered ? "sign-up-button hovered" : "sign-up-button"
        }
        value="Sign Up"
        onClick={() => console.log("Signed Up")}
        onMouseOver={() => setSignUpButtonHovered(true)}
        onMouseOut={() => setSignUpButtonHovered(false)}
      />
      <label className="or-label">OR</label>
      <input
        type="button"
        className={
          goToSignInbuttonHovered
            ? "go-to-sign-in-button hovered"
            : "go-to-sign-in-button"
        }
        value="Go to Sign In Page"
        onClick={() => console.log("Went to Sign In")}
        onMouseOver={() => setGoToSignInbuttonHovered(true)}
        onMouseOut={() => setGoToSignInbuttonHovered(false)}
      ></input>
      <Link to="/">Go to Sign In Page</Link>
    </form>
  );
}

export default SignUpForm;

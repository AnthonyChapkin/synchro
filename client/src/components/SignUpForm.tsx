import { Link } from "react-router-dom";
import { useState } from "react";

function SignUpForm() {
  const [signUpButtonHovered, setSignUpButtonHovered] = useState(false);

  return (
    <form
      className="sign-up-form"
      onSubmit={() => {
        console.log("Submitted");
      }}
    >
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

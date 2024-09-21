import { Link } from "react-router-dom";
import { useState } from "react";

function SignInForm() {
  const [signInButtonHovered, setSignInButtonHovered] = useState(false);

  return (
    <form
      className="sign-in-form"
      onSubmit={() => {
        console.log("Submitted");
      }}
    >
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

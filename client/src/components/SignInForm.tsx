import { Link } from "react-router-dom";

function SignInForm() {
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
      <input type="button" className="sign-in-button" value="Sign In" />
      <label className="or-label">OR</label>
      <input
        type="button"
        className="go-to-sign-up-button"
        value="Go to Sign Up Page"
      ></input>
      <Link to="/sign-up">Go to Sign Up Page</Link>
    </form>
  );
}

export default SignInForm;

function SignUpForm() {
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
      <input type="button" className="sign-up-button" value="Sign Up" />
      <label className="or-label">OR</label>
      <input
        type="button"
        className="go-to-sign-in-button"
        value="Go to Sign In Page"
      ></input>
    </form>
  );
}

export default SignUpForm;

import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === localStorage.getItem("email") &&
      pass === localStorage.getItem("password")
    ) {
        setErr(false);
        props.onFormSwitch('home');
    }else{
        setErr(true);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        <b
          className="err"
          style={err ? { display: "block" } : { display: "none" }}
        >
          Email or Password is Incorrect!
        </b>
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};

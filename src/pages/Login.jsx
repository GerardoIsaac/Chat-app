import React from "react";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" name="email" id="name" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
          <p>
            Don't have an account? <span>Register</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

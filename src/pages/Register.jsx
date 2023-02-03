import React from "react";
import addAvatar from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="name" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
          />
          <label htmlFor="file">
            <img src={addAvatar} alt="add avatar file input" width={48} height={48} />
            <span>Add an avatar</span>
          </label>
          <button type="submit">Sign Up</button>
          <p>
            Aready have an account? <span>Login </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

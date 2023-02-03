import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/2424875/pexels-photo-2424875.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt="user avatar"
          width={32}
          height={32}
        />
        <span>User</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

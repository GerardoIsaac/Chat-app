import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="message-info">
        <img
          src="https://images.pexels.com/photos/2424875/pexels-photo-2424875.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt="user's profile avatar"
          width={40}
          height={40}
        />
        <span>just now</span>
      </div>
      <div className="message-content">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/2424875/pexels-photo-2424875.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
          width="50%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default Message;

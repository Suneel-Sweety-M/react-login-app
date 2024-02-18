import React from "react";

const Home = (props) => {
  return (
    <>
      <h1>Welcome to Home Page.</h1>
      <button className="logout" onClick={() => props.onFormSwitch("login")}>
        Logout
      </button>
    </>
  );
};

export default Home;

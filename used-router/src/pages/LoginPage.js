import React from "react";

const LoginPage = () => {
  return (
    <>
      <label htmlFor="">
        Login
        <input type="text" />
      </label>
      <label htmlFor="">
        Password
        <input type="text" />
      </label>
      <button>Sign in</button>
    </>
  );
};

export default LoginPage;

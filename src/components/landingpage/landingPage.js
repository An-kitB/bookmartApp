import React, { useState } from "react";
import { Login } from "../login/login";
import { Signup } from "../signup/signup";
import { divStyle, btnStyle } from "../login/loginStyles";

export const LandingPage = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleLoginClick = () => {
    setIsSigningUp(true);
  };

  const handleSignupClick = () => {
    setIsSigningUp(false);
  };

  return (
    <div>
      <h1>BOOKmart</h1>
      <div>
        <div>
          <button style={btnStyle} onClick={handleLoginClick}>
            login
          </button>
          <button style={btnStyle} onClick={handleSignupClick}>
            signup
          </button>
        </div>
        <div style={divStyle}>{isSigningUp ? <Login /> : <Signup />}</div>
      </div>
    </div>
  );
};

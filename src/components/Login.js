import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLogin, setIsLogin]=useState(true);
  const toggleSignIn=()=>{
    debugger;
    setIsLogin(!isLogin);
  }
  return (
    <>
      <div>
        <Header />
        <div className="imgBack">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg"
            alt="background"
          />
        </div>
        <form className="loginForm">
          <p className="title">{isLogin?"Sign In": "Sign up"}</p>
          {!isLogin && <p className="input">
            <input type="text" placeholder="Name" />
          </p>}
          <p className="input">
            <input type="email" placeholder="Email" />
          </p>
          <p className="input">
            <input type="password" placeholder="Password" />
          </p>
          <button type="button" className="submit">{isLogin?"Sign In": "Sign up"}</button>
          <p className="signup" onClick={toggleSignIn}>
          {isLogin?"New to Netflix? Sign up now.": "Already a member. SignIn"}
            </p>
        </form>
      </div>
    </>
  );
};

export default Login;

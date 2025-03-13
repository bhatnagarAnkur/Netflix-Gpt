import React from "react";
import Header from "./Header";

const Login = () => {
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
          <p className="title">Sign In</p>
          <p className="input">
            <input type="email" placeholder="Email" />
          </p>
          <p className="input">
            <input type="password" placeholder="Password" />
          </p>
          <button className="submit">Sign In</button>
          <p className="signup">New to Netflix? Sign up now.</p>
        </form>
      </div>
    </>
  );
};

export default Login;

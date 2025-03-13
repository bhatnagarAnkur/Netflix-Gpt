import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateUser } from "../utilities/validate";

const Login = () => {
  const [isLogin, setIsLogin]=useState(true);
  const [isError, setIsError]=useState("");
  
  const email=useRef(null);
  const password=useRef(null);

  const handleSubmit=()=>{


    const message=validateUser(email.current.value,password.current.value);
    console.log(message);
    setIsError(message);
  }

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
            <input type="email" placeholder="Email" ref={email} />
          </p>
          <p className="input">
            <input type="password" placeholder="Password" ref={password}/>
          </p>

          <p className="error">
            {isError}
          </p>
          <button type="button" className="submit" onClick={handleSubmit}>{isLogin?"Sign In": "Sign up"}</button>
          <p className="signup" onClick={toggleSignIn}>
          {isLogin?"New to Netflix? Sign up now.": "Already a member. SignIn"}
            </p>
        </form>
      </div>
    </>
  );
};

export default Login;

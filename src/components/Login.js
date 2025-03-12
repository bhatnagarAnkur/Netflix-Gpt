import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
            alt="background"
          />
        </div>
        <form className="absolute w-3/12 mx-auto right-0 left-0 my-44 bg-black opacity-80">
          <p className="text-white text-3xl font-bold mx-10">Sign In</p>
          <p className="mx-10 my-10">
            <input type="email" placeholder="Email" />
          </p>
          <p className="mx-10 my-10">
            <input type="password" placeholder="Password" />
          </p>
          <button className="bg-red-700 mx-20">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Login;

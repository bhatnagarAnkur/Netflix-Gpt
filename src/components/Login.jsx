import React, { useState, useRef } from 'react'
import Header from './Header'
import {auth} from '../utils/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

import {ValidateForm} from '../utils/validate'

const Login = () => {
    const [IsSignInForm, SetIsSignInForm ]=useState(true);
    const [errorMessage, setErrorMessage ]=useState("");

    const toggleSignInSignUp=()=>{
        SetIsSignInForm(!IsSignInForm);
    }

    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    const submitForm=(e)=>{
        e.preventDefault();

        const message=ValidateForm(emailRef.current.value,passwordRef.current.value);
        setErrorMessage(message);
        console.log(message);
        if(message!==null)
            return;

        //Write Sign UpCode
        if(!IsSignInForm)
        {
            createUserWithEmailAndPassword(auth, emailRef.current.value,passwordRef.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +" - "+ errorMessage)
            });

        }
        else
        {

        }
        
    }

  return (
    <div>
      <Header/>
      <div>
        <img className="absolute object-cover" src='https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg'
        />
      </div>
      <div className='bg-black absolute text-white w-3/12 opacity-80 top-20 left-116 rounded-lg'>
        <form className=''>
            <h2 className='text-4xl font-bold p-5'>
                {IsSignInForm?"Sign In":"Sign Up"}
                </h2>
                {!IsSignInForm &&
                    <input type='text' placeholder='Full Name'  className='w-[85%] m-5 rounded-sm p-2 border-1'/>
                }
            <input type='email' ref={emailRef} placeholder='email'  className='w-[85%] m-5 rounded-sm p-2 border-1'/>
            <input type='password' ref={passwordRef} placeholder='password'   className='w-[85%] m-5 rounded-sm p-2 border-1'/>
            <button className='w-[85%] m-5 bg-red-600 p-2 cursor-pointer' onClick={submitForm}>
            {IsSignInForm?"Sign In":"Sign Up"}
            </button>
            <p className='text-4xl text-red-700'>{errorMessage}</p>
            <p className='w-[85%] mx-5 my-0 p-2 cursor-pointer' 
                onClick={toggleSignInSignUp}>
                    
                    {IsSignInForm?"New to Netflix?Sign up now.":"Already registered? Sign In now"}
            </p>
        </form>
      </div>
    </div>
  )
}

export default Login

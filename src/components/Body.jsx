import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          dispatch(addUser({user: user}));
        } else {
          // User is signed out
          dispatch(removeUser({user: user}));
        }
      });
  
    },[])
  

    const appRoutes=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRoutes}/>
    </div>
  )
}

export default Body

import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';

const Header = () => {
  const navigate=useNavigate();

  const user=useSelector((store)=>store.user);

  const signoutUser=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
    
  }

  return (
    <>
    <div className='flex justify-between absolute px-40 py-2 bg-gradient-to-b from-black z-10 w-full'>
      <img className=' w-48 ' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
alt='logo'/>
      
        {user && <p className='text-red-700 text-3xl cursor-pointer' onClick={signoutUser}>SignOut</p>}
    
    </div>
    
    </>
  )
}

export default Header

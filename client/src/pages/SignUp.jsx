import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="bg-[url('../../assets/sign.jpg')] h-[100vh] bg-contain">


   <div className="p-3 max-w-lg mx-auto rounded-md bg-slate-700 bg-blur">
    <h1 className='text-3xl text-center text-white  font-sans font-extrabold my-7'>
      Sign Up
    </h1>
    <form className='flex flex-col gap-4'>
      <input type='text' placeholder='username' className='border p-3 rounded-lg ' id='username'/>
      <input type='text' placeholder='email' className='border p-3 rounded-lg ' id='email'/> 
      <input type='password' placeholder='password' className='border p-3 rounded-lg ' id='password'/>  
    <button className=' w-1/2 mx-auto bg-gradient-to-br	from bg-black font-bold text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Signup</button>

    </form>
    <div className='flex gap-2 mt-5'>
      <p className='font-semibold text-white'>Have an Account</p>
      <Link to={"/signin"}>
        <span className='text-red font-serif shadow-md'>Sign in</span>
      </Link>

    </div>
   </div>

   </div>


  )
}

export default SignUp;
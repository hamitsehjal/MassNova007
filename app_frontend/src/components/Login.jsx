import React from 'react'
import { GoogleLogin,googleLogout,useGoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import backgroundVideo from "../assets/share.mp4"
import logo from "../assets/logowhite.png"

const Login = () => {

 
  return (
   <div className='flex justify-start items-center flex-col h-screen'>
    <div className='relative w-full h-full'>
      <video
      src={backgroundVideo}
      type="video/mp4"
      loop
      controls={false}
      autoPlay
      muted
      className='w-full h-full object-cover'
      />

<div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-blackOverlay'>
  <div className='p-5'>
    <img src={logo} width="130px" alt="Logo"/>
  </div>

  <div className='shawdow-2xl'>
    <GoogleLogin
    onSuccess={response=>console.log(jwt_decode(response.credential))}
    
    />


  </div>
</div>
    </div>

   </div>
  )
}

export default Login
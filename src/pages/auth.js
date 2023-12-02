import React from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

const Auth = () => {
  return (
    <div className='flex items-center h-screen justify-evenly bg-gray-700'>
      <Login />
      <Register/>
    </div>
  )
}

export default Auth
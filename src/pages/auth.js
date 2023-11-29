import React from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

const auth = () => {
  return (
    <div className='flex items-center h-screen justify-evenly'>
      <Login />
      <Register/>
    </div>
  )
}

export default auth
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (event) => {
        event.preventDefault()

        try {
            await axios.post('http://localhost:3001/auth/register', { username, password })
            alert("Registration Completed! Now you can login")

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form className='bg-black p-5 w-[400px] h-[500px] text-white flex flex-col justify-evenly  items-center rounded-md text-[20px]' onSubmit={handleRegister}>
                <h2 className='text-3xl font-extrabold'>Register</h2>

                <div>
                    <label htmlFor='rusername' className='m-5'>Username</label>
                    <input className='rounded-md text-black pl-1' type='text' id='rusername' value={username} onChange={(event) => { setUsername(event.target.value) }} />
                </div>

                <div>
                    <label htmlFor='rpassword' className='m-5'>Password</label>
                    <input className='rounded-md text-black pl-1' type='password' id='rpassword' value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </div>

                <button className='bg-gray-700 pl-5 pr-5 pt-3 pb-3 rounded-md text-white font-extrabold' type='submit'>Register</button>

            </form>
        </div>
    )
}

export default Register
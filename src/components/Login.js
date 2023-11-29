import React from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [cookies,setCookies] = useCookies(['access_token'])

    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            
            const response = await axios.post('http://localhost:3001/auth/login', {username, password}) 

            setCookies('access_token', response.data.token)
            window.localStorage.setItem("userID", response.data.userID)
            navigate('/')

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form className='bg-blue-950 p-5 w-[400px] h-[500px] text-white flex flex-col justify-evenly  items-center rounded-md text-[20px]' onSubmit={handleLogin}>
                <h2 className='text-3xl font-extrabold'>Login</h2>

                <div>
                    <label htmlFor='username' className='m-5'>Username</label>
                    <input className='rounded-md text-black pl-1' type='text' id='username' value={username} onChange={(event) => { setUsername(event.target.value) }} />
                </div>

                <div>
                    <label htmlFor='password' className='m-5'>Password</label>
                    <input className='rounded-md text-black pl-1' type='password' id='password' value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </div>

                <button className='bg-lime-400 pl-5 pr-5 pt-3 pb-3 rounded-md text-blue-950 font-extrabold'>Login</button>

            </form>
        </div>
    )
}

export default Login
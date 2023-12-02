import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [cookies, setCookies] = useCookies(['access_token']);

    const navigate = useNavigate()

    const handleLogout = () => {
        setCookies('access_token', '')
        window.localStorage.removeItem("userID")
        navigate('/auth')
    }

    return (
        <div className=' bg-black w-full h-[50px] text-white flex items-center justify-center'>

            <div className='w-[50%] flex justify-evenly text-xl'>
                <Link to='/'>Home</Link>



                {(!cookies.access_token) ?
                    <Link to='/auth'>Login/Register</Link> :
                    <>
                        <Link to='/create-recipe'>Create Recipe</Link>
                        <Link to='/saved-recipes'>Saved Recipes</Link>
                        <div onClick={handleLogout} className='cursor-pointer'> LogOut </div>
                    </>
                }

            </div>

        </div>
    )
}

export default Navbar
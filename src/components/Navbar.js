import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' bg-black w-full h-[50px] text-white flex items-center justify-center'>

            <div className='w-[50%] flex justify-evenly text-xl'>
                <Link to='/'>Home</Link>
                <Link to='/create-recipe'>Create Recipe</Link>
                <Link to='/saved-recipes'>Saved Recipes</Link>
                <Link to='/auth'>Login/Register</Link>
            </div>

        </div>
    )
}

export default Navbar
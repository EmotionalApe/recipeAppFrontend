import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useGetUserID } from '../hooks/useGetUserID'

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([])
  const userID = useGetUserID()

  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/${userID}`)
        setSavedRecipes(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSavedRecipe()
  }, [userID])

  const deleteRecipe = async (recipeID) => {
    try {
      const response = await axios.post("http://localhost:3001/recipes/deleteSaved", { recipeID, userID })
      setSavedRecipes(response.data.savedRecipes)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className='w-full min-h-screen bg-gray-700 text-white flex flex-col items-center'>
      <h1 className='text-3xl mt-10 font-extrabold'>Saved Recipes</h1>
      <div className='w-[600px]'>

        {savedRecipes.length > 0 ?
          <>
            {savedRecipes.map((recipe) => {
              return (
                <div key={recipe._id} className='m-10 flex flex-col items-center bg-black p-5 rounded-xl'>
                  <h2 className='text-2xl font-bold'>{recipe.Name}</h2>
                  <button className='bg-gray-700 rounded-md p-1 m-1' onClick={() => { deleteRecipe(recipe._id) }}>Delete this recipe</button>
                  <p className='m-1'>{recipe.instructions}</p>
                  <img className='w-[300px] h-[300px] rounded-md m-1' src={recipe.imageUrl} alt={recipe.Name} />
                  <p className=''>Cooking Time : {recipe.cookingTime} (minutes)</p>
                </div>
              )
            })}
          </> : 
          <div className='text-2xl text-center m-10'>You haven't saved any recipes yet.</div>}


      </div>
    </div>
  )
}

export default SavedRecipes
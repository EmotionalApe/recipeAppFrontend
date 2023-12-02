import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useGetUserID } from '../hooks/useGetUserID'

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [savedRecipes, setSavedRecipes] = useState([])
  const userID = useGetUserID()

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/savedRecipeIds/${userID}`);
        setSavedRecipes(response.data.savedRecipes);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchRecipe();
    fetchSavedRecipe();
  }, [userID]); // Make sure to include userID in the dependency array
  
  const saveRecipe = async (recipeID) => {
    try {
      await axios.put("http://localhost:3001/recipes", { recipeID, userID });
      // Update the savedRecipes state after saving a new recipe
      setSavedRecipes((prevSavedRecipes) => [...prevSavedRecipes, recipeID]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-full min-h-screen bg-gray-700 text-white flex flex-col items-center'>
      <h1 className='text-3xl mt-10 font-extrabold'>Recipes</h1>
      <div className='w-[600px]'>
        {recipes.map((recipe) => {
          return (
            <div key={recipe._id} className='m-10 flex flex-col items-center bg-black p-5 rounded-xl'>
              <h2 className='text-2xl font-bold'>{recipe.Name}</h2>

              {savedRecipes.includes(recipe._id) ? <div className='bg-gray-700 rounded-md p-1 m-1'>Already Saved</div>
                : <button className='bg-gray-700 rounded-md p-1 m-1' onClick={() => { saveRecipe(recipe._id) }}>Save this recipe</button>}


              <p className='m-1'>{recipe.instructions}</p>
              <img className='w-[300px] h-[300px] rounded-md m-1' src={recipe.imageUrl} alt={recipe.Name} />
              <p className=''>Cooking Time : {recipe.cookingTime} (minutes)</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useGetUserID } from '../hooks/useGetUserID'
import { useNavigate } from 'react-router-dom'

const CreateRecipe = () => {

  const userID = useGetUserID();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    Name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID
  })

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] })
  }

  const handleIngredientChange = (event, idx) => {
    const {value} = event.target
    const copyIngredients = recipe.ingredients
    copyIngredients[idx] = value
    setRecipe({...recipe, ingredients:copyIngredients})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/recipes", recipe)
      alert("Recipe Created!")
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='w-full min-h-screen bg-gray-700 text-white flex flex-col items-center'>
      <h2 className='text-3xl font-bold mt-10 mb-10'>Create Recipe</h2>

      <form className='flex flex-col min-h-[550px] w-[400px] bg-black p-[50px] justify-evenly rounded-xl' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input className='text-black rounded-md' type='text' id='name' onChange={(e) => { setRecipe({ ...recipe, Name: e.target.value }) }} />

        <label htmlFor='ingredients'>Ingredients</label>

        <button type='button' onClick={addIngredient} className='bg-gray-700 rounded-md'>Add Ingredient</button>

        {recipe.ingredients.map((ingredient, idx) => (
          <input className='text-black rounded-md mt-1 mb-1' type='text' key={idx} value={ingredient} id='ingredients' onChange={(event)=>handleIngredientChange(event, idx)} />
        ))}

        <label htmlFor='instructions'>Instructions</label>
        <textarea className='text-black rounded-md' id='instructions' onChange={(e) => { setRecipe({ ...recipe, instructions: e.target.value }) }}></textarea>

        <label htmlFor='imageUrl'>Image URL</label>
        <input className='text-black rounded-md' type='text' id='imageUrl' onChange={(e) => { setRecipe({ ...recipe, imageUrl: e.target.value }) }} />

        <label htmlFor='cookingTime'>Cooking Time (minutes)</label>
        <input className='text-black rounded-md' type='number' id='cookingTime' onChange={(e) => { setRecipe({ ...recipe, cookingTime: e.target.value }) }} />

        <button type='submit' className='bg-gray-700 rounded-md mt-1 mb-1'>Create Recipe</button>
      </form>
    </div>
  )
}

export default CreateRecipe
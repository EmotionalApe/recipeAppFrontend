import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import home from './pages/home';
import auth from './pages/auth';
import createRecipe from './pages/createRecipe';
import savedRecipes from './pages/savedRecipes';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={home}/>
          <Route path='/auth' Component={auth} />
          <Route path='create-recipe' Component={createRecipe} />
          <Route path='/saved-recipes' Component={savedRecipes} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

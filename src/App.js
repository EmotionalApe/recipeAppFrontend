import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Auth from './pages/auth';
import CreateRecipe from './pages/createRecipe';
import SavedRecipes from './pages/savedRecipes';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/auth' Component={Auth} />
          <Route path='create-recipe' Component={CreateRecipe} />
          <Route path='/saved-recipes' Component={SavedRecipes} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

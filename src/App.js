import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom'
import MoviesContainer from './containers/movies/MoviesContainer';
import FavoritesContainer from './containers/favorites/FavoritesContainer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/:categories' element={<MoviesContainer />} />
        <Route path='/favorites' element={<FavoritesContainer />} />
      </Routes>
    </div>
  );
}

export default App;

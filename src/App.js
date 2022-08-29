import Header from './components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom'
import MoviesContainer from './containers/movies/MoviesContainer';
import FavoritesContainer from './containers/favorites/FavoritesContainer';
import WatchListContainer from './containers/watchList/WatchListContainer';
import DetailsContainer from './containers/details/DetailsContainer';
import SearchContainer from './containers/searchh/SearchContainer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/popular' />} />
        <Route path='/:categories' element={<MoviesContainer />} />
        <Route path='/favorites' element={<FavoritesContainer />} />
        <Route path='/watch_list' element={<WatchListContainer />} />
        <Route path='/movie/:id' element={<DetailsContainer />} />
        <Route path='/search' element={<SearchContainer />} />
      </Routes>
    </div>
  );
}

export default App;

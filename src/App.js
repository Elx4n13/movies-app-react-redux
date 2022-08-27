import './App.css';
import Header from './components/Header/Header';
import {Routes,Route} from 'react-router-dom'
import MoviesContainer from './containers/movies/MoviesContainer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/:categories' element={<MoviesContainer />} /> 
      </Routes>
    </div>
  );
}

export default App;

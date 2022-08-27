import store from '../stores'
import {addMovies} from '../stores/MoviesStore'
export const addMoviesHandle = (movies)=>{
    store.dispatch(addMovies(movies))
}
export const img_base_url="https://image.tmdb.org/t/p/original"
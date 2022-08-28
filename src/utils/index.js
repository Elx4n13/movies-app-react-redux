import store from '../stores'
import { addMovies } from '../stores/MoviesStore'
import { addFavorites } from '../stores/FavoritesStore'
export const addMoviesHandle = (movies) => {
    store.dispatch(addMovies(movies))
}
export const addFavoritesHandle = (movie) => {
    store.dispatch(addFavorites(movie))
}
export const img_base_url = "https://image.tmdb.org/t/p/original"
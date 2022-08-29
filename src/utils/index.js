import store from '../stores'
import { addMovies } from '../stores/MoviesStore'
import { addFavorites, deleteFavorites } from '../stores/FavoritesStore'
import { addWatchList, deleteWatchList } from '../stores/WatchListStore'

export const addMoviesHandle = (movies) => {
    store.dispatch(addMovies(movies))
}

export const addFavoritesHandle = (movie) => {
    store.dispatch(addFavorites(movie))
}

export const deleteFavoritesHandle = (id) => {
    store.dispatch(deleteFavorites(id))
}

export const addWatchListHandle = (movie) => {
    store.dispatch(addWatchList(movie))
}

export const deleteWatchListHandle = (id) => {
    store.dispatch(deleteWatchList(id))
}


export const img_base_url = "https://image.tmdb.org/t/p/original"
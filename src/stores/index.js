import { configureStore } from '@reduxjs/toolkit'
import movies from './MoviesStore'
import favorites from './FavoritesStore'
import watchList from './WatchListStore'


const store = configureStore({
    reducer: {
        movies,
        favorites,
        watchList
    }
})
export default store
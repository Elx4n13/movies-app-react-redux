import { configureStore } from '@reduxjs/toolkit'
import movies from './MoviesStore'
import favorites from './FavoritesStore'
const store = configureStore({
    reducer: {
        movies,
        favorites
    }
})
export default store
import { configureStore } from '@reduxjs/toolkit'
import movies from './MoviesStore'
const store = configureStore ({
    reducer:{
        movies
    }
})
export default store
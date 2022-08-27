import {createSlice} from'@reduxjs/toolkit'
const initialState = {
    movies:{}
}
const movies = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies:(state,action)=>{
            state.movies = action.payload
        },
    }
   
})
export const {addMovies} = movies.actions

export default movies.reducer
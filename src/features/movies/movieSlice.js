import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async(term)=>{
    const response = await movieApi.get(
        `?apiKey=7387ef1c&s=${term}&type=movie`
        );
    return (response.data)
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async(term)=>{
    const response = await movieApi.get(
        `?apiKey=7387ef1c&s=${term}&type=series`
        );
    return (response.data)
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async(id)=>{
    const response = await movieApi.get(
        `?apiKey=7387ef1c&i=${id}&Plot=full`
        );
    return (response.data)
})

const initialState = {
    movies:{},shows:{},selectMovieOrShow:{},
};

const movieSlice = createSlice({
    name:"movies",
    initialState,
      reducers: {
        addMovies: (state, {payload}) =>{
            state.movies = payload
        },
    },
    extraReducers : {
        [fetchAsyncMovies.pending] : ()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled] : (state, {payload})=>{
            console.log("fetched successfully");
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected] : (state, {payload})=>{
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled] : (state, {payload})=>{
            console.log("fetched successfully");
            return {...state,shows:payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled] : (state, {payload})=>{
            console.log("fetched successfully");
            return {...state,selectMovieOrShow:payload}
        },
    }
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow

export default movieSlice.reducer;
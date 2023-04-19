import React,{useEffect} from 'react';
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        const movieText = "Harry"
        const fetchMovies = async() =>{
            const response = await movieApi.get(`?apiKey=7387ef1c&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.log(err)
            });
            dispatch(addMovies(response.data))
        };
        fetchMovies();
    },[]);

    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing />
        </div>
    );
};

export default Home;
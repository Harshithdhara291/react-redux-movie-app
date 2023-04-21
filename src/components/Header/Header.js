import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
const Header = () => {
    const [term,setTerm] = useState('')
    const dispatch = useDispatch()
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        
    }

    return (
        <div className='header'>
            <Link to='/'><div className='logo'>
                Moviezzz
            </div></Link>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type='text' value={term} placeholder='Search Movies or Shows' onChange={(e)=>setTerm(e.target.value)}/>
                    <button type='submit'><i className='fa fa-search'/></button>
                </form>
            </div>
            <div className='user-image'>
                <img src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1681896633~exp=1681897233~hmac=1963a48db5035e5358b85198b04cbfddda7a8664437d0d1cdfb868c25a9c94d0' alt='user' />
            </div>
        </div>
    );
};

export default Header;
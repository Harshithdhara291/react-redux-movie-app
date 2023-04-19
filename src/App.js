import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import MovieDetail from './components/MovieDetail/MovieDetail'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <div className='container'>  
        <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/movie/:imdbID' Component={MovieDetail}/>
        <Route Component={PageNotFound}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

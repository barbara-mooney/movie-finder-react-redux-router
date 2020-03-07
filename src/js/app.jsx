import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route } from 'react-router-dom';
import MovieSearchContainer from './Containers/MovieSearchContainer';
import ResultsContainer from './Containers/ResultsContainer';
import MovieDetailContainer from './Containers/MovieDetailContainer';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='nav'>
            <h1>Movie Finder</h1>
          </nav>
          <Route path='/' exact component={ MovieSearchContainer} />
          <Route path='/movieInfo/:value' component={ ResultsContainer } />
          <Route path='/movie/:id' component={ MovieDetailContainer } />;
        </div>
      </Router>
    )
  }
}

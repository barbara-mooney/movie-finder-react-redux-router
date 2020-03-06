import React, { Component } from 'react';
// import {
//   HashRouter as Router,
//   Route } from 'react-router-dom';
import MovieSearchContainer from './Containers/MovieSearchContainer';
// import MovieDetailContainer from './Containers/MovieDetailContainer';


export default class App extends Component {
  render() {
    return (
        // <Router>
          <div className='container'>
            <div><MovieSearchContainer /></div>
            {/* <Route exact path='/' component={ MovieSearchContainer }/> */}
            {/* <Route path='/movie/:id' component={ MovieDetailContainer } /> */}
          </div>
        // </Router>
    );
  }
}

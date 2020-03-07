import React from 'react';
import { connect } from 'react-redux';
import {
  movieQuery,
  movieSearch,
} from '../actions';


function mapStoreToProps(store) {
  return {
    inputValue: store.inputValue,
    movieInfo: store.movieInfo,
  };
}

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleMovieQuery = this.handleMovieQuery.bind(this);
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
  }

  handleMovieQuery(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(movieQuery(value));
  }

  handleMovieSearch() {
    const { inputValue, dispatch } = this.props;
    dispatch(movieSearch(inputValue));
  }

  render() {
    const { inputValue } = this.props;

    return (
      <div className='card'>
        <div className='card-header'>
          <h1>Movie Finder</h1>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Enter movie" value={ inputValue } onChange={ this.handleMovieQuery }/>
          <button
            type='button'
            className='btn btn-outline-primary'
            onClick={ this.handleMovieSearch }>Search Movie!
          </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(MovieSearchContainer);

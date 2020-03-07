import React from 'react';
import { connect } from 'react-redux';
import { movieQuery } from '../actions';
import { Link } from 'react-router-dom';


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
  }

  handleMovieQuery(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(movieQuery(value));
  }

  render() {
    const { inputValue } = this.props;

    return (
      <div className='card'>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Enter movie" value={ inputValue } onChange={ this.handleMovieQuery }/>
          <Link to={`/movieInfo/:${inputValue}`}>
            <button
              type='button'
              className='btn btn-outline-primary'>Search Movie!
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(MovieSearchContainer);

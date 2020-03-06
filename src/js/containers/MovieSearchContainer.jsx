import React from 'react';
import { connect } from 'react-redux';
import {
  movieQuery,
  movieSearch,
} from '../actions';
// import { Link } from 'react-redux-dom';


function mapStoreToProps(store) {
  return {
    inputValue: store.inputValue,
    movieInfo: store.movieInfo,
  };
}

class MovieSearchContainer extends React.Component
{
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
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter movie" value={ inputValue } onChange={ this.handleMovieQuery }/>
          <div className="input-group-append">
            <span><button
              type='button'
              className='btn btn-outline-primary'
              onClick={ this.handleMovieSearch }>Go!
          </button></span>
          </div>
        </div>
        <div className='card'>
            {/* {this.props.movieInfo.map((item, index) => ( */}
              <div className='card-body'>
                {/* <img src='SOME LINK FROM API' alt='Image of cover' id='image' key={XXXXX}>SOME POSTER */}
                {/* </img> */}
                <h4>Movie Title</h4>
                <p>Plot</p>
                <hr id='horizontalline' />
                <h6>Year Released</h6>
                {/* <Link to='/MovieDetailContainer'> PROBABLY WILL HAVE TO ADD THE ID OF THE MOVIE OR SOMETHING ELSE.
                  <button class="btn btn-primary">More Information</button>
                </link> */}
              </div>
              {/* ))} */}
          </div>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(MovieSearchContainer);

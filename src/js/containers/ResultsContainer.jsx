import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-redux-dom';


function mapStoreToProps(store) {
  return {
    inputValue: store.inputValue,
    movieInfo: store.movieInfo.search,
  };
}

class ResultsContainer extends React.Component
{
  constructor(props) {
    super(props);
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

export default connect(mapStoreToProps)(ResultsContainer);

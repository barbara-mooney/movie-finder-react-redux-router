import React from 'react';


class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='card-header'>
            <h1>Movie Finder</h1>
        </div>
        <button>Go Back</button>
        <div className='row'>
          <div className='col-4'>
            <img src='some link fro api'>movie poster</img>
          </div>
          <div className='col-4'>
            <div className='card'>
              <div className='card-header formatMovieHeader'>Movie Details</div>
              <div className='card-body'>movie_title</div>
              <div className='card-body'>
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group" role="group" aria-label="First group">
                    <button type="button" class="btn btn-success">release_year</button>
                  </div>
                  <div class="btn-group" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-success">duration in minutes</button>
                  </div>
                  <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-success">genres</button>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <p>plot</p>
              </div>
              <div className='card-body'>
                <p>nominations and awards</p>
              </div>
              <div className='card-body'>
                <p>Metascore:</p>
                <p>IMDB:</p>
              </div>
            </div>
          </div>
        </div>
        <h1>Movie Detail Container</h1>

        {/* <p>Viewing Movie {this.props.match.params.id}</p> */}
      </div>
    )
  }
}

export default MovieDetailContainer;

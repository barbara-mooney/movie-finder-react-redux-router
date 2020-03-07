import axios from 'axios';

import {
  MOVIE_QUERY,
  MOVIE_SEARCH,
  DETAIL_MOVIE_SEARCH,
} from './constants';


export function movieQuery(inputValue) {
    return {
        type: MOVIE_QUERY,
        payload: inputValue,
    };
}
export function movieSearch (inputValue) {
    return {
        type: MOVIE_SEARCH,
        payload: axios.get(`/movieInfo/${ inputValue }`)}
};

export function detailMovieSearch (id) {
  console.log(id)
  return {
      type: DETAIL_MOVIE_SEARCH,
      payload: axios.get(`/movie/${ id }`)}
};



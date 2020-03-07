import {
  MOVIE_QUERY,
  MOVIE_SEARCH_PENDING,
  MOVIE_SEARCH_FULFILLED,
  MOVIE_SEARCH_REJECTED
} from './constants';

const defaultState = {
  inputValue: '',
  movieInfo: [],
};

export default function reducers (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
      case MOVIE_QUERY: {
        return {
          ...state,
          inputValue: payload,
        };
        }
      case MOVIE_SEARCH_PENDING: {
        return {
          ...state,
        };
      }
      case MOVIE_SEARCH_FULFILLED: {
        return {
          ...state,
          movieInfo: payload.data,
        }
      }
      case MOVIE_SEARCH_REJECTED: {
        return {
          ...state,
          status: 'Rejected',
          error: payload.data,
        };
      }
        default: {
          return state;
        }
    }
  };


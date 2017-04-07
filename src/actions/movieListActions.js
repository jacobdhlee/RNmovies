import {
  MOVIELIST,
  LOADING_LIST_SUCCESS,
  LOADING_LIST_FAIL,
} from './types'

export const getMovieList = (api) => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: LOADING_LIST_SUCCESS,
          payload: data,
        })
      })
      .catch(err => {
        dispatch({
          type: LOADING_LIST_FAIL,
          payload: err
        })
      })
  }
}
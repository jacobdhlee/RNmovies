import {
  MOVIELIST,
  LOADING_LIST_SUCCESS,
  LOADING_LIST_FAIL,
  LOADING_TVLIST_SUCCESS,
  SEARCH_INPUT,
  SEARCH_SUBMIT_SUCCESS,
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

export const getTVList = (api) => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: LOADING_TVLIST_SUCCESS,
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

export const searchInput = (text) => {
  return {
    type: SEARCH_INPUT,
    payload: text
  }
}

export const searchSubmit = (text, api) => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${text}`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: SEARCH_SUBMIT_SUCCESS,
          payload: data,
        })
      })
      .catch((err) => {
        dispatch({
          type: LOADING_LIST_FAIL,
          payload: err
        })
      })
  }
}
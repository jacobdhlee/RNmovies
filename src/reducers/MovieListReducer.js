import {
  MOVIELIST,
  LOADING_LIST_FAIL,
  LOADING_LIST_SUCCESS,
  LOADING_TVLIST_SUCCESS,
  SEARCH_INPUT,
  SEARCH_SUBMIT_SUCCESS,
  FAVORITE_ADD,
  FAVORITE_REMOVIE,
  SIMILAR_SEARCH_SUCCESS,
  GET_TRAILER_ID,
  GET_TRAILER_FAIL,
} from '../actions/types'

const INITIAL_STATE = {
  movies: [],
  tvs: [],
  search: '',
  searchList: [],
  favorite: [],
  similar: [],
  youtubeId: '',
  error: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_LIST_SUCCESS:
      return { ...state, movies: [...action.payload.results] }
      
    case LOADING_LIST_FAIL:
      return { ...state, error: action.payload }
      
    case LOADING_TVLIST_SUCCESS:
      return { ...state, tvs: [...action.payload.results]  }
      
    case SEARCH_INPUT:
      return { ...state, search: action.payload }
      
    case SEARCH_SUBMIT_SUCCESS: 
      return { ...state, searchList: [...action.payload.results]}
      
    case FAVORITE_ADD:
      return { ...state, favorite: [ ...state.favorite, action.payload] }
      
    case SIMILAR_SEARCH_SUCCESS: 
      return { ...state, similar: [...action.payload.results] }
      
    case GET_TRAILER_ID: 
      return { ...state, youtubeId: action.payload.results[1].key }
      
    case GET_TRAILER_FAIL:
      return { ...state, error: action.payload }

    case FAVORITE_REMOVIE:
      let filteredMovie = state.favorite.filter(movie => {
        return movie.id === action.payload.id
      })
      
      return { ...state, favorite: filteredMovie }
      
    default:
      return { ...INITIAL_STATE }
      
  }
} 
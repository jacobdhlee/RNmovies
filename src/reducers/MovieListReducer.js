import {
  MOVIELIST,
  LOADING_LIST_FAIL,
  LOADING_LIST_SUCCESS,
  LOADING_TVLIST_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  movies: [],
  tvs: [],
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
      
    default:
      return { ...INITIAL_STATE }
  }
} 
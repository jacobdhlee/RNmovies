import {
  MOVIELIST,
  LOADING_LIST_FAIL,
  LOADING_LIST_SUCCESS,
} from '../actions/types'

const INITIAL_STATE = {
  movieList: {},
  error: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_LIST_SUCCESS:
      return { ...state, movieList: action.payload }
    
    case LOADING_LIST_FAIL:
      return { ...state, error: action.payload }
      
    default:
      return { ...INITIAL_STATE }
  }
} 
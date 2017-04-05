import {
  MOVIELIST,
} from '../actions/types'

const INITIAL_STATE = {
  movies: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIELIST:
      return { ...state, movies: action.payload }
      
    default:
      return { ...INITIAL_STATE }
  }
} 
import {
  MOVIELIST,
} from './types'

export const getMovieList = (text) => {
  return {
    type: MOVIELIST,
    payload: text
  }
}
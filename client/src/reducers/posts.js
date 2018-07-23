import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from '../constants/ActionTypes'

const initialState = []

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return 'Fetching'
    case GET_POSTS_SUCCESS:
      return action.posts
    case GET_POSTS_ERROR:
      return 'Error'
    default:
      return initialState
  }
}

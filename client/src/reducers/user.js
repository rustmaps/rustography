import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from 'constants/ActionTypes'

const initialState = []

export default function user(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return 'Fetching'
    case GET_USER_SUCCESS:
      return action.user
    case GET_USER_ERROR:
      return 'Error'
    default:
      return initialState
  }
}

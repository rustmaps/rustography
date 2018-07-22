import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const get_user = createAction(GET_USER)
export const get_user_success = createAction(GET_USER_SUCCESS, (user) => ({user}))
export const get_user_error = createAction(GET_USER_ERROR)

import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from '../constants/ActionTypes'
import { createAction } from 'redux-actions'

export const get_posts = createAction(GET_POSTS)
export const get_posts_success = createAction(GET_POSTS_SUCCESS, (posts) => ({posts}))
export const get_posts_error = createAction(GET_POSTS_ERROR)

import { combineReducers } from 'redux'
import counter from './counter'
import posts from './posts'
import user from './user'

const rootReducer = combineReducers({
  counter, posts, user
})

export default rootReducer

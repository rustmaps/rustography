import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import posts from './api/tmpdata'
const axiosLib = require('axios');
const axios = axiosLib.create({baseURL: 'http://localhost:3001'})

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getPosts(action) {
  console.log(posts);
   try {
      //const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "GET_POSTS_SUCCESS", posts: posts});
   } catch (e) {
      yield put({type: "GET_POSTS_ERROR", message: e.message});
   }
}
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getUser(action) {
   try {
     var user;
     axios.get('/auth/user').then(function (response) {
       user = response;
       console.log(user, response);
     })
     if(user == undefined) {
       throw "Eror"
     }
     yield put({type: "GET_USER_SUCCESS", user: user});
   } catch (e) {
      yield put({type: "GET_USER_ERROR", message: e.message});
   }
}



function* rootSaga() {
  yield takeEvery("GET_POSTS", getPosts);
  yield takeEvery("GET_USER", getUser);
}


export default rootSaga;

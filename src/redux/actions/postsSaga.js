import { takeLatest } from 'redux-saga/effects'

function* getPosts() {

      alert('get posts')
}

function* getPostById() {

}

function* postsSaga() {

   yield takeLatest( "GET_POSTS", getPosts )
   yield takeLatest( "GET_POSTS_BY_ID" , getPostById)

}

export default postsSaga;

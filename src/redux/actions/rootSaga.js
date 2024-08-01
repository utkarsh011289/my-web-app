import postsSaga from "./postsSaga";
import photosSaga from "./photosSaga";

import { all } from 'redux-saga/effects'

function* rootSaga( ){

   return yield all([ postsSaga(), photosSaga() ])
}

export default rootSaga;
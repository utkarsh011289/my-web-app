import { takeLatest } from 'redux-saga/effects'

function* getPhotos() {

      alert('get users')
}



function* photosSaga() {

   yield takeLatest( "GET_PHOTOS", getPhotos )
   

}

export default photosSaga;

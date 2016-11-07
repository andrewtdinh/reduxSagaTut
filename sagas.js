import { takeEvery, takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
// import Api from 'Api'

export function* incrementAsync(){
  yield delay(1000)
  yield put({type: 'INCREMENT'})
}



// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action) {
//    try {
//       const user = yield call(Api.fetchUser, action.payload.userId);
//       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//    } catch (e) {
//       yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
// }
//
// /*
//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
// function* mySaga() {
//   yield* takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }
//
// export default mySaga;

// export function* helloSaga() {
//   console.log('Hello Sagas!')
// }

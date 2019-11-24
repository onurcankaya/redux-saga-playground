import { takeLatest, put } from 'redux-saga/effects'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function* ageUpAsync() {
  yield delay(2000)
  yield put({ type: 'AGE_UP_ASYNC', value: 1 })
}

export function* watchAgeUp() {
  yield takeLatest('AGE_UP', ageUpAsync)
}

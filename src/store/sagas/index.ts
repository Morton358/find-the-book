import { takeEvery, all } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
import { searchBookSaga } from './searchBook'

export function* watchApp() {
  yield all([takeEvery(actionTypes.SEARCH_BOOK_INITIAL, searchBookSaga)])
}

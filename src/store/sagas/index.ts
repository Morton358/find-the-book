import { takeEvery, all } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
import { loadImageSaga } from './bookCovers'
import { searchBookSaga } from './searchBook';

export function* watchApp() {
  yield all([
    takeEvery(actionTypes.SEARCH_BOOK_INITIAL, searchBookSaga),
    takeEvery(actionTypes.LOAD_IMAGE_SAGA, loadImageSaga),
  ])
}

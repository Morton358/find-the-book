import { put } from 'redux-saga/effects'

import * as actions from '../actions/index'
import { searchApiAxios } from './../../share/axios-instance'
import { SearchAction } from '../../types';

export function* searchBookSaga(action: SearchAction) {
  yield put(actions.searchStart())
  try {
    const searchQuery = action.searchQuery
    const response = yield searchApiAxios.get(`q=${searchQuery}`)
    yield put(actions.searchSuccess(response.data))
  } catch (error) {
    yield put(actions.searchFailed(error))
  }
}

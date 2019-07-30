import { put } from 'redux-saga/effects'

import * as actions from '../actions/index'
import { searchApiAxios } from './../../share/axios-instance'
import { SearchAction } from '../../types'

export function* searchBookSaga(action: SearchAction) {
  yield put(actions.searchStart())
  try {
    const searchQuery = action.searchQuery
    const response = yield searchApiAxios.get(`search.json?q=${searchQuery}`)
    console.log('TCL: function*searchBookSaga -> response ', response)
    console.log('TCL: function*searchBookSaga -> response.data is JSON ? ', isJson(response.data))
    yield put(actions.searchSuccess(response.data))
  } catch (error) {
    yield put(actions.searchFailed(error))
  }
}

function isJson(str: any) {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

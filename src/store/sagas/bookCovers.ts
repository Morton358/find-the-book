import { put } from 'redux-saga/effects'

import * as actions from '../actions/index'
import { coversApiAxios } from './../../share/axios-instance'
import { LoadImageSagaAction } from '../../types'

export function* loadImageSaga(action: LoadImageSagaAction) {
  yield put(actions.loadImageStart())
  try {
    const coverId = action.coverId
    const response = yield coversApiAxios.get(`b/id/${coverId}-L.jpg`)
    console.log('TCL: function*loadImageSaga -> response', response)
    console.log('TCL: function*loadImageSaga -> typeof response', typeof response)
    console.log(
      'TCL: function*loadImageSaga -> binary data to string:',
      Buffer.from(response.data, 'binary').toString('base64')
    )

    yield put(actions.loadImageSuccess(coverId))
  } catch (error) {
    yield put(actions.loadImageFailed(error))
  }
}

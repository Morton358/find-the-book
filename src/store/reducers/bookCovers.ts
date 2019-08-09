import {
  BookCoversState,
  LoadImagesActionTypes,
  LoadImagesAction,
  LoadImageFailedAction,
  LoadImageSuccessAction,
} from './../../types'
import * as actionTypes from './../actions/actionTypes'
import { updateBookCoversState } from '../../share/utility'

const initialState: BookCoversState = {
  ids: [],
  downloadedCoverIds: [],
  currentIndex: 0,
  error: null,
  errorOccured: false,
  loading: false,
}

const loadImagesInitial = (state: BookCoversState, action: LoadImagesAction): BookCoversState => {
  return updateBookCoversState(state, { ids: [...action.arrOfIds] })
}

const loadImagesStart = (state: BookCoversState): BookCoversState => {
  return updateBookCoversState(state, { loading: true })
}

const loadImageFailed = (state: BookCoversState, action: LoadImageFailedAction): BookCoversState => {
  return updateBookCoversState(state, { error: action.loadImgErr, errorOccured: true, loading: false })
}

const loadImageSuccess = (state: BookCoversState, action: LoadImageSuccessAction): BookCoversState => {
  if (state.downloadedCoverIds.indexOf(action.coverId) === -1) {
    const tempDownloadedCoversIds = [...state.downloadedCoverIds]
    tempDownloadedCoversIds.push(action.coverId)
    const tempIndexOfImage = state.ids.indexOf(action.coverId)
    return updateBookCoversState(state, {
      downloadedCoverIds: tempDownloadedCoversIds,
      currentIndex: tempIndexOfImage,
      error: null,
      errorOccured: false,
      loading: false,
    })
  }
  return updateBookCoversState(state, { error: null, errorOccured: false, loading: false })
}

const reducer = (state = initialState, action: LoadImagesActionTypes): BookCoversState => {
  // tslint:disable-next-line: no-small-switch
  switch (action.type) {
    case actionTypes.LOAD_IMAGES_INITIAL:
      return loadImagesInitial(state, action)
    case actionTypes.LOAD_IMAGE_START:
      return loadImagesStart(state)
    case actionTypes.LOAD_IMAGE_FAILED:
      return loadImageFailed(state, action)
    case actionTypes.LOAD_IMAGE_SUCCESS:
      return loadImageSuccess(state, action)
    default:
      return state
  }
}

export default reducer

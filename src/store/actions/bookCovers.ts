import * as actionTypes from './actionTypes'
import { LoadImagesActionTypes, LoadImageSagaAction, LoadImagesAction } from '../../types'

export const loadImages = (arrOfIds: number[]): LoadImagesAction => ({
  type: actionTypes.LOAD_IMAGES_INITIAL,
  arrOfIds,
})

export const loadImageSaga = (coverId: number): LoadImageSagaAction => ({
  type: actionTypes.LOAD_IMAGE_SAGA,
  coverId,
})
export const loadImageStart = (): LoadImagesActionTypes => ({ type: actionTypes.LOAD_IMAGE_START })

export const loadImageSuccess = (coverId: number): LoadImagesActionTypes => ({
  type: actionTypes.LOAD_IMAGE_SUCCESS,
  coverId,
})
export const loadImageFailed = (error: Error): LoadImagesActionTypes => ({
  type: actionTypes.LOAD_IMAGE_FAILED,
  loadImgErr: error,
})

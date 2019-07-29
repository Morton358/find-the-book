import * as actionTypes from './actionTypes'
import { SearchResponseData, SearchActionTypes } from '../../types'

export const search = (searchQuery: string): SearchActionTypes => ({
  type: actionTypes.SEARCH_BOOK_INITIAL,
  searchQuery,
})
export const searchStart = (): SearchActionTypes => ({ type: actionTypes.SEARCH_BOOK_START })
export const searchSuccess = (data: SearchResponseData): SearchActionTypes => ({ type: actionTypes.SEARCH_BOOK_SUCCESS, data })
export const searchFailed = (error: Error): SearchActionTypes => ({
  type: actionTypes.SEARCH_BOOK_FAILED,
  searchBookError: error,
})

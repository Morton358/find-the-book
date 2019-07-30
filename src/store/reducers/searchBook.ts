// @ts-ignore
import 'map.prototype.tojson'

import { SearchActionTypes, SearchBookState, SearchSuccessAction, SearchFailedAction, Book } from './../../types'
import * as actionTypes from './../actions/actionTypes'
import { updateSearchBookState, cloneObj } from '../../share/utility'

const initialState: SearchBookState = {
  count: 0,
  byId: new Map(),
  allIds: [],
  error: null,
  errorOccured: false,
  loading: false,
}

const searchBookStart = (state: SearchBookState): SearchBookState => {
  return updateSearchBookState(state, { loading: true })
}

const searchBookSuccess = (state: SearchBookState, action: SearchSuccessAction): SearchBookState => {
  console.log('searchBook reducer -> searchBookSuccess -> action.data: ', action.data)
  const mapOfBooks: Map<number, Book> = new Map()
  action.data.docs.forEach((book: Book) => {
    mapOfBooks.set(book.cover_i, cloneObj(book))
  })

  return updateSearchBookState(state, {
    count: action.data.numFound,
    byId: mapOfBooks,
    allIds: Array.from(mapOfBooks.keys()),
    error: null,
    errorOccured: false,
    loading: false,
  })
}

const searchBookFailed = (state: SearchBookState, action: SearchFailedAction): SearchBookState => {
  return updateSearchBookState(state, {
    error: action.searchBookError,
    errorOccured: true,
    loading: false,
  })
}

const reducer = (state = initialState, action: SearchActionTypes): SearchBookState => {
  switch (action.type) {
    case actionTypes.SEARCH_BOOK_START:
      return searchBookStart(state)
    case actionTypes.SEARCH_BOOK_SUCCESS:
      return searchBookSuccess(state, action)
    case actionTypes.SEARCH_BOOK_FAILED:
      return searchBookFailed(state, action)
    default:
      return state
  }
}

export default reducer

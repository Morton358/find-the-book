import { SearchActionTypes, SearchBookState, SearchSuccessAction, SearchFailedAction } from './../../types'
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
  const arrOfBooks: Book[] = []
  action.data.docs.forEach((book: Book) => {
    arrOfBooks.push(cloneObj(book))
  })

  return updateSearchBookState(state, {
    count: action.data.numFound,
    byId: action.data.docs,
    allIds: action.data.booksId,
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

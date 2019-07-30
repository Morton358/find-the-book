import { Dispatch } from 'redux'

import * as actionTypes from './store/actions/actionTypes'

export interface SearchResponseData {
  start: number
  num_found: number
  numFound: number
  docs: Book[]
}

export interface IBookList {
  books: Map<number, Book>
  booksId: number[]
  countOfBooks: number
}

export interface Book {
  title_suggest: string
  edition_key: string[]
  cover_i: number
  subtitle: string
  has_fulltext: boolean
  text: string[]
  author_name: string[]
  seed: string[]
  oclc: string[]
  ia: string[]
  isbn: string[]
  author_key: string[]
  subject: string[]
  title: string
  ia_collection_s: string
  publish_date: string[]
  type: string
  ebook_count_i: number
  publish_place: string[]
  id_librarything: string[]
  edition_count: number
  key: string
  id_goodreads: string[]
  public_scan_b: boolean
  publisher: string[]
  language: string[]
  lccn: string[]
  last_modified_i: number
  author_alternative_name: string[]
  cover_edition_key: string
  person: string[]
  publish_year: number[]
  first_publish_year: number
}

// /////////////////////// Actions ////////////////////////////////////////
export type SearchActionTypes = SearchAction | SearchStartAction | SearchSuccessAction | SearchFailedAction
export interface SearchAction {
  type: typeof actionTypes.SEARCH_BOOK_INITIAL
  searchQuery: string
}
export interface SearchStartAction {
  type: typeof actionTypes.SEARCH_BOOK_START
}
export interface SearchSuccessAction {
  type: typeof actionTypes.SEARCH_BOOK_SUCCESS
  data: SearchResponseData
}
export interface SearchFailedAction {
  type: typeof actionTypes.SEARCH_BOOK_FAILED
  searchBookError: Error
}

export type BookCoversActionTypes =
  | BookCoversAction
  | BookCoversStartAction
  | BookCoversSuccessAction
  | BookCoversFailedAction
export interface BookCoversAction {}
export interface BookCoversStartAction {}
export interface BookCoversSuccessAction {}
export interface BookCoversFailedAction {}

/////////////////////////////////////////////////////////////////////////////

///////////////////////////// Reducers /////////////////////////////////////
export interface SearchBookState {
  count: number
  byId: Map<number, Book>
  allIds: number[]
  error: Error | null
  errorOccured: boolean
  loading: boolean
}

export interface BookCoversState {
  ids: number[]
  error: Error | null
  errorOccured: boolean
  loading: boolean
}

export interface RootState {
  books: SearchBookState
  carousel: BookCoversState
}
////////////////////////////////////////////////////////////////////////////

///////////////////////////// Components Props /////////////////////////////
export type SearchBookProps = SearchBookDispatchProps & SearchBookStateProps & SearchBookOwnProps

interface SearchBookDispatchProps {
  onSearch: (searchQuery: string) => Dispatch<SearchAction>
}
interface SearchBookStateProps {
  countOfBooks: number
}
interface SearchBookOwnProps {}

///////////////////////////////////////////////////////////////////////////

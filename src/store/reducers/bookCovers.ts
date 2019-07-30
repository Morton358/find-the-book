import { BookCoversState } from './../../types'

const initialState: BookCoversState = {
  ids: [],
  error: null,
  errorOccured: false,
  loading: false,
}

const reducer = (state = initialState): BookCoversState => {
  return state
}

export default reducer

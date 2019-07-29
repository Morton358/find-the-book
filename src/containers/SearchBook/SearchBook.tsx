import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'
import { SearchBookProps, SearchBookState } from '../../types'

const SearchBook: React.FC<SearchBookProps> = (props: SearchBookProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <React.Fragment>
      <div className="col-10">
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            placeholder="search for"
            aria-label="search for"
            aria-describedby="search for input"
            value={searchQuery}
            disabled={searchQuery === undefined || searchQuery.length <= 1 }
            onChange={(e: any) => setSearchQuery(e.target.value)}
          />
          <div className="input-group-append">
            <button type="button" className="btn btn-light">
              <FontAwesomeIcon icon={faMicrophone} />
            </button>
          </div>
        </div>
      </div>
      <div className="col-auto">
        {' '}
        <button type="button" className="btn btn-primary btn-lg" onClick={() => props.onSearch(searchQuery)}>
          Search
        </button>{' '}
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state: SearchBookState) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearch: (searchQuery: string) => dispatch(actions.search(searchQuery)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBook)

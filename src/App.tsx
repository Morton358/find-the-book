import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

const App: React.FC = () => {
  return (
    <div className="container main">
      <div className="row">
        <div className="col-10">
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder="search for"
              aria-label="search for"
              aria-describedby="search for input"
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
          <button type="button" className="btn btn-primary btn-lg">
            Search
          </button>{' '}
        </div>
      </div>
    </div>
  )
}
export default App

import React from 'react'

import './App.css'
import SearchBook from "./containers/SearchBook/SearchBook";
import BookCovers from './containers/BookCovers/BookCovers'

const App: React.FC = () => {
  return (
    <div className="container main">
      <div className="row">
        <SearchBook />
      </div>
      <div className="row">
        <BookCovers />
      </div>
    </div>
  )
}

export default App
